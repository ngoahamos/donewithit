import React, { useRef } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

const ImageInputList = ({imageUris, onAddImage, onRemoveImage}) => {
    const scrollview = useRef();
    const scrollToEnd = () => {
        scrollview.current.scrollToEnd();
    }
    return (
        <View style={styles.container}>
            <ScrollView ref={scrollview} horizontal onContentSizeChange={scrollToEnd}>
                <View style={styles.listContainer}>
                    {imageUris.map(uri => (
                        <View style={styles.image} key={uri}>
                            <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
                        </View>
                    ))}
                    <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8
    },
    image: {
        marginRight: 10
    },
    listContainer: {
        flexDirection: "row"
    },
});

export default ImageInputList;