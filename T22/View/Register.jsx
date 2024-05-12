import { StatusBar } from "expo-status-bar";
import {StyleSheet,Text,View,Image,TouchableOpacity, ScrollView,} from "react-native";
import Logo from "../Image/Logo.png";
import Icon from "../Image/Icon.png";

export default function Register() {
  return (
    <View style={styles.container}>
      <ScrollView> 
          <View style={{ marginTop: "2%" }}/>

          <Image source={Logo} style={styles.logo} />

          <View style={{ marginTop: "2%" }}/>

          <View style={styles.line} />

          <Text style={styles.BigText}>Registar</Text>

          <View style={{ marginTop: "5%" }}/>

          <Image source={Icon} style={styles.icon} />

          <View style={{ marginTop: "5%" }}/>


          <View style={styles.textBoxContainer}>
              <Text style={styles.TextBox}>Email</Text>
              <Text style={styles.TextBox}>Nome</Text>
              <Text style={styles.TextBox}>Palavra-passe</Text>
              <Text style={styles.TextBox}>Confirmar palavra-passe</Text>
          </View>

          <TouchableOpacity>
            <View style={styles.textBoxLogin}>
              <Text style={styles.BTNpurple}>Registar Conta</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.textBoxLogin}>
              <Text style={[styles.textPurple, { paddingTop: "5%" }]}>Já tem uma conta?</Text>
            </View>
          </TouchableOpacity>

      </ScrollView>
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
    paddingLeft: "12%",
  },
  textWhite: {
    color: "white",
    fontSize: 15,
  },
  textPurple: {
    color: "#6D4EE5",
    fontSize: 15,
  },
  line: {
    backgroundColor: "#9F9BA8",
    height: 1,
    width: "100%",
    marginBottom: "5%",
    marginTop: "2%",
  },

  BigText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  TextBox: {
    color: "#9F9BA8",
    backgroundColor: "#383343",
    borderWidth: 1,
    borderColor: "#9F9BA8",
    marginTop: "8%",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 50,
    fontSize: 13,
    textAlign: "left",
    marginLeft: "5%",
  },

  BTNpurple: {
    marginTop: "10%",
    backgroundColor: "#6D4EE5",
    color: "white",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 75,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  textBoxLogin: {
    alignItems: "center",
  },
  logo: {
    width: "50%",
    height: "10%",
    paddingBottom: "5%",
    marginTop: "5%",
    marginLeft: "25%",
  },
  icon: {
    width: "25%",
    height: "15%",
    marginLeft:'38%'
  },
});
