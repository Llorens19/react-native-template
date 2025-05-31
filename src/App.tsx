import { Hola } from '@Hola';
import { StatusBar } from 'expo-status-bar';
import { JSX } from 'react';
import { StyleSheet, View } from 'react-native';

const App = (): JSX.Element => (
  <View style={styles.container}>
    <Hola/>
    <StatusBar style="auto" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;