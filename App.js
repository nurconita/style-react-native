import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const App = () => {
  return(
    <View style={styles.viewContainer}>
    <Text style={styles.text1}>Hello Am Bold</Text>
    <Text style={styles.text2}>Hello Am Italic</Text>
    <Text style={styles.text3}>Hello Am Underline</Text>
    <Text style={styles.text4}>Hello Iam Big</Text>
    <Text style={styles.text5}>Hello Iam BIg And Have Color</Text>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  viewContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text1: {
    fontWeight: 'bold',
  },
  text2: {
    fontStyle: 'italic',
  },
  text3: {
    textDecorationLine: 'underline',
  },
  text4: {
    fontWeight: 'bold',
    fontSize: 20
  },
  text5: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'blue'
  },

});
