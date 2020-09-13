import React from 'react';

import { View } from "react-native";

import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
const Icon = ({
    name,
    size = 40,
    backgroundColor = colors.black,
    iconColor  = colors.white
}) => {
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor,
            width: size,
            height: size,
            borderRadius: size /2
        }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
        </View>
    );
}


export default Icon;