import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import EditTodo from './src/screens/EditTodo';

import Tabs from './src/navigation/Tabs';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
  <Provider store={store}>

    <NavigationContainer>      
    <Stack.Navigator initialRouteName='Todos' screenOptions={{headerShown:false}}>
        <Stack.Screen name='EditTodo' component={EditTodo}/>
        <Stack.Screen name='Todos' component={Tabs}/>
    </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  )
}

export default App
