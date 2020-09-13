import React from 'react';
import { StyleSheet, View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';

const Card = ({title, subTite, imageUrl, onPress}) => {
    console.log(imageUrl);
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={{uri: imageUrl}} />
                <View style={styles.cardDetails}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTite}>{subTite}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 25,
        overflow: 'hidden'
    },
    cardDetails: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        marginBottom: 7,
        fontSize: 25,
        fontWeight: 'bold'
    },
    subTite: {
        fontWeight: 'bold',
        color: colors.secondary
    }
})
export default Card;