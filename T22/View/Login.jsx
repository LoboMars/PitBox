import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Logo from '../Image/Logo.png'

export default function Login() {
    return (
        <View style={styles.container}>
          <View>
            <Image source={Logo} style={styles.logo}/>
            <View style={styles.line} />
                <Text style={styles.BigText}>Login</Text>
          </View>
            <View style={styles.textBoxContainer}>
                <Text style={styles.TextBox}>Nome</Text>
                <Text style={styles.TextBox}>Palavra-passe</Text>
            </View>
            <View style={styles.textBoxLogin}>
                <Text style={styles.BTNpurple}>Login</Text>
            </View>
            <View style={{paddingTop: '10%',flexDirection:'row'}} >
                <View style={styles.line2} />
                <Text style={styles.textWhite}>OU</Text>
                <View style={styles.line2} />
            </View>
            <View style={styles.textBoxLogin}>
                 <Text style={styles.Register}>Registar Conta</Text>
           </View>
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
  textWhite: {
    color: "white",
  },
  textPurple: {
    color: "#6D4EE5",
  },
  line: {
    backgroundColor: "white",
    height: 1,
    width: "100%",
    marginBottom: "20%",
    marginTop: "5%",
  },
  line2: {
    marginTop: "2%",
    backgroundColor: "white",
    height: 1,
    width: "40%",
    marginLeft:'4%',
    marginRight:'4%',
  },

  BigText: {
    color: "white",
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
  },
  TextBox: {
    color: "white",
    backgroundColor: '#383343',
    borderWidth: 1,
    borderColor: "white",
    marginTop: '15%',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 50,
    fontSize: 18,
    textAlign: "left", 
  },

  BTNpurple: {
    marginTop: '30%',
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
    width: '70%',
    height: '40%',
    paddingBottom:'30%',
    marginLeft:'15%'
  },
});
