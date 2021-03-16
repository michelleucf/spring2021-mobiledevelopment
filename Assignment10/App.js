import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Name from './components/Name.js';
import Food from './components/Food.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Name/> 
      <Food/>  
    </View>
 
    // name component and food component in seperate files under components.    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});