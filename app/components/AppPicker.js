import React, { useState } from 'react';

import { StyleSheet, TouchableWithoutFeedback, View, Modal, Button, FlatList, TouchableOpacity } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from '../config/colors';
import AppText from './AppText';
import PickerItem from './PickerItem';
import defaultStyles from '../config/styles'


const AppPicker = ({items, icon, iconColor = colors.medium, iconSize=26, numColumns=1, PickerItemComponent= PickerItem, placeholder="Select One", selectedItem, onSelectedItem}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, defaultStyles.input]}>
                    {icon && <MaterialCommunityIcons name={icon} size={iconSize} color={iconColor} style={styles.icon} />}
                    
                    { selectedItem ? (<AppText style={styles.text}>{ selectedItem.label}</AppText>) : 
                                (<AppText style={styles.placeholder}>{ placeholder}</AppText>)}

                    <MaterialCommunityIcons name="chevron-down" size={iconSize} color={iconColor} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <TouchableOpacity onPress={() => setModalVisible(false) }>
                    <MaterialCommunityIcons name="close" style={styles.modalIcon}  size={30} color={colors.medium} />
                </TouchableOpacity>
                

                <FlatList data={items} keyExtractor={(item) => item.value.toString()} 
                    numColumns={numColumns}
                    renderItem={({item}) => (<PickerItemComponent item={item} 
                        onPress={() => {
                            setModalVisible(false);
                            onSelectedItem(item);
                        }} />)} />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 10,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    modalIcon: {      
     alignSelf: "center",
     marginVertical: 15,   
    },
    placeholder: {
        flex: 1,
        color: colors.medium
    },
    text: {
        flex: 1
    },
   
})

export default AppPicker;