import React, { forwardRef, useState,useEffect } from "react";
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
import Viaturas from '../Image/Viaturas.png';
import Assistencias from '../Image/assistencia.png';
import Tresp from '../Image/3P.png';
import adicionar from '../Image/Adicionar.png';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config"; 


export default function AsSuasAssistencias() {
      const [data, setData] = useState([]);
      const [searchTerm, setSearchTerm] = useState("");

      useEffect(() => {
        const getData = async () => {
          const postCollection = collection(db, "Assistencias");
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


      const filteredData = data.filter((item) => 
        item.Viatura.toLowerCase().includes(searchTerm.toLowerCase()) 
      );

  const handleButton1 = () => {
    setSearchTerm(item.Viatura);
  };

  const handleButton2 = () => {
    setSearchTerm(item.Detalhes);
  };

  const handleButton3 = () => {
    console.log("Botão 3 pressionado!");
  };

  return (
    <View style={styles.container}>

      <Text style={[styles.BigText,{marginTop: 30}]}>As suas Assistencias</Text>
      
      <View style={{ marginTop: "5%" }}/>
      <View style={styles.line} />
      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar por assistências..."
        placeholderTextColor="#9F9BA8"
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
      />
        <Text style={styles.smallText}>Tipo de Viatura:</Text>

        <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <View style={styles.button1}>
                <Text style={styles.buttonText}>Carro</Text>
              </View>
            </TouchableOpacity>
        </View>


    <ScrollView  contentContainerStyle={styles.scrollView}>
      
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}> 
             <Image source={carPurple} style={styles.icon} />
             <View style={styles.itemContent}>
            <View style={styles.descriptionContainer}>
            <Text style={styles.itemText}>{item.Viatura}</Text>
            <Text style={styles.itemDescription}>{item.Tipo_Assistencia}</Text>
            </View>
            </View>
            <TouchableOpacity onPress={info} style={styles.buttonn}>
            <Image source={Tresp} style={styles.logo3} />
            </TouchableOpacity>
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
            <Image source={Viaturas} style={styles.logo2} />
            <Text style={{color: "#9F9BA8", fontWeight: "500"}}>Viaturas</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <View>
            <Image source={Assistencias} style={styles.logo2} />
            <Text style={{color: "#6D4EE5", fontWeight: "500", textAlign: 'center'}}>Assistências</Text>
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
    width: "100%",
    height:'100%',
    backgroundColor: "#232427",
    flex: 1,
    backgroundColor: "#2D2A2F",
    justifyContent: "center",
    paddingTop: 20,
    //marginTop: "5%"
    
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

  logoAdd: {
    alignSelf: 'center',
    width: 42,
    height: 42,
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
    //width:"100%",
    //backgroundColor:"1C1D21",
  },
  item: {
    backgroundColor: "#1C1D21",
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    //justifyContent: "space-between",
    marginLeft: "5%",
  },
  itemContent: {
    flex:1,
    //alignItems: "center",
    
  },
  itemText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
  },
  icon: {
    width: 50, 
    height: 50, 
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
    width: 42,
    height: 42,
    marginBottom:10,
    marginLeft: 'auto'
  },
  BigText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: '2%',
    marginTop: 20,
  },
  button1: {
    backgroundColor: '#383343',
    paddingVertical: 6.5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft:10, 
  },
  button2: {
    backgroundColor: '#383343',
    paddingVertical: 6.5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft:10,
  },
  button3: {
    backgroundColor: '#383343',
    paddingVertical: 6.5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft:10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  smallText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: "8%",
  },
  descriptionContainer: {
    marginTop: 5,
    flex: 1,
  }, 
  itemDescription: {
    color: "white",
    fontSize: 14,
    marginTop: 5,
    marginLeft:20,
  },
  buttonn: {
    flexDirection: "row",
  },
});
