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
import CriarViatura from './View/CriarViatura';
import CriarOficina from './View/CriarOficina';
import CriarCombustivel from './View/CriarCombustivel';
import EditarOficina from './View/EditarOficina';

export default function App() {
  return (
    <View style={styles.container}>
       <CriarCombustivel/>
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
