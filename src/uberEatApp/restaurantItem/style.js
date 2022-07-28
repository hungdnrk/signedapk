/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    restaurantContainer: {
        marginTop: 10,
        padding: 15,
        backgroundColor: 'white',
    },
    restaurantImg: {
        width: '100%',
        height: 180,
    },
    touchableIcon: {
        position: 'absolute',
        right: 20, top: 20,
    },
    restaurantInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    descriptionRestaurant: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    timeToRestaurant: {
        fontSize: 13,
        color: 'gray',
    },
    ratingRestaurant: {
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
});
