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
import Eventos from '../Image/Eventos.png';
import Home from '../Image/homeUnselected.png';
import Cad from '../Image/cad.png';
import oficina from '../Image/OficinaIcon.png';
import Edit from '../Image/editarAdmin.png'
import apagar from '../Image/Apagar.png'
import adicionar from '../Image/Adicionar.png';
import Gota from '../Image/combustivelLaranja.png';

export default function Tipocombustivel() {
  const [data, setData] = useState([
    { id: "1", name: "Hidrogénio", info:'Renovavel'},
    { id: "2", name: "Gasóleo colorido",info:'Fossil'},
    { id: "3", name: "Gasolina", info:'Fossil' },
  ]);
  const handleLogout = () => {
    alert("Logout button pressed!");
  };
  const info = () => {
    alert("bla bla bla");
  };

  const [searchTerm, setSearchTerm] = useState("");


  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>

      <Text style={[styles.BigText,{marginTop: 40}]}>Tipos de Combustivel</Text>
      
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
            <View style={styles.descriptionContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.info}</Text>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={info}>
            <Image source={Edit} style={styles.logo4} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={apagar} style={styles.logo3}/>
             </TouchableOpacity>
            </View>
          </View>
        )}
      />
          <TouchableOpacity>
        <View style={styles.Adicionar}>
        <Image source={adicionar} style={styles.logoAdd} />
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
            <Image source={Cad} style={styles.logo2} />
            <Text style={{color: "#9F9BA8", fontWeight: "500"}}>Tipos Viatura</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <View>
            <Image source={oficina} style={styles.logo2} />
            <Text style={{color: "#9F9BA8", fontWeight: "500", textAlign: 'center'}}>Oficinas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <View>
            <Image source={Gota} style={styles.logo2} />
            <Text style={{color: "#EC853B", fontWeight: "500"}}>Combustíveis</Text>
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
    alignSelf: "center", 
  },
  flatList: {
    width: "100%", 
  },
  flatListContent: {
    justifyContent: "flex-start",
    width:"100%",
    
  },
  item: {
    backgroundColor: "#1C1D21",
    padding: 27,
    marginBottom: 10,
    borderRadius: 15,
    width: "95%", 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "2.5%", 
  },
  itemText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft:"0%"
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
    width: 42,
    height: 42,
    marginLeft: 10,
  },
  logo4: {
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
    flex: 1,
  }, 
  itemDescription: {
    color: "white",
    fontSize: 14,
    marginLeft: "0%",
    width: 100,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  Adicionar: {
    width:'95%',
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
  logoAdd: {
    alignSelf: 'center',
    width: 42,
    height: 42,
  },
});
