import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

export default function Register() {
    return (
        <View style={styles.container}>
          <View style={styles.line} />
            <View style={{paddingBottom:'40%'}}>
                <Text style={styles.BigText}>Register</Text>
            </View>
            <View style={styles.textBoxContainer}>
                <Text style={styles.TextBox}>Email</Text>
                <Text style={styles.TextBox}>Nome</Text>
                <Text style={styles.TextBox}>Palavra-passe</Text>
                <Text style={styles.TextBox}>Confirmar palavra-passe</Text>
            </View>
            <View style={styles.textBoxLogin}>
                <Button style={styles.BTNpurple}>Registar Conta</Button>
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
        paddingTop: "35%",
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
        marginTop: '10%',
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
  });