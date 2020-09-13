import React from 'react';
import { Image, View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const ListItem = ({title, subTitle, imageUrl, IconComponent, onPress, renderRightActions, background=colors.white}) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={[styles.container]}>
                    {imageUrl && <Image style={styles.image} source={imageUrl} />}
                    {IconComponent}
                    <View style={styles.imageDetailContainer}>
                        <Text style={styles.title}>{title}</Text>
                        { subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={25} style={styles.icon} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    imageDetailContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center"
    }
    ,
    title: {
        fontSize: 20,
        fontWeight: "700",
    },
    subTitle: {
        fontSize: 16,
        color: colors.medium
    },
    icon: {
        color: colors.medium
    }
})

export default ListItem;