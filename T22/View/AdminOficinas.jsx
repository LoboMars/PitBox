import React, { forwardRef, useState } from "react";
import { View, 
  FlatList, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Image,
} from "react-native";
import carPurple from "../Image/carPurple.png";
import Home from '../Image/homeUnselected.png';
import TipoViaturas from '../Image/cad.png';
import Oficina from '../Image/oficinaOrange 1.png'
import Combustiveis from '../Image/combustivel.png';
import adicionar from '../Image/Adicionar.png';
import Tresp from '../Image/3P.png'

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";


export default function Oficinas() {
  const [data, setData] = useState([]);

  const getdata = async _  =>{
    const post = collection(db, "tabela");
    const postSnapshot = await getDocs (post);
    const postList = postSnapshot.docs.map(doc => doc.data());
    setPost(postList);
  }
  const handleLogout = () => {
    alert("Logout button pressed!");
  };
  const info = () => {
    alert("bla bla bla");
  };

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

      <Text style={[styles.BigText,{marginTop: 30}]}>Oficinas</Text>
      
      <View style={{ marginTop: "5%" }}/>
      <View style={styles.line} />
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar Oficinas..."
        placeholderTextColor="#9F9BA8"
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
      />
      <ScrollView  contentContainerStyle={styles.scrollView}>
      
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}> 
            <View style={styles.descriptionContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.info}</Text>
            </View>
            <TouchableOpacity onPress={info}>
            <Image source={Tresp} style={styles.logo3} />
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity>
        <View style={styles.Adicionar}>
        <Image source={adicionar} style={styles.logo3} />
        </View>
      </TouchableOpacity>
      </ScrollView>
    <View style={styles.container3}>

      <View style={styles.imageContainer2}>
        <TouchableOpacity onPress={handleLogout}>
          <View>
            <Image source={Home} style={styles.logo2}/>
            <Text style={{color: "#9F9BA8", fontWeight: "500"}}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <View>
            <Image source={TipoViaturas} style={styles.logo2} />
            <Text style={{color: "#9F9BA8", fontWeight: "500"}}>Tipo Viatura</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <View>
            <Image source={Oficina} style={styles.logo2} />
            <Text style={{color: "#EC853B", fontWeight: "500", textAlign: 'center'}}>Oficina</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <View>
            <Image source={Combustiveis} style={styles.logo2} />
            <Text style={{color: "#9F9BA8", fontWeight: "500"}}>Combustível</Text>
          </View>
        </TouchableOpacity>
        </View>
        </View>


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
    //marginTop: "5%"
  },
  BigText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign:"center",
  },
  line: {
    backgroundColor: "#EC853B",
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
    paddingHorizontal: 25,
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
    padding: 27,
    marginBottom: 10,
    borderRadius: 15,
    width: "90%", // Ajusta a largura dos itens da lista para ocupar toda a tela
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
    marginLeft:"5%",
  
  },
  itemText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft:"5%"
  },
  icon: {
    width: "15%",
    height: "100%",
    marginLeft: "0%",
    marginTop: "1%",
  },
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#232427",
  },
  container3: {
    flex: 0.5,
    backgroundColor: "#1C1D21",
    justifyContent: 'center',
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
  descriptionContainer: {
    marginTop: 5, 
  },
  itemDescription: {
    color: "white",
    fontSize: 14,
    marginLeft: "5%",
    width: 100,
  },
  Adicionar: {
    width:'90%',
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
  logo3: {
    alignSelf: 'center',
    width: 42,
    height: 42,
  },
});
