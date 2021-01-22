import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

const BigText = styled.Text`
  font-size: 24px;
  fort-weight: bold;
`;


export default function App() {
  return (
    <View style={styles.container}>
      <Text>HellowoRld</Text>
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
