import React, { useEffect, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, getAllTodos, sendNewTodo } from '../redux/todoSlice'
import axios from 'axios'
import SingleTodo from '../components/SingleTodo'
import Icons from 'react-native-vector-icons/FontAwesome'



const Todos = ({navigation}) => {
    const dispatch=useDispatch()
    const {todos}=useSelector(store=>store.todos)
    const [todo, setTodo]=useState('')
 

    useEffect(()=>{
        dispatch(getAllTodos())
    },[todos])

  return (
    <View>
        
        <ScrollView style={styles.todoBox}>
            {
                todos.length==0?
                <Text style={{textAlign:'center', fontSize:100}}>EMPTY</Text>:
                todos.map((todo)=>{
                    return (
                        <SingleTodo todo={todo} navigation={navigation}/>
                    )
                })
            }
        </ScrollView>
    </View>
  )
}

export default Todos

const styles=StyleSheet.create({
    todoBox:{
        marginTop:20
    },
    
})
