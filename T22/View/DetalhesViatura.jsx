import React from "react";
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from "react-native";
import MainDesfoque from '../Image/MainDesfoque.png'
import Car  from '../Image/carPurple.png'
import Apagar  from  '../Image/Apagar.png'
import Editar from '../Image/Editar.png'

export default function DetalhesViatura() {
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
                    <Text style={styles.textWhite}>Renault Clio</Text>

                    <View style={{marginTop: "15%"}}/>

                    <Image
                    source={Car}
                    style={styles.Icon}
                /> 

                 <View style={{marginTop: "15%"}}/>

                </View>
            
                <View style={styles.Boddy}>
                    <Text style={styles.Smalltextwhite}>Tipo:  <Text style={styles.Smalltextgrey}>carro</Text> </Text>
                    <View style={{marginTop: "5%"}}/>
                    <Text style={styles.Smalltextwhite}>Data de fabrico:  <Text style={styles.Smalltextgrey}>01/01/2008</Text> </Text>
                    <View style={{marginTop: "5%"}}/>
                    <Text style={styles.Smalltextwhite}>Cor:  <Text style={styles.Smalltextgrey}>preto</Text> </Text>
                    <View style={{marginTop: "5%"}}/>
                    <Text style={styles.Smalltextwhite}>Combustível:  <Text style={styles.Smalltextgrey}>Gasolina</Text> </Text>
                    <View style={{marginTop: "5%"}}/>
                    <Text style={styles.Smalltextwhite}>Matricula:  <Text style={styles.Smalltextgrey}>37-82-XN</Text> </Text>
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
    color: "#9F9BA8",
    backgroundColor: "#383343",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 60,
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
