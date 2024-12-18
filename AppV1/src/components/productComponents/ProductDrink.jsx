import { useState } from "react";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, Image, Text, TouchableOpacity, Modal, FlatList, Button } from "react-native";
import { BeerData } from "../../../data/BeerData";
import ModalStyle from "../productComponents/styles/ModalStyle";
import ItensStyle from "../productComponents/styles/ItensStyle";
import CardStyle from "../productComponents/styles/CardStyle";
import BtnAddRemove from "../productComponents/styles/BtnAddRemove";
import LineStyle from "../productComponents/styles/LineStyle";

const ProductDrink = ({ modalIdentification, openModal, closeModal, modalVisible }) => {

    const renderItemDrink = ({ item }) => {
        return (
            <View style={ItensStyle.containerItens}>
               <View style= {ItensStyle.containerProps}>
                <Text style = {ItensStyle.textProps}>{item.name}</Text>
               </View>
                <View style = {LineStyle.lineVertical}/>
                <View style= {ItensStyle.containerProps}>
                    <Text style = {ItensStyle.textProps}>{`R$: ${item.price.toFixed(2)}`}</Text>
                </View>
                <View style = {LineStyle.lineVertical}/>

                <View>
                    <Text>10x</Text>
                </View>


                <View style = {BtnAddRemove.btnContainer}>
                    <TouchableOpacity style = {[BtnAddRemove.btn, {backgroundColor: '#4E9726'}]}>
                        <Ionicons name = "add-outline" size = {25}/>

                    </TouchableOpacity>
                    
                    <TouchableOpacity style = {[BtnAddRemove.btn, {backgroundColor: '#E90000'}]}>
                        <Ionicons name = "remove-outline" size = {25}/>

                    </TouchableOpacity>

                </View>
            </View>
           
        );
    }

    return (
        <TouchableOpacity onPress={openModal}>
            <View style={CardStyle.container}>
                <Image
                    style={CardStyle.imgCategory}
                    source={require('../../../assets/drink.png')}
                />
                <Text style={CardStyle.textType}>DRINKS</Text>
            </View>
            <Modal
                visible={modalVisible && modalIdentification === 'drink'}    
                onRequestClose={closeModal}  
                animationType="slide"  
                transparent={true}
                 
                
            >
                <View style={ModalStyle.modalContent}>
                    <View style = {LineStyle.lineHorizontal}/>
                    <Text style = {ModalStyle.titleModal}>DRINKS</Text>
                    <View style = {LineStyle.lineHorizontal}/>
                    <FlatList
                        data={BeerData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItemDrink}
                    />

                    <TouchableOpacity style = {ModalStyle.btnModal} onPress={closeModal} modalIdentification={''} >
                        <Text>FECHAR</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </TouchableOpacity>
    );
}

export default ProductDrink;