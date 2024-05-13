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
import Eventos from '../Image/Eventos.png';
import Home from '../Image/Home.png';
import Viaturas from '../Image/Viaturas.png';
import Assistencias from '../Image/Assistencias.png';
import Tresp from '../Image/3P.png'
import apagar from '../Image/Apagar.png'

export default function Tipocombustivel() {
  const [data, setData] = useState([
    { id: "1", name: "Hidrogénio", info:'Fossil'},
    { id: "2", name: "Gasóleo colorido",info:'Fossil'},
    { id: "3", name: "Gasolina" },
  ]);
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

      <Text style={[styles.BigText,{marginTop: 30}]}>Tipos de Combustivel</Text>
      
      <View style={{ marginTop: "5%" }}/>
      <View style={styles.line} />
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar tipo de combustivel ..."
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
            <Text style={styles.itemText}>{item.name}</Text>
           {/*  <View><Text style={styles.itemText}>{item.info}</Text></View>*/}
            <TouchableOpacity onPress={info} style={{flexDirection: "row",alignItems: "center",}}>
            <Image source={Tresp} style={styles.logo4} />
            <Image source={apagar} style={styles.logo3}/>
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
            <Text style={{color: "#6D4EE5", fontWeight: "500"}}>Home</Text>
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
            <Text style={{color: "#9F9BA8", fontWeight: "500"}}>Eventos</Text>
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
    height:'100%',
    flex: 1,
    backgroundColor: "#232427",
  },
  container3: {
    flex: 1,
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
  logo4: {
    alignSelf: 'center',
    width: 42,
    height: 42,
    marginRight: 10,
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
});
