import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./header";
import Product from "./product";
const ProductWrapper = ({navigation}) => {
    const products = [ 
        {
            name: "Samsung",
            color: 'green',
            price: 11000,
            image: 'https://www.whatmobile.com.pk/admin/images/Apple/AppleiPhone14Pro-b.jpg'        },
        {
            name: "IOS",
            color: 'silver',
            price: 12000,
            image: 'https://www.whatmobile.com.pk/admin/images/Apple/AppleiPhone14Pro-b.jpg'        },
        {
            name: "Nokia",
            color: 'orange',
            price: 8000,
            image: 'https://www.whatmobile.com.pk/admin/images/Apple/AppleiPhone14Pro-b.jpg'
        }
    ];
    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>Redux Example</Text>
            <Button title="Get user list" onPress={()=> navigation.navigate("userlists")} />
            <Header />
            <ScrollView>
            {
                products.map(product => (
                    <Product key={product.name} product={product} />
                ))
            }
            </ScrollView>
            {/* <Product /> */}
        </View>
     );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    
});
export default ProductWrapper;