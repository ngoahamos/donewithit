import React from 'react';

import { Image, StyleSheet} from "react-native";
import Screen from "../components/Screen";

import * as Yup from 'yup';
import {AppForm, AppFormField, AppSubmitButton} from '../components/forms';


const ValidationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
})
const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")} />
            <AppForm
                initialValues={{email: '', password: ''}}
                onSubmit={(values) => console.log(values) }
                validationSchema={ValidationSchema}
                >
                    <AppFormField 
                                autoCapitalize="none"
                                autoCorrect={false}
                                name="email" 
                                icon="email"
                                keyboardType="email-address"
                                placeholder="Email"
                            />

                    <AppFormField 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock" 
                            name = "password"
                            placeholder="Password"
                            secureTextEntry
                        /> 

                    <AppSubmitButton title="Login" />  
            </AppForm>
 
        </Screen>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20 
    },

});

export default LoginScreen;