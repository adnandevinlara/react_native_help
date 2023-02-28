import { Text, View, FlatList, StyleSheet } from "react-native";

const FlatListExp = () => {
    const students = [
        {
            id: 1,
            name: 'Adnan'
        },
        {
            id: 2,
            name: 'Zaib'
        },
        {
            id: 3,
            name: 'AAli'
        },
        {
            id: 4,
            name: 'Zaib'
        },
        {
            id: 5,
            name: 'AAli'
        },
        {
            id: 6,
            name: 'Zaib'
        },
        {
            id: 7,
            name: 'AAli'
        }
    ];
    return (
        <View>
            <Text style={styles.heading}>FlatList in react native</Text>
            <FlatList
                style={styles.Flatlist} 
                data={students}
                renderItem={({item})=><View style={styles.item}><Text>{item.name}</Text></View>}
                keyExtractor={(item)=>item.id} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 16,
    },
    Flatlist: {
        // borderWidth:2
    },
    item: {
        padding:4,
        margin: 6,
        borderWidth: 2,
        borderColor: 'pink',
        borderRadius: 6,
        alignItems: 'center'
    }


});

export default FlatListExp;