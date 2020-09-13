import React, { useState, useEffect } from 'react';

import { FlatList, StyleSheet, View } from "react-native";

import listingApi from '../api/listings';

import Card from '../components/Card';
import Screen from "../components/Screen";
import colors from '../config/colors';
const ListingScreen = ({navigation}) => {
    const [listings, setListings] = useState([]);
    const getListings = async () => {
        const response = await listingApi.getListings();
        if(response.ok) {
            setListings(response.data);
        }

        if(response.problem) {
            console.log(response.problem);
        }
    }
    useEffect(() => {
        getListings();
    }, []);
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <FlatList 
                    data={listings}
                    keyExtractor={ listing => listing.id.toString()}
                    renderItem={({item}) => (
                        <Card title={item.title} subTite={'$' + item.price} imageUrl={item.images[0].url} onPress={ () => navigation.navigate("ListingDetails", item)} />
                    )} />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    screen: {
        backgroundColor: colors.light,
    }
})

export default ListingScreen;