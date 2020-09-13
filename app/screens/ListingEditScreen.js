import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import * as Location from 'expo-location';
import * as Yup from 'yup';

import Screen from "../components/Screen";
import { AppForm, AppFormField, AppFormPicker, AppSubmitButton } from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import AppFormImagePicker from '../components/forms/AppFormImagePicker';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image.")
});

const categories = [
    {label: "Furniture", value: 1, icon: "apps", iconColor: "red"},
    {label: "Clothing", value: 2, icon: "lock", iconColor: "green"},
    {label: "Cameras", value: 3, icon: "camera", iconColor: "blue"}
]

const ListingEditScreen = () => {
    const location = useLocation();

    return (
        <Screen style={styles.container}>
            <AppForm
             initialValues={{
                 title: "",
                 price: "",
                 description: "",
                 category: null,
                 images: []
             }}
             onSubmit={(values) => {console.log(location)}}
             validationSchema={validationSchema}
             >
                 <AppFormImagePicker name="images" />

                 <AppFormField 
                    maxLength={255}
                    name="title"
                    placeholder="Title" />

                
                <AppFormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price" />

                <AppFormPicker
                    items={categories}
                    name="category"
                    numColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                     />
                
                <AppFormField
                    maxLength={255}
                    multiline   
                    name ="description" 
                    numberOfLines={3} 
                    placeholder="Description"           
                 />

                 <AppSubmitButton title="Post" />

            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    }, 
});

export default ListingEditScreen;