import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OScreen from './View/OScreen';
import Login from './View/Login';
import Register from './View/Register';           
import RegistarQuotidino from './View/RegistarQuotidiano'
import RegistarAssistencia from './View/RegistarAssistencia';
import RegistarViatura from './View/RegistarViatura';
import EditarViatura from './View/EditarViatura';
import EditarAssistencia from './View/EditarAssistencia';
import EditarQuotidino from './View/EditarQuotidiano';
import CriarViatura from './View/AdminCriarViatura';
import CriarOficina from './View/AdminCriarOficina';
import CriarCombustivel from './View/AdminCriarCombustivel';
import EditarOficina from './View/AdminEditarOficina';
import EditarCombustivel from './View/AdminEditarCombustivel';
import MainPage from './View/MainPage';                    
import EditarTipoViatura from './View/AdminEditarTipoViatura';
import Suasviaturas from './View/Assuasviaturas';           
import DetalhesViatura from './View/DetalhesViatura';
import DetalhesAssistencia from './View/DetalhesAssistencias';
import DetalhesQuotodiano from './View/DetalhesQuotidiano';
import EditarPerfil from './View/EditarPerfil';
import Tipoviatura from './View/AdminTipoviatura';      
import Tipocombustivel from './View/AdminTipoCombustiveis';
import Oficinas from './View/AdminOficinas';
import EliminarViatura from './View/ElimirarViatura';
import EliminarAssistencia from './View/EliminarAssistencia';
import EliminarEvento from './View/EliminarEvento';
import DetalhesOficinas from './View/AdminDetalhesOficina';
import AdminMainPage from './View/AdminMainPage';               
import EliminarTipo from './View/AdminEliminarTipo';
import EliminarOficina from './View/AdminiEliminarOficina';
import EliminarCombustivel from './View/AdminEliminarCombustivel';
import AdminEditarPerfil from './View/AdminEditarPerfil';
import Seuseventos from './View/Osseuseventos';
import AsSuasAssistencias from './View/AssuasAssistencias';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>

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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
