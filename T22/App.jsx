import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OScreen from './View/OScreen';
import Login from './View/Login';
import Register from './View/Register';
import  RegistarQuotidino from './View/RegistarQuotidiano'
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

export default function App() {
  return (
    <View style={styles.container}>
       <Register/>
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
