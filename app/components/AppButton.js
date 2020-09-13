import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from '../config/colors';
import defaultStyles from '../config/styles'
const AppButton = ({title, onPressed, color="primary"}) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}, defaultStyles.input ]} onPress={onPressed}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: '100%',
        alignItems: 'center',
        justifyContent: "center",
        padding: 15,
        marginVertical: 10,
    },
    text: {
        fontSize: 18,
        color: colors.white,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})

export default AppButton;