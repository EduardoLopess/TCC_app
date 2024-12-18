import { StyleSheet } from "react-native";

export default ModalStyle = StyleSheet.create({
    modalContent: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
        elevation: 10,
        padding: 5,
        width: '95%',
        maxHeight: '90%',
        overflow: 'scroll'
    },

    titleModal: {
        fontSize: 30,
        marginBottom: 10,
        marginTop:10,
        fontWeight: 'bold',
        

    },

     btnModal: {
        backgroundColor: '#C5C0C0',
        width: 90,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 10,
        

    },

})