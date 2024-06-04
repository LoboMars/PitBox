import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.config";

export default function CriarOficina() {
  const [nome, setNome] = useState("");
  const [morada, setMorada] = useState("");
  const [telefone, setTelefone] = useState("");
  const [abertura, setAbertura] = useState("");
  const [encerramento, setEncerramento] = useState("");
  const [dias, setDias] = useState("");

  const handleCreate = async () => {
    if (!nome || !morada || !telefone || !abertura || !encerramento || !dias) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    try {
      await addDoc(collection(db, "oficinas"), {
        nome: nome,
        morada: morada,
        telefone: telefone,
        horario: {
          abertura: abertura,
          encerramento: encerramento,
          dias: dias,
        },
      });
      Alert.alert("Sucesso", "Oficina criada com sucesso");
      setNome("");
      setMorada("");
      setTelefone("");
      setAbertura("");
      setEncerramento("");
      setDias("");
    } catch (error) {
      console.error("Erro ao criar oficina: ", error);
      Alert.alert("Erro", "Não foi possível criar a oficina");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View />
        <Text style={styles.BigText}>Criar Oficina</Text>

        <View style={{ marginTop: "5%" }} />
        <View style={styles.line} />
        <View style={{ marginBottom: "5%" }} />

        <View style={styles.textBoxContainer}>
          <Text style={styles.smallText}>Informações da Oficina:</Text>
        </View>

        <View style={styles.textBoxContainer}>
          <TextInput
            style={styles.TextBox}
            placeholder="Nome"
            placeholderTextColor="#9F9BA8"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.TextBox}
            placeholder="Morada"
            placeholderTextColor="#9F9BA8"
            value={morada}
            onChangeText={setMorada}
          />
          <TextInput
            style={styles.TextBox}
            placeholder="Telefone"
            placeholderTextColor="#9F9BA8"
            keyboardType="numeric"
            value={telefone}
            onChangeText={setTelefone}
          />
        </View>

        <View style={{ marginTop: "5%" }} />

        <View style={styles.textBoxContainer}>
          <Text style={styles.smallText}>Horario Funcionamento:</Text>
        </View>

        <View style={styles.textBoxContainer}>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={styles.SmallTextBox}
              placeholder="Abertura"
              placeholderTextColor="#9F9BA8"
              value={abertura}
              onChangeText={setAbertura}
            />
            <View style={{ marginHorizontal: '5%' }} />
            <TextInput
              style={styles.SmallTextBox}
              placeholder="Encerramento"
              placeholderTextColor="#9F9BA8"
              value={encerramento}
              onChangeText={setEncerramento}
            />
          </View>
        </View>

        <View style={styles.textBoxContainer}>
          <TextInput
            style={styles.TextBoxCenter}
            placeholder="Dia[1]-Dia[X]"
            placeholderTextColor="#9F9BA8"
            value={dias}
            onChangeText={setDias}
          />
        </View>

        <View style={{ marginTop: "20%" }} />
        <View style={styles.line} />
        <View style={{ marginBottom: "2%" }} />

        <TouchableOpacity onPress={handleCreate}>
          <View style={styles.textBoxContainer}>
            <Text style={styles.BTNOrange}>Criar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("AdminMainPage")}>
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
    backgroundColor: "#2D2A2F",
    borderWidth: 1,
    borderColor: "#9F9BA8",
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
