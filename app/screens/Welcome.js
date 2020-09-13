import {View, StyleSheet, Button, Image, ImageBackground, Text} from "react-native";
import React from 'react';
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import routes from "../nativations/routes";

const Welcome = ({navigation}) => {
    return (
        <ImageBackground blurRadius={10} style={styles.container} source={require('../assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPressed={ () => navigation.navigate(routes.LOGIN)} />
                <AppButton title="register" color='secondary' onPressed={ () => navigation.navigate(routes.REGISTER)} />
            </View>
            
        </ImageBackground>
    );

}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        padding: 20
    },
    container: {
        flex: 1,
        justifyContent: "flex-end"
    },
    logo: {
        width: 100,
        height: 100
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
        width: "100%"
    },
    tagline: {
        fontSize: 25,
        paddingVertical: 20,
        fontWeight: 'bold',
    }
})

export default Welcome;