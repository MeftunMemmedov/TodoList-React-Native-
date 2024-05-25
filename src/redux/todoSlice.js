import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getAllTodos=createAsyncThunk("getAllTodos", async()=>{
    const response=await fetch('https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/RN-Todo-List?select=*',{
        headers:{
            apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'
        }
    })

    const jsonData=response.json()
    return jsonData
})


export const getTodo=createAsyncThunk("getTodo", async(todoId)=>{
    const response=await fetch(`https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/RN-Todo-List?id=eq.${todoId}&select=*`,{
        headers:{
            apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'
        }
    })

    const jsonData=response.json()

    return jsonData
})

export const sendNewTodo=createAsyncThunk("sendNewTodo", async(todo)=>{
    const date=new Date()

    const data={
        todo:todo,
        time:date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
    }
    
    const postedData=await axios.post("https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/RN-Todo-List", data,{
        headers:{
            apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
            "Content-Type":"application/json"
        }
    })

    return postedData
})

export const deleteTodo=createAsyncThunk("deleteTodo", async(todoId)=>{
    await axios.delete(`https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/RN-Todo-List?id=eq.${todoId}&select=*`, {
        headers:{
            apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'
        }
    })
})


export const todoSlice=createSlice({
    name:"todo",
    initialState:{
        todos:[],
        singleTodo:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllTodos.fulfilled, (state, action)=>{
            state.todos=action.payload
        })
        builder.addCase(getTodo.fulfilled, (state, action)=>{
            state.singleTodo=action.payload
        })
        // builder.addCase(sendNewTodo.fulfilled, (state, action)=>{
        //     state.todos.push(action.payload)
        // })
       
    }
})



export default todoSlice.reducer