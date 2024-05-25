import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Pressable} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getTodo } from '../redux/todoSlice'
import axios from 'axios'
import LinearGradient from 'react-native-linear-gradient'
import Icons from 'react-native-vector-icons/FontAwesome'

const EditTodo = ({route, navigation}) => {
    const {singleTodo}=useSelector(store=>store.todos)
    const dispatch=useDispatch()
    const {todoId}=route.params
    const currentTodo=singleTodo[0]
    console.log(singleTodo)

    const [editTodoInput, setEditTodoInput]=useState()

    const editTodo=async()=>{
        const data={
            todo:editTodoInput
        }
        await axios.patch(`https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/RN-Todo-List?id=eq.${currentTodo.id}&select=*`, data, {
            headers:{
                apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
                "Content-Type":"application/json"
            }
        })

        navigation.navigate('Todos')
    }

    useEffect(()=>{
        dispatch(getTodo(todoId.toString()))
    },[])
    
  return (
    <LinearGradient
     colors={['#ffffff', '#444393', '#9f3a3a']}
   
    >
    <View style={styles.editTodoScreen}>
        <View style={styles.editTodoBox}>
            <Text style={{fontSize:40, textAlign:'center', marginBottom:20}}>Edit Todo</Text>
            <TextInput defaultValue={currentTodo?.todo} style={styles.editTodoInput} onChangeText={newValue=>setEditTodoInput(newValue)}/>
            <Pressable style={styles.editBtn} onPress={editTodo}>
                <Text style={styles.editBtnText}>Edit</Text>
            </Pressable>
            <Pressable style={styles.cancelEditBtn} onPress={()=>navigation.navigate('Todos')}>
                <Text style={styles.editBtnText}>
                    <Icons name="arrow-left" size={30}/>  Cancel
                </Text>
            </Pressable>
        </View>        
    </View>
    </LinearGradient>
  )
}

export default EditTodo


const styles=StyleSheet.create({
    editTodoScreen:{
        borderWidth:2,
        height:'100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    editTodoBox:{
        width:'100%',
   
    },
    editTodoInput:{
        borderWidth:1,
        width:'90%',
        marginBottom:30,
        fontSize:20,
        margin:'auto',
        borderRadius:15,
        color:'white'
    }
    ,
    editBtn:{
        width:'80%',
        borderWidth:2,
        padding:15,
        borderRadius:30,
        margin:'auto',
        backgroundColor:'white'
    },
    cancelEditBtn:{
        width:'40%',
        borderWidth:2,
        padding:10,
        borderRadius:30,
        margin:'auto',
        marginTop:40,
        backgroundColor:'gray'
    },
    editBtnText:{
        fontSize:30,
        textAlign:'center',
        color:'black',
        fontWeight:'bold'
    }
})