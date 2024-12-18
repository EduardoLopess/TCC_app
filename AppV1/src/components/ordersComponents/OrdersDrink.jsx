import {StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { Ionicons} from '@expo/vector-icons';



const OrdersDrink = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.textOrderDrink}> 02 </Text>
            <Text style = {styles.textOrderDrink}> Vodka </Text>
            <Text style = {styles.textOrderDrink}> Morango </Text>
            <View style = {styles.containerEdit}>
                <TouchableOpacity>
                    <Ionicons name = "checkmark-outline" size = {30}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name = "trash-outline" size = {30}/>

                </TouchableOpacity>
                
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 40,
        backgroundColor: "white",
        flexDirection: "row",
        marginBottom: 5,
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 16,
        paddingRight: 10
    
    },
    textOrderDrink: {
        fontSize: 20

    },
    containerEdit: {
        flexDirection: "row"

    }
})

export default OrdersDrink