import React, { useState } from "react";
import { View, 
  FlatList, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Image,
} from "react-native";
import carPurple from "../Image/carPurple.png"


export default function ListaDeCombustiveis() {
  const [data, setData] = useState([
    { id: "1", name: "Combustível 1" },
    { id: "2", name: "Combustível 2" },
    { id: "3", name: "Combustível 3" },
    { id: "4", name: "Combustível 4" },
    { id: "5", name: "Combustível 5" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleEdit = (id) => {
    // Lógica para editar o item com o ID fornecido
    console.log("Editar item com ID:", id);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <ScrollView  contentContainerStyle={styles.scrollView}>
      <Text style={styles.BigText}>As suas Viatura</Text>
      
      <View style={{ marginTop: "5%" }}/>
      <View style={styles.line} />
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar..."
        placeholderTextColor="#9F9BA8"
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
      />
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
             <Image source={carPurple} style={styles.icon} />
            <Text style={styles.itemText}>{item.name}</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(item.id)}>
              <Text style={styles.editButtonText}>...</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: '5%', 
  },
  container: {
    flex: 1,
    backgroundColor: "#2D2A2F",
    //alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingTop: 20,
  },
  BigText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign:"center",
  },
  line: {
    backgroundColor: "#6D4EE5",
    height: 3,
    width: "100%",
    marginBottom: "5%",
  },
  searchBar: {
    backgroundColor: "#383343",
    color: "white",
    borderWidth: 1,
    borderColor: "#9F9BA8",
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 15,
    marginBottom: 20,
    width: "85%",
    alignSelf: "center", // Centraliza a barra de pesquisa
  },
  flatList: {
    width: "100%", // Ajusta a largura da FlatList para ocupar toda a tela
  },
  flatListContent: {
    justifyContent: "flex-start",
    width:"100%",
    //backgroundColor:"1C1D21",
  },
  item: {
    backgroundColor: "#1C1D21",
    padding: 20,
    marginBottom: 10,
    borderRadius: 15,
    width: "100%", // Ajusta a largura dos itens da lista para ocupar toda a tela
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
   

  },
  itemText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft:"5%"


  },
  editButton: {
    backgroundColor: "#EC853B",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginLeft:"50%"
  },
  editButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    width: "15%",
    height: "100%",
    marginLeft: "0%",
    marginTop: "1%",
  },
});
