//Julia Di Costanzo, Lab 6, Oct 15

import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text } from 'react-native';
//import { Task } from './components/Task.js';
import {styles} from './styles.js';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logo}> Doable </Text>
      
      <StatusBar style="auto" />
    </ScrollView>
  );
};
