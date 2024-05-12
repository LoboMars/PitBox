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
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={handleLogout} style={{paddingLeft:'5%'}}>
            <Image source={LogOut} style={styles.logo} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
            <Image source={EditarPerfil} style={styles.logo2} />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: "10%" }} />

        <View>
          <Text style={styles.BigText}>Bem Vindo,</Text>
        </View>
        <View>
          <Text style={styles.BigTextP}>Lebron</Text>
        </View>

        <View style={{ marginTop: "10%" }} />

        <View style={styles.container2}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: "10%",
  },

  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#2D2A2F",
  },

  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between", 
    paddingHorizontal: "10%",
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
  BigTextP: {
    color: "#6D4EE5",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
});