import { Platform,StyleSheet, Text, View } from "react-native";

const PlatformOs = () => {
    return (
        <View>
            <Text>Platform in react-native</Text>
            <Text style={styles.text}>Platform: {Platform.OS}</Text>
            {
                Platform.OS == 'android'?
                <View style={{backgroundColor:'purple', width:50, height:50}}><Text style={{color:'#fff'}}>Android</Text></View>
                :
                <View style={{backgroundColor:'yellow', width:50, height:50}}><Text style={{color:'#fff'}}>IOS</Text></View>
            }

            <Text>All information about platform</Text>
            <Text>{JSON.stringify(Platform)}</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: Platform.OS=="android"?
        'red'
        :
        'black',
    }
});

export default PlatformOs;