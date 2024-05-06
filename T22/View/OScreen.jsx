import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image , Dimensions } from 'react-native';

export default function OScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.textWhite}>Conserto <Text style={styles.textPurple}>rápido</Text>, serviço de <Text style={styles.textPurple}>qualidade</Text>.</Text>
        <Text style={styles.textWhite}>A nossa App é a chave</Text>
        <View>
          <Text style={styles.Login}>Login</Text>
          <Text style={styles.Register}>Register</Text>
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
    paddingTop: '60%',
  },
  textWhite: {
    color: 'white',
  },
  textPurple: {
    color:'#6D4EE5'
  },
  Login: {
    marginTop: '150%',
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingVertical: 25,
    paddingHorizontal: 75,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Register: {
    marginTop: '15%',
    backgroundColor: '#6D4EE5',
    color: 'white',
    paddingVertical: 25,
    paddingHorizontal: 70,
    borderRadius: 5,
    paddingHorizontal: 75,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
