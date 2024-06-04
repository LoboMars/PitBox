import React,{ useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from "react-native";
import MainDesfoque from '../Image/MainDesfoque.png'
import Car  from '../Image/carPurple.png'
import { useNavigation, useRoute } from '@react-navigation/native';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase.config"; 


export default function EliminarViatura() {
  const navigation = useNavigation();
  const route = useRoute();
  const { viaturaId } = route.params;

  const [Marca, setMarca] = useState("");
  const [Modelo, setModelo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "viatura", viaturaId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setMarca(data.Marca);
          setModelo(data.Modelo);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error('Erro ao buscar documento: ', error);
      }
    };
    fetchData();
  }, []);

  const deleteDocument = async () => {
    try {
      await deleteDoc(doc(db, "viatura", viaturaId));
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
            <Text style={styles.textWhite}>Tem certeza que deseja</Text>
            <Text style={styles.textWhite}>excluir esta <Text style={styles.textPurple}>Viatura</Text>?</Text>
            <View style={{ marginTop: "10%" }} />
            <Text style={styles.Smalltextwhite}>{Marca} {' '} {Modelo}</Text>
            <View style={{ marginTop: "1%" }} />
            <Image
              source={Car}
              style={styles.Icon}
            />
            <View style={{ marginTop: "15%" }} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginHorizontal: '4%' }} />
            <TouchableOpacity onPress={deleteDocument}>
              <Text style={styles.BtnSim}>Sim</Text>
            </TouchableOpacity>
            <View style={{ marginHorizontal: '5%' }} />
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.BtnNao}>Não</Text>
            </TouchableOpacity>
          </View>
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
    textAlign: "center",
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
  
  Box: {
    color: "#9F9BA8",
    backgroundColor: "#383343",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 30,
    justifyContent: "center",
  },


  
  Title: {
    alignItems: "center",
    textAlign: "center",
  },


  textWhite: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },


  Smalltextwhite: {
    color: "white",
    fontSize: 17,
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


  BtnSim: {
    backgroundColor: '#C33434',
    color: 'white',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 25,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  BtnNao: {
    color: '#6D4EE5',
    borderWidth: 1,
    borderColor: '#6D4EE5',
    borderWidth: 3,
    borderRadius: 15,
    paddingVertical: 13,
    paddingHorizontal: 23,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
