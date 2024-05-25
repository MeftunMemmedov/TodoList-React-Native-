import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import AddTodo from '../screens/AddTodo'
import Todos from '../screens/Todos'
import Icons from 'react-native-vector-icons/FontAwesome'

const Tab=createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen 
        name='Todos' 
        component={Todos} 
        options={{
            tabBarLabel:'All Todos',
            tabBarIcon:({color, size})=>(
            <Icons name='file-text-o' size={size} color={color}/>
  )}}
        />
        <Tab.Screen 
        name='AddTodo' 
        component={AddTodo}
        options={{
            tabBarLabel:'Add New',
            tabBarIcon:({color, size})=>(
            <Icons name='plus-square' size={size} color={color}/>
  )}}
        />
    </Tab.Navigator>
  )
}

export default Tabs
