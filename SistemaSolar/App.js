import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import {Orbitron_400Regular, useFonts} from '@expo-google-fonts/orbitron';

import {planetas} from "./planetas"
import {Planet} from "./Planet"
import { useState } from 'react';

export default function App() {

  const [fontsLoaded] = useFonts({
    Orbitron_400Regular,
  })

  const [currentPlanet, setCurrentPLanet] = useState(0)

  if (!fontsLoaded) {
    return null;
  }

  const Next = () => {
    if (currentPlanet < planetas.length - 1) {
      setCurrentPLanet(currentPlanet + 1)
    }
  }

  const Previous = () => {
    if (currentPlanet > 0) {
      setCurrentPLanet(currentPlanet - 1)
    }
  }

  return (
    <ImageBackground style={styles.background} source={{uri: 'https://cdn.pixabay.com/photo/2019/01/02/02/37/background-3907905_1280.jpg'}}>

    <SafeAreaView style={styles.safe}>
      <StatusBar />
    
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Vamos Explorar!</Text>
        <Image style={styles.headerImage} source={require("./assets/alien.png")}/>
      </View>

      <ScrollView>
        <Planet planeta={planetas[currentPlanet]}/>
        {/* {planetas.map((planeta) => (
          <Planet planeta={planeta}/>
        ))} */}
      
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={Previous} disabled={currentPlanet === 0}>
          <Text style={styles.buttonText}>Anterior</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={Next} disabled={currentPlanet === planetas.length - 1}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>


      </ScrollView>

    </SafeAreaView>
    </ImageBackground>
  );

}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  safe: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%'
  },
  scrollView: {
    alignItems: 'center'
  },
  headerImage: {
    width:60,
    height:60
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  headerTitle: {
    fontSize:26,
    fontFamily: 'Orbitron',
    fontWeight: 'bold',
    color: '#FFF'
  },
  button: {
    backgroundColor: "blue",
    width: 120,
    height: 45,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 8
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Orbitron',
    fontSize: 18
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10
  }
});
