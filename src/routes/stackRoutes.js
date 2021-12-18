import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { Container } from './styles';

import Home from "../pages/Home";
import ShowMovie from "../pages/ShowMovie";

const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="MovieDetails"
        component={ShowMovie}
        options={{
          headerShown: false,
          title: 'Detalhes',
        }}
      />
    </Stack.Navigator>
  );
}

export default StackRoutes;
