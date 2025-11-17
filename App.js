import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PaginaInicial from './screens/PaginaInicial';
import CriarBoleto from './screens/CriarBoleto';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaginaInicial">
        <Stack.Screen name="PaginaInicial" component={PaginaInicial} options={{ headerShown:false }} />
        <Stack.Screen name="CriarBoleto" component={CriarBoleto} options={{ title:'Criar/Edita Boleto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
