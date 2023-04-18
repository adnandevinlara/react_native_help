
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../redux/action";
const UserList = () => {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.reducer);
    useEffect(()=>{
        dispatch(getUserList());
    },[])
    console.log('in component',userList);
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