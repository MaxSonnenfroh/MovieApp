import { icons } from '@/constants/icons';
import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

interface SearchBarProps {
    onPress?: () => void;
    placeholder: string;
}

const SearchBar = ({onPress, placeholder}: SearchBarProps) => {
    return (
        <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
            <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#abbff"/>
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value=''
                onChangeText={() => {}}
                placeholderTextColor={'#a8b5bd'}
            />
        </View>
    );
}

export default SearchBar;