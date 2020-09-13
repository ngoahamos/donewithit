import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import AppText from './AppText';

const CategoryPickerItem = ({item, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Icon name={item.icon} backgroundColor={item.iconColor} size={80} />
                <AppText style={styles.label}>{item.label}</AppText>
            </View>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: "center",
    },
    label: {
        marginTop: 5,
        textAlign: "center"
    }
})

export default CategoryPickerItem;