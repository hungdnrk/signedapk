/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/uberEatApp/screen/homeScreen.js';
import RestaurantDetail from './src/uberEatApp/screen/restaurantDetail';
import { NotificationListner, requestUserPermission } from './src/notification/Notification'
import { LocalNotification } from './src/notification/LocalPushController.js';
const Stack = createNativeStackNavigator();

const App = () => {
//   useEffect(() => {
//     requestUserPermission();
//     NotificationListner();
//   });

//   const handleButtonPress = () => {
//     LocalNotification();
//   };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Home Screen'}
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home Screen" component={Home} />
          <Stack.Screen name="Restaurant Detail" component={RestaurantDetail} />

        </Stack.Navigator>
      </NavigationContainer> */}
      {/* <Text>Press a button to trigger the notification</Text>
      <View style={{ marginTop: 20 }}>
        <Button title={'Local Push Notification'} onPress={handleButtonPress} />
      </View> */}
      <Text>Home Screen</Text>
    </View>
  );
};

export default App;
