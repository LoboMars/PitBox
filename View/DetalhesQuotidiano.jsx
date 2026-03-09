import React, { forwardRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from "react-native";
import MainDesfoque from '../Image/MainDesfoque.png'
import Direcao  from '../Image/Direcao.png'
import Apagar  from  '../Image/Apagar.png'
import Editar from '../Image/Editar.png'
import { getDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase.config"; 

export default function DetalhesQuotidiano() {

  const [Chegada, setChegada] = useState("");
  const [Comportamento, setComportamento] = useState("");
  const [Consumo, setConsumo] = useState("");
  const [Kilometros, setKilometros] = useState("");
  const [Partida, setPartida] = useState("");
  const [Viatura_Usada, setViatura_Usada] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "Evento", "1"); 
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setChegada(data.Chegada);
        setComportamento(data.Comportamento);
        setConsumo(data.Consumo);
        setKilometros(data.Kilometros);
        setPartida(data.Partida);
        setViatura_Usada(data.Viatura_Usada);
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, []);

  const deleteDocument = async () => {
    try {
      await deleteDoc(doc(db, "Evento", "1"));
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
                    <Text style={styles.textPurple}>Eventos do Quotidiano</Text>
                    <Text style={styles.textWhite}>{Partida} - {Chegada}</Text>

                    <View style={{marginTop: "15%"}}/>

                    <Image
                    source={Direcao}
                    style={styles.Icon}
                /> 

                 <View style={{marginTop: "15%"}}/>

                </View>
            
                <View style={styles.Boddy}>
                    <Text style={styles.Smalltextwhite}>Tipo:  <Text style={styles.Smalltextgrey}>Viagem Média</Text> </Text>
                    <View style={{marginTop: "5%"}}/>
                    <Text style={styles.Smalltextwhite}>Viatura:  <Text style={styles.Smalltextgrey}>{Viatura_Usada}</Text> </Text>
                    <View style={{marginTop: "5%"}}/>
                    <Text style={styles.Smalltextwhite}>Nº Kilometros:  <Text style={styles.Smalltextgrey}>{Kilometros}</Text> </Text>
                    <View style={{marginTop: "5%"}}/>
                    <Text style={styles.Smalltextwhite}>Consumo Médio:  <Text style={styles.Smalltextgrey}>{Consumo}</Text> </Text>
                    <View style={{marginTop: "5%"}}/>
                    <Text style={styles.Smalltextwhite}>Comportamento Invulgar:  <Text style={styles.Smalltextgrey}>{Comportamento}</Text> </Text>
                    <View style={{marginTop: "15%"}}/>
                </View>

            </View>

            <View style={styles.textBoxContainer}>
                    <View style={{marginTop: "15%"}}/>
                <View style={{flexDirection:'row'}}>
                    <View style={{marginHorizontal: '2%'}} />

                        <TouchableOpacity onPress={deleteDocument}>
                            <Image
                                source={Apagar}
                                style={styles.IconSmall}
                                /> 
                        </TouchableOpacity>
   
                    <View style={{marginHorizontal: '7%'}} />

                    <TouchableOpacity>
                        <Text style={styles.SmallBox}>OK</Text>
                    </TouchableOpacity>

                    <View style={{marginHorizontal: '7%'}} />
                    <TouchableOpacity>
                        <Image
                            source={Editar}
                            style={styles.IconSmall}
                            /> 
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
    width: "95%",
    color: "#9F9BA8",
    backgroundColor: "#383343",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 29,
    marginLeft:'2%'
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
    fontSize: 23,
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
    fontSize: 20,
  },



  Icon: {
    width: 170,
    height: 100,
  },

  IconSmall: {
    width: 50,
    height: 50,
  },

});
