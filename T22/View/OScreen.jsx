import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function OScreen() {
    return (
          <View style={styles.container}>
            <Text style={styles.textWhite}>Conserto <Text style={styles.textPurple}>rápido</Text>, serviço de <Text style={styles.textPurple}>qualidade</Text>.</Text>
            <Text style={styles.textWhite}>A nossa App é a chave</Text>
            <View>
            <Text style={styles.textWhite}>Login</Text>
            </View>
          </View>
      );
}

const styles = StyleSheet.create({
  container: {
    width: '100%' ,
    flex: 1,
    backgroundColor: '#232427',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '80%',
  },
  textWhite: {
    color: 'white',
  },
  textPurple: {
    color:'#6D4EE5'
  },
  Login: {
    
  }

});
