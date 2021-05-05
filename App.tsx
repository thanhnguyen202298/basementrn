/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Detail } from './myts/BaseComponent'
import {HomeDrawer} from './myts/navigation/NavigationComponent'
import { StoreProvider, getContext } from './myts/StoreProvider'
import { Button, Text } from 'react-native';
import {Action} from './myts/action'

const MyApp = () => {

  const { state, dispatch } = getContext()
  const opendrawme = () => {
    
    dispatch({ type: Action.openDraw, isOpen: true })
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        title: 'trang chu',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40
        },
      }} >
        <Stack.Screen name="Home" component={HomeDrawer} options={{
          headerLeft: () => (<Button title="Menu" onPress={opendrawme} />)
        }} />
        <Stack.Screen name="Details" component={Detail} options={{
          title: 'chi tiet', headerShown: false
        }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <StoreProvider>
      <MyApp />
    </StoreProvider>
  )
}

export default App;
