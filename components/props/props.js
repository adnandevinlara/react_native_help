import { Text, View } from "react-native";

const Props = (props) => {
    return (
        <View style={{borderWidth:2, borderColor:'green', padding:4, borderRadius:6, marginTop:4}}>
            <Text style={{fontSize: 20}}>Props in react native!</Text>
            <Text>My Profile(child-component)</Text>
            <Text>Name: {props.name}</Text>
            <Text>Email: {props.email}</Text>
        </View>
    );
};

export default Props;