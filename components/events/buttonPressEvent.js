import { View, Text, Button } from "react-native";
const PressEvent = () => {
    const sum = (num1,num2) => {
        console.warn(num1+num2);
    }
    const greetings = () => {
        console.warn('Happy-birth Day Adnan!');
    }
    return (
        <View>
            <Text style={{fontSize: 20}}>This is Button Press Event Simple Example</Text>
            <Button title="Press me" color={'green'} />
            <Text>Call function on press button</Text>
            <Text>without parameters</Text>
            <Button title="Call function" color={'blue'} onPress={greetings} />
            <Text>with parameters</Text>
            <Button title="Call function" color={'purple'} onPress={() => sum(4,2)} />
        </View>
    );
};

export default PressEvent;