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
import Home from '../Image/homeUnselected.png';
import Viaturas from '../Image/ViaturaPurple.png';
import Assistencias from '../Image/Assistencias.png';
import Tresp from '../Image/3P.png'
import adicionar from '../Image/Adicionar.png'


export default function Suasviaturas() {
  const [data, setData] = useState([
    { id: "1", name: "Renault" },
    { id: "2", name: "Kawasaki" },
    { id: "3", name: "Ferrari" },
    { id: "4", name: "Toyota" },
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
      <Text style={[styles.BigText,{marginTop: 30}]}>As suas Viatura</Text>
      
      <View style={{ marginTop: "5%" }}/>
      <View style={styles.line} />
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar..."
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
             <Image source={carPurple} style={styles.icon} />
            <Text style={styles.itemText}>{item.name}</Text>
            <TouchableOpacity onPress={info} style={styles.buttonn}>
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
            <Image source={Viaturas} style={styles.logo2} />
            <Text style={{color: "#6D4EE5", fontWeight: "500"}}>Viaturas</Text>
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
    height:'100%',
    backgroundColor: "#2D2A2F",
    //alignItems: "center",
    justifyContent: "center",
    width: "100%",
    //marginTop: "5%"
  },

  container3: {
    flex: 2,
    backgroundColor: "#1C1D21",
    justifyContent: 'center',
  },

  BigText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign:"center",
  },

  Adicionar: {
    width:'90%',
    color: '#383343',
    borderColor: '#6D4EE5',
    borderWidth: 4,
    borderRadius: 15,
    paddingVertical: 35,
    paddingHorizontal: 25,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: "center"
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
    flex: 1, 
    flexDirection: "row", 
    justifyContent: "flex-end" 
  }
});
