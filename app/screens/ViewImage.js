import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/colors';

const ViewImage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topRow}>
                <View style={styles.closeButton}> 
                    <MaterialCommunityIcons name="close" color={colors.white} size={35} />
                </View>
                <View style={styles.deleteButton}>
                    <MaterialCommunityIcons name="trash-can-outline" color={colors.white} size={35} />
                </View>
            </View>
            <View style={styles.mainContainer}>
                <Image resizeMode="contain" style={styles.image} source={require('../assets/chair.jpg')}  />
            </View>
        </View>
    );
}
const btnSize = 50;
const styles = StyleSheet.create({
    bottonRow: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    image: {
        height: '100%',
        width: '100%'
    },
    mainContainer: {
        flex: 5,
    },
    deleteButton: {
    },
    topRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    }

})
export default ViewImage;