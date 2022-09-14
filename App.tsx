import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button}>
      <TextInput  style={styles.TextInput} placeholder='Pesquisar' >  </TextInput></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#889e0efb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    color: '#0813a5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:5
  },
  Button: {
    width: '40%',
    height:30,
    backgroundColor: '#2a5205',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:14,
    borderRadius:10,
  },

});
