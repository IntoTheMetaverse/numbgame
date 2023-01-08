import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import { useState } from 'react'

import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  //Helper Function
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
  //If check in component function because it will re-execute whenever state changes
  // "truthy" = not null & not zero
  if(userNumber) {
    screen = <GameScreen />
  }

  return (
    <View style={styles.rootScreen}>
      <ImageBackground source={require('./assets/img/07.png')} 
        resizeMode="cover" 
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.95
  }

});
