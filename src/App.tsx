import { Hola } from '@Hola';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

const App = () => (
  <View className= "bg-gray-500">
    <Hola/>
    <StatusBar style="auto" />
  </View>
);
export default App;