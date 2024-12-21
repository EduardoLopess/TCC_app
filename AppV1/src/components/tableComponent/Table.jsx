import { useState } from "react"
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"

const Table = ({id, tableNumber, status}) => {

    const [createOrder, setCreateOrder] = useState([])

    const showId = () => {
        console.log(id)
    }

   
    return (
       <TouchableOpacity onPress={showId}>
            <View style = {styles.container}>
                <View style = {styles.tableNumber}>
                    <Text style ={styles.textTableNumber}>
                        MESA {tableNumber}
                    </Text>
                </View>
                <View style = {styles.imgContainer}>
                    <Image
                        style = {styles.imgStyle}
                        source = {require('../../../assets/mesa.png')}
                    />
                </View>
                <View
                    style={[
                        styles.tableStatusContainer,
                        { backgroundColor: status ? '#E90000' : '#32CD32' },
                        
                    ]}
                >
                    <Text style={styles.textStatus}>{status ? 'OCUPADA' : 'LIVRE'}</Text>
                </View>
            </View>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 160,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'relative',
        margin: 4,   
    },

    tableNumber: {
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center',
        bottom: 0,
        left : 0,
        right: 0,
        top: 4
    },

    textTableNumber: {
        fontWeight: 'bold',
        fontSize: 15
    },

    tableStatusContainer: {
        width: '100%',
        //backgroundColor: '#32CD32',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        height: 30,
        bottom: 0,
        left: 0,
        right: 0    
    },

    textStatus: {
        color: 'white',
        fontWeight: 'bold'
    },

    imgContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    },

    imgStyle: {
        width: '80%',
        height: '70%',
        justifyContent: 'center',
        resizeMode: 'contain',
        
    }
})


export default Table