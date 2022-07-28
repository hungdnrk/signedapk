/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';

export default function SearchBar() {
    return (
        <View
            style={styles.containerSearchBar}
        >
            <GooglePlacesAutocomplete placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        fontWeight: '700',
                        marginTop: 7,
                        borderRadius: 20,
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                    },
                }}
                renderLeftButton={() => (
                    <View
                        style={styles.leftBtn}
                    >
                        <Ionicons name="location-sharp" size={24} />
                    </View>)
                }
                renderRightButton={() => (
                    <View
                        style={styles.rightBtn}
                    >
                        <AntDesign name="clockcircle" size={11} style={styles.antDesignIcon} />
                        <Text>
                            Search
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

