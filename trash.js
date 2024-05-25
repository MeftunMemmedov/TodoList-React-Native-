import React, { useState } from 'react'
import { View, SafeAreaView, Text, TextInput , StyleSheet, Button, Pressable} from 'react-native'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [todo, setTodo]=useState({
    id: '',
    todoVal:''
  })

  const [todos, setTodos]=useState([])

  const handleChange = (textValue)=>{
    setTodo({id:"",todoVal: textValue})
}

  const addNewTodo=()=>{
    setTodos([...todos, todo]) 
  }

  const clearAllTodos=()=>{
    setTodos([])
  }


  console.log(todo)
  return (
    <View>
      
      <Text style={{textAlign:'center'}}>TODO LIST</Text>     
        <TextInput 
        style={styles.input} 
        onChangeText={handleChange}
        placeholder='Write TODO'
        />
        <Button title='Add' onPress={addNewTodo}/>

        <View style={{marginTop:20}}>
          {
            todos.map((todo)=>{
              return(
                <View style={{borderWidth:2, borderColor:'red', borderRadius:10}}>
                  <Text>{todo.id}</Text>
                  <Text>{todo.todoVal}</Text>
                </View>
              )
            })
          }
        </View>
        <Button title='Clear All' color={'red'} onPress={clearAllTodos}/>
    </View>
  )
}

export default App

const styles=StyleSheet.create({
 
  input:{
    borderWidth:1,
    fontSize:20,

  }, 
 
})