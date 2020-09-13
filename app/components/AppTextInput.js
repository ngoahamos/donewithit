import React from 'react';

import { StyleSheet, TextInput, View, Platform } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from '../config/colors';
import defaultStyles from '../config/styles';

const AppTextInput = ({icon, iconColor = colors.medium, iconSize=26, ...otherProps}) => {
    return (
        <View style={[styles.container, defaultStyles.input]}>
            {icon && <MaterialCommunityIcons name={icon} size={iconSize} color={iconColor} style={styles.icon} />}
            <TextInput style={defaultStyles.text} placeholderTextColor={colors.medium} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
})

export default AppTextInput;