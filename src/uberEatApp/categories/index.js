/* eslint-disable prettier/prettier */
import { View, ScrollView, Image, Text } from 'react-native';
import React from 'react';
import styles from './style';

const items = [
    {
        image: require('../../../assets/images/shopping-bag.png'),
        text: 'Pick-up',
    },
    {
        image: require('../../../assets/images/soft-drink.png'),
        text: 'Soft Drinks',
    },
    {
        image: require('../../../assets/images/bread.png'),
        text: 'Bakery Items',
    },
    {
        image: require('../../../assets/images/fast-food.png'),
        text: 'Fast Foods',
    },
    {
        image: require('../../../assets/images/coffee.png'),
        text: 'Coffee & Tea',
    },
    {
        image: require('../../../assets/images/desserts.png'),
        text: 'Deals',
    },
];
export default function Categories() {
    return (
        <View
            style={styles.conteainerCategories}
        >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View
                        style={styles.containerItem}
                        key={index}
                    >
                        <Image source={item.image}
                            style={styles.itemImg}
                        />
                        <Text
                            style={styles.itemString}
                        >
                            {item.text}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>

    );
}
