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

export default function EditarViatura() {
  return (
   
    <View style={styles.container}>
    <ScrollView  contentContainerStyle={styles.scrollView}> 
      <Text style={styles.BigText}>Editar Viatura</Text>
      
      <View style={{ marginTop: "5%" }}/>
      <View style={styles.line} />

      <View style={styles.textBoxContainer}>
        <Text style={styles.smallText}>Tipo de Viatura:</Text>
      </View>

      <View style={styles.textBoxContainer}>
        <Text style={styles.TextBox}>Mota</Text>
      </View>

      <View style={{ marginTop: "5%" }} />

      <View style={styles.textBoxContainer}>
        <Text style={styles.smallText}>Informação sobre a Viatura:</Text>
      </View>

      <View style={styles.textBoxContainer}>
        <Text style={styles.TextBox}>Kawasaki</Text>
        <Text style={styles.TextBox}>Ninja</Text>
      </View>

      <View style={{ marginTop: "5%" }} />

      <View style={styles.textBoxContainer}>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.smallText}>Data de Fabrico:</Text>
          <View style={{marginHorizontal: '5%'}} />
          <Text style={styles.smallText}>Matricula:</Text>
        </View>
      </View>

      <View style={styles.textBoxContainer}>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.SmallTextBox}>17/09/2020</Text>
          <View style={{marginHorizontal: '5%'}} />
          <Text style={styles.SmallTextBox}>63-HI-40</Text>
        </View>
      </View>

      <View style={{ marginTop: "5%" }} />



      <View style={{ marginTop: "5%" }} />

      <View style={styles.textBoxContainer}>
        <Text style={styles.smallText}>Cor da Viatura:</Text>
      </View>

      <View style={styles.textBoxContainer}>
        <Text style={styles.TextBox}>Verde</Text>
      </View>

      <View style={{ marginTop: "5%" }} />

      <View style={styles.textBoxContainer}>
        <Text style={styles.smallText}>Combustivel:</Text>
      </View>

      <View style={styles.textBoxContainer}>
        <Text style={styles.TextBox}>Gasolina 98</Text>
      </View>
      

      <View style={{ marginTop: "10%" }} />
      <View style={styles.line} />
      <View style={{ marginTop: "5%" }} />

      <TouchableOpacity>
        <View style={styles.textBoxContainer}>
          <Text style={styles.BTNpurple}>Aplicar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.textBoxContainer}>
          <Text style={styles.Cancelar}>Cancelar</Text>
        </View>
      </TouchableOpacity>

      <View style={{ marginTop: "5%" }} />

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
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: "8%",
  },

  TextBox: {
    width: "100%",
    color: "white",
    backgroundColor: "#383343",
    borderWidth: 1,
    borderColor: "white",
    marginTop: "5%",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 40,
    fontSize: 18,
    textAlign: "left",
  },

  SmallTextBox: {
    width: "45%",
    color: "white",
    backgroundColor: "#383343",
    borderWidth: 1,
    borderColor: "white",
    marginTop: "5%",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 15,
    textAlign: "center",
  },

  BigTextBox: {
    width: "100%",
    color: "white",
    backgroundColor: "#383343",
    borderWidth: 1,
    borderColor: "white",
    marginTop: "5%",
    borderRadius: 15,
    paddingVertical: 100,
    paddingHorizontal: 40,
    fontSize: 18,
    textAlign: "center",
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
});
