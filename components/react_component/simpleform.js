import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const SimpleForm = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [showPassword,setShowPassword] = useState(true);
    const [display,setDisplay] = useState(false);
    return (
        <View >
            <Text style={{fontSize:16}}>Simple form in react-native!</Text>
            <View >
                <TextInput placeholder="Name..." value={name} onChangeText={(text) => setName(text)} />
                {name == '' && <Text style={{color:'red'}}>Please fill name field</Text> }
                <TextInput placeholder="Email..." value={email} onChangeText={(text) => setEmail(text)} />
                {email == '' && <Text style={{color:'red'}}>Please fill email fields</Text> }
                <TextInput secureTextEntry={showPassword} placeholder="password..." value={password} onChangeText={(text) => setPassword(text)} />
                {password == '' && <Text style={{color:'red'}}>Please fill password fields</Text> }
                <Button title='Print' color={'blue'} onPress={()=>{
                    setDisplay(true);
                }}  />
                <Button title='Clear' color={'pink'} onPress={()=>{
                    setDisplay(false);
                    setName('');
                    setEmail('');
                    setPassword('');
                }}   />
                {
                    showPassword?
                    <Button title = 'Show Password' onPress={()=>{
                        setShowPassword(false);
                    }} />
                    :
                    <Button title = 'Hide Password' onPress={()=>{
                        setShowPassword(true);
                    }} />
                }
            </View>
            {
                display?
                <View>
                    <Text>{name}</Text>
                    <Text>{email}</Text>
                    <Text>{password}</Text>
                </View>
                : null
            }
        </View>
    );
}



export default SimpleForm;