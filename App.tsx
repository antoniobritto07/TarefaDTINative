import React from 'react';
import Home from './src/components/Pages/Home'
import Description from './src/components/Pages/Description'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Screen, Navigator } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="Description" component={Description} />
      </Navigator>
    </NavigationContainer>
  );
}

