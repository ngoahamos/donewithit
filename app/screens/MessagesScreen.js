import React, {useState} from 'react';

import { FlatList, Text } from "react-native";
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDelete from '../components/ListItemDelete';



const _messages = [
    {id: 1, title: "First Message", description: "Some Description", image: require("../assets/mosh.jpg")},
    {id: 2, title: "Second Message", description: "Another Description", image: require("../assets/mosh.jpg")}
];
const MessagesScreen = () => {
    const [messages, setMessages] = useState(_messages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        setMessages(messages.filter( m => m.id !== message.id))
    }
    return (
        <Screen>
            <FlatList keyExtractor={(message) => message.id.toString()}
            data={messages} renderItem={({item}) => 
            (<ListItem onPress={() => console.log("pressed", item)} title={item.title} subTitle={item.description} imageUrl={item.image}
                renderRightActions={() => (
                    <ListItemDelete onPress={() => handleDelete(item)} />
                )} 
                />)}
            ItemSeparatorComponent= {ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {id: 2, title: "Second Message", description: "Another Description", image: require("../assets/mosh.jpg")}
                ])
            }}
            />
        </Screen>
    );
}

export default MessagesScreen;