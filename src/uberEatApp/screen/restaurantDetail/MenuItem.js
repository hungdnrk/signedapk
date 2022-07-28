/* eslint-disable prettier/prettier */
import { ScrollView, View, Text, Image } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styles from './styles';

const foods = [
    {
        title: 'Lasagna',
        description: 'With bttuer lettuce, tomato and sauce bechanmel',
        price: '$13.50',
        image: 'https://meta.vn/Data/image/2020/10/21/lasagna-la-gi-1.jpg',
    },
    {
        title: 'Tandoori',
        description: 'Amazing Indian dish with tenderlin chicken off the size',
        price: '$19.20',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dZ9n8ImspSFuI5IbySmBwodJEvWsN0h4ow&usqp=CAU',
    },
    {
        title: 'Chilaquiles',
        description: 'Chilaquiles with cheese and sauce. a delocious mexican food',
        price: '$14.50',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Portada-chilaquiles-rojos.jpg',
    },
    {
        title: 'Lasagna',
        description: 'With bttuer lettuce, tomato and sauce bechanmel',
        price: '$13.50',
        image: 'https://meta.vn/Data/image/2020/10/21/lasagna-la-gi-1.jpg',
    },
    {
        title: 'Tandoori',
        description: 'Amazing Indian dish with tenderlin chicken off the size',
        price: '$19.20',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dZ9n8ImspSFuI5IbySmBwodJEvWsN0h4ow&usqp=CAU',
    },
    {
        title: 'Chilaquiles',
        description: 'Chilaquiles with cheese and sauce. a delocious mexican food',
        price: '$14.50',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Portada-chilaquiles-rojos.jpg',
    },
];

export default function MenuItem() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                foods.map((food, index) => (
                    <View key={index} >
                        <View
                            style={styles.menuItemStyle}
                        >
                            <BouncyCheckbox
                                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                                fillColor="green"
                            />
                            <FoodInfo food={food} />
                            <FoodImage food={food} />
                        </View>
                        <Divider width={0.5} orientation='vertical' />
                    </View>
                ))
            }
        </ScrollView>

    );

}

const FoodInfo = (props) => (
    <View
        style={{
            width: 240,
            justifyContent: 'space-evenly'
        }}
    >
        <Text style={{ fontSize: 19, fontWeight: '600' }}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image source={{ uri: props.food.image }}
            style={{ width: 100, height: 100, borderRadius: 8 }} />
    </View>
)
