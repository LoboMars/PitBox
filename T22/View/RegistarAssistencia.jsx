import { StatusBar } from "expo-status-bar";
import React, { forwardRef, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
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

const firebaseConfig = {
  apiKey: "AIzaSyD7uWXmn3g-xHnnlnNvFnLYZy9VuL3jNAE",
  authDomain: "dmt22-42830.firebaseapp.com",
  databaseURL: "https://dmt22-42830-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dmt22-42830",
  storageBucket: "dmt22-42830.appspot.com",
  messagingSenderId: "783747663389",
  appId: "1:783747663389:web:96b563107c020626d3a8f4",
  measurementId: "G-HLP5HY5LYZ"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);




export default function EditarAssistencia() {
  const [Data, setData] = useState('');
  const [Detalhe_mais, setDetalhe_mais] = useState('');
  const [Detalhes, setDetalhes] = useState('');
  const [Fatura_Valor, setFatura_Valor] = useState('');
  const [Oficina, setOficina] = useState('');
  const [Viatura, setViatura] = useState('');

  const registerAssistencia = async () => {
    if (!Data || !Detalhe_mais || !Detalhes || !Fatura_Valor || !Oficina || !Tipo || !Viatura) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }
    try {
      await addDoc(collection(db, "Assistencias"), {
        Data,
        Detalhe_mais,
        Detalhes,
        Fatura_Valor,
        Oficina,
        Tipo,
        Viatura,
      });
      console.log('Car registered successfully!');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.BigText}>Registar Assistência</Text>

        <View style={{ marginTop: "5%" }} />
        <View style={styles.line} />

      </View>


      <View style={styles.content}>

        <ScrollView>

        <View style={{ marginTop: "5%" }} />

          <View style={styles.textBoxContainer}>
            <Text style={styles.smallText}>Viatura:</Text>
          </View>

          <View style={styles.textBoxContainer}>
            <TextInput
              style={styles.TextBox}
              placeholder="-Escolher-"
              placeholderTextColor="#9F9BA8" 
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
              placeholder="-Escolher-"
              placeholderTextColor="#9F9BA8"
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
              placeholder="DD/MM/YYYY"
              placeholderTextColor="#9F9BA8" 
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
                placeholder="00.00€"
                placeholderTextColor="#9F9BA8"
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
                placeholder="Tipo de Assistência"
                placeholderTextColor="#9F9BA8"
                value={Detalhes}
                onChangeText={setDetalhes}
                 />
              <TextInput
                style={styles.BigTextBox} // Estilo para o TextInput
                placeholder="..."
                placeholderTextColor="#9F9BA8"
                multiline={true}
                value={Detalhe_mais}
                onChangeText={setDetalhe_mais} 
                />
            </View>

          </View>

        </ScrollView>
      </View>


      <View style={styles.footer}>

        <View style={styles.line} />

        <TouchableOpacity onPress={registerAssistencia}>
          <View style={styles.textBoxContainer} >
            <Text style={styles.BTNpurple}>Registar</Text>
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