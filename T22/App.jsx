import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OScreen from './View/OScreen';
import Login from './View/Login';
import Register from './View/Register';           //problema
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


export default function App() {
  return (
    <View style={styles.container}>
      <Seuseventos/>
      <StatusBar style="auto" />
    </View>
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
