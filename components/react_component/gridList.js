import { Text, View, StyleSheet, ScrollView } from "react-native";

const GridView = () => {
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
            name: 'Zaib Ali'
        },
        {
            id: 5,
            name: 'Zain'
        },
        {
            id: 6,
            name: 'Pasha'
        },
        {
            id: 7,
            name: 'Brain'
        },
        {
            id: 8,
            name: 'kahlid'
        },
        {
            id: 9,
            name: 'Anil'
        },
        {
            id: 10,
            name: 'Sidhu'
        }
    ];
    return (
        <View>
            <Text style={styles.heading}>Grid View Exmple in react-native</Text>
            <ScrollView >
                <View style={styles.gridContainer}>    
                    {
                        students.map((item)=><Text key={item.id} style={styles.item}>{item.name}</Text>)
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 16,
    },
    container: {
        // borderWidth:2
    },
    gridContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        // justifyContent:'center'
    },
    item: {
        width: 80,
        height:80, 
        padding:4,
        margin: 6,
        borderWidth: 2,
        borderColor: 'pink',
        borderRadius: 6,
        textAlignVertical: '',
        textAlign: 'center',

    }


});

export default GridView;