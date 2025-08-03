import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AboutScreen from './pages/AboutPage';
import ContactScreen from './pages/ContactPage';
import MainScreen from './pages/MainPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    
  );
}
