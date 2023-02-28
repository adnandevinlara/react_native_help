import { StyleSheet,SectionList, View ,Text} from "react-native";

const SelectionListExp = () => {
    const students = [
        {
            id: 1,
            name: 'Adnan Zaib',
            data: ['PHP','Laravel','JS']
        },
        {
            id: 2,
            name: 'Aiza Adnan',
            data: ['PHP','Laravel','HTML','CSS','JS']
        },
        {
            id: 3,
            name: 'Ammal Adnan',
            data: ['PHP','Laravel','JS','Nodejs']
        },
    ]
    return (
        <View>
            <Text style={styles.heading}>SelectionList example in react-native</Text>
            <SectionList
                sections={students}
                renderItem={({item})=><View style={styles.section}><Text>{item}</Text></View>}
                renderSectionHeader={({section: {name}})=><Text style={styles.header}>{name}</Text>}
                keyExtractor={(item)=>item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize:16
    },
    header: {
        color:'green',
        // borderWidth:2,
        borderBottomWidth:2,
        textAlign:'center'
    },
    section: {
        paddingLeft: 20  
    }
});

export default SelectionListExp;