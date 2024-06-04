import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tipoviatura from './AdminTipoviatura';  
import Suasviaturas from './Assuasviaturas';           
import oficinas from './AdminOficinas';

import EditarPerfil from "../Image/EditarPerfil.png";
import LogOut from "../Image/LogOut.png";
import Combustiveis from '../Image/combustivel.png';
import Home from '../Image/HomeAD.png';
import TipoViaturas from '../Image/cad.png';
import Oficinas from '../Image/OficinaIcon.png';
import LCombustiveis from '../Image/combustivelLaranja.png';
import LOficinas from '../Image/oficinaOrange 1.png';
import LTipoViaturas from '../Image/cadSelect.png';



export default function AdminMainPage({ navigation }) {
  
  const handleLogout = () => {
    alert("Logout button pressed!");
  };

  const handleEditar = () => {
    alert("Editar button pressed!");
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={{ paddingTop: "5%" }} />
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={handleLogout} style={{ paddingLeft: '3%' }}>
            <View>
              <Image source={LogOut} style={styles.logo} />
              <Text style={{color: "#C33434", fontWeight: "700", fontSize: 11, marginTop: "10%"}}>LogOut</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEditar}>
            <View>
              <Image source={EditarPerfil} style={styles.editarPerf} />
              <Text style={{color: "#9F9BA8", fontWeight: "700", fontSize: 11, marginTop: "10%"}}>Editar Perfil</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={{ paddingTop: "10%" }} />
        <View>
          <Text style={styles.BigText}>Bem Vindo,</Text>
        </View>
        <View>
          <Text style={styles.BigTextO}>Jorge Jesus<Text style={styles.BigTextW}>.</Text></Text>
        </View>
        <View style={{ paddingTop: "10%" }} />
        <View style={styles.textBoxContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("CriarViatura")}>
            <View style={styles.TextBox}>
              <Text style={styles.BigTextLeft}>Criar Tipo de Viatura</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("AdminOficinas")}>
            <View style={styles.TextBox}>
              <Text style={styles.BigTextLeft}>Criar Oficina</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("CriarCombustivel")}>
            <View style={styles.TextBox}>
              <Text style={styles.BigTextLeft}>Criar Combustível</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: '100%',
    flex: 1,
    backgroundColor: "#232427",
  },

  container1: {
    marginTop: "5%",
    flex: 1,
    justifyContent: 'center',
  },

  container2: {
    flex: 8,
    marginTop: "5%",
    marginBottom: "5%",
    backgroundColor: "#232427",
  },

  container3: {
    flex: 1,
    backgroundColor: "#1C1D21",
    justifyContent: 'center',
  },

  textBoxContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: "5%",
  },

  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between", 
    paddingHorizontal: "6%",
  },

  imageContainer2: {
    flexDirection: "row",
    justifyContent: "space-between", 
    paddingHorizontal: "4%",
  },

  logo: {
    alignSelf: 'center',
    width: 38,
    height: 38,
  },

  editarPerf: {
    alignSelf: 'center',
    width: 38,
    height: 38,
  },

  logo2: {
    alignSelf: 'center',
    width: 32,
    height: 32,
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

  BigTextO: {
    color: "#EC853B",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },

  BigTextW: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },

  TextBox: {
    backgroundColor: "#383343",
    marginVertical: 10,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: "90%",
    textAlign: "left",
  },

  textBoxText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  button: {
    color: "#9F9BA8",
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginLeft: "5%",
    marginRight: "5%",
  },
});
