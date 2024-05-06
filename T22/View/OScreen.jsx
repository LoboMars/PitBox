import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Dimensions, TouchableOpacity } from 'react-native';

export default function OScreen() {
    return (
          <View style={styles.container}>
            <Text style={styles.textWhite}>Conserto <Text style={styles.textPurple}>rápido</Text>, serviço de <Text style={styles.textPurple}>qualidade</Text>.</Text>
            <Text style={styles.textWhite}>A nossa App é a chave</Text>
            <View>
            <Text style={styles.Login}>Login</Text>
            </View>
            <View>
            <Text style={styles. Register}>Register</Text>
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
  Register: {
    backgroundColor: '#6D4EE5',
    color: 'white',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  Login: {
    marginTop: 20,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 45,
  },

});
