import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import AboutPage from './screens/about';
import ContactPage from './screens/contact';
import MainPage from './screens/index';

const Stack = createNativeStackNavigator();

export default function Layout() {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={MainPage} options={{title: "Home"}} />
        <Stack.Screen name="About" component={AboutPage} options={{title: "About Me"}}/>
        <Stack.Screen name="Contact" component={ContactPage} options={{title: "Contact Me"}}/>
      </Stack.Navigator>
  );
}
