import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config"; 

export default function EditarCombustivel() {

  const [Nome, setNome] = useState("");
  const [Tipo, setTipo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "tipoCombustivel", "1"); 
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setNome(data.Nome);
        setTipo(data.Tipo);
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, []);


  const handleUpdate = async () => {
    const docRef = doc(db, "tipoCombustivel", "1");
    await updateDoc(docRef, {
      Nome,
      Tipo,
    });
};


  return (
   
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View />
        <Text style={styles.BigText}>Editar Combustivel</Text>

        <View style={{ marginTop: "5%" }} />
        <View style={styles.line} />
        <View style={{ marginBottom: "5%" }} />

        <View style={styles.textBoxContainer}>
          <Text style={styles.smallText}>Nome do Combustivel:</Text>
        </View>

        <View style={styles.textBoxContainer}>
          <TextInput
            style={styles.TextBox}
            value={Nome}
            onChangeText={setNome}
            placeholderTextColor="#9F9BA8"
          />
        </View>

        <View style={{ marginTop: "15%" }} />

        <View style={styles.textBoxContainer}>
          <Text style={styles.smallText}>Combustivel fossil/renovavel:</Text>
        </View>

        <View style={styles.textBoxContainer}>
          <TextInput
            style={styles.TextBox}
            value={Tipo}
            onChangeText={setTipo}
            placeholderTextColor="#9F9BA8"
          />
        </View>



        <View style={{ marginTop: "45%" }} />
        <View style={styles.line} />
        <View style={{ marginBottom: "5%" }} />

        <TouchableOpacity onPress={handleUpdate}>
          <View style={styles.textBoxContainer}>
            <Text style={styles.BTNOrange}>Aplicar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.textBoxContainer}>
            <Text style={styles.Cancelar}>Cancelar</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: '10%', 
  },
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
    marginLeft: "8%",
  },

  textWhite: {
    color: "white",
  },
  textPurple: {
    color: "#6D4EE5",
  },
  line: {
    backgroundColor: "#EC853B",
    height: 3,
    width: "94%",
    marginLeft: "3%",
    marginBottom: "5%",
  },

  BigText: {
    marginTop: '2%',
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  smallText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: "8%",
  },

  TextBox: {
    width: "100%",
    color: "white",
    backgroundColor: "#2D2A2F",
    borderWidth: 1,
    borderColor: "#9F9BA8",
    marginTop: "5%",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 25,
    fontSize: 18,
    textAlign: "left",
  },

  TextBoxCenter: {
    width: "100%",
    color: "white",
    backgroundColor: "#383343",
    borderWidth: 1,
    borderColor: "white",
    marginTop: "5%",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 40,
    fontSize: 18,
    textAlign: "center",
  },

  SmallTextBox: {
    width: "45%",
    color: "white",
    backgroundColor: "#383343",
    borderWidth: 1,
    borderColor: "white",
    marginTop: "5%",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 18,
    textAlign: "center",
  },

  BigTextBox: {
    width: "100%",
    color: "white",
    backgroundColor: "#383343",
    borderWidth: 1,
    borderColor: "white",
    marginTop: "5%",
    borderRadius: 15,
    paddingVertical: 100,
    paddingHorizontal: 40,
    fontSize: 18,
    textAlign: "center",
  },

  BTNOrange: {
    backgroundColor: "#EC853B",
    color: "white",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 55,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  Cancelar: {
    marginTop: "5%",
    color: "#EC853B",
    borderWidth: 2,
    borderColor: "#EC853B",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 75,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
