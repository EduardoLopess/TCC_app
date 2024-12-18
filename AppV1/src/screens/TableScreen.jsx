import { useEffect, useState } from "react";
import { View, StyleSheet, Text, 
    TouchableOpacity, TextInput, Image,  
    TouchableWithoutFeedback, Keyboard, } from "react-native";
import Table from "../components/tableComponent/Table";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { mockTableEx } from "../../data/mockTableData";

const TableScreen = () => {

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState(null); 
    useEffect(() => {
        setData(mockTableEx);
    }, []);  
    
    const filteredData = data.filter((item) => {
        // Filtro de busca: verifica se o número da mesa corresponde ao termo de busca
        if (searchTerm && !item.tableNumber.toString().includes(searchTerm)) {
            return false; // Exclui a mesa se não corresponder à busca
        }
        // Filtro de status: verifica se o status corresponde ao filtro
        if (statusFilter !== null && item.status !== statusFilter) {
            return false; // Exclui a mesa se o status não corresponder ao filtro
        }

        return true; // Retorna a mesa se passar em ambos os filtros
    });
    
    const toggleStatusFilter = (status) => {
        if (statusFilter === status) {
            setStatusFilter(null); // Se o filtro já estiver ativo, remove o filtro
        } else {
            setStatusFilter(status); // Aplica o filtro para o status selecionado
        }
    };


    return (
        <View style={styles.container}>
            
            <View style={styles.containerBtn}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.searchBtn}>
                        <Image style={styles.searchImg} source={require('../../assets/lupa.png')} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Ex: 1"
                            keyboardType="numeric"
                            value={searchTerm}
                            onChangeText={(text) => setSearchTerm(text)}
                        />
                    </View>
                </TouchableWithoutFeedback>

                <TouchableOpacity 
                    style={[styles.btnStyle, { backgroundColor: '#4E9726' }]}
                    onPress={() => setStatusFilter(false)}  
                >
                    <Text style={styles.textBtn}>LIVRES</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.btnStyle, { backgroundColor: '#E90000' }]}
                    onPress={() => toggleStatusFilter(true)}
                >
                    <Text style={styles.textBtn}>OCUPADAS</Text>
                </TouchableOpacity>

                

            </View>

            <ScrollView>
                <View style={styles.containerTables}>
                    {filteredData.map((table) => (
                        <Table
                            key={table.id}
                            id = {table.id}
                            tableNumber={table.tableNumber}
                            status={table.status}
                        />
                    ))}
                </View>
            </ScrollView> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C5C0C0',
        flex: 1,
    },
    searchBtn: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: 120,
        borderRadius: 150,
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 10,
        paddingHorizontal: 10, 
    },
    searchImg: {
        width: 25,
        height: 25,
    },
    textInput: {
        fontSize: 25,
        paddingVertical: 5,
        marginLeft: 5, 
        flex: 1, 
    },
    containerBtn: {
        paddingTop: 15,
        flexDirection: 'row',  
    },
    btnStyle: {
        color: 'white',
        width: 110,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBtn: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    containerTables: {
        justifyContent: 'center',
        backgroundColor: '#C5C0C0',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingBottom: 100,
    },
});

export default TableScreen;
