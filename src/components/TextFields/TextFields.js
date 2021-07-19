import React from 'react';
import {
    TextFieldValue,
    TextFieldWrapper,
    TextFieldTitle
} from './TextFieldsStyles';

export const TextField = (props) => {
    const {textValue,fieldTitle} = props;
    return (
            <TextFieldWrapper>
                <TextFieldTitle >
                    {fieldTitle}
                </TextFieldTitle>
                <TextFieldValue>
                    {textValue}
                </TextFieldValue>
            </TextFieldWrapper>
    )
}