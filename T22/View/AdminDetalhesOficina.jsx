import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import MainDesfoque from '../Image/MainDesfoque.png';
import Oficina from '../Image/Oficina.png';
import Apagar from '../Image/Apagar.png';
import Editar from '../Image/editarAdmin.png';
import { db } from "../firebaseConfig"; 
import { doc, getDoc, deleteDoc } from "firebase/firestore";

export default function DetalhesOficinas() {
  const [oficinaData, setOficinaData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "oficinas", "PxJSBAydOY2WxrhmAuth"); 
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setOficinaData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, []);

  const deleteDocument = async () => {
    try {
      await deleteDoc(doc(db, "oficinas", "los-santos"));
      console.log('Documento excluído com sucesso.');
      setOficinaData(null);  // Clear the state after deletion
    } catch (error) {
      console.error('Erro ao excluir documento: ', error);
    }
  };

  if (!oficinaData) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image
        source={MainDesfoque}
        style={styles.backgroundImage}
      />
      <View style={styles.textBoxContainer}>
        <View style={styles.Box}>
          <View style={styles.Title}>
            <Text style={styles.textOrange}>Oficina</Text>
            <Text style={styles.textWhite}>{oficinaData.nome}</Text>
            <View style={{ marginTop: "15%" }} />
            <Image
              source={Oficina}
              style={styles.Icon}
            />
            <View style={{ marginTop: "15%" }} />
          </View>
          <View style={styles.Boddy}>
            <Text style={styles.Smalltextwhite}>Nome: <Text style={styles.Smalltextgrey}>{oficinaData.nome}</Text> </Text>
            <View style={{ marginTop: "5%" }} />
            <Text style={styles.Smalltextwhite}>Morada: <Text style={styles.Smalltextgrey}>{oficinaData.morada}</Text> </Text>
            <View style={{ marginTop: "5%" }} />
            <Text style={styles.Smalltextwhite}>Contacto: <Text style={styles.Smalltextgrey}>{oficinaData.telefone}</Text> </Text>
            <View style={{ marginTop: "5%" }} />
            <Text style={styles.Smalltextwhite}>Horarios: </Text>
            <Text style={styles.Smalltextgrey}>{`${oficinaData.abertura} - ${oficinaData.encerramento} ${oficinaData.dias}`}</Text>
            <View style={{ marginTop: "5%" }} />
          </View>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={deleteDocument} style={styles.iconButton}>
            <Image
              source={Apagar}
              style={styles.IconSmall}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.okButton}>
            <Text style={styles.SmallBox}>OK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={Editar}
              style={styles.IconSmall}
            />
          </TouchableOpacity>
        </View>
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
  textOrange: {
    color: "#EC853B",
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
  iconButton: {
    // styles for icon buttons
  },
  okButton: {
    // styles for OK button
  },
});
