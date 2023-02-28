import { Pressable, StyleSheet, Text, View } from "react-native";

const PressableEvent = () => {
    return(
        <View style={styles.main}>
            <Pressable
            onPress={()=>console.warn('normal press')}
            onLongPress={()=>console.warn('long pressed event!')}
            onPressIn={()=>console.warn('press in')}
            onPressOut={()=>console.warn('press out')}
            
            >
                <Text style={styles.button}>Pressable Event</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',

    },
    button: {
        width:'100%',
        height: 30,
        borderWidth:2,
        borderRadius:4,
        borderColor:'skyblue',
        backgroundColor: 'green',
        textAlign:'center',
        textAlignVertical:'center',
        padding: 2
    }
});


export default PressableEvent;