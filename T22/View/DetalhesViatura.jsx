import React, { forwardRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from "react-native";
import MainDesfoque from '../Image/MainDesfoque.png'
import Car  from '../Image/carPurple.png'
import Apagar  from  '../Image/Apagar.png'
import Editar from '../Image/Editar.png'
import { getDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.config"; 


export default function DetalhesViatura() {
  const [Tipo_Viatura, setTipo_Viatura] = useState("");
  const [Marca, setMarca] = useState("");
  const [Modelo, setModelo] = useState("");
  const [Data_fabrico, setData_fabrico] = useState("");
  const [Matricula, setMatricula] = useState("");
  const [Cor, setCor] = useState("");
  const [Combustivel, setCombustivel] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "viatura", " 2"); 
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setTipo_Viatura(data.Tipo_Viatura);
        setMarca(data.Marca);
        setModelo(data.Modelo);
        setData_fabrico(data.Data_fabrico);
        setMatricula(data.Matricula);
        setCor(data.Cor);
        setCombustivel(data.Combustivel);
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, []);

  const deleteDocument = async () => {
    try {
      await deleteDoc(doc(db, "viatura", "2"));
      console.log('Documento excluído com sucesso.');
    } catch (error) {
      console.error('Erro ao excluir documento: ', error);
    }
  };


  return (
    <View style={styles.container}>
      <Image
        source={MainDesfoque}
        style={styles.backgroundImage}
      />

      <View style={styles.textBoxContainer}>
        <View style={styles.Box}>
          <View style={styles.Title}>
            <Text style={styles.textPurple}>Viatura</Text>
            <Text style={styles.textWhite}>{Marca} {Modelo}</Text>
            <View style={{ marginTop: "15%" }} />
            <Image
              source={Car}
              style={styles.Icon}
            />
            <View style={{ marginTop: "15%" }} />
          </View>

          <View style={styles.Boddy}>
            <Text style={styles.Smalltextwhite}>Tipo: <Text style={styles.Smalltextgrey}>{Tipo_Viatura}</Text> </Text>
            <View style={{ marginTop: "5%" }} />
            <Text style={styles.Smalltextwhite}>Data de fabrico: <Text style={styles.Smalltextgrey}>{Data_fabrico}</Text> </Text>
            <View style={{ marginTop: "5%" }} />
            <Text style={styles.Smalltextwhite}>Cor: <Text style={styles.Smalltextgrey}>{Cor}</Text> </Text>
            <View style={{ marginTop: "5%" }} />
            <Text style={styles.Smalltextwhite}>Combustível: <Text style={styles.Smalltextgrey}>{Combustivel}</Text> </Text>
            <View style={{ marginTop: "5%" }} />
            <Text style={styles.Smalltextwhite}>Matricula: <Text style={styles.Smalltextgrey}>{Matricula}</Text> </Text>
            <View style={{ marginTop: "15%" }} />
          </View>
        </View>
      </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={deleteDocument} style={styles.iconButton}>
            <Image source={Apagar} style={styles.IconSmall} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.okButton}>
            <Text style={styles.SmallBox}>OK</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Image source={Editar} style={styles.IconSmall} />
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  textBoxContainer: {
    marginBottom: "1%",
  },

  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '5%',
  },
  
  Box: {
    color: "#9F9BA8",
    backgroundColor: "#383343",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },

  SmallBox: {
    color: "#9F9BA8",
    backgroundColor: "#383343",
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 40,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  

  Title: {
    alignItems: "center",
    textAlign: "center",
  },

  Boddy: {
    textAlign: "left",
    justifyContent: "left",
  },

  textWhite: {
    color: "white",
    fontSize: 35,
  },

  Smalltextgrey: {
    color: "grey",
    fontSize: 15,
  },

  Smalltextwhite: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },

  textPurple: {
    color: "#6D4EE5",
    fontSize: 25,
  },



  Icon: {
    width: 150,
    height: 150,
  },

  IconSmall: {
    width: 50,
    height: 50,
  },

});
