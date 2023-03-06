import { useEffect, useState } from "react";
import {ScrollView, StyleSheet, Text, View } from "react-native";

const ListWithAPi = () => {
    const [data, setData] = useState([]);
    const getDataHandler = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        let result  = await fetch(url);
        result = await result.json();
        setData(result);
    }
    useEffect(()=>{
        getDataHandler();
    },[])
    return (
        <ScrollView >
            <View style={styles.layout}>
            <Text style={styles.heading}>List with api data</Text>
            <Text style={styles.heading}>List using map() with scrollView</Text>
            {
                data.length?
                data.map((item)=>{
                    return <View style={styles.card} key={item.id}>
                        <Text style={styles.title}>{item.id}._ {item.title}</Text>
                    </View>
                })
                :
                null
            }
            </View>
        </ScrollView>
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

})


export default ListWithAPi;