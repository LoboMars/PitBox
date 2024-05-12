import { StatusBar } from "expo-status-bar";
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

export default function EditarOficina() {
  return (
   
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View />
        <Text style={styles.BigText}>Editar Oficina</Text>

        <View style={{ marginTop: "5%" }} />
        <View style={styles.line} />
        <View style={{ marginBottom: "5%" }} />

        <View style={styles.textBoxContainer}>
          <Text style={styles.smallText}>Informações da Oficina:</Text>
        </View>

        <View style={styles.textBoxContainer}>
          <TextInput
            style={styles.TextBox} // Estilo para o TextInput
            placeholder="Nome"
            defaultValue="Los Santos"
            placeholderTextColor="#9F9BA8" />
          <TextInput
            style={styles.TextBox} // Estilo para o TextInput
            placeholder="Morada"
            defaultValue="Rio Tinto"
            placeholderTextColor="#9F9BA8" />
          <TextInput
            style={styles.TextBox} // Estilo para o TextInput
            placeholder="Telefone"
            defaultValue="961854254"
            placeholderTextColor="#9F9BA8"
            keyboardType="numeric"
          />
        </View>

        <View style={{ marginTop: "5%" }} />

        <View style={styles.textBoxContainer}>
          <Text style={styles.smallText}>Horario Funcionamento:</Text>
        </View>

        <View style={styles.textBoxContainer}>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={styles.SmallTextBox} // Estilo para o TextInput
              placeholder="Abertura"
              defaultValue="09:00"
              placeholderTextColor="#9F9BA8" />
            <View style={{ marginHorizontal: '5%' }} />
            <TextInput
              style={styles.SmallTextBox} // Estilo para o TextInput
              placeholder="Encerramento"
              defaultValue="17:00"
              placeholderTextColor="#9F9BA8" />
          </View>
        </View>

        <View style={styles.textBoxContainer}>
          <TextInput
            style={styles.TextBoxCenter} // Estilo para o TextInput
            defaultValue="Segunda - Sexta"
            placeholder="Dia[1]-Dia[X]"
            placeholderTextColor="#9F9BA8" />
        </View>

      </ScrollView>

      <View style={{ marginTop: "5%" }} />

      <View>

        <View style={styles.line} />
        <View style={{ marginBottom: "2%" }} />

        <TouchableOpacity>
          <View style={styles.textBoxContainer}>
            <Text style={styles.BTNOrange}>Aplicar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.textBoxContainer}>
            <Text style={styles.Cancelar}>Cancelar</Text>
          </View>
        </TouchableOpacity>

        <View style={{ marginTop: "10%" }} />

      </View>

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
    backgroundColor: "#EC853B",
    height: 3,
    borderRadius: 1,
    width: "94%",
    marginLeft: "3%",
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
    color: "white",
    backgroundColor: "#2D2A2F",
    borderWidth: 1,
    borderColor: "#9F9BA8",
    marginTop: "5%",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 25,
    fontSize: 18,
    textAlign: "left",
  },

  TextBoxCenter: {
    width: "100%",
    color: "white",
    backgroundColor: "#2D2A2F",
    borderWidth: 1,
    borderColor: "#9F9BA8",
    marginTop: "5%",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 40,
    fontSize: 18,
    textAlign: "center",
  },

  SmallTextBox: {
    width: "45%",
    color: "white",
    backgroundColor: "#2D2A2F",
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

  BTNOrange: {
    backgroundColor: "#EC853B",
    color: "white",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 55,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  Cancelar: {
    marginTop: "5%",
    color: "#EC853B",
    borderWidth: 2,
    borderColor: "#EC853B",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 75,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
