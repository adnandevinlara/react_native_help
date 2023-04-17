
import { StyleSheet, Text, View } from "react-native";
function UserList() {
    
    return ( 
        <View style={styles.container}>
            <Text style={styles.cart}>User list screen</Text>
        </View>
     );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        backgroundColor:'gold',
    },
    cart: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        color: '#000',
        paddingRight: 10,
    }
});
export default UserList;