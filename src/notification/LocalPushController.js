// /* eslint-disable prettier/prettier */
// import PushNotification from 'react-native-push-notification';

// PushNotification.configure({
//     // onRegister: function (token) {
//     //     console.log("TOKEN:", token);
//     // },

//     onNotification: function (notification) {
//         console.log('Local Notification', notification);
//     },

//     permissions: {
//         alert: true,
//         badge: true,
//         sound: true,
//     },
//     popInitialNotification: true,
//     requestPermissions: true,
// });

// PushNotification.createChannel({
//     channelId: 'channel-id',
//     channelName: 'my channel',
//     channelDescription: 'A channel for notification',
//     playSound: true,
//     soundName: 'default',
//     importance: 10,
//     vibrate: true,
//     vibration: 1000,
// },
//     created => console.log(`channel created ${created}`),
// );

// export const LocalNotification = () => {
//     PushNotification.localNotification({
//         channelId: 'channel-id',
//         channelName: 'my channel',
//         autoCancel: true,
//         bigText:
//             'This is local notification demo from react-native, it will show when expanded',
//         subText: 'Local Notification demo',
//         title: 'Local Notification Title',
//         message: 'Hey, Expand me !!!',
//         playSound: true,
//         soundName: 'default',
//         importance: 10,
//         vibrate: true,
//         vibration: 1000,
//     });
// };
