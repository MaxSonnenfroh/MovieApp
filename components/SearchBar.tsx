import { icons } from '@/constants/icons';
import React, { forwardRef } from 'react';
import { View, Text, Image, TextInput } from 'react-native';

interface SearchBarProps {
    onPress?: () => void;
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
    autoFocus?: boolean;
}

const SearchBar = ({ onPress, placeholder, value, onChangeText, autoFocus = false }: SearchBarProps) => {
    return (
        <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
            <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#abbff"/>
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={'#a8b5bd'}
                className='flex-1 text-white ml-2'
                autoFocus={autoFocus}
                clearTextOnFocus={true}
            />
        </View>
    );
};

export default SearchBar;