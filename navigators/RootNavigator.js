import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// --- IMPORTS DE IMAGENS (ICONES) ---
import Combustiveis from '../Image/combustivel.png';
import TipoViaturas from '../Image/cad.png';
import Oficinas from '../Image/oficinaIcon.png';
import LCombustiveis from '../Image/combustivelLaranja.png';
// CORRIGIDO: O nome na imagem é "oficinaOrange 1.png" (com espaço e o 1)
import LOficinas from '../Image/oficinaOrange.png'; 
import LTipoViaturas from '../Image/cadSelect.png';
// CORRIGIDO: Na pasta o 'h' é minúsculo: "homeAD.png"
import HomeAD from '../Image/homeAdmin.png'; 
import homeUnselected from '../Image/homeUnselected.png';

// --- IMPORTS DE SCREENS (VIEWS) ---
import OScreen from '../View/OScreen';
import Login from '../View/Login';
import Register from '../View/Register';           
import RegistarQuotidiano from '../View/RegistarQuotidiano';
import RegistarAssistencia from '../View/RegistarAssistencia';
import RegistarViatura from '../View/RegistarViatura';
import EditarViatura from '../View/EditarViatura';
import EditarAssistencia from '../View/EditarAssistencia';
import EditarQuotidiano from '../View/EditarQuotidiano';
import CriarViatura from '../View/AdminCriarViatura';
import CriarOficina from '../View/AdminCriarOficina';
import CriarCombustivel from '../View/AdminCriarCombustivel';
import EditarOficina from '../View/AdminEditarOficina';
import EditarCombustivel from '../View/AdminEditarCombustivel';
import MainPage from '../View/MainPage';                    
import EditarTipoViatura from '../View/AdminEditarTipoViatura';
import Suasviaturas from '../View/Assuasviaturas';           
import DetalhesViatura from '../View/DetalhesViatura';
import DetalhesAssistencia from '../View/DetalhesAssistencias';
import DetalhesQuotidiano from '../View/DetalhesQuotidiano';
import EditarPerfil from '../View/EditarPerfil';
import Tipoviatura from '../View/AdminTipoviatura';      
import Tipocombustivel from '../View/AdminTipoCombustiveis';
import AdminOficinas from '../View/AdminOficinas';
import EliminarViatura from '../View/EliminarViatura';
import EliminarAssistencia from '../View/EliminarAssistencia';
import EliminarEvento from '../View/EliminarEvento';
import DetalhesOficinas from '../View/AdminDetalhesOficina';
import AdminMainPage from '../View/AdminMainPage';               
import EliminarTipo from '../View/AdminEliminarTipo';
// Nota: Mantive "AdminiEliminarOficina" pois é o que está no teu path
import EliminarOficina from '../View/AdminiEliminarOficina'; 
import EliminarCombustivel from '../View/AdminEliminarCombustivel';
import AdminEditarPerfil from '../View/AdminEditarPerfil';
import Seuseventos from '../View/Osseuseventos';
import AsSuasAssistencias from '../View/AssuasAssistencias';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

// --- NAVEGAÇÃO INFERIOR (TABS) ---
const TabContainer = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconSource;
          if (route.name === 'AdminMain') {
            iconSource = focused ? HomeAD : homeUnselected;
          } else if (route.name === 'OficinasTab') {
            iconSource = focused ? LOficinas : Oficinas;
          } else if (route.name === 'TipoViaturasTab') {
            iconSource = focused ? LTipoViaturas : TipoViaturas;
          } else if (route.name === 'CombustiveisTab') {
            iconSource = focused ? LCombustiveis : Combustiveis;
          }
          return <Image source={iconSource} style={styles.tabIcon} />;
        },
        tabBarActiveTintColor: '#EC853B',
        tabBarInactiveTintColor: '#9F9BA8',
        tabBarStyle: {
          backgroundColor: '#1C1D21',
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 8,
        },
      })}
    >
      <Tab.Screen name="AdminMain" component={AdminMainPage} options={{ title: 'Início' }} />
      <Tab.Screen name="TipoViaturasTab" component={Tipoviatura} options={{ title: 'Tipos' }} />
      <Tab.Screen name="OficinasTab" component={AdminOficinas} options={{ title: 'Oficinas' }} />
      <Tab.Screen name="CombustiveisTab" component={Tipocombustivel} options={{ title: 'Combustível' }} />
    </Tab.Navigator>
  );
};

// --- NAVEGAÇÃO PRINCIPAL (STACK) ---
const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="OScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OScreen" component={OScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="BottomTab" component={TabContainer} />

      {/* Restantes ecrãs do Stack */}
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="AdminMainPage" component={AdminMainPage} />
      <Stack.Screen name="RegistarViatura" component={RegistarViatura} />
      <Stack.Screen name="EditarViatura" component={EditarViatura} />
      <Stack.Screen name="Suasviaturas" component={Suasviaturas} />
      <Stack.Screen name="DetalhesViatura" component={DetalhesViatura} />
      <Stack.Screen name="EliminarViatura" component={EliminarViatura} />
      <Stack.Screen name="CriarViatura" component={CriarViatura} />
      <Stack.Screen name="EditarTipoViatura" component={EditarTipoViatura} />
      <Stack.Screen name="EliminarTipo" component={EliminarTipo} />
      <Stack.Screen name="RegistarAssistencia" component={RegistarAssistencia} />
      <Stack.Screen name="EditarAssistencia" component={EditarAssistencia} />
      <Stack.Screen name="DetalhesAssistencia" component={DetalhesAssistencia} />
      <Stack.Screen name="AsSuasAssistencias" component={AsSuasAssistencias} />
      <Stack.Screen name="EliminarAssistencia" component={EliminarAssistencia} />
      <Stack.Screen name="RegistarQuotidiano" component={RegistarQuotidiano} />
      <Stack.Screen name="EditarQuotidiano" component={EditarQuotidiano} />
      <Stack.Screen name="DetalhesQuotidiano" component={DetalhesQuotidiano} />
      <Stack.Screen name="Seuseventos" component={Seuseventos} />
      <Stack.Screen name="EliminarEvento" component={EliminarEvento} />
      <Stack.Screen name="CriarOficina" component={CriarOficina} />
      <Stack.Screen name="EditarOficina" component={EditarOficina} />
      <Stack.Screen name="DetalhesOficinas" component={DetalhesOficinas} />
      <Stack.Screen name="EliminarOficina" component={EliminarOficina} />
      <Stack.Screen name="AdminOficinas" component={AdminOficinas} />
      <Stack.Screen name="CriarCombustivel" component={CriarCombustivel} />
      <Stack.Screen name="EditarCombustivel" component={EditarCombustivel} />
      <Stack.Screen name="EliminarCombustivel" component={EliminarCombustivel} />
      <Stack.Screen name="Tipocombustivel" component={Tipocombustivel} />
      <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
      <Stack.Screen name="AdminEditarPerfil" component={AdminEditarPerfil} />
    </Stack.Navigator>
  );
};

export default RootNavigator;