import { icons } from '@/constants/icons';
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const MovieCard = ({id, poster_path, title, vote_average, release_date, vote_count}: Movie) => {
    return (
        <Link href={"/movies/${id}"} asChild>
            <TouchableOpacity className='w-[30%]'>
                <Image 
                    source={{
                        uri: poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : "htts://via.placeholder.com/600x400"
                    }}
                    className='w-full h-52 rounded-lg'
                    resizeMode='cover'
                />
                <Text className='text-sm font-bold text-white mt-2' numberOfLines={1}>
                    {title}
                </Text>

                <View className='flex-row items-center justify-start gap-x-1'>
                    {Array(Math.round(vote_average / 2)).fill(null).map((_, index) => (
                        <Image key={index} source={icons.star} className='size-4' />
                    ))}
                    {Array(5 - Math.round(vote_average / 2)).fill(null).map((_, index) => (
                        <Image key={index} source={icons.star} className='size-4 opacity-30' />
                    ))}
                    {/* <Text className='text-xs text-white font-bold uppercase'>{Math.round(vote_average / 2)}</Text> */}
                </View>

                <View>
                    <Text className='text-xs text-light-300 font-light mt-1 italic'>
                        {vote_count} votes
                    </Text>
                </View>

                <View className='flex-row items-center justify-between'>
                    <Text className='text-xs text-light-300 font-medium mt-1'>
                        {release_date?.split("-")[0]}
                    </Text>
                    {/* <Text className='text-xs font-medium text-light-300 uppercase'>
                        Movie
                    </Text> */}
                </View>
            </TouchableOpacity>
        </Link>
    );
}

export default MovieCard;