import React from "react";
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput,ScrollView } from "react-native";
import MainDesfoque from '../Image/MainDesfoque.png'
import Car  from '../Image/carPurple.png'
import Apagar  from  '../Image/Apagar.png'
import Editar from '../Image/Editar.png'

export default function DetalhesAssistencia() {
  return (
    <View style={styles.container}>
      <Image
        source={MainDesfoque}
        style={styles.backgroundImage}
      />

        <View style={styles.textBoxContainer}>
            <View style={styles.Box}>

                <View style={styles.Title}>
                    <Text style={styles.textPurple}>Assistencia Mecanica</Text>
                    <Text style={styles.textWhite}>Ferrari 458 Italia</Text>

                    <View style={{marginTop: "15%"}}/>

                    <Image
                    source={Car}
                    style={styles.Icon}
                /> 

                 <View style={{marginTop: "15%"}}/>

                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.Boddy}>
                            <Text style={styles.Smalltextwhite}>Oficina:  <Text style={styles.Smalltextgrey}>Hot Wheels</Text> </Text>
                            <View style={{marginTop: "5%"}}/>
                            <Text style={styles.Smalltextwhite}>Data:  <Text style={styles.Smalltextgrey}>29/02/2024</Text> </Text>
                            <View style={{marginTop: "5%"}}/>
                            <Text style={styles.Smalltextwhite}>Tipo de Assistência:  <Text style={styles.Smalltextgrey}>Revisão periodica</Text> </Text>
                            <View style={{marginTop: "5%"}}/>
                            <Text style={styles.Smalltextwhite}>Procedimento:  <Text style={styles.Smalltextgrey}>Yapping Yapping.. </Text> </Text>
                            <View style={{marginTop: "5%"}}/>
                            <Text style={styles.Smalltextwhite}>Descrição:  <Text style={styles.Smalltextgrey}>Yapping Yapping  Yapping Yapping Yapping Yapping Yapping Yapping Yapping Yapping</Text> </Text>
                            <View style={{marginTop: "15%"}}/>
                        </View>
                </ScrollView>
            
            </View>

            <View style={styles.textBoxContainer}>
                    <View style={{marginTop: "15%"}}/>
                <View style={{flexDirection:'row'}}>
                    <View style={{marginHorizontal: '3%'}} />

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
  scrollView: {
    maxHeight: 200,
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
    width: "90%",
    color: "#9F9BA8",
    backgroundColor: "#383343",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 29,
    marginLeft:'5%'
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
    fontSize: 30,
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
