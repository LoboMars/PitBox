import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import carPurple from "../Image/carPurple.png";
import Combustiveis from '../Image/combustivel.png';
import Home from '../Image/homeUnselected.png';
import TipoViaturas from '../Image/cadSelect.png';
import Oficinas from '../Image/oficinaIcon.png';
import apagar from '../Image/apagar.png';
import Edit from '../Image/editarAdmin.png';
import adicionar from '../Image/adicionar.png';
import { db } from "../firebase.config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export default function Tipoviatura() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Obtendo o objeto de navegação
  const navigation = useNavigation();

  useEffect(() => {
    const getData = async () => {
      try {
        const postCollection = collection(db, "ADviaturas");
        const postSnapshot = await getDocs(postCollection);
        const postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log("Data from Firestore:", postList);
        setData(postList);
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };
    getData();
  }, []);

  const handleLogout = () => {
    alert("Logout button pressed!");
  };

  const info = () => {
    alert("bla bla bla");
  };

  const handleEdit = (id) => {
    // Navegar para a tela de edição com o ID do item a ser editado
    navigation.navigate("EliminarTipo", { id });
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "ADviaturas", id)); // Exclui o documento do Firestore
      const updatedData = data.filter(item => item.id !== id); // Filtra os dados para excluir o item com o ID correspondente
      setData(updatedData); // Atualiza os dados
      alert("Item apagado com sucesso ");
    } catch (error) {
      console.error("Error ao apagar: ", error);
      alert("Erro ao apagar o item.");
    }
  };

  const filteredData = data.filter((item) =>
    item && item.nome && item.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.BigText}>Tipos de Viatura</Text>
        <View style={{ marginTop: "5%" }} />
        <View style={styles.line} />
      </View>

      <View style={styles.container2}>
        <TextInput
          style={styles.searchBar}
          placeholder="Pesquisar tipos de viatura.."
          placeholderTextColor="#9F9BA8"
          onChangeText={(text) => setSearchTerm(text)}
          value={searchTerm}
        />

        <ScrollView contentContainerStyle={styles.scrollView}>
          <FlatList
            style={styles.flatList}
            contentContainerStyle={styles.flatListContent}
            data={filteredData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Image source={carPurple} style={styles.icon} />
                <Text style={styles.itemText}>{item.nome}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={() => handleEdit(item.id)}>
                    <Image source={Edit} style={styles.logo4} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDelete(item.id)}>
                    <Image source={apagar} style={styles.logo3} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
          <TouchableOpacity onPress={() => navigation.navigate("CriarViatura")}>
            <View style={styles.Adicionar}>
              <Image source={adicionar} style={styles.logo3} />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    marginTop: "10%",
    flex: 1,
    justifyContent: 'center',
  },
  container2: {
    flex: 8,
    marginTop: "5%",
    marginBottom: "1%",
    backgroundColor: "#232427",
  },
  container3: {
    flex: 1,
    backgroundColor: "#1C1D21",
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "#2D2A2F",
    justifyContent: "center",
    paddingTop: 20,
    width: "100%",
    height: '100%',
    backgroundColor: "#232427",
  },
  BigText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  line: {
    backgroundColor: "#EC853B",
    height: 3,
    borderRadius: 1,
    width: "94%",
    marginLeft: "3%",
    marginBottom: "5%",
  },
  searchBar: {
    backgroundColor: "#383343",
    color: "white",
    fontSize: 20,
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginBottom: 20,
    width: "90%",
    alignSelf: "center",
    marginBottom: "7%",
  },
  flatList: {
    width: "100%",
  },
  flatListContent: {
    justifyContent: "flex-start",
    width: "100%",
  },
  item: {
    backgroundColor: "#1C1D21",
    padding: 27,
    marginBottom: 10,
    borderRadius: 15,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "5%",
    marginBottom: "4%",
  },
  itemText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: "5%"
  },
  icon: {
    width: "15%",
    height: "100%",
    marginLeft: "0%",
    marginTop: "1%",
  },
  imageContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
  },
  logo2: {
    alignSelf: 'center',
    width: 32,
    height: 32,
  },
  logo3: {
    alignSelf: 'center',
    width: 42,
    height: 42,
  },
  logo4: {
    alignSelf: 'center',
    width: 42,
    height: 42,
    marginRight: 10,
  },
  BigTextP: {
    color: "#6D4EE5",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end"
  },
  Adicionar: {
    width: '90%',
    color: '#383343',
    borderColor: '#EC853B',
    borderWidth: 4,
    borderRadius: 15,
    paddingVertical: 35,
    paddingHorizontal: 25,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: "center"
  },
});