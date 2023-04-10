import React, { useState } from 'react';
import { Button, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AsyncStorageExample = () => {
    const [name,setName] = useState(null);
    const setData = async () => {
        await AsyncStorage.setItem("name","Adnan Zaib");
    };
    const getData = async () => {
        const name  = await AsyncStorage.getItem("name");
        console.log(name);
        setName(name);
    };
    const removeData = async () => {
        const name  = await AsyncStorage.removeItem("name");
        // console.log(name);
        setName(null);
    };
    return ( 
        <View>
            <Text>Async Storage</Text>
            <Button title='set data' onPress={setData} />
            <Button title='get data' onPress={getData} />
            <Button title='remove data' onPress={removeData} />
            {
                name? <Text>{name}</Text>:null
            }
        </View>
     );
}

export default AsyncStorageExample;