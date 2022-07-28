/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';

export default function OrderItem() {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#999'
            }}
        >
            <Text style={{ fontWeight: '600', fontSize: 16 }}>Tandochi Chicken</Text>
            <Text style={{ fontWeight: '600', fontSize: 16 }}>19.20 $</Text>
        </View>
    );
}
