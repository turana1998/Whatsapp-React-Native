import moment from "moment";
import React from "react";
import { View, Text, Image ,TouchableWithoutFeedback} from "react-native";
import { Chatroom } from "../../types";
import styles from "./style";
import {useNavigation} from '@react-navigation/native';
// import { useNavigation } from "@react-navigation/core";
export type ChatlistProps = {
    chatroom: Chatroom
}
const ChatItemList = (props: ChatlistProps) => {
    const { chatroom } = props;
    const navigation=useNavigation();
    const user = chatroom.users[1];

    const onclick=()=>{
        navigation.navigate('ChatRoom',{
            id:chatroom.id,
            name:user.name,
        });
     }
    return (
        <TouchableWithoutFeedback onPress={onclick}>
               <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: user.imageUri,
                    }}
                />
                <View style={styles.midContainer}>
                    <Text style={styles.userName}>
                        {user.name}
                    </Text>
                    <Text style={styles.content}>
                        {chatroom.lastMessage.content}
                    </Text>
                </View>
            </View>
            <Text style={styles.time}>
                {moment(chatroom.lastMessage.createdAt).format("DD/MM/YYYY")}
            </Text>
        </View>
        </TouchableWithoutFeedback>
     
    )
};


export default ChatItemList