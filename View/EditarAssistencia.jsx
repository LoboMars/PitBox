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
  inputValue,
} from "react-native";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config"; 



export default function EditarAssistencia() {
  const [Data, setData] = useState("");
  const [Descricao, setDescricao] = useState("");
  const [Tipo_Assistencia, setTipo_Assistencia] = useState("");
  const [Fatura_Valor, setFatura_Valor] = useState("");
  const [Oficina, setOficina] = useState("");
  const [Viatura, setViatura] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "Assistencias", "1"); 
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setData(data.Data);
        setDescricao(data.Descricao);
        setTipo_Assistencia(data.Tipo_Assistencia);
        setFatura_Valor(data.Fatura_Valor);
        setOficina(data.Oficina);
        setViatura(data.Viatura);
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async () => {
      const docRef = doc(db, "Assistencias", "1");
      await updateDoc(docRef, {
        Data,
        Descricao,
        Tipo_Assistencia,
        Fatura_Valor,
        Oficina,
        Viatura,
      });
  };
  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.BigText}>Editar Assistencia</Text>

        <View style={{ marginTop: "5%" }} />
        <View style={styles.line} />

      </View>


      <View style={styles.content}>

        <ScrollView>

        <View style={{ marginTop: "3%" }} />

          <View style={styles.textBoxContainer}>
            <Text style={styles.smallText}>Viatura:</Text>
          </View>

          <View style={styles.textBoxContainer}>
            <TextInput
              style={styles.TextBox}
              placeholderTextColor="white" 
              value={Viatura}
              onChangeText={setViatura}
              />
          </View>

          <View style={{ marginTop: "5%" }} />

          <View style={styles.textBoxContainer}>
            <Text style={styles.smallText}>Oficina:</Text>
          </View>

          <View style={styles.textBoxContainer}>
            <TextInput
              style={styles.TextBox} // Estilo para o TextInput
              placeholderTextColor="white" 
              value={Oficina}
              onChangeText={setOficina}
              />
          </View>

          <View style={{ marginTop: "5%" }} />

          <View style={styles.textBoxContainer}>
            <Text style={styles.smallText}>Data da Assistência:</Text>
          </View>

          <View style={styles.textBoxContainer}>
            <TextInput
              style={styles.TextBox}
              placeholderTextColor="white" 
              value={Data}
              onChangeText={setData}
              />
          </View>

          <View style={{ marginTop: "5%" }} />

          <View style={styles.textBoxContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.smallText}>Valor da Fatura:</Text>
              <View style={{ marginHorizontal: '5%' }} />

              <TextInput
                style={styles.SmallTextBox}
                placeholderTextColor="white"
                keyboardType="numeric"
                mask="$[999999]" 
                value={Fatura_Valor}
                onChangeText={setFatura_Valor}
                />
            </View>

            <View style={{ marginTop: "5%" }} />

            <View style={styles.textBoxContainer}>
              <Text style={styles.smallText}>Detalhes:</Text>
            </View>

            <View style={styles.textBoxContainer}>
              <TextInput
                style={styles.TextBox} // Estilo para o TextInput
                placeholderTextColor="white" 
                value={Tipo_Assistencia}
                onChangeText={setTipo_Assistencia}
                />
              <TextInput
                style={styles.BigTextBox} // Estilo para o TextInput
                placeholderTextColor="white"
                value={Descricao}
                onChangeText={setDescricao}
                multiline={true} />
            </View>

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
    textAlign: "right",
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
