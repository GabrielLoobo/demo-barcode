import styled from 'styled-components/native';
import React from 'react';
import {Image} from 'react-native';

import {
    Dimensions
} from 'react-native';
import { useState } from 'react/cjs/react.development';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const BookWrapper = styled.TouchableOpacity`
    display:flex;
    justify-content:center;
    align-items:center;
    width:${screenWidth*2/5}px;
    height:${screenHeight/3}px;
    border-radius:15px;
    background-color:white;
`;

export const BookCover = (props) => {
    useState(()=>{
        console.log(props.uri)
    })
    return(
        <Image 
            onPress={props.onPress}
            source={{uri:props?.uri}}
            style={{width:"100%", height:"100%", borderRadius:15}} />
    )
}