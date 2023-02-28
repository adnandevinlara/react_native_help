import { useState } from "react";
import { Button, Text, View } from "react-native";

const State = () => {
    const [name,setName] = useState('Adnan');
    function handleState() {
        setName('Ammal Adnan');
    }
    return (
        <View>
            <Text style={{fontSize: 20}}>State in react-native!</Text>
            <Text>My Name : {name}</Text>
            <Text>onPress update state</Text>
            <Button title="update state" color={'green'} onPress={handleState} />
        </View>
    );
}
export default State;