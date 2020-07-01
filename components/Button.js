import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function Button(props) {
    const { contents, text, style, textStyle } = props;

    return (
        <TouchableOpacity onPress={contents} style={style}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    )
}