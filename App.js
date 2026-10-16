import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { Task } from './components/Task.js';
import {styles} from './styles.js';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      
      <View style={styles.logoContainer}>
        <Text style={styles.logo}> Doable </Text>
      </View>

      <View style={styles.todaysTasksContainer}>
        
        <Text style={styles.todayTitle}> Today's Tasks </Text>
          
          <View style={styles.todayTaskBox}>
            <Task title="Project Part 1" dueDate="Oct 16" />
            <View style={styles.divider} />
            <Task title="Networks Lab" dueDate="Oct 16" />
          </View>
      </View>
      
      <StatusBar style="auto" />
    </ScrollView>
  );
};
