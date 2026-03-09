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
  Alert
} from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

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
  const navigation = useNavigation();
  const route = useRoute();
  const { nome, userId} = route.params;

  const [Chegada, setChegada] = useState('');
  const [Comportamento, setComportamento] = useState('');
  const [Consumo, setConsumo] = useState('');
  const [Kilometros, setKilometros] = useState('');
  const [Partida, setPartida] = useState('');
  const [Viatura_Usada, setViatura_Usada] = useState('');

  const registerQuotidiano = async () => {
    if (!Chegada || !Comportamento || !Consumo || !Kilometros || !Partida || !Viatura_Usada) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }
    try {
      await addDoc(collection(db, "Evento"), {
        Chegada,
        Comportamento,
        Consumo,
        Kilometros,
        Partida,
        Viatura_Usada,
        userId,
      });
      Alert.alert('Sucesso', 'Viatura registada com sucesso.');
      navigation.navigate('MainPage', { nome , userId });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.BigText}>Registar Quotidiano</Text>

        <View style={{ marginTop: "5%" }} />
        <View style={styles.line} />

      </View>


      <View style={styles.content}>

        <ScrollView>

        <View style={{ marginTop: "3%" }} />

        <View style={styles.textBoxContainer}>
        <Text style={styles.smallText}>Viagem:</Text>
      </View>

      <View style={styles.textBoxContainer}>
          <TextInput
            style={styles.TextBox} // Estilo para o TextInput
            placeholder="Local de Partida"
            placeholderTextColor="#9F9BA8"
            value={Partida}
            onChangeText={setPartida}
          />
          <TextInput
            style={styles.TextBox} // Estilo para o TextInput
            placeholder="Local de Chegada"
            placeholderTextColor="#9F9BA8"
            value={Chegada}
            onChangeText={setChegada}
          />
        </View>

      <View style={{ marginTop: "5%" }} />

      <View style={styles.textBoxContainer}>
        <Text style={styles.smallText}>Viatura Usada:</Text>
      </View>

      <View style={styles.textBoxContainer}>
      <TextInput
            style={styles.TextBox} // Estilo para o TextInput
            placeholder="-Escolher- "
            placeholderTextColor="#9F9BA8"
            value={Viatura_Usada}
            onChangeText={setViatura_Usada}
          />
      </View>

      <View style={{ marginTop: "5%" }} />

      <View style={styles.textBoxContainer}>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.smallText}>Nº Kilometros:</Text>
          <View style={{marginHorizontal: '5%'}} />
          <Text style={styles.smallText}>Consumo Medio:</Text>
        </View>
      </View>

      <View style={styles.textBoxContainer}>
  <View style={{ flexDirection: 'row' }}>
    <TextInput
      style={styles.SmallTextBox} // Estilo para o TextInput
      placeholder="Km"
      placeholderTextColor="#9F9BA8"
      value={Kilometros}
      onChangeText={setKilometros}
    />
    <View style={{ marginHorizontal: '5%' }} />
    <TextInput
      style={styles.SmallTextBox} // Estilo para o TextInput
      placeholder="Litros"
      placeholderTextColor="#9F9BA8"
      value={Consumo}
      onChangeText={setConsumo}
    />
  </View>
</View>

      <View style={{ marginTop: "5%" }} />

      <View style={styles.textBoxContainer}>
        <Text style={styles.smallText}>Comportamento Invulgar:</Text>
      </View>

      <View style={styles.textBoxContainer}>
              <TextInput
                style={styles.BigTextBox} // Estilo para o TextInput
                placeholder="-Nenhum- "
                placeholderTextColor="#9F9BA8"
                multiline={true} 
                value={Comportamento}
                onChangeText={setComportamento}
                />
</View>

        </ScrollView>
      </View>


      <View style={styles.footer}>

        <View style={styles.line} />

        <TouchableOpacity onPress={registerQuotidiano}>
          <View style={styles.textBoxContainer}>
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
    textAlign: "left",
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
