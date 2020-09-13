import React from 'react';

import { StyleSheet } from 'react-native';
import AppText from "../AppText";
import colors from '../../config/colors';

const AppErrorMessage = ({error, visible, style}) => {
    if (!visible || !error) return null;

    return (
        <AppText style={[styles.error, style]}>{error}</AppText>
    );
}

const styles = StyleSheet.create({
    error: {
        color: colors.danger
    }
})
export default AppErrorMessage;