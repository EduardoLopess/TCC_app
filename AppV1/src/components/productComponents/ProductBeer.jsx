import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity, Modal} from "react-native"
import { BeerData } from "../../../data/BeerData";
import { FlatList } from "react-native-gesture-handler";

import ModalStyle from "../productComponents/styles/ModalStyle";
import ItensStyle from "../productComponents/styles/ItensStyle";
import CardStyle from "../productComponents/styles/CardStyle";
import BtnAddRemove from "../productComponents/styles/BtnAddRemove";
import LineStyle from "../productComponents/styles/LineStyle";
import { useCart } from '../../contexts/CartContext';

const ProductBeer = ({ modalIdentification, openModal, closeModal, modalVisible }) => {
    const { addItem, removeItem } = useCart();

    const renderItemBeer = ({item}) => {
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
                    <TouchableOpacity style = {[BtnAddRemove.btn, {backgroundColor: '#4E9726'}]} onPress={() => addItem(item.id)}>
                        <Ionicons name = "add-outline" size = {25}/>

                    </TouchableOpacity>
                    
                    <TouchableOpacity style = {[BtnAddRemove.btn, {backgroundColor: '#E90000'}]} onPress={() => removeItem(item.id)}>
                        <Ionicons name = "remove-outline" size = {25}/>

                    </TouchableOpacity>

                </View>
            </View>
        )
    }
    

    return (
        <TouchableOpacity onPress={openModal}>
            <View style = {CardStyle.container}>
                <Image
                    style = {CardStyle.imgCategory}
                    source = {require('../../../assets/cerveja.png')}
                />
                <Text style = {CardStyle.textType}>CERVEJAS</Text>
            </View>
            <Modal
                visible={modalVisible && modalIdentification === 'beer'}    
                onRequestClose={closeModal}  
                animationType="slide"  
                transparent={true}
                
            >
                <View style={ModalStyle.modalContent}>
                    <View style = {LineStyle.lineHorizontal}/>
                        <Text style={ModalStyle.titleModal}>CERVEJAS</Text>
                    <View style = {LineStyle.lineHorizontal}/>

                    <FlatList
                        data={BeerData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItemBeer}
                    />
                    <TouchableOpacity style = {ModalStyle.btnModal} onPress={closeModal} modalIdentification={''} >
                        <Text>FECHAR</Text>
                    </TouchableOpacity>

                </View>

            </Modal>


        </TouchableOpacity>
    )
        
    
}

export default ProductBeer