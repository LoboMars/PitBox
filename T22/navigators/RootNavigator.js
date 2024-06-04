import * as React from "react";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import OScreen from '../View/OScreen';
import Login from '../View/Login';
import Register from '../View/Register';           
import RegistarQuotidino from '../View/RegistarQuotidiano'
import RegistarAssistencia from '../View/RegistarAssistencia';
import RegistarViatura from '../View/RegistarViatura';
import EditarViatura from '../View/EditarViatura';
import EditarAssistencia from '../View/EditarAssistencia';
import EditarQuotidino from '../View/EditarQuotidiano';
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
import DetalhesQuotodiano from '../View/DetalhesQuotidiano';
import EditarPerfil from '../View/EditarPerfil';
import Tipoviatura from '../View/AdminTipoviatura';      
import Tipocombustivel from '../View/AdminTipoCombustiveis';
import AdminOficinas from '../View/AdminOficinas';
import EliminarViatura from '../View/ElimirarViatura';
import EliminarAssistencia from '../View/EliminarAssistencia';
import EliminarEvento from '../View/EliminarEvento';
import DetalhesOficinas from '../View/AdminDetalhesOficina';
import AdminMainPage from '../View/AdminMainPage';               
import EliminarTipo from '../View/AdminEliminarTipo';
import EliminarOficina from '../View/AdminiEliminarOficina';
import EliminarCombustivel from '../View/AdminEliminarCombustivel';
import AdminEditarPerfil from '../View/AdminEditarPerfil';
import Seuseventos from '../View/Osseuseventos';
import AsSuasAssistencias from '../View/AssuasAssistencias';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const TabContainer = () => {
    return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'TipoViaturas') {
              iconName = focused ? LTipoViaturas : TipoViaturas;
            } else if (route.name === 'Oficinas') {
              iconName = focused ? LOficinas : Oficinas;
            } else if (route.name === 'Combustiveis') {
              iconName = focused ? LCombustiveis : Combustiveis;
            }
            return <Image source={iconName} style={styles.logo2} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#EC853B',
          inactiveTintColor: '#9F9BA8',
        }}
        tabBarStyle={{
          backgroundColor: '#1C1D21', 
          borderTopWidth: 0,
        }}

      >
        <Tab.Screen name="TipoViaturas" component={Tipoviatura} />
        <Tab.Screen name="Oficinas" component={oficinas} />
        <Tab.Screen name="Combustiveis" component={Suasviaturas} />
      </Tab.Navigator>

    );
};
const RootNavigator = () => {
    return(
      <Stack.Navigator initialRouteName="AdminMainPage">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false, headerLeft: () => null }}
      />
      <Stack.Screen
        name="BottomTab"
        component={TabContainer}
        options={{ headerShown: false}}
      />
       <Stack.Screen
        name="OScreen"
        component={OScreen}
        options={{ headerShown: false}}
      />
        <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false}}
      />
        <Stack.Screen
        name="RegistarQuotidino"
        component={RegistarQuotidino}
        options={{ headerShown: false}}
      />
        <Stack.Screen
        name="RegistarAssistencia"
        component={RegistarAssistencia}
        options={{ headerShown: false}}
      />
        <Stack.Screen
        name="RegistarViatura"
        component={RegistarViatura}
        options={{ headerShown: false}}
      />
        <Stack.Screen
        name="EditarViatura"
        component={EditarViatura}
        options={{ headerShown: false}}
      />
        <Stack.Screen
        name="EditarAssistencia"
        component={EditarAssistencia}
        options={{ headerShown: false}}
      />
        <Stack.Screen
        name="EditarQuotidino"
        component={EditarQuotidino}
        options={{ headerShown: false}}
      />
        <Stack.Screen
        name="CriarViatura"
        component={CriarViatura}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="CriarOficina"
        component={CriarOficina}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="CriarCombustivel"
        component={CriarCombustivel}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="EditarOficina"
        component={EditarOficina}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="EditarCombustivel"
        component={EditarCombustivel}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="EditarTipoViatura"
        component={EditarTipoViatura}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Suasviaturas"
        component={Suasviaturas}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="DetalhesViatura"
        component={DetalhesViatura}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="DetalhesAssistencia"
        component={DetalhesAssistencia}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="DetalhesQuotodiano"
        component={DetalhesQuotodiano}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="EditarPerfil"
        component={EditarPerfil}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Tipoviatura"
        component={Tipoviatura}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Tipocombustivel"
        component={Tipocombustivel}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="EliminarViatura"
        component={EliminarViatura}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="EliminarAssistencia"
        component={EliminarAssistencia}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="EliminarEvento"
        component={EliminarEvento}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="DetalhesOficinas"
        component={DetalhesOficinas}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="AdminMainPage"
        component={AdminMainPage}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="EliminarTipo"
        component={EliminarTipo}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="EliminarOficina"
        component={EliminarOficina}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="EliminarCombustivel"
        component={EliminarCombustivel}
        options={{ headerShown: false}}
      />
       <Stack.Screen
        name="AdminEditarPerfil"
        component={AdminEditarPerfil}
        options={{ headerShown: false}}
      />
       <Stack.Screen
        name="Seuseventos"
        component={Seuseventos}
        options={{ headerShown: false}}
      />
       <Stack.Screen
        name="AsSuasAssistencias"
        component={AsSuasAssistencias}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="AdminOficinas"
        component={AdminOficinas}
        options={{ headerShown: false}}
      />
      </Stack.Navigator>

    );
};

export default RootNavigator;