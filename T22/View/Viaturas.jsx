import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Eventos from '../Image/Eventos.png';
import Home from '../Image/Home.png';
import Viaturas from '../Image/Viaturas.png';
import Assistencias from '../Image/Assistencias.png'


export default function Viatura() {

    const handleLogout = () => {
        alert("Logout button pressed!");
      };
    
      const handleEditar = () => {
        alert("Editar button pressed!");
      };
  return (
   
    <View style={styles.container}>
    <ScrollView  contentContainerStyle={styles.scrollView}> 
      <Text style={styles.BigText}>As suas Viatura</Text>
      
      <View style={{ marginTop: "5%" }}/>
      <View style={styles.line} />

      <View style={styles.textBoxContainer}>
        <Text style={styles.SmallTextBox}>pesquisar por viaturas</Text>
      </View>

      <View style={styles.textBoxContainer}>
        <Text style={styles.BigTextBox}>Viatura1</Text>
      </View>

      <View style={styles.textBoxContainer}>
        <Text style={styles.BigTextBox}>Viatura1</Text>
      </View>

      <View style={styles.textBoxContainer}>
        <Text style={styles.BigTextBox}>Viatura1</Text>
      </View>

      <View style={styles.textBoxContainer}>
        <Text style={styles.BigTextBox}>Viatura1</Text>
      </View>

        <View style={styles.container}>
        <View style={{ marginTop: "7%" }}/>
            <View style={styles.imageContainer}>
              <TouchableOpacity onPress={handleLogout} style={{paddingLeft:'5%'}}>
                <Image source={Home} style={styles.logo2} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogout}>
                <Image source={Viaturas} style={styles.logo2} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogout} style={{paddingLeft:'5%'}}>
                <Image source={Assistencias} style={styles.logo2} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogout}>
                <Image source={Eventos} style={styles.logo2} />
              </TouchableOpacity>
            </View>
        <View style={{ paddingTop: "10%" }} />
    </View>
          

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
    backgroundColor: "#2D2A2F",
    textAlign: "center",
    justifyContent: "center",
  },

  container2: {
    width: "100%",
    flex: 1,
    backgroundColor: "#1C1D21",
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
    backgroundColor: "#6D4EE5",
    height: 3,
    width: "100%",
    marginBottom: "5%",
  },

  BigText: {
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

  SmallTextBox: {
    width: "100%",
    color: "#9F9BA8",
    backgroundColor: "#383343",
    borderWidth: 1,
    borderColor: "#9F9BA8",
    marginTop: "5%",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 40,
    fontSize: 18,
    textAlign: "left",
  },

  BigTextBox: {
    color: "#9F9BA8",
    backgroundColor: "#1C1D21",
    marginTop: "8%",
    borderRadius: 15,
    paddingVertical: 30,
    paddingHorizontal: 20,
    fontSize: 13,
    textAlign: "left",
  },


  BTNpurple: {
    backgroundColor: "#6D4EE5",
    color: "white",
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 55,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  Cancelar: {
    marginTop: "5%",
    color: "#6D4EE5",
    borderWidth: 1,
    borderColor: "#6D4EE5",
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 75,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  logo: {
    width: 50,
    height: 60,
  },

  logo2: {
    width: 65,
    height: 65,
  },

  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between", 
    paddingHorizontal: "2%",
    width: "100%",
  },


});
