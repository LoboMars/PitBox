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

export default function RegistarQuotidino() {
  return (
   
    <View style={styles.container}>
    <ScrollView  contentContainerStyle={styles.scrollView}> 
      <Text style={styles.BigText}>Registar Quotidiano</Text>
      
      <View style={{ marginTop: "5%" }}/>
      <View style={styles.line} />

      <View style={styles.textBoxContainer}>
        <Text style={styles.smallText}>Viagem:</Text>
      </View>

      <View style={styles.textBoxContainer}>
        <Text style={styles.TextBox}>Local Partida</Text>
        <Text style={styles.TextBox}>Local Chegada</Text>
      </View>

      <View style={{ marginTop: "5%" }} />

      <View style={styles.textBoxContainer}>
        <Text style={styles.smallText}>Viatura Usada:</Text>
      </View>

      <View style={styles.textBoxContainer}>
        <Text style={styles.TextBox}>-Escolher-</Text>
      </View>

      <View style={{ marginTop: "5%" }} />

      <View style={styles.textBoxContainer}>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.smallText}>Nº Kilometros:</Text>
          <View style={{marginHorizontal: '5%'}} />
          <Text style={styles.smallText}>Consumo Medio:</Text>
        </View>
      </View>

      <View style={styles.textBoxContainer}>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.SmallTextBox}>KM</Text>
          <View style={{marginHorizontal: '5%'}} />
          <Text style={styles.SmallTextBox}>L/100KM</Text>
        </View>
      </View>

      <View style={{ marginTop: "5%" }} />

      <View style={styles.textBoxContainer}>
        <Text style={styles.smallText}>Comportamento Invulgar:</Text>
      </View>

      <View style={styles.textBoxContainer}>
        <Text style={styles.BigTextBox}>-Nenhum-</Text>
      </View>
      

      <View style={{ marginTop: "10%" }} />
      <View style={styles.line} />
      <View style={{ marginTop: "5%" }} />

      <TouchableOpacity>
        <View style={styles.textBoxContainer}>
          <Text style={styles.BTNpurple}>Registar</Text>
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
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: "8%",
  },

  TextBox: {
    width: "100%",
    color: "#9F9BA8",
    backgroundColor: "#383343",
    borderWidth: 1,
    borderColor: "#9F9BA8",
    marginTop: "5%",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 40,
    fontSize: 18,
    textAlign: "left",
  },

  SmallTextBox: {
    width: "45%",
    color: "#9F9BA8",
    backgroundColor: "#383343",
    borderWidth: 1,
    borderColor: "#9F9BA8",
    marginTop: "5%",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 15,
    textAlign: "center",
  },

  BigTextBox: {
    width: "100%",
    color: "#9F9BA8",
    backgroundColor: "#383343",
    borderWidth: 1,
    borderColor: "#9F9BA8",
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
