import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  inputValue,
} from "react-native";

import EditarPerfil from '../Image/EditarPerfil.png'
import LogOut from '../Image/LogOut.png'

export default function MainPage() {
  return (
    <View style={styles.container}>
        
      <ScrollView contentContainerStyle={styles.scrollView}> 

            <View style={{ marginTop: "5%" }}/>

            <View style={styles.imageContainer}>
            <Image source={LogOut} style={styles.logo}/>
            <Image source={EditarPerfil} style={styles.logo2}/>
            </View>
            
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: '10%', 
  },
  
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#2D2A2F",
  },

  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    width: '100%',
  },
  logo: {
    width: '20%',
    aspectRatio: 1,
  }, 
  logo2: {
    width: '30%',
    aspectRatio: 1,
  }, 
});
