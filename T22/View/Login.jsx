import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity } from "react-native";
import Logo from '../Image/Logo.png'

export default function Login() {
    return (
        <View style={styles.container}>
           <Image source={Logo} style={styles.logo}/>
          <View>
            <View style={styles.line} />
                <Text style={styles.BigText}>Login</Text>
          </View>
            <View style={styles.textBoxContainer}>
            <TextInput
            style={styles.TextBox}
            value={nome}
            placeholder="Nome"
            placeholderTextColor="#9F9BA8"/>                
          <TextInput
            style={styles.TextBox}
            value={senha}
            placeholder="Palavra-passe"
            placeholderTextColor="#9F9BA8"
            secureTextEntry={true} 
          />
            </View>
            <TouchableOpacity>
            <View style={styles.textBoxLogin}>
                <Text style={styles.BTNpurple}>Login</Text>
            </View>
            </TouchableOpacity>
            <View style={{paddingTop: '10%',flexDirection:'row'}} >
                <View style={styles.line2} />
                <Text style={styles.textGray}>OU</Text>
                <View style={styles.line2} />
            </View>
            <TouchableOpacity>
            <View style={styles.textBoxLogin}>
                 <Text style={styles.Register}>Registar Conta</Text>
           </View>
            </TouchableOpacity>
        </View>
      );
    }

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#232427",
    textAlign: "center", 
    justifyContent: "center",
  },
  textBoxContainer: {
    width: "85%",
    alignItems: "left",
    paddingLeft: '12%'
  },
  textGray: {
    color: "#9F9BA8",
  },
  textWhite: {
    color: "white",
  },
  textPurple: {
    color: "#6D4EE5",
  },
  line: {
    backgroundColor: "#9F9BA8",
    height: 1,
    width: "100%",
    marginBottom: "10%",
    marginTop: "5%",
  },
  line2: {
    marginTop: "2%",
    backgroundColor: "#9F9BA8",
    height: 1,
    width: "40%",
    marginLeft:'4%',
    marginRight:'4%',
  },

  BigText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  TextBox: {
    color: "#9F9BA8",
    backgroundColor: '#383343',
    borderWidth: 1,
    borderColor: "#9F9BA8",
    marginTop: '10%',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 50,
    fontSize: 18,
    textAlign: "left", 
    marginLeft:'5%',
  },

  BTNpurple: {
    marginTop: '20%',
    backgroundColor: '#6D4EE5',
    color: 'white',
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 95,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  Register: {
    marginTop: '5%',
    color: '#6D4EE5',
    borderWidth: 1,
    borderColor: '#6D4EE5',
    borderWidth: 2,
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 75,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textBoxLogin: {
    alignItems: "center",
  },
  logo: {
    marginTop:'5%',
    width: '50%',
    height: '10%',
    marginLeft:'23%'
  },
});
