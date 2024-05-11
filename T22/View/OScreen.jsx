import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import OScreenP from '../Image/OScreenP.png'
import Logo from '../Image/Logo.png'


export default function OScreen() {
    return (
      <View style={styles.container}>
        <View style={{paddingBottom: '5%'}}>
          <Image source={Logo} style={styles.Logo}/>
        </View>
        <Text style={styles.textWhite}>Conserto <Text style={styles.textPurple}>rápido</Text>, serviço de <Text style={styles.textPurple}>qualidade</Text>.</Text>
        <Text style={styles.textWhite}>A nossa App é a chave</Text>
        <Image  source={OScreenP} style={styles.homeIm}/>
        <View>
          <TouchableOpacity>
            <View>
            <Text style={styles.Login}>Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
            <Text style={styles.Register}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.textGray}>@ 2024 PitBox, Inc. All rights reserved</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    width: '100%' ,
    flex: 1,
    backgroundColor: '#232427',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '10%',
  },
  textGray:{
    color: "#9F9BA8",
  },
  textWhite: {
    color: 'white',
  },
  textPurple: {
    color:'#6D4EE5'
  },
  Login: {
    marginTop: '5%',
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 75,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Register: {
    marginTop: '15%',
    backgroundColor: '#6D4EE5',
    color: 'white',
    paddingVertical: 25,
    borderRadius: 15,
    paddingHorizontal: 75,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  homeIm: {
    marginTop: '1%',
    width: '100%',
    height: '40%',
  },
  logo: {
    width: '30%',
    height: '30%',
  },
});
