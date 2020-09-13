import React from 'react';

import { View, Image, StyleSheet, Text } from "react-native";
import colors from '../config/colors';
import ListItem from '../components/ListItem';

const ListingDetailScreen = ({route}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={route.params.images[0].url} />
            <View style={styles.detailContainer}>
                <Text style={styles.title}>{route.params.title}</Text>
                <Text style={styles.price}>${route.params.price}</Text>

                <ListItem title="Amos Ngoah" subTitle="5 Listings" imageUrl= {require('../assets/mosh.jpg')} />
            </View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        width: '100%',
        flex: 1
    },
    detailContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 300
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.secondary,
        marginBottom: 50
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10
    }
})

export default ListingDetailScreen;