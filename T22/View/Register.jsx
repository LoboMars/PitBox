import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView, 
} from "react-native";
import Logo from "../Image/Logo.png";
import Icon from "../Image/Icon.png";

export default function Register() {
  const [email, setEmail] = useState(""); 
  const [nome, setNome] = useState(""); 
  const [senha, setSenha] = useState(""); 
  const [nsenha, setNsenha] = useState("");

  return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}> 
            <Image source={Logo} style={styles.logo} />
            
            <View style={{ marginTop: "5%" }}/>

            <View style={styles.line} />
          
            <Text style={styles.BigText}>Registrar</Text>

            <Image source={Icon} style={styles.icon} />

            <View style={styles.textBoxContainer}>
              <TextInput
                style={styles.TextBox}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Email"
                placeholderTextColor="#9F9BA8"
              />
              <TextInput
                style={styles.TextBox}
                onChangeText={(text) => setNome(text)}
                value={nome}
                placeholder="Nome"
                placeholderTextColor="#9F9BA8"
              />
              <TextInput
                style={styles.TextBox}
                onChangeText={(text) => setSenha(text)}
                value={senha}
                placeholder="Palavra-passe"
                placeholderTextColor="#9F9BA8"
                secureTextEntry={true} // Para ocultar a senha
              />
              <TextInput
                style={styles.TextBox}
                onChangeText={(text) => setNsenha(text)}
                value={nsenha}
                placeholder="Palavra-passe"
                placeholderTextColor="#9F9BA8"
                secureTextEntry={true} // Para ocultar a senha
              />
            </View>
            
            <TouchableOpacity>
              <View style={styles.textBoxLogin}>
                <Text style={styles.BTNpurple}>Registrar Conta</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.textBoxLogin}>
                <Text style={[styles.textPurple, { paddingTop: "5%" }]}>
                  Já tem uma conta?
                </Text>
              </View>
            </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: '5%', 
  },
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
    paddingHorizontal: 20,
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
    marginLeft: "24%",
  },
  icon: {
    width: "40%",
    height: "25%",
    marginLeft: "32%",
    marginTop: "4%",
  },
});
