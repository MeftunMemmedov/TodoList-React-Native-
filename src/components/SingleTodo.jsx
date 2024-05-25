import React from 'react'
import { View, Text, StyleSheet , Pressable} from 'react-native'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../redux/todoSlice'
import Icons from 'react-native-vector-icons/FontAwesome'

const SingleTodo = ({navigation,todo}) => {
    const dispatch=useDispatch()
  return (
    <View style={styles.singleTodoContainer}>
        <View>
            <Text style={styles.singleTodoText}>{todo.todo}</Text>
            <Text style={styles.singleTodoTime}>{todo.time}</Text>
        </View>
        <View style={{
            flexDirection:'column',
            justifyContent:'space-between',
            height:"100%"
            }}>
            <Pressable style={styles.editBtn} onPress={()=>navigation.navigate('EditTodo',{todoId:todo.id})}>
                <Icons name="edit" size={30} style={{margin:'auto'}}/>
            </Pressable>
            <Pressable style={styles.deleteBtn} onPress={()=>dispatch(deleteTodo(todo.id))}>
                <Icons name="trash-o" size={30} color={'red'} style={{margin:'auto'}}/>
            </Pressable>
        </View>
    </View>
  )
}

export default SingleTodo

const styles=StyleSheet.create({
    singleTodoContainer:{
        width:'95%',
        height:120,
        margin:'auto',
        borderWidth:1,
        borderRadius:20,
        backgroundColor:'#d1cfcf',
        marginTop:5,
        marginBottom:5,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    singleTodoText:{
        fontSize:25,
        color:'black'
    },
    singleTodoTime:{
        fontSize:20
    },
    editBtn:{
    //    backgroundColor:'orange',
        width:50,
        height:40,
        borderRadius:10,
        flexDirection:'column',
        justifyContent:'center'
    },
    deleteBtn:{
        // backgroundColor:'red',
        width:50,
        height:40,
        borderRadius:10,
        flexDirection:'column',
        justifyContent:'center'
    }
})
