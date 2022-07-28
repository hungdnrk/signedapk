/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import Categories from '../../categories';
import HeaderTabs from '../../header';
import RestaurantItem, {
    localRestaurants,
} from '../../restaurantItem/Index';
import SearchBar from '../../searchBar';
import BottomTabs from '../../bottomTabs';
import styles from './style';
import { Divider } from 'react-native-elements';

const YELP_API_KEY =
    'bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx';

export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => console.log("Check res data:", res))
        // .then((json) =>
        //     setRestaurantData(
        //         json.businesses.filter((business) =>
        //             business.transactions.includes(activeTab.toLowerCase())
        //         )
        //     )
        // );
    };
    useEffect(() => {
        getRestaurantsFromYelp();
        console.log('check restaurant data: ', restaurantData);
    });

    return (
        <SafeAreaView
            style={styles.container}
        >
            <View
                style={styles.constainerBody}
            >
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem
                    restaurantData={restaurantData}
                    navigation={navigation}
                />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>

    );
}
