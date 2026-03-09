import React, { forwardRef, useState, useEffect } from "react";
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
import Eventos from '../Image/eventospintado.png';
import Home from '../Image/homeUnselected.png';
import Viaturas from '../Image/viaturas.png';
import Assistencias from '../Image/assistencias.png';
import Tresp from '../Image/maisDetalhes.png';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config"; 


export default function Seuseventos() {

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      const postCollection = collection(db, "Evento");
      const postSnapshot = await getDocs(postCollection);
      const postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(postList);
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
    // Lógica para editar o item com o ID fornecido
    console.log("Editar item com ID:", id);
  };

  const filteredData = data.filter((item) =>
    item.Partida.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.Chegada.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <View style={styles.container}>

      <Text style={[styles.BigText,{marginTop: 40}]}>Os seus Eventos</Text>
      
      <View style={{ marginTop: "5%" }}/>
      <View style={styles.line} />
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar por Eventos..."
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
            <Text style={styles.itemText}>
              {item.Partida} 
              <Text style={styles.arrowText}>  --</Text>   
              <Text style={styles.itemText}>{item.Chegada}</Text>
            </Text>
            <Text style={styles.itemDescription}>{item.Comportamento}</Text>
            </View>
            <TouchableOpacity onPress={info} style={styles.buttonn}>
            <Image source={Tresp} style={styles.logo3} />
            </TouchableOpacity>
          </View>
        )}
      />
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
            <Image source={Viaturas} style={styles.logo2} />
            <Text style={{color: "#9F9BA8", fontWeight: "500"}}>Viaturas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <View>
            <Image source={Assistencias} style={styles.logo2} />
            <Text style={{color: "#9F9BA8", fontWeight: "500", textAlign: 'center'}}>Assistências</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <View>
            <Image source={Eventos} style={styles.logo2} />
            <Text style={{color: "#6D4EE5", fontWeight: "500"}}>Eventos</Text>
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
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 20,
    width: "85%",
    alignSelf: "center", // Centraliza a barra de pesquisa
  },
  flatList: {
    width: "100%", // Ajusta a largura da FlatList para ocupar toda a tela
  },
  flatListContent: {
    //justifyContent: "flex-start",
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
    alignItems: "center",
    marginLeft:"5%",
  
  },
  itemText: {
    flex: 1, // Faz o texto ocupar todo o espaço disponível
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: "5%" // Ajusta a margem esquerda
  },
  icon: {
    width: "15%",
    height: "100%",
    marginLeft: "0%",
    marginTop: "1%",
  },
  container: {
    width: "100%",
    height:'100%',
    flex: 1,
    backgroundColor: "#232427",
  },
  container3: {
    flex: 0.3,
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
  buttonn: { 
    flexDirection: "row", 
    justifyContent: "flex-end" 
  },
  descriptionContainer: {
    marginTop: 5,
    flex: 1,
    
  }, 
  itemDescription: {
    flex: 1, // Faz a descrição ocupar todo o espaço disponível
    color: "white",
    fontSize: 14,
    marginLeft: "5%", // Ajusta a margem esquerda

  },
});
