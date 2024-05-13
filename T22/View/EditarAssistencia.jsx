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
  inputValue,
} from "react-native";


export default function EditarAssistencia() {
  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.BigText}>Editar Assistencia</Text>

        <View style={{ marginTop: "5%" }} />
        <View style={styles.line} />

      </View>


      <View style={styles.content}>

        <ScrollView>

        <View style={{ marginTop: "5%" }} />

          <View style={styles.textBoxContainer}>
            <Text style={styles.smallText}>Viatura:</Text>
          </View>

          <View style={styles.textBoxContainer}>
            <TextInput
              style={styles.TextBox}
              placeholder="Marca-Modelo"
              placeholderTextColor="white" />
          </View>

          <View style={{ marginTop: "5%" }} />

          <View style={styles.textBoxContainer}>
            <Text style={styles.smallText}>Oficina:</Text>
          </View>

          <View style={styles.textBoxContainer}>
            <TextInput
              style={styles.TextBox} // Estilo para o TextInput
              placeholder="Nome"
              placeholderTextColor="white" />
          </View>

          <View style={{ marginTop: "5%" }} />

          <View style={styles.textBoxContainer}>
            <Text style={styles.smallText}>Data da Assistência:</Text>
          </View>

          <View style={styles.textBoxContainer}>
            <TextInput
              style={styles.TextBox}
              placeholder="DD/MM/YYYY"
              placeholderTextColor="white" />
          </View>

          <View style={{ marginTop: "5%" }} />

          <View style={styles.textBoxContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.smallText}>Valor da Fatura:</Text>
              <View style={{ marginHorizontal: '5%' }} />

              <TextInput
                style={styles.SmallTextBox}
                placeholder="0$"
                placeholderTextColor="white"
                keyboardType="numeric"
                mask="$[999999]" />
            </View>

            <View style={{ marginTop: "5%" }} />

            <View style={styles.textBoxContainer}>
              <Text style={styles.smallText}>Detalhes:</Text>
            </View>

            <View style={styles.textBoxContainer}>
              <TextInput
                style={styles.TextBox} // Estilo para o TextInput
                placeholder="Revisão"
                placeholderTextColor="white" />
              <TextInput
                style={styles.BigTextBox} // Estilo para o TextInput
                placeholder="..."
                placeholderTextColor="white"
                multiline={true} />
            </View>

          </View>

        </ScrollView>
      </View>


      <View style={styles.footer}>

        <View style={styles.line} />

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

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginTop: "10%",
  },
  content: {
    flex: 7,
  },
  footer: {
    flex: 2,
    marginTop: "3%",
    marginBottom: "10%",
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
    textAlign: "right",
  },

  BigTextBox: {
    width: "100%",
    color: "white",
    backgroundColor: "#2D2A2F",
    borderWidth: 1,
    borderColor: "#9F9BA8",
    marginTop: "5%",
    borderRadius: 15,
    textAlign: 'start',
    paddingVertical: 10,
    paddingHorizontal: 35,
    fontSize: 18,
  },

  BTNpurple: {
    backgroundColor: "#6D4EE5",
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
    color: "#6D4EE5",
    borderWidth: 3,
    borderColor: "#6D4EE5",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 75,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

});
