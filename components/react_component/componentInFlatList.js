import { FlatList, StyleSheet, Text, View } from "react-native";

const ComponentInFlatList = () => {
    const students = [
        {
            id: 1,
            name: 'Adnan',
            email: 'exp@email.com'
        },
        {
            id: 2,
            name: 'Zaib',
            email: 'exp@email.com'
        },
        {
            id: 3,
            name: 'AAli',
            email: 'exp@email.com'
        },
        {
            id: 6,
            name: 'usman',
            email: 'exp@email.com'
        },
        {
            id: 7,
            name: 'AAli',
            email: 'exp@email.com'
        }
    ];
    return (
        <View>
            <Text style={styles.heading}>Component in FlatList in react-natice</Text>
            <FlatList
                data={students}
                renderItem = {({item})=> <StudentDeails item={item} />}
            />
        </View>
    );
}

const StudentDeails = (props) => {
    const item = props.item;
    return (
        <View style={styles.box}><Text style={styles.item}>{item.name}</Text><Text style={styles.item}>{item.email}</Text></View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 16,
        color: 'purple'
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        padding:4,
        margin:4,
        borderWidth: 2,
        borderColor: 'pink',
        borderRadius: 6
    },
    item: {
        // borderWidth: 2,
        width:"100%",
        textAlign:"center"

    }

})

export default ComponentInFlatList;