/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerRestaurantDetail: {
        flex: 1,
    },
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 20,
    },
    ViewCartContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 60,
        zIndex: 999
    },
    ViewCartBtn: {
        marginTop: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 13,
        borderRadius: 30,
        width: 300,
        position: 'relative',
    },
    ViewCartText: {
        color: 'white',
        fontSize: 20
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },

    modalCheckoutContainer: {
        backgroundColor: 'white',
        padding: 16,
        height: 500,
        borderWidth: 1,
    },
    restaurantName: {

        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 10,
    },
    subtotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    subtotalText: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 10,
    },
});