import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
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
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config"; 



export default function EditarAssistencia() {
  const [Partida, setPartida] = useState("");
  const [Chegada, setChegada] = useState("");
  const [Comportamento, setComportamento] = useState("");
  const [Consumo, setConsumo] = useState("");
  const [Nº_Kilometros, setNº_Kilometros] = useState("");
  const [Viatura_Usada, setViatura_Usada] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "Evento", "1"); 
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setPartida(data.Partida);
        setChegada(data.Chegada);
        setComportamento(data.Comportamento);
        setConsumo(data.Consumo);
        setNº_Kilometros(data.Nº_Kilometros);
        setViatura_Usada(data.Viatura_Usada);
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async () => {
      const docRef = doc(db, "Evento", "1");
      await updateDoc(docRef, {
        Partida,
        Chegada,
        Comportamento,
        Consumo,
        Nº_Kilometros,
        Viatura_Usada,
      });
  };
  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.BigText}>Editar Quotidiano</Text>

        <View style={{ marginTop: "5%" }} />
        <View style={styles.line} />

      </View>


      <View style={styles.content}>

        <ScrollView>

        <View style={{ marginTop: "3%" }} />

        <View style={styles.textBoxContainer}>
        <Text style={styles.smallText}>Viagem:</Text>
      </View>

      <View style={styles.textBoxContainer}>
          <TextInput
            style={styles.TextBox} // Estilo para o TextInput
            placeholder="Local de Partida"
            placeholderTextColor="#9F9BA8"
            value={Partida}
            onChangeText={setPartida}
          />
          <TextInput
            style={styles.TextBox} // Estilo para o TextInput
            placeholder="Local de Chegada"
            placeholderTextColor="#9F9BA8"
            value={Chegada}
            onChangeText={setChegada}
          />
        </View>

      <View style={{ marginTop: "5%" }} />

      <View style={styles.textBoxContainer}>
        <Text style={styles.smallText}>Viatura Usada:</Text>
      </View>

      <View style={styles.textBoxContainer}>
      <TextInput
            style={styles.TextBox} // Estilo para o TextInput
            placeholder="-Escolher- "
            placeholderTextColor="#9F9BA8"
            value={Viatura_Usada}
            onChangeText={setViatura_Usada}
          />
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
  <View style={{ flexDirection: 'row' }}>
    <TextInput
      style={styles.SmallTextBox} // Estilo para o TextInput
      placeholder="Km"
      placeholderTextColor="#9F9BA8"
      value={Nº_Kilometros}
      onChangeText={setNº_Kilometros}
    />
    <View style={{ marginHorizontal: '5%' }} />
    <TextInput
      style={styles.SmallTextBox} // Estilo para o TextInput
      placeholder="Litros"
      placeholderTextColor="#9F9BA8"
      value={Consumo}
      onChangeText={setConsumo}
    />
  </View>
</View>

      <View style={{ marginTop: "5%" }} />

      <View style={styles.textBoxContainer}>
        <Text style={styles.smallText}>Comportamento Invulgar:</Text>
      </View>

      <View style={styles.textBoxContainer}>
              <TextInput
                style={styles.BigTextBox} // Estilo para o TextInput
                placeholder="-Nenhum- "
                placeholderTextColor="#9F9BA8"
                multiline={true} 
                value={Comportamento}
                onChangeText={setComportamento}
                
                />
      </View>

      <View style={{ marginBottom: "3%" }} />

        </ScrollView>
      </View>


      <View style={styles.footer}>

        <View style={styles.line} />

        <TouchableOpacity onPress={handleUpdate}>
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
    fontSize: 18,
    textAlign: "left",
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
    paddingHorizontal: 25,
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
