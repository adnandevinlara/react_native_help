import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const RadioButton = () => {
    const [radioSelected,setRadioSelected] = useState(1);
    return (
        <View style={styles.main}>
            <Text>Radio button in react native</Text>
            <TouchableOpacity onPress={()=>setRadioSelected(1)}>
                <View style={styles.radioWrapper}>
                    <View style={styles.radioBorder}>
                        {
                            radioSelected === 1? <View style={styles.radioSelected}></View> : null
                        }
                        
                    </View>
                    <Text style={styles.radioText}>Radio 1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setRadioSelected(2)}>
            <View style={styles.radioWrapper}>
                    <View style={styles.radioBorder}>
                        {
                            radioSelected === 2? <View style={styles.radioSelected}></View> : null
                        }
                    </View>
                    <Text style={styles.radioText}>Radio 2</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
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


export default RadioButton;