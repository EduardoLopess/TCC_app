import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { OrderDrink } from "../../data/OrderDrink";
import { OrderFood } from "../../data/OrderFood";
import LineStyle from "../components/productComponents/styles/LineStyle";
import ShoppingCart from "../components/shoppingCart/ShoppingCart";


const OrdersScreen = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null); 
    const [title, setTitle] = useState('DRINK')
    const [dataDrink, setDataDrink] = useState([])
    const [dataFood, setDataFood] = useState([])

    const openModal = (item) => {
        setSelectedItem(item)
        setModalVisible(true)
    }

    const closeModal = (item) => {
        setModalVisible(false)
        setSelectedItem(null)
    }

    const handleSetText = (newTitle) => {
        setTitle(newTitle)
    }

    useEffect(()=> {
        setDataDrink(OrderDrink)
        setDataFood(OrderFood)

    },[])


    const renderItems = () => {
        if (title === 'DRINK') {
            return(
                <FlatList
                    data = {dataDrink}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item})=> (
                        <View style = {styles.containerItem}>
                            <Text style = {styles.textContent}>{item.table}</Text>
                            
                            <Text style = {styles.textContent}>{item.type} </Text>
                                            
                            <Text style = {styles.textContent}>{item.beer} </Text>

                            <Text style = {styles.textContent}>{item.flavor}  </Text>
                        </View>
                       
                    )}
                />
            )
        } else if (title === 'COZINHA') {
           return (   
                <FlatList
                    data = {dataFood}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item})=> (
                        <TouchableOpacity style = {styles.containerItem} onPress={() => openModal(item)}>
                            <Text style = {styles.textContent}>MESA: {item.table}</Text>
                            <Text style = {styles.textContent}>Realizado: {item.hora}</Text>                                
                            <Text style = {styles.textContent}>Qtd: {item.qtd}</Text>
                        </TouchableOpacity>
                        
                    )}
                />       
           )
        }
    }
    

    return (
        <View style = {styles.container}>
            <View style = {styles.containerBtn}>
                <TouchableOpacity style = {styles.btnOrder} onPress = {() => {handleSetText('DRINK')}}>
                    <MaterialCommunityIcons name="beer-outline" size={30}  />
                    <Text style = {styles.textBtn}>DRINKS</Text>

                </TouchableOpacity>

                <TouchableOpacity style = {styles.btnOrder} onPress = {() => {handleSetText('COZINHA')}}>
                    <MaterialCommunityIcons name="food-drumstick-outline" size={30}  />
                    <Text style = {styles.textBtn}>COZINHA</Text>
                </TouchableOpacity>

            </View>

            <View style = {styles.containerTitle}>
                <Text style = {styles.title}>{title}</Text>
            </View>

            {renderItems()}
            {selectedItem && (
                <Modal
                    visible={modalVisible}
                    onRequestClose={closeModal}
                    animationType="slide"
                    transparent={true}
                    presentationStyle="pageSheet"
                >
                    <View style={styles.modalContainer}>
                        <View style = {LineStyle.lineHorizontal}/>
                        <View style = {styles.headerModal}>
                            <Text style = {styles.textHeader}>MESA: {selectedItem.table}</Text>
                            <Text style = {styles.textHeader}>Realizado: {selectedItem.hora}</Text>

                        </View>
                        <View style = {LineStyle.lineHorizontal}/>
                        <View style = {styles.itensContainer}>
                            <FlatList
                                data = {selectedItem.products}
                                keyExtractor = {(item) => item.id.toString()}
                                renderItem = {({item: product }) => (
                                    <View style = {styles.items}>
                                        <Text>{product.type}</Text>
                                        <Text>{`R$: ${product.price.toFixed(2)}`}</Text>
                                    </View>

                                )}
                            />
                        </View>

                        <TouchableOpacity style = {styles.btnModal}onPress={closeModal}>
                            <Text>FECHAR</Text>
                        </TouchableOpacity>
                    </View>

                </Modal>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C5C0C0',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
       

    },

    btnOrder: {
        flexDirection: 'row',
        width: 180,
        height: 50,
        backgroundColor: 'white',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    textBtn: {
        paddingHorizontal: 5,
        fontSize: 18
    },

    containerTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 40,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 20

    },

    title: {
        fontSize: 18
    },

    textContent: {
        fontSize: 18

    },

    containerItem: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        width: 370,
        height:50,
        backgroundColor: 'white',
        marginTop: 3,
        marginBottom: 3
    },

    //MODAL


    modalContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
        elevation: 10,
        padding: 10,
        width: '95%',
        maxHeight: '70%',
        overflow: 'scroll',
        position: 'relative'
    },

    btnModal: {
        backgroundColor: '#C5C0C0',
        width: 90,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 10,
        bottom: 20,
        position: 'absolute'
        

    },

    headerModal: {
        flexDirection: 'row',
        margin: 10
    },

    textHeader: {
        fontSize: 22,
        marginHorizontal: 20
    },

    items: {
        flexDirection: 'row',
        backgroundColor: '#C5C0C0',
        width: 500,
        height: 35,
        margin: 5,
        alignItems: 'center',
    }

})

export default OrdersScreen