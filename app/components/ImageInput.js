import React, {useEffect} from 'react';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Image, TouchableWithoutFeedback, Alert } from 'react-native';

import colors from '../config/colors';

const ImageInput = ({imageUri, onChangeImage}) => {
    useEffect( () => {
        requestPermission();
      }, []);
      
    const requestPermission = async() => {
        const {granted} = await ImagePicker.requestCameraRollPermissionsAsync();
    
        if(!granted) alert('You Need to enable permission to access Library.');
      }
    const selectImage = async () => {
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5
        });
        if(!result.cancelled) {
            onChangeImage(result.uri);
        }
      } catch (error) {
        console.log(error);
      }
    }

    const handlePress = () => {
        if (!imageUri) selectImage();
        else {
            Alert.alert("Delete", "Are you sure you want to delete Image?",[
                {text: "Yes", onPress: () => onChangeImage(null)},
                {text: "No"}
            ])
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons name="camera" size={40} color={colors.medium} />}
                {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: "center",
        overflow: "hidden",
        width: 100

    },
    image: {
        height: '100%',
        width: '100%',

    }
});

export default ImageInput;