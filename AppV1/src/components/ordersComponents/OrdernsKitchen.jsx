import { View, StyleSheet, Text } from "react-native"
import { Ionicons, FontAwesome } from '@expo/vector-icons';



const OrdernsKitchen = () => {
    
    return (
        <View style = {styles.container}>
            <Text style = {styles.textOrderDrink}> 02 </Text>
            <Text style = {styles.textOrderDrink}> 12h:29 </Text>
            <View style = {styles.containerEdit}>
                <Ionicons name = "pencil-outline" size = {30}/>
                <Ionicons name = "trash-outline" size = {30}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 355,
        height: 40,
        backgroundColor: "white",
        flexDirection: "row",
        marginBottom: 5,
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 16,
        paddingRight: 16
    
    },
    textOrderDrink: {
        fontSize: 20

    },
    containerEdit: {
        flexDirection: 'row',
        
    }
})

export default OrdernsKitchen