import { useEffect, useState } from "react";
import {  StyleSheet, Text } from "react-native";
import { View } from "react-native-web";

const SimpleAPI = () => {
    const [data,setData] = useState(undefined);
    const fetchData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts/1";
        let result = await fetch(url);
        console.log(result.status);
        result = await result.json();
        setData(result);
        console.warn(result);
    }
    const fetchDataWithThen = () => {
        const url = "https://jsonplaceholder.typicode.com/posts/1";
        let result = fetch(url)
        .then(response => response.json())
        .then(data => setData(data));
        
        // console.warn(result);
    }
    useEffect(() => {
        // fetchData();
        fetchDataWithThen();
    },[])
    return (    
        <View style={styles.layout}>
            <Text style={styles.heading}>Simple fetch api example</Text>
            {
                data ? <View style={styles.layout}>
                    <Text style={styles.title}>Title: {data.title}</Text>
                    <Text style={styles.body}>Body: {data.body}</Text>
                </View>
                : null
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

    }

})


export default SimpleAPI;