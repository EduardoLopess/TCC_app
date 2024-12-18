import { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import ProductBeer from "../components/productComponents/ProductBeer";
import ProductDrink from "../components/productComponents/ProductDrink";
import ProductNotAlcoholic from "../components/productComponents/ProductNotAlcoholic";
import ProductPortions from "../components/productComponents/ProductPortions";
import ProductPastries from "../components/productComponents/ProductPastries";
import ProductLunch from "../components/productComponents/ProductLunch";

const ProductScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalIdentification, setModalIdentification] = useState(null)

    const openModal = (identification) => {
        setModalIdentification(identification)
        setModalVisible(true);
        console.log(identification)
    }

   
    const closeModal = () => {
        setModalVisible(false)
        setModalIdentification(null)
    };
       

    return (
        <>
            <View style={styles.container}>
                <View style={styles.containerContent}>
                    <ProductBeer  openModal={() => openModal('beer')} closeModal={closeModal} modalVisible={modalVisible} modalIdentification={modalIdentification}/>
                    <ProductDrink openModal={() => openModal('drink')} closeModal={closeModal} modalVisible={modalVisible} modalIdentification={modalIdentification}/>
                    <ProductNotAlcoholic openModal={() => openModal('notAlcoholic')} closeModal={closeModal} modalVisible={modalVisible} modalIdentification={modalIdentification}/>
                    <ProductPortions openModal={() => openModal('portions')} closeModal={closeModal} modalVisible={modalVisible} modalIdentification={modalIdentification}/>
                    <ProductPastries openModal={() => openModal('pastries')} closeModal={closeModal} modalVisible={modalVisible} modalIdentification={modalIdentification}/>
                    <ProductLunch openModal={() => openModal('lunch')} closeModal={closeModal} modalVisible={modalVisible} modalIdentification={modalIdentification}/>
                </View> 
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C5C0C0',
        alignContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingTop: 30
    },

    containerContent: {
        alignContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 85
    }
});

export default ProductScreen;
