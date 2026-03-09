import React from "react";
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from "react-native";
import MainDesfoque from '../Image/oficinaDesfoque.png'
import Oficina  from '../Image/oficinaIcon.png'


export default function EliminarOficina() {
  return (
    <View style={styles.container}>
      <Image
        source={MainDesfoque}
        style={styles.backgroundImage}
      />

        <View style={styles.textBoxContainer}>
            <View style={styles.Box}>

                        <View style={styles.Title}>
                            <Text style={styles.textWhite}>Tem a certeza que quer</Text>
                            <Text style={styles.textWhite}>eliminar esta <Text style={styles.textOrange}>Oficina</Text></Text>

                            <View style={{marginTop: "15%"}}/>


                            <Text style={styles.Smalltextwhite}>Los Santos</Text>

                            <View style={{marginTop: "10%"}}/>

                            <Image
                            source={Oficina}
                            style={styles.Icon}
                            /> 

                            <View style={{marginTop: "15%"}}/>

                        </View>

                        <View style={{flexDirection:'row'}}>
                            <View style={{marginHorizontal: '4%'}} />

                                <TouchableOpacity>
                                    <Text style={styles.BtnSim}>Sim</Text>
                                </TouchableOpacity>
        
                            <View style={{marginHorizontal: '5%'}} />

                            <TouchableOpacity>
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
    paddingVertical: 30,
    paddingHorizontal: 35,
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

  textOrange: {
    color: "#EC853B",
    fontSize: 25,
    fontWeight: "bold",
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
    color: '#EC853B',
    borderWidth: 1,
    borderColor: '#EC853B',
    borderWidth: 3,
    borderRadius: 15,
    paddingVertical: 13,
    paddingHorizontal: 23,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
