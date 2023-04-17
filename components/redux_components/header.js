import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import  { useSelector } from "react-redux";
function Header() {
    const [cartCount,setCartCount] = useState(0);
    const cartData = useSelector((state) =>state.reducer);
    console.log(cartData);
    useEffect(() => {
        setCartCount(cartData.length);
    },[cartData]);
    return ( 
        <View style={styles.container}>
            <Text style={styles.cart}>Cart:{cartCount}</Text>
        </View>
     );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        textAlign:'right',
        backgroundColor:'gold',
    },
    cart: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        paddingRight: 10,
    }
});
export default Header;