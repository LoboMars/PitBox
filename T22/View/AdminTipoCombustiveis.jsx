import React, { useState, useEffect } from "react";
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
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config"; 

export default function Tipocombustivel() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const postCollection = collection(db, "tipocobustives");
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

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "tipocobustives", id));
      setData((prevData) => prevData.filter((item) => item.id !== id));
      alert("Item deleted successfully!");
    } catch (error) {
      console.error("Error deleting document: ", error);
      alert("Failed to delete item!");
    }
  };

  const handleLogout = () => {
    alert("Logout button pressed!");
  };

  const info = (infoText) => {
    alert(infoText);
  };

  const filteredData = data.filter((item) =>
    (item.nome?.toLowerCase() || "").includes(searchTerm.toLowerCase())
  );

  console.log("Filtered Data:", filteredData); // Verifique se os dados são filtrados corretamente

  return (
    <View style={styles.container}>
      <Text style={[styles.BigText, {marginTop: 40}]}>Tipos de Combustivel</Text>
      <View style={{ marginTop: "5%" }}/>
      <View style={styles.line} />
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar tipo de combustivel ..."
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
              <View style={styles.descriptionContainer}>
                <Text style={styles.itemText}>{item.nome}</Text>
                <Text style={styles.itemDescription}>{item.info}</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => info(item.info)}>
                  <Image source={Edit} style={styles.logo4} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                  <Image source={apagar} style={styles.logo3} />
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
    paddingHorizontal: 15,
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
  container3: {
    flex: 0.4,
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
  logoAdd: {
    alignSelf: 'center',
    width: 42,
    height: 42,
  },
});
