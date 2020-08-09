import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import RootStackScreen from './src/Navigation/RootStackNavigator/RootStackNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
      <RootStackScreen />
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
