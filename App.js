import { Button, StyleSheet,Text, TextInput, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from "react";

const App = () => {
    const Stack = createNativeStackNavigator(); 
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    
                    headerStyle: {
                        backgroundColor: 'pink'
                    },
                    headerTintColor: 'purple',
                    headerTitleStyle:{
                        fontSize:20,
                        fontFamily:'colebri'
                        
                    }
                }}
            >
                <Stack.Screen name="Login" component={Login} 
                    options={{
                        headerTitle: () => <Button title="Menu" />,
                        headerRight: () => <Button title="about" onPress={() => console.warn('button clicked')} />,
                        title: 'Authentication',
                        headerStyle: {
                            backgroundColor: 'pink'
                        },
                        headerTintColor: 'purple',
                        headerTitleStyle:{
                            fontSize:20,
                            fontFamily:'colebri',
                            color:'green'
                        }
                    }}
                />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const Login = (props) => {
    const [name,setName] = useState('');
    const age = 22;
    return (
        <View style={styles.layout}>
            <Text style={styles.heading}>Login Screen</Text>
            <TextInput style={{fontSize:20,borderColor:'gray',borderWidth:1, padding:2,borderRadius:4, marginBottom:4,marginTop:4}} placeholder="Enter name..." onChangeText={(text)=>setName(text)} />
            <Button title="Go Home" onPress={() => props.navigation.navigate("Home", {name,age})} />
        </View>
    );
};


const Home = (props) => {
    return (
        <View style={styles.layout}>
            <Text style={styles.heading}>Home Screen</Text>
            <Button title="Go About" onPress={() => props.navigation.navigate("About")} />
            <Text>Name: {JSON.stringify(props.route.params.name)}</Text>
            <Text>Age: {JSON.stringify(props.route.params.age)}</Text>
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

export default App;