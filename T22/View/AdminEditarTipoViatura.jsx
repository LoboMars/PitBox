import { StatusBar, } from "expo-status-bar";
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
import Carro from '../Image/carPurple.png'

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config"; 


export default function CriarViatura() {
  const [nome, setnome] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "ADviaturas", "wRKsE5uQ8KaJAWTR1i8o"); 
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setnome(data.nome);

      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async () => {
    const docRef = doc(db, "ADviaturas", "wRKsE5uQ8KaJAWTR1i8o");
    await updateDoc(docRef, {
      nome,
    });
};


  return (
   
    <View style={styles.container}>

        <View style ={styles.header}>
          <Text style={styles.BigText}>Editar Tipo  Viatura</Text>

          <View style={{ marginTop: "5%" }} />
          <View style={styles.line} />

        </View>
       
      <View style={styles.content}>

        <View style={styles.textBoxContainer}>
            <Text style={styles.smallText}>Nome da Viatura:</Text>
          </View>

          <View style={styles.textBoxContainer}>
            <TextInput
              style={styles.TextBox} 
              placeholderTextColor="#9F9BA8" 
              value={nome}
              onChangeText={setnome}
              />
          </View>

          <View style={{ marginTop: "8%" }} />

          <View style={styles.textBoxContainer}>
            <Text style={styles.smallText}>Icon:</Text>
          </View>

          <View style={{marginTop: "5%", height: "40%", alignItems: 'center'}}>
              <TouchableOpacity onPress={() => alert("Edit Button Clicked.")} style={styles.Edit}>
                <Image source={Carro} style={{width:'80%', height:'80%'}}/>
              </TouchableOpacity>
          </View>
      </View>
        
      <View style={styles.footer}>
          <View style={styles.line} />
          <View style={{ marginTop: "2%" }} />

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
        </View>
    </View>
  );
}

const styles = StyleSheet.create({

  header:{
    flex: 1,
    marginTop: "10%",
  },
  content:{
    marginTop: "10%",
    flex: 7,
  },
  footer:{
    flex: 2,
    marginBottom: "10%",
  },
  Edit: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "50%",
    backgroundColor: "#1C1D21",
    borderRadius: 15,
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
    borderRadius: 1,
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
    paddingVertical: "4%",
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
    paddingVertical: "4%",
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
    paddingVertical: "4%",
    paddingHorizontal: 75,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
    
