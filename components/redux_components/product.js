import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/action"; 

function Product(props) {
    const product = props.product;
    const dispatch = useDispatch();
    const addToCartHandler = (product) => {
        dispatch(addToCart(product));
    }

    const removeFromCartHandler = (product) => {
        dispatch(removeFromCart(product.name));
    }

    // check if product is already in cart or not
    const [isProductInCart, setIsProductInCart] = useState(false);
    const cartData = useSelector((state) =>state.reducer);

    useEffect(()=>{
        if(cartData && cartData.length){
            // cartData.forEach((cartProduct) => {
            //     if(cartProduct.name === product.name){
            //         setIsProductInCart(true);
            //     }
            // });

            // above code not use futher

            let result  = cartData.filter((cartProduct) => {
                return cartProduct.name == product.name;
            });

            if(result.length){
                setIsProductInCart(true);
            }else{
                setIsProductInCart(false);
            }


        }
    },[cartData]);

    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>Product Name: {product.name}</Text>
            <Image style={styles.imageStyle} source={{uri:product.image}} />
            <View style={styles.details}>
                <Text style={styles.title}>Details</Text>
                <Text>Color: {product.color}</Text>
                <Text>Price: {product.price}</Text>
            </View>
            {
                isProductInCart?
                <Button title="Remove to cart" onPress={()=>removeFromCartHandler(product)} />
                :
                <Button title="Add to cart" onPress={()=>addToCartHandler(product)} />
            }
            
        </View>
     );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor:'black',
        borderBottomWidth:1,
        padding:10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    details:{
        borderWidth:2,
        borderColor:'black',
        padding:10,
        margin:10
    },
    imageStyle: {
        width: 200,
        height: 200,
        aspectRatio:1,
        display:'flex',
        resizeMode:'contain',
        
    }
});
export default Product;

