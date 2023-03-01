import { Button, StyleSheet,Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const StackNavigation = () => {
    const Stack = createNativeStackNavigator(); 
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const Login = (props) => {
    return (
        <View style={styles.layout}>
            <Text style={styles.heading}>My Login Screen</Text>
            <Button title="Go Home" onPress={() => props.navigation.navigate("Home")} />
        </View>
    );
};


const Home = (props) => {
    return (
        <View style={styles.layout}>
            <Text style={styles.heading}>Home Screen</Text>
            <Button title="Go About" onPress={() => props.navigation.navigate("About")} />
        </View>
    );
};

const About = (props) => {
    return (
        <View style={styles.layout}>
            <Text style={styles.heading}>About Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    layout: {
        flex:1, justifyContent:"center", alignItems:"center"
    },
    heading: {
        fontSize:20
    }

})


export default StackNavigation;