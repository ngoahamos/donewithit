import React from 'react';
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';


const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

const AccountScreen = ({navigation}) => {
    const handleListTap = (item) => {
        if(item.title === "My Messages") {
            navigation.navigate("Messages");
        }
    }
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem title="Amos Ngoah" 
                        subTitle="candisturb@gmail.com"
                        imageUrl={require("../assets/mosh.jpg")} />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data = {menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    renderItem = {({item}) => 
                                    <ListItem title={item.title} onPress={() => handleListTap(item)}
                                        IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}
                                            
                                         />
                                        } />
                                }
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>

            <View style={styles.container}>
                <ListItem title="Log Out" IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />} />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
   container: {
       marginVertical: 20,
       backgroundColor: colors.white
   },
   screen: {
       backgroundColor: colors.light
   } 
});

export default AccountScreen;