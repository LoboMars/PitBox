import React from "react";
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from "react-native";
import MainDesfoque from '../Image/MainDesfoque.png'
import Direcao  from '../Image/Direcao.png'
import Apagar  from  '../Image/Apagar.png'
import Editar from '../Image/Editar.png'

export default function DetalhesQuotidiano() {
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
                    <Text style={styles.textWhite}>Bragança - Mirandela </Text>

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
                    <Text style={styles.Smalltextwhite}>Viatura:  <Text style={styles.Smalltextgrey}>Renault Clio</Text> </Text>
                    <View style={{marginTop: "5%"}}/>
                    <Text style={styles.Smalltextwhite}>Nº Kilometros:  <Text style={styles.Smalltextgrey}>62KM</Text> </Text>
                    <View style={{marginTop: "5%"}}/>
                    <Text style={styles.Smalltextwhite}>Consumo Médio:  <Text style={styles.Smalltextgrey}>5.3L</Text> </Text>
                    <View style={{marginTop: "5%"}}/>
                    <Text style={styles.Smalltextwhite}>Comportamento Invulgar:  <Text style={styles.Smalltextgrey}>-Nenhum-</Text> </Text>
                    <View style={{marginTop: "15%"}}/>
                </View>

            </View>

            <View style={styles.textBoxContainer}>
                    <View style={{marginTop: "15%"}}/>
                <View style={{flexDirection:'row'}}>
                    <View style={{marginHorizontal: '2%'}} />

                        <TouchableOpacity>
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
