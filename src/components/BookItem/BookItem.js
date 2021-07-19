import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import {
    BookWrapper,
    BookCover
} from './BookItemStyles';

export const BookItem = (props) => {
    const {uri, onPress} = props;
    return (
            <BookWrapper onPress={onPress}> 
            <Image 
                onPress={props.onPress}
                source={{uri:uri}}
                style={{width:"100%", height:"100%", borderRadius:15}} />
            </BookWrapper>
    )
}