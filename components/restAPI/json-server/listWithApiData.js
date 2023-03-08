import { useEffect,useState } from "react";
import { Button, FlatList,Modal ,Pressable,StyleSheet, Text, TextInput, View } from "react-native";
// import Props from "../../props/props";

const ListWithApiData = () => {
    const [data, setData] = useState([]);
    const [modalVisible,setModalVisible] = useState(false)
    const [editData,setEditData] = useState(undefined)
    const handleEditDataModel = (dataToEdit) => {
        let data = {
            title: dataToEdit.title,
            author: dataToEdit.author,
            id: dataToEdit.id
        }
        setEditData(data);
        setModalVisible(true);
        console.table(dataToEdit);
    }
    const deleteData = async (id) => {
        const url = `http://localhost:3000/posts/${id}`;
        let result  = await fetch(url,{
            method: 'DELETE'
        });
        result = await result.json();
        fetchData();
    }
    const fetchData = async () => {
        const url = "http://localhost:3000/posts";
        let result  = await fetch(url);
        result = await result.json();
        setData(result);
        return true;       
    }
    useEffect(() => {
        fetchData();
    },[])
    return (
        <View style={styles.layout}>
            <Text style={styles.heading}>List With FlatList</Text>
            {
                data.length?
                <FlatList 
                data={data}
                renderItem={({item}) => {
                    return (
                        <View style={styles.card}>
                            <Text style={styles.title}>Title: {item.title}, auther: {item.author}</Text>
                            <View style={styles.btn}><Button  color="#841584" title="Edit" onPress={()=>handleEditDataModel(item)} /></View>
                            <View style={styles.btn}><Button  color="#841584" title="Del" onPress={()=>deleteData(item.id)} /></View>
                           {/* <Text>{
                            editData&&editData 
                           }</Text> */}
                        </View>
                    );
                }}
                keyExtractor={(item)=>item.id}
                />
                :
                null
            }

            <Modal visible={modalVisible} transparent={true} animationType='slide'>
                <UpdateModal editData={editData} setModalVisible = {setModalVisible} />
            </Modal>
        </View>
    );
}   

const UpdateModal = (props) => {
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [postID,setPostID] = useState(null);
    // console.log(props.editData)
    const updatePostHandler = async (props) => {
        const data = {
            title: title,
            author: author
        }
        const url = `http://localhost:3000/posts/${postID}`;
        // console.warn(props.setModalVisible);
        let result  = await fetch(url,{
            method:"PUT",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
        });
        result = await result.json();
        console.warn(result);
        props.setModalVisible(false)
    }
    useEffect(()=>{
        if(props.editData){
            setTitle(props.editData.title)
            setAuthor(props.editData.author)
            setPostID(props.editData.id)
        }
    },[]);
    return (
        <View style={styles.modelWrapper}>
                    <View style={styles.modelBody}>
                        <Text style={styles.textStyle}>Update Post</Text>
                        <TextInput style={styles.input} placeholder="Title..." value={title} onChangeText={(text)=>setTitle(text)} />
                        <TextInput style={styles.input} placeholder="auther..." value={author} onChangeText={(text)=>setAuthor(text)} />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => updatePostHandler(props)}>
                            <Text style={styles.textStyle}>update post</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => props.setModalVisible(false)}>
                            <Text style={styles.textStyle}>close modal</Text>
                        </Pressable>
                    </View>
                </View>
    );
}


const styles = StyleSheet.create({
    
    layout: {
        flex:1,  alignItems:"center"
    },
    heading: {
        fontSize:20
    },
    title:{
        // borderColor:'pink',
        // borderWidth:2,
        // borderCurve: 3,
        // borderRadius:16,
        flex:3,
        padding:8,
        margin:4,
        fontSize:14

    },
    body:{
        borderColor:'pink',
        borderWidth:6,
        borderCurve: 3,
        borderRadius:16,
        padding:8,
        margin:4,
        shadowOffset: {width: 2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,

    },
    card: {
        width: '100%',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:'pink',
        borderBottomWidth:2,
        
        
    },
    btn: {
        flex:1,
        marginHorizontal:1
    },
    modelWrapper: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modelBody: {
        backgroundColor:'#fff',
        padding:16,
        borderColor: 'purple',
        borderWidth: 2,
        borderRadius: 4,
        shadowColor:'#000',
        shadowOpacity:0.70,
        elevation:5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        marginVertical:2,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
      },
    input: {
        borderWidth: 2,
        borderRadius: 4,
        borderColor:'pink',
        padding: 6,
        margin: 6
    }
});

export default ListWithApiData; 