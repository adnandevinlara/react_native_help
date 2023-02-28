import { Text, View, FlatList, StyleSheet, ScrollView } from "react-native";

const MapListExp = () => {
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
        },
        {
            id: 8,
            name: 'Zaib'
        },
        {
            id: 9,
            name: 'AAli'
        },
        {
            id: 10,
            name: 'Zaib'
        },
        {
            id: 11,
            name: 'AAli'
        },
        {
            id: 12,
            name: 'Zaib'
        },
        {
            id: 13,
            name: 'AAli'
        },
        {
            id: 14,
            name: 'Zaib'
        },
        {
            id: 15,
            name: 'AAli'
        },
        {
            id: 16,
            name: 'Zaib'
        },
        {
            id: 17,
            name: 'AAli'
        },
        {
            id: 18,
            name: 'Zaib'
        },
        {
            id: 19,
            name: 'AAli'
        },
        {
            id: 20,
            name: 'Zaib'
        }
    ];
    return (
        <View>
            <Text style={styles.heading}>Custom list with map() function in react native</Text>
            <ScrollView>
            {
                students.map((item)=><View key={item.id} style={styles.item}><Text>{item.name}</Text></View>)
            }
            </ScrollView>
                 
            
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

export default MapListExp;