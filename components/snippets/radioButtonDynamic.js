import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const RadioButtonDynamic = () => {
    const [radioSelected,setRadioSelected] = useState('');
    let skills = [
        {
            id: 1,
            name: 'PHP'
        },
        {
            id: 2,
            name: 'Laravel'
        },
        {
            id: 3,
            name: 'React js'
        },
    ]
    return (
        <View style={styles.main}>
            <Text>Dynamic Radio button in react native</Text>
            {
                skills.map((item)=>{
                   return( 
                   <TouchableOpacity key={item.index} onPress={()=>setRadioSelected(item.id)}>
                        <View style={styles.radioWrapper}>
                            <View style={styles.radioBorder}>
                                {
                                    radioSelected === item.id? <View style={styles.radioSelected}></View> : null
                                }
                                
                            </View>
                            <Text style={styles.radioText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                   );
                })                
            }
            
        </View>
    );
}



const styles = StyleSheet.create({
    main: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center'
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems:'center',
        margin:4
    },
    radioBorder: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderRadius: 20,
    },
    radioSelected: {
        backgroundColor:'skyblue',
        width: 20,
        height: 20,
        borderRadius: 20,
        margin:4

    },
    radioText:{
        fontSize:16,
        marginLeft:4
    }
});


export default RadioButtonDynamic;