import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductWrapper from "./productWrapper";
import UserList from "./userList";
const Main = () => {
    const Stack = createNativeStackNavigator();
    
    return ( 
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="products" component={ProductWrapper} />
                <Stack.Screen name="userlists" component={UserList} />
            </Stack.Navigator>
        </NavigationContainer>        
     );
}

export default Main;