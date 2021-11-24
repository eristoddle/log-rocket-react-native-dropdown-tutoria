import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dropdown from './src/components/Dropdown';

export default function App() {
  return (
    <View style={styles.container}>
      <Dropdown label={'Select Item'} />
      <Text>This is the rest of the form.</Text>
      <StatusBar style="auto" />
    </View>
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
