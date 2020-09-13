import React from 'react';

import { View, StyleSheet } from "react-native";
import colors from '../config/colors';

const ListItemSeparator = () => {
    return (
        <View style={[styles.separator]} />
    );
}

const styles = StyleSheet.create({
    separator: {
        backgroundColor: colors.light,
        width: "100%",
        height: 1,
    }
})
export default ListItemSeparator;