/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

export default function HeaderTabs() {
    const [acticeTab, setActiveTab] = useState('Delivery');

    return (
        <View
            style={styles.containerHeader}
        >
            <HeaderButton
                text="Delivery"
                btncolor="black"
                textColor="white"
                acticeTab={acticeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text="Pickup"
                btncolor="white"
                textColor="black"
                acticeTab={acticeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    );
}

const HeaderButton = props => (
    <View>
        <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={[{
                backgroundColor: props.acticeTab === props.text ? 'black' : 'white',
            }, styles.leftBtn]}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={[{
                    color: props.acticeTab === props.text ? 'white' : 'black',
                }, styles.textHeader]}
            >
                {props.text}
            </Text>
        </TouchableOpacity>
    </View>
);
