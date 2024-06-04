import { StatusBar, } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

import Lebron from '../Image/labron.png'

export default function EditarPerfil() {
  return (
   
    <View style={styles.container}>

        <View style ={styles.header}>
          <Text style={styles.BigText}>Editar Perfil</Text>

          <View style={{ marginTop: "5%" }} />
          <View style={styles.line} />

        </View>
       
      <View style={styles.content}>

        <View style={{height: "30%", marginBottom: "5%", alignItems: 'center'}}>
          <TouchableOpacity  style={styles.clickable}>
            <Image source={Lebron} style={styles.ProfilePic}/>
          </TouchableOpacity>
        </View>
       
        <View style={styles.textBoxContainer}>
            <Text style={styles.smallText}>Email:</Text>
          </View>

          <View style={styles.textBoxContainer}>
            <TextInput
              style={styles.TextBox}
              defaultValue="uaremysunshine@gmail.com"/>
          </View>

          <View style={{ marginTop: "8%" }} />

          <View style={styles.textBoxContainer}>
            <Text style={styles.smallText}>Palavra-Passe:</Text>
          </View>

          <View style={styles.textBoxContainer}>
            <TextInput
              style={styles.TextBox}
              secureTextEntry={true}
              defaultValue="Bababoey"/>
          </View>

      </View>
        

        <View style={styles.footer}>

          <TouchableOpacity>
            <View style={styles.textBoxContainer}>
              <Text style={styles.BTNPurple}>Alterar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.textBoxContainer}>
              <Text style={styles.Cancelar}>Cancelar</Text>
           </View>
          </TouchableOpacity>
        </View>

     </View>
  );
}

const styles = StyleSheet.create({

  header:{
    flex: 1,
    marginTop: "10%",
  },
  content:{
    marginTop: "10%",
    flex: 7,
  },
  footer:{
    flex: 2,
    marginBottom: "10%",
  },
  ProfilePic:{
    height: "100%",
    width: "100%",
    borderRadius: 100,
  },
  clickable:{
    height: "100%",
    width: "40%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },

  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#232427",
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
    borderRadius: 1,
    width: "94%",
    marginLeft: "3%",
    marginBottom: "5%",
  },

  BigText: {
    marginTop: '2%',
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

  TextBox: {
    width: "100%",
    color: "white",
    backgroundColor: "#2D2A2F",
    borderWidth: 1,
    borderColor: "#9F9BA8",
    marginTop: "5%",
    borderRadius: 15,
    paddingVertical: "4%",
    paddingHorizontal: 25,
    fontSize: 18,
    textAlign: "left",
  },


  BTNPurple: {
    backgroundColor: "#6D4EE5",
    color: "white",
    borderRadius: 15,
    paddingVertical: "4%",
    paddingHorizontal: 55,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  Cancelar: {
    marginTop: "5%",
    color: "#6D4EE5",
    borderWidth: 2,
    borderColor: "#6D4EE5",
    borderRadius: 15,
    paddingVertical: "4%",
    paddingHorizontal: 75,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
    
