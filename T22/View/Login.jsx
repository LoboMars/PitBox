import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity, TextInput, Switch  } from "react-native";
import Logo from '../Image/Logo.png'
import React, { useState } from 'react';


export default function Login() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  return (
  <View style={styles.container}>
    <Image source={Logo} style={styles.logo} />
    <View style={{marginTop: "8%"}}/>
  <View>
    <View style={styles.line} />
  </View>

  <View style={{marginTop: "12%"}}/>

  <Text style={styles.BigText}>Login</Text>
  <View style={styles.textBoxContainer}>
    <TextInput
      style={styles.TextBox}
      placeholder="Nome"
      placeholderTextColor="#9F9BA8" />
    <TextInput
      style={styles.TextBox}
      placeholder="Palavra-passe"
      placeholderTextColor="#9F9BA8"
      secureTextEntry={true}
    />

    <View style={styles.switch1}>

    <Switch
    trackColor={{ false: "#EFF4FF", true: "#6D4EE5" }}
    thumbColor={isEnabled ? "#EFF4FF" : "#EFF4FF"}
    ios_backgroundColor="#EFF4FF"
    onValueChange={toggleSwitch}
    value={isEnabled}
    />
    <Text style={styles.textswtch}>lembra-me</Text>
    </View>

  <View style={{ marginBottom: '20%' }} />

  </View>

    <View style={styles.textBoxLogin}>
      <TouchableOpacity>
      <Text style={styles.BTNpurple}>Login</Text>
      </TouchableOpacity>
    </View>

  <View style={{ marginBottom: '8%' }} />

  <View style={{ flexDirection: 'row' }} >
    <View style={styles.line2} />
    <Text style={styles.textBoldWhite}>OU</Text>
    <View style={styles.line2} />
  </View>

  <View style={{ marginBottom: '2%' }} />
      
  <View style={styles.textBoxLogin}>
    <TouchableOpacity>
      <Text style={styles.Register}>Registar Conta</Text>
    </TouchableOpacity>
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
  textGray: {
    color: "#9F9BA8",
  },
  textBoldWhite:{
    marginLeft: "3%",
    color: "white",
    fontSize: 21,
    fontWeight: "bold",
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
    marginTop: "5%",
  },
  line2: {
    marginTop: "2%",
    backgroundColor: "#9F9BA8",
    height: 1,
    width: "40%",
    marginLeft:'3%',
  
  },

  BigText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  TextBox: {
    color: "white",
    backgroundColor: '#2D2A2F',
    borderWidth: 1,
    borderColor: "#9F9BA8",
    marginTop: '10%',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 25,
    fontSize: 18,
    textAlign: "left", 
    marginLeft:'5%',
  },

  BTNpurple: {
    backgroundColor: '#6D4EE5',
    color: 'white',
    borderRadius: 15,
    paddingVertical: 15,
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
    borderWidth: 3,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 55,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textBoxLogin: {
    alignItems: "center",
  },
  logo: {
    width: '50%',
    height: '10%',
    marginLeft:'23%'
  },
  switch1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%', // Ajuste conforme necessário
  },
  textswtch:{
  marginLeft: "3%",
  color: "white",
  fontSize: 21,
  fontWeight: "bold",

  },
});
