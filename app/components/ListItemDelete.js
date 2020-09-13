import React from 'react';

import { StyleSheet, View } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
const ListItemDelete = ({onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
            <View >
                <MaterialCommunityIcons name="trash-can-outline" color={colors.white}
                    size={40} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ListItemDelete;