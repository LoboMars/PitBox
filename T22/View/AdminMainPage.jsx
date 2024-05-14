import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";

import EditarPerfil from "../Image/EditarPerfil.png";
import LogOut from "../Image/LogOut.png";
import Combustiveis from '../Image/combustivel.png';
import Home from '../Image/HomeAD.png';
import TipoViaturas from '../Image/cad.png';
import Oficinas from '../Image/OficinaIcon.png'
import CriarTipoVeiculo from "../Image/Criar Tipo Veiculo.png";
import CriarOficina from "../Image/criar oficina.png";
import CriarCombustivel from "../Image/criar combustivel.png";

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
          <View style={{ paddingTop: "5%" }} />

          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={handleLogout} style={{ paddingLeft: '3%' }}>
              <View>
                <Image source={LogOut} style={styles.logo}/>
                <Text style={{color: "#C33434", fontWeight: "700", fontSize: 11, marginTop: "10%"}}>LogOut</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <View>
                <Image source={EditarPerfil} style={styles.editarPerf}/>
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

        <View style={{ paddingTop: "25%" }} />

        <View style={styles.textBoxContainer}>

            <TouchableOpacity>
              <ImageBackground source={CriarTipoVeiculo} resizeMode="center" style={styles.button}>
                <Text style={{color: "white", fontSize: 30, fontWeight: "bold"}}>Criar Tipo de</Text>
                <Text style={{color: "white", fontSize: 30, fontWeight: "bold"}}>Viatura</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              <ImageBackground source={CriarOficina} resizeMode="center" style={styles.button}>
                <Text style={{color: "white", fontSize: 30, fontWeight: "bold"}}>Criar Oficina</Text>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              <ImageBackground source={CriarCombustivel} resizeMode="center" style={styles.button}>
                <Text style={{color: "white", fontSize: 30, fontWeight: "bold"}}>Criar Tipo de</Text>
                <Text style={{color: "white", fontSize: 30, fontWeight: "bold"}}>Viatura</Text>
              </ImageBackground>
            </TouchableOpacity>

        </View>

      </View>

        <View style={styles.container3}>

          <View style={styles.imageContainer2}>
            <TouchableOpacity onPress={handleLogout} style={{marginLeft: "4%"}}>
              <View>
                <Image source={Home} style={styles.logo2}/>
                <Text style={{color: "#EC853B", fontWeight: "500",  fontSize: 11, marginTop: "5%"}}>Home</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <View>
                <Image source={TipoViaturas} style={styles.logo2} />
                <Text style={{color: "#9F9BA8", fontWeight: "500",  fontSize: 11, marginTop: "5%"}}>Tipos Viaturas</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <View>
                <Image source={Oficinas} style={styles.logo2} />
                <Text style={{color: "#9F9BA8", fontWeight: "500",  fontSize: 11, marginTop: "5%"}}>oficinas</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout} style={{marginRight: "2%"}}>
              <View>
                <Image source={Combustiveis} style={styles.logo2} />
                <Text style={{color: "#9F9BA8", fontWeight: "500", fontSize: 11, marginTop: "5%"}}>Combustíveis</Text>
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
    paddingHorizontal: "4%",
  },

  logo: {
    alignSelf: 'center',
    width: 38,
    height: 38,
  },
  iconText:{

  },
  editarPerf:{
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
  button:{
    color: "#9F9BA8",
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginLeft: "5%",
    marginRight: "5%",
  }
});