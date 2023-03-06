import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
export default function App() {
    const Tap = createBottomTabNavigator();
  return (
    <NavigationContainer>
        <Tap.Navigator>
            <Tap.Screen name="Login" component={Login} />
            <Tap.Screen name="Register" component={Register} />
        </Tap.Navigator>        
    </NavigationContainer>
  );
};

const Login = () => {
    return (
        <View style={styles.layout}>
            <Text style={styles.heading}>Login</Text>
        </View>
    );
}

const Register = () => {
    return (
        <View style={styles.layout}>
            <Text style={styles.heading}>Register</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    layout: {
        flex:1, justifyContent:"center", alignItems:"center"
    },
    heading: {
        fontSize:20
    }

})