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
import { useRoute } from '@react-navigation/native';


export default function EditarViatura() {
  const route = useRoute();
  const { viaturaId } = route.params;

  const [Tipo_Viatura, setTipo_Viatura] = useState("");
  const [Marca, setMarca] = useState("");
  const [Modelo, setModelo] = useState("");
  const [Data_fabrico, setData_fabrico] = useState("");
  const [Matricula, setMatricula] = useState("");
  const [Cor, setCor] = useState("");
  const [Combustivel, setCombustivel] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "viatura", viaturaId); 
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setTipo_Viatura(data.Tipo_Viatura);
        setMarca(data.Marca);
        setModelo(data.Modelo);
        setData_fabrico(data.Data_fabrico);
        setMatricula(data.Matricula);
        setCor(data.Cor);
        setCombustivel(data.Combustivel);
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async () => {
      const docRef = doc(db, "viatura", viaturaId);
      await updateDoc(docRef, {
        Tipo_Viatura,
        Marca,
        Modelo,
        Data_fabrico,
        Matricula,
        Cor,
        Combustivel,
      });
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.BigText}>Editar Viatura</Text>
        <View style={{ marginTop: "5%" }} />
        <View style={styles.line} />
      </View>

      <View style={styles.content}>
        <ScrollView>
          <View style={{ paddingTop: "5%" }} />

          <View style={styles.textBoxContainer}>
            <Text style={styles.smallText}>Tipo de Viatura:</Text>
          </View>

          <View style={styles.textBoxContainer}>
            <TextInput 
              style={styles.TextBox}
              placeholder="-Escolher-"
              placeholderTextColor={"#9F9BA8"}
              value={Tipo_Viatura}
              onChangeText={setTipo_Viatura}
            />
          </View>

          <View style={{ marginTop: "5%" }} />

          <View style={styles.textBoxContainer}>
            <Text style={styles.smallText}>Informação sobre a Viatura:</Text>
          </View>

          <View style={styles.textBoxContainer}>
            <TextInput 
              style={styles.TextBox}
              placeholder="Marca"
              placeholderTextColor={"#9F9BA8"}
              value={Marca}
              onChangeText={setMarca}
            />
            <TextInput 
              style={styles.TextBox}
              placeholder="Modelo"
              placeholderTextColor={"#9F9BA8"}
              value={Modelo}
              onChangeText={setModelo}
            />
          </View>

          <View style={{ marginTop: "5%" }} />

          <View style={styles.textBoxContainer}>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.smallText}>Data de Fabrico:</Text>
              <View style={{marginHorizontal: '5%'}} />
              <Text style={styles.smallText}>Matricula:</Text>
            </View>
          </View>

          <View style={styles.textBoxContainer}>
            <View style={{flexDirection:'row'}}>
              <TextInput 
                style={styles.SmallTextBox}
                placeholder="DD/MM/YYYY"
                placeholderTextColor={"#9F9BA8"}
                value={Data_fabrico}
                onChangeText={setData_fabrico}
              />
              <View style={{marginHorizontal: '5%'}} />
              <TextInput 
                style={styles.SmallTextBox}
                placeholder="##-##-##"
                placeholderTextColor={"#9F9BA8"}
                value={Matricula}
                onChangeText={setMatricula}
              />
            </View>
          </View>

          <View style={{ marginTop: "5%" }} />

          <View style={styles.textBoxContainer}>
            <Text style={styles.smallText}>Cor da Viatura:</Text>
          </View>

          <View style={styles.textBoxContainer}>
            <TextInput 
              style={styles.TextBox}
              placeholder="Cor"
              placeholderTextColor={"#9F9BA8"}
              value={Cor}
              onChangeText={setCor}
            />
          </View>

          <View style={{ marginTop: "5%" }} />

          <View style={styles.textBoxContainer}>
            <Text style={styles.smallText}>Combustivel:</Text>
          </View>

          <View style={styles.textBoxContainer}>
            <TextInput 
              style={styles.TextBox}
              placeholder="-Escolher-"
              placeholderTextColor={"#9F9BA8"}
              value={Combustivel}
              onChangeText={setCombustivel}
            />
          </View>

          <View style={{ marginBottom: "5%" }} />
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <View style={styles.line} />
        <TouchableOpacity onPress={handleUpdate}>
          <View style={styles.textBoxContainer}>
            <Text style={styles.BTNpurple}>Aplicar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.textBoxContainer}>
            <Text style={styles.Cancelar}>Cancelar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginTop: "10%",
  },
  content: {
    flex: 7,
  },
  footer: {
    flex: 2,
    marginTop: "3%",
    marginBottom: "10%",
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
    backgroundColor: "#6D4EE5",
    height: 3,
    borderRadius: 1,
    width: "94%",
    marginLeft: "3%",
    marginBottom: "5%",
  },

  BigText: {
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

  SmallTextBox: {
    width: "45%",
    color: "white",
    backgroundColor: "#2D2A2F",
    borderWidth: 1,
    borderColor: "#9F9BA8",
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
    backgroundColor: "#2D2A2F",
    borderWidth: 1,
    borderColor: "#9F9BA8",
    marginTop: "5%",
    borderRadius: 15,
    textAlign: 'start',
    paddingVertical: 10,
    paddingHorizontal: 25,
    fontSize: 18,
  },

  BTNpurple: {
    backgroundColor: "#6D4EE5",
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
    color: "#6D4EE5",
    borderWidth: 3,
    borderColor: "#6D4EE5",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 75,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

});
