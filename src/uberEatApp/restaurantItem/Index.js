/* eslint-disable prettier/prettier */
import { View, TouchableOpacity, Image, Text } from 'react-native';
import React from 'react';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
    {
        name: 'beachside Bar',
        imageUrl: 'https://chillbeachbar.vn/wp-content/uploads/2022/06/287333546_134534022572346_956474883193162549_n.jpg',
        categories: ['Cafe', 'Bar'],
        price: '$$',
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: 'Benihana',
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/15/45/a2/75/benihana-s-flamboyant.jpg',
        categories: ['Cafe', 'Bar'],
        price: '$$',
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: 'India\'s Grill',
        imageUrl: 'https://chillbeachbar.vn/wp-content/uploads/2022/06/287333546_134534022572346_956474883193162549_n.jpg',
        categories: ['Indian', 'Bar'],
        price: '$$',
        reviews: 700,
        rating: 4.5,
    },
    {
        name: 'beachside Bar',
        imageUrl: 'https://chillbeachbar.vn/wp-content/uploads/2022/06/287333546_134534022572346_956474883193162549_n.jpg',
        categories: ['Cafe', 'Bar'],
        price: '$$',
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: 'Benihana',
        imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/15/45/a2/75/benihana-s-flamboyant.jpg',
        categories: ['Cafe', 'Bar'],
        price: '$$',
        reviews: 1244,
        rating: 3.7,
    },
];

export default function RestaurantItem({ navigation, ...props }) {
    return (
        <TouchableOpacity
            activeOpacity={1} style={styles.restaurantTouchable}
            onPress={() => navigation.navigate('Restaurant Detail')}

        >
            {props.restaurantData.map((restaurant, index) => (
                <View
                    key={index}
                    style={styles.restaurantContainer}>
                    <RestaurantImage
                        image={restaurant.imageUrl}
                    />
                    <RestaurantInfo
                        name={restaurant.name}
                        rating={restaurant.rating}
                    />
                </View>
            ))}
        </TouchableOpacity>

    );
}

const RestaurantImage = (props) => (
    <>
        <Image source={{
            uri: props.image,
        }}
            style={styles.restaurantImg}
        />
        <TouchableOpacity style={styles.touchableIcon}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => {
    return (
        <View style={styles.restaurantInfo}>
            <View>
                <Text style={styles.descriptionRestaurant}>{props.name}</Text>
                <Text style={styles.timeToRestaurant}>30-40 min</Text>
            </View>
            <View style={styles.ratingRestaurant}>
                <Text>{props.rating}</Text>
            </View>

        </View>
    );
};


