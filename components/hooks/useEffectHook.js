import React,{ useEffect, useState } from "react";
import { Text, View, Button } from "react-native";

const UseEffectHook = () => {
    const [name,setName] = useState('Adnan');
    const [count,setCount] = useState(0);
    const [display,setDisplay] = useState(false);
    useEffect(()=>{
        {
            name=='Adnan'? console.warn('hook called on mount') : console.warn('hook called on state update')
        }
    },[name])
    useEffect(()=>{
        {
            display? console.warn('Message displayed!') : console.warn('Messaged hide!')
        }
    },[display])
    return(
        <View>
            <Text>useEffect hook in react-native!</Text>
            <Text>State:{name}</Text>
            <Text>Count:{count}</Text>
            <Button title="press me" onPress={()=>setName('Zaib')} />
            <Button title="Plus count" onPress={()=>setCount(count+1)} />
            <Button title="minus count" onPress={()=>setCount(count-1)} />
            { 
            display?
            <Button  title="Hide" onPress={()=>{
                {
                    setDisplay(false)
                }
            }} />
            :
            <Button title="Show" onPress={()=>{
                
                    setDisplay(true)
                    
                
            }} />
            }

            {
                display? <Student /> : null
            }
        </View>
    );
}

const Student = () => {
    let timer = setInterval(()=>{
        console.warn('timer called');
    },2000)
    useEffect(()=>{
        return () =>clearInterval(timer);
    })
    return (
        <View>
            <Text>Unmount component example</Text>
        </View>
    );
}


export default UseEffectHook;