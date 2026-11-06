import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Task } from '../components/Task.js';

export function AllTasksScreen() {
  return (
    <ScrollView style={styles.pageContainer}>
      <Text style={styles.pageTitle}>All Tasks</Text>
      
      <View style={styles.taskBox}>
        <Task title="Lab 6" list="Mobile" date="10/16/26" time="10:00AM"/>
        <View style={styles.divider} />
        <Task title="Read Section 3.4" list="Networks"  date="10/16/26" time="10:00AM"/>
        <View style={styles.divider} />
        <Task title="Project Demo Slides" list="Internship"  date="10/16/26" time="10:00AM"/>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20, //everything on page is 20 pixels from horizontal edge
    paddingTop: 60,
  },

  pageTitle: {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  taskBox: {
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    width: '100%',
  },

  divider: {
    height: 1,
    backgroundColor: '#dddddd',
    marginVertical: 10,
  },
});