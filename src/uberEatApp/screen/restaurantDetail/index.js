/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import About from './About';
import { Divider } from 'react-native-elements';
import MenuItem from './MenuItem';
import styles from './styles';
import BottomTabs from '../../bottomTabs';
import { useEffect } from 'react/cjs/react.development';
import ViewCart from './ViewCart';

export default function RestaurantDetail({ route, navigation }) {

    return (
        <View style={styles.containerRestaurantDetail}>
            <About />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItem />
            {/* <BottomTabs /> */}
            <ViewCart
                navigation={navigation}
                restaurantName={"Farmhose Kitchen Thai Cuisine"}
            />
        </View>
    );
}
