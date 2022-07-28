/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import React, {
    useState
} from 'react';
import styles from './styles';
import OrderItem from './OrderItem';

export default function ViewCart() {
    const [modalVisible, setModalVisible] = useState(false);
    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer} >
                        <Text style={styles.restaurantName}>
                            Farmhose Kitchen Thai Cuisine
                        </Text>
                        <OrderItem />
                        <OrderItem />
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>
                                Subtotal
                            </Text>
                            <Text >
                                38.40 $
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                            <TouchableOpacity
                                style={{
                                    marginTop: 20,
                                    backgroundColor: 'black',
                                    alignItems: 'center',
                                    padding: 13,
                                    borderRadius: 30,
                                    width: 300,
                                    position: 'relative'
                                }}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={{ fontSize: 20, color: '#fff' }}>
                                    Checkout
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </>
        )
    }
    return (
        <>
            <Modal
                animationType="sl ide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>

            <View
                style={styles.ViewCartContent}
            >
                <View>
                    <TouchableOpacity
                        style={styles.ViewCartBtn}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text
                            style={styles.ViewCartText}
                        >View Cart</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </>
    );
}
