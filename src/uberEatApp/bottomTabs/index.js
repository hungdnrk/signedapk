/* eslint-disable prettier/prettier */
import { TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './style';
export default function BottomTabs() {
    return (
        <View style={styles.containerButtomTab}>
            <Icon icon="home" text="Home" />
            <Icon icon="search" text="Browse" />
            <Icon icon="shopping-bag" text="Grocery" />
            <Icon icon="clipboard" text="Orders" />
            <Icon icon="user" text="Account" />
        </View>
    );
}
const Icon = (props) => (
    <TouchableOpacity>
        <View>
            <FontAwesome
                name={props.icon}
                size={25}
                style={styles.itemButtomTab}
            />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)
