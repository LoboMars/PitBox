import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  RootNavigator from "./navigators/RootNavigator"

export default function App() {
  
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <RootNavigator />
=======

      <Stack.Navigator initialRouteName="AdminMainPage">
        <Stack.Screen name="AdminMainPage" component={AdminMainPage} />
        <Stack.Screen name="OScreen" component={OScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegistarQuotidino" component={RegistarQuotidino} />
        <Stack.Screen name="RegistarAssistencia" component={RegistarAssistencia} />
        <Stack.Screen name="RegistarViatura" component={RegistarViatura} />
        <Stack.Screen name="EditarViatura" component={EditarViatura} />
        <Stack.Screen name="EditarAssistencia" component={EditarAssistencia} />
        <Stack.Screen name="EditarQuotidino" component={EditarQuotidino} />
        <Stack.Screen name="CriarViatura" component={CriarViatura} />
        <Stack.Screen name="CriarOficina" component={CriarOficina} />
        <Stack.Screen name="CriarCombustivel" component={CriarCombustivel} />
        <Stack.Screen name="EditarOficina" component={EditarOficina} />
        <Stack.Screen name="EditarCombustivel" component={EditarCombustivel} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="EditarTipoViatura" component={EditarTipoViatura} />
        <Stack.Screen name="Suasviaturas" component={Suasviaturas} />
        <Stack.Screen name="DetalhesViatura" component={DetalhesViatura} />
        <Stack.Screen name="DetalhesAssistencia" component={DetalhesAssistencia} />
        <Stack.Screen name="DetalhesQuotodiano" component={DetalhesQuotodiano} />
        <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
        <Stack.Screen name="Tipoviatura" component={Tipoviatura} />
        <Stack.Screen name="Tipocombustivel" component={Tipocombustivel} />
        <Stack.Screen name="Oficinas" component={Oficinas} />
        <Stack.Screen name="EliminarViatura" component={EliminarViatura} />
        <Stack.Screen name="EliminarAssistencia" component={EliminarAssistencia} />
        <Stack.Screen name="EliminarEvento" component={EliminarEvento} />
        <Stack.Screen name="DetalhesOficinas" component={DetalhesOficinas} />
        <Stack.Screen name="EliminarTipo" component={EliminarTipo} />
        <Stack.Screen name="EliminarOficina" component={EliminarOficina} />
        <Stack.Screen name="EliminarCombustivel" component={EliminarCombustivel} />
        <Stack.Screen name="AdminEditarPerfil" component={AdminEditarPerfil} />
        <Stack.Screen name="Seuseventos" component={Seuseventos} />
        <Stack.Screen name="AsSuasAssistencias" component={AsSuasAssistencias} />
      </Stack.Navigator>
>>>>>>> d54624e9c6ddace16dd89e482c383e2ae0814790
>>>>>>> 8cb9a3a234998e83d8a86480dec5ddcc674f317c
    </NavigationContainer>
  );
}

