import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f27d9',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
});

const Home = () => (
  <View
    style={styles.container}
  >
    <Text style={styles.welcome}>Hello CJR!</Text>
  </View>
);

export default Home;