import { useEffect,useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const ListWithFlatList = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        let result  = await fetch(url);
        result = await result.json();
        setData(result);        
    }
    useEffect(() => {
        fetchData();
    },[])
    return (
        <View style={styles.layout}>
            <Text style={styles.heading}>List With FlatList</Text>
            {
                data.length?
                <FlatList 
                data={data}
                renderItem={({item}) => {
                    return (
                        <View style={styles.card}>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    );
                }}
                keyExtractor={(item)=>item.id}
                />
                :
                null
            }
        </View>
    );
}   

const styles = StyleSheet.create({
    layout: {
        flex:1,  alignItems:"center"
    },
    heading: {
        fontSize:20
    },
    title:{
        borderColor:'pink',
        borderWidth:2,
        borderCurve: 3,
        borderRadius:16,
        padding:8,
        margin:4,
        fontSize:14

    },
    body:{
        borderColor:'pink',
        borderWidth:6,
        borderCurve: 3,
        borderRadius:16,
        padding:8,
        margin:4,
        shadowOffset: {width: 2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,

    },
    card: {
        width: '100%'
    }
});

export default ListWithFlatList; 