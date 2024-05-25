import React, { useState } from 'react'
import { View, TextInput, Pressable, StyleSheet, Text} from 'react-native'
import { useDispatch } from 'react-redux'
import { sendNewTodo } from '../redux/todoSlice'
import LinearGradient from 'react-native-linear-gradient'

const AddTodo = ({navigation}) => {
    const dispatch=useDispatch()
    const [todo, setTodo]=useState('')

    const addTodo=()=>{
        dispatch(sendNewTodo(todo))
        navigation.navigate('Todos')
    }
  return (
    <LinearGradient
     colors={['#ffffff', '#444393', '#9f3a3a']}
   
    >
    <View style={styles.addTodoScreen}>
    
        <View style={styles.addTodoBox}>
            <Text style={{
                fontSize:50,
                textAlign:'center',
                marginBottom:20
            }}
            >Add Todo</Text>
            <TextInput 
                style={styles.todo_input}
                onChangeText={newText=>setTodo(newText)}
                placeholder='Write to Add TODO...'
            />
            <Pressable 
            style={styles.addBtn}
            onPress={addTodo}
            >
                <Text style={styles.addBtnText}>Add TODO</Text>
            </Pressable>
        </View>
    </View>
</LinearGradient> 
  )
}

export default AddTodo

const styles=StyleSheet.create({
    addTodoScreen:{
        // backgroundColor:'rgb(255,255,255) linear-gradient(34deg, rgba(255,255,255,1) 0%, rgba(68,67,147,1) 32%, rgba(159,58,58,1) 75%, rgba(130,18,0,1) 83%)',
        height:'100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    addTodoBox:{
        width:'90%',
        
    }
    ,
    todo_input:{
        borderWidth:1,
        borderColor:'white',
        fontSize:20,
        color:'white',
        marginBottom:40,
        borderRadius:10,
        width: 400
    },
    addBtn:{
        width:'60%',
        padding:20,
        margin:'auto',
        backgroundColor:"white",
        borderRadius:30
    },
    addBtnText:{
        textAlign:"center",
        color:'black',
        fontSize:20,
        fontWeight:'bold'
    },
})
