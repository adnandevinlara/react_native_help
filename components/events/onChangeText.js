import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const OnChangeTextEvent = () => {
    const [name,setName] = useState('Adnan');
    const showState = (name) => {
        alert('your name is:'+ name);
    }
    return (
        <View>
            <Text>TextInput 'onchangetext' Event</Text>
            <Text>My Name is {name}.</Text>
            <Text>Enter name</Text>
            <TextInput style={styles.TextInput} placeholder="write name..." value={name} onChangeText={(text) => {
                setName(text)
            }} />
            <Button title="Clear" onPress={()=>setName("")} />
            <Button title="Show" color={'green'} onPress={() => showState(name)} />
        </View>
        

    );
};

const styles = StyleSheet.create({
    TextInput : {
        padding: 4,
        marginBottom:4,
        fontSize:16,
        borderWidth: 2,
        borderColor: 'green',

    },
    
});



export default OnChangeTextEvent