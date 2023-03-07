import { useEffect, useState } from "react";
import { Button,StyleSheet ,Text, TextInput, View } from "react-native";

const PostApi = () => {
    const [title,setTitle] = useState('');
    const [auther,setAuther] = useState('');
    const [error,setError] = useState(false);
    const [errorMessage,setErrorMessage] = useState('');
    const resetVar = () => {
        setTitle('')
        setAuther('')
        // setError(false)
        setErrorMessage('')
        console.warn('variable resets')
    }
    const validate = () => {
        console.warn('title length:'+ title.length);
        console.warn('auther length:'+ auther.length);
        if(!title){ 
            setError(true) 
            setErrorMessage("Some field are missing") 
        }
        if(!auther){ 
            setError(true) 
            setErrorMessage("Some field are missing") 
        }
        
    }
    const UploadData = async () => {
       validate();
        if(error == false){
            console.warn('error not found')
            console.warn(error)
            const data = {
                title: title,
                auther: auther
            }
            const url = "http://localhost:3000/posts";
            let result  = await fetch(url,{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(data)
            });
            result = await result.json();
            console.warn(result);
            resetVar();
        }else{
            console.warn('error  found')
        }
        
        
    }
    useEffect(()=>{
        console.warn("use effect error:"+error)
    },[])
    return (
        <View>
            <Text>Post data with api..!</Text>
            <TextInput style={styles.input} placeholder="Enter title..." value={title} onChangeText = {(text)=>setTitle(text)} />
            <TextInput style={styles.input} placeholder="Enter auther..." value={auther} onChangeText = {(text)=>setAuther(text)} />
            <Text>{ errorMessage }</Text>
                
            <Button title="Save" onPress={UploadData} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderRadius: 4,
        borderColor:'pink',
        padding: 6,
        margin: 6
    }
})

export default PostApi;