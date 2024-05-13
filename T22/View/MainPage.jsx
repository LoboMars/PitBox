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


      <View style={styles.container1}>


        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={handleLogout} style={{ paddingLeft: '2%' }}>
            <View>
              <Image source={LogOut} style={styles.logo}/>
              <Text style={{color: "#C33434", fontWeight: "700"}}>LogOut</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
            <View>
              <Image source={EditarPerfil} style={styles.logo}/>
              <Text style={{color: "#9F9BA8", fontWeight: "700"}}>Editar Perfil</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.container2}>

        <View>
          <Text style={styles.BigText}>Bem Vindo,</Text>
        </View>
        <View>
          <Text style={styles.BigTextP}>Lebron<Text style={styles.BigTextW}>.</Text></Text>
        </View>

        <View style={{ paddingTop: "10%" }} />

        <View style={styles.textBoxContainer}>
          <ScrollView>
            <View style={styles.TextBox}>
              <Text style={styles.BigTextLeft}>Nova Viatura</Text>
            </View>


            <View style={styles.TextBox}>
              <Text style={styles.BigTextLeft}>Nova Assistência</Text>
            </View>

            <View style={styles.TextBox}>
              <Text style={styles.BigTextLeft}>Novo Evento</Text>
            </View>

          </ScrollView>
        </View>

      </View>

        <View style={styles.container3}>

          <View style={styles.imageContainer2}>
            <TouchableOpacity onPress={handleLogout}>
              <View>
                <Image source={Home} style={styles.logo2}/>
                <Text style={{color: "#6D4EE5", fontWeight: "500"}}>Home</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <View>
                <Image source={Viaturas} style={styles.logo2} />
                <Text style={{color: "#9F9BA8", fontWeight: "500"}}>Viaturas</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <View>
                <Image source={Assistencias} style={styles.logo2} />
                <Text style={{color: "#9F9BA8", fontWeight: "500", textAlign: 'center'}}>Assistências</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <View>
                <Image source={Eventos} style={styles.logo2} />
                <Text style={{color: "#9F9BA8", fontWeight: "500"}}>Eventos</Text>
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
    height:'100%',
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
    width: "95%",
    alignItems: "left",
    marginLeft: "3%",
    backgroundColor: "#232427",
  },

  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between", 
    paddingHorizontal: "6%",
  },

  imageContainer2: {
    flexDirection: "row",
    justifyContent: "space-between", 
    paddingHorizontal: "5%",
  },

  logo: {
    alignSelf: 'center',
    width: 40,
    height: 40,
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

  BigTextP: {
    color: "#6D4EE5",
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