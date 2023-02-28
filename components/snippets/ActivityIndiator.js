import { useState } from "react";
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";

const ActivityIndicatorExp = () => {
    const [showLoader,setShowLoader] = useState(false)
    const loadingHandler = () => {
        setShowLoader(true);
        // call some api fetch data let say take 3 sec.
        setTimeout(()=>{
            setShowLoader(false);
        },5000)
    }
    return (
        <View style={styles.main}>
            <Text>Activity Indicator Exp</Text>
            <ActivityIndicator size={100} animating={showLoader} />
            <Button title="Show loading" onPress={loadingHandler} />       
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        alignItems:'center',
        textAlignVertical:'center'
    }
})

export default ActivityIndicatorExp;