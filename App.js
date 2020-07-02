import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Inicio"
          screenOptions={{
            headerTitleAlign: 'center', // Alinea al centro el titulo del header
            headerStyle: {
              backgroundColor: '#F4511E' // Cambia el color del header
            },
            headerTintColor: '#fff', // Cambia el color de las letras del header
            headerTitleStyle: 'bold' // Vuelve en negritas las letras del header
          }}
          >
          <Stack.Screen 
              name="Inicio"
              component={Inicio}
             /* options={{
                title: "Componente Principal",
                headerTitleAlign: 'center', // Alinea al centro el titulo del header
                headerStyle: {
                  backgroundColor: '#F4511E' // Cambia el color del header
                },
                headerTintColor: '#fff', // Cambia el color de las letras del header
                headerTitleStyle: 'bold' // Vuelve en negritas las letras del header
              }} */
          />
          <Stack.Screen 
              name="Nosotros"
              component={Nosotros}
              options={ ({route}) => ({
                  title: route.params.clienteId
              })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
