import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/components/Pages/Home'
import Result from './src/components/Pages/Result'
import Description from './src/components/Pages/Description'

const { Screen, Navigator } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Screen name="Result"
          component={Result}
          options={{ title: 'Result' }}
          initialParams={{ resultShow: "" }}
        />
        <Screen name="Description"
          component={Description}
          options={{ title: 'Description' }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

