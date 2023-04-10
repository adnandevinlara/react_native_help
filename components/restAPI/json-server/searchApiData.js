import React, {useState} from 'react';
import { TextInput,StyleSheet,Text, View } from 'react-native';
const SearchApiData = () => {
    const [posts, setPosts] = useState([]);
    const  searchUserhandler = async (text) => {
        // console.log(text);
        // this url search result against title field
        // const url = `http://localhost:3000/posts?title_like=${text}`;
        // this url search result aist every column item in db.
        // for that we pass q as an parameter
        const url = `http://localhost:3000/posts?q=${text}`;
        let result = await fetch(url);
        let data = await result.json();
        setPosts(data)
        // console.log(data);
    }
    return ( 
        <View style={styles.layout}>
            <Text>Search data with api</Text>
            <TextInput style={{
                borderColor:"skyblue",
                borderWidth:1,margin:10,padding:8,fontSize:16,width:"80%"
                }} placeholder='search...'
                onChangeText={(text)=>searchUserhandler(text)} />
                {
                    posts.length?
                    posts.map((item,index)=>(
                        <Text key={index}>{item.title}</Text>
                    ))
                    :
                    null

                }
        </View>
     );
}
 
export default SearchApiData;

const styles  = StyleSheet.create({
    layout: {
        flex:1,
        alignItems:"center",
        borderColor:"skyblue",
        borderWidth:1
    },
    heading: {
        fontSize:20
    }
});