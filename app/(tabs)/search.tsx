import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { fetchMovies } from '@/services/api';
import useFetch from '@/services/useFetch';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, TextInput } from 'react-native';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const {
        data: movies,
        loading,
        error,
        refetch: loadMovies,
        reset: resetMovies
      } = useFetch(()  => fetchMovies({ query: searchQuery }), false);

    const handleSearch = (text: string) => {
        setSearchQuery(text);
    }

    useEffect(() => {
        const timeoutId = setTimeout(
            async () => {
            if (searchQuery.trim()) {
                await loadMovies();
            } else {
                resetMovies();
            }
        }, 500);

        return () => clearTimeout(timeoutId);
    }
    , [searchQuery]);

    return (
        <View className='flex-1 bg-primary'>
            <Image source={images.bg} className='flex-1 absolute w-full z-0' resizeMode='cover'/>

            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <MovieCard {...item} />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                className='px-5'
                columnWrapperStyle={{
                    justifyContent: 'center',
                    gap: 16,
                    marginVertical: 16
                }}
                contentContainerStyle={{
                    paddingBottom: 100
                }}
                ListHeaderComponent={
                    <>
                        <View className='w-full flex-row justify-center mt-20 items-center'>
                            <Image source={icons.logo} className='w-12 h-10'/>
                        </View>
                        <View className='my-5'>
                            <SearchBar 
                                placeholder='Search movies...'
                                value={searchQuery}
                                onChangeText={handleSearch}
                                autoFocus={true}
                            />
                        </View>

                        {loading && <ActivityIndicator size='large' color='#0000ff' className='my-3'/>}
                        {error && <Text className='text-red-500 px-5 my-3'>Error: {error.message}</Text>}

                        {!loading && !error && searchQuery.trim() && movies?.length > 0 &&(
                            <Text className='text-xl text-white font-bold'>
                                Search results for {" "}
                                <Text className='text-accent'>
                                    {searchQuery}
                                </Text>
                            </Text>
                        )}
                    </>
                }
                ListEmptyComponent={
                    !loading && !error ? (
                        <View className='mt-10 px-5'>
                            <Text className='text-center text-gray-500'>
                                {searchQuery.trim()
                                    ? "No movies found"
                                    : "Search for a movie"
                                }
                            </Text>
                        </View>
                    )
                    : null
                }
            />
        </View>
    );
}

export default Search;