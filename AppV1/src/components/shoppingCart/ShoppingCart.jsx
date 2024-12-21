import React from 'react';
import { Modal, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useCart } from '../../contexts/CartContext';  // Para controlar o estado do modal
import ModalStyle from '../productComponents/styles/ModalStyle';
import { Ionicons } from '@expo/vector-icons';

const ShoppingCart = () => {
    const { openModal, closeModal, modalVisible, cartIsVisibility, itemCart } = useCart();  // Desestruturando para acessar as funções e o estado

    const renderShoppingcart = () => {
        if (cartIsVisibility) {  // Verifica se o carrinho deve ser visível
            return (
                <View style={styles.container}>
                    <TouchableOpacity onPress={openModal} style={styles.openButton}>
                        <Ionicons name="cart-outline" size={38} color="black" />
                    </TouchableOpacity>

                    <Modal
                        visible={modalVisible}  
                        onRequestClose={closeModal} 
                        animationType="slide" 
                        transparent={true}  
                    >
                        <View style={ModalStyle.modalContent}>
                            <Text style={ModalStyle.titleModal}>Carrinho</Text>

                            {/* Exibindo os itens do carrinho */}
                            {itemCart.length === 0 ? (
                                <Text style={ModalStyle.noItemsText}>Carrinho vazio!</Text>
                            ) : (
                                <View>
                                    {itemCart.map((item) => (
                                        <View key={item.id} style={styles.itemContainer}>
                                            <Text>{item.name}</Text>
                                            <Text>{item.category}</Text>
                                            <Text>R${item.price}</Text>
                                            <Text>{item.quantity}</Text>
                                        </View>
                                    ))}
                                </View>
                            )}

                            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                                <Text>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            );
        }

        return null; // Se o carrinho não estiver visível, retorna null
    };
    
    return (
        <>
            {renderShoppingcart()}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    openButton: {
        borderRadius: 200,
        borderWidth: 1,
        borderColor: 'black',
        width: 70,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    closeButton: {
        padding: 10,
        backgroundColor: '#E90000',
        marginTop: 20,
        borderRadius: 5,
    },

    itemContainer: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },

    noItemsText: {
        textAlign: 'center',
        marginTop: 20,
    }
});

export default ShoppingCart;
