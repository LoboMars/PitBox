import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import EditarPerfil from "../Image/EditarPerfil.png";
import LogOut from "../Image/LogOut.png";
import Eventos from '../Image/Eventos.png';
import Home from '../Image/Home.png';
import Viaturas from '../Image/Viaturas.png';
import Assistencias from '../Image/Assistencias.png'

export default function MainPage() {
  const handleLogout = () => {
    alert("Logout button pressed!");
  };

  const handleEditar = () => {
    alert("Editar button pressed!");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>

        <View style={styles.container1}> 
        <View style={{ marginTop: "5%" }} />
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={handleLogout} style={{paddingLeft:'5%'}}>
              <Image source={LogOut} style={styles.logo} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <Image source={EditarPerfil} style={styles.logo2} />
            </TouchableOpacity>
          </View>

          <View style={{ paddingTop: "10%" }} />

          <View>
            <Text style={styles.BigText}>Bem Vindo,</Text>
          </View>
          <View>
            <Text style={styles.BigTextP}>Lebron</Text>
          </View>

          <View style={{ paddingTop: "40%" }} />

        </View>
        
    
        <View style={styles.container2}>

          <View style={styles.textBoxContainer}>

           <View style={styles.TextBox}>
           <Text style={styles.BigTextLeft}>Nova Viatura</Text>
           </View>


           <View style={styles.TextBox}>
           <Text style={styles.BigTextLeft}>Nova Assistência</Text>
           </View>

           <View style={styles.TextBox}>
           <Text style={styles.BigTextLeft}>Novo Evento</Text>
           </View>


          </View>
        </View>

        <View style={styles.container3}> 
        <View style={{ marginTop: "5%" }} />
          <View style={styles.imageContainer2}>
            <TouchableOpacity onPress={handleLogout} style={{paddingLeft:'5%'}}>
              <Image source={Home} style={styles.logo2} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <Image source={Viaturas} style={styles.logo2} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout} style={{paddingLeft:'5%'}}>
              <Image source={Assistencias} style={styles.logo2} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <Image source={Eventos} style={styles.logo2} />
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#2D2A2F",
    paddingTop: "5%",
  },

  container: {
    width: "100%",
    height:'100%',
    flex: 1,
  },

  container1: {
    width: "100%",
    flex: 5,
    backgroundColor: "#2D2A2F",
  },

  container2: {
    width: "100%",
    flex: 7,
    backgroundColor: "#232427",
  },

  container3: {
    width: "100%",
    flex: 2,
    backgroundColor: "#1C1D21",
  },

  textBoxContainer: {
    width: "85%",
    alignItems: "left",
    marginLeft: "8%",
    backgroundColor: "#232427",
  },

  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between", 
    paddingHorizontal: "10%",
    width: "100%",
  },

  imageContainer2: {
    flexDirection: "row",
    justifyContent: "space-between", 
    paddingHorizontal: "2%",
    width: "100%",
  },

  logo: {
    width: 50,
    height: 60,
  },

  logo2: {
    width: 65,
    height: 65,
  },


  BigText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },

  BigTextLeft: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
  },

  BigTextP: {
    color: "#6D4EE5",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },

  TextBox: {
    color: "#9F9BA8",
    backgroundColor: "#383343",
    marginTop: "8%",
    borderRadius: 15,
    paddingVertical: 30,
    paddingHorizontal: 20,
    fontSize: 13,
    textAlign: "left",
    marginLeft: "5%",
    marginRight: "5%",
  },
});