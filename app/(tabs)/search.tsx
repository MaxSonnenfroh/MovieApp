import { images } from '@/constants/images';
import React from 'react';
import { View, Text, Image } from 'react-native';

const Search = () => {
    return (
        <View className='flex-1 bg-primary'>
            <Image source={images.bg} className='flex-1 absolute w-full z-0' resizeMode='cover'/>
        </View>
    );
}

export default Search;