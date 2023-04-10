import React, {useRef} from 'react';

import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const UseRefHook = () => {
    const nameInput = useRef();
    const updateInput = () => {
        nameInput.current.focus();
        nameInput.current.setNativeProps({
            fontSize:28,
            color:'green',
        });
    }
    return ( 
        <View style = {styles.container}>
            <Text style={styles.title}>useRef in react native</Text>
            <TextInput ref={nameInput} style={styles.input} placeholder="Enter name..." />
            <TextInput style={styles.input} placeholder="Enter password..." />
            <Button title="Update Input" onPress={updateInput} />
        </View>
     );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:16,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        borderColor:'skyblue',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        width: 340,
        height: 40,
    }
});
export default UseRefHook;