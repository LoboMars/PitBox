import React from "react";
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from "react-native";
import MainDesfoque from '../Image/MainDesfoque.png'
import Car  from '../Image/carPurple.png'


export default function EliminarAssistencia() {
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
                            <Text style={styles.textWhite}>eliminar esta <Text style={styles.textPurple}>Assistencia </Text></Text>
                            <Text style={styles.textPurple}>Mecânica <Text style={styles.textWhite}>?</Text></Text>

                            <View style={{marginTop: "10%"}}/>


                            <Text style={styles.Smalltextwhite}>Ferrari - Revisão Periódica</Text>

                            <View style={{marginTop: "1%"}}/>

                            <Image
                            source={Car}
                            style={styles.Icon}
                            /> 

                            <View style={{marginTop: "15%"}}/>

                        </View>

                        <View style={{flexDirection:'row'}}>
                            <View style={{marginHorizontal: '7%'}} />

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
    paddingVertical: 20,
    paddingHorizontal: 20,
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
