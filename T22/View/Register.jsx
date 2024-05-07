import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Logo from '../Image/Logo.png'
import Icon from '../Image/Icon.png'

export default function Register() {
    return (
        <View style={styles.container}>
           <Image source={Logo} style={styles.logo}/>
          <View style={styles.line} />
            <View>
                <Text style={styles.BigText}>Register</Text>
                <Image source={Icon} style={styles.icon}/>
            </View>
            <View style={styles.textBoxContainer}>
                <Text style={styles.TextBox}>Email</Text>
                <Text style={styles.TextBox}>Nome</Text>
                <Text style={styles.TextBox}>Palavra-passe</Text>
                <Text style={styles.TextBox}>Confirmar palavra-passe</Text>
            </View>
            <View style={styles.textBoxLogin}>
                <Text style={styles.BTNpurple}>Registar Conta</Text>
            </View>
            <View style={styles.textBoxLogin}>
            <Text style={[styles.textPurple, {paddingTop: '5%'}]}>Já tem uma conta?</Text>
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
        justifyContent: "flex-start",
        paddingTop: "5%",
    },
    textBoxContainer: {
        width: "85%",
        alignItems: "left",
        paddingLeft: '12%'
      },
      textWhite: {
        color: "white",
        fontSize: 20,
      },
      textPurple: {
        color: "#6D4EE5",
        fontSize: 18,
      },
      line: {
        backgroundColor: "white",
        height: 1,
        width: "100%",
        marginBottom: "5%",
        marginTop: "5%",
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
        marginTop: '8%',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 50,
        fontSize: 18,
        textAlign: "left", 
      },

      BTNpurple: {
        marginTop: '10%',
        backgroundColor: '#6D4EE5',
        color: 'white',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 75,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
      },

      textBoxLogin: {
        alignItems: "center",
      },
      logo: {
        width: '70%',
        height: '10%',
        paddingBottom:'30%',
        marginLeft:'15%'
      },
      icon: {
        width: '40%',
        height: '50%',
        paddingBottom:'35%',
        marginLeft:'30%',
        marginTop:'5%',
      },
  });