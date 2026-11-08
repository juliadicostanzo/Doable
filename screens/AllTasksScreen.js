import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Task } from '../components/Task.js';

export function AllTasksScreen({ tasks }) {
  return (
    <ScrollView style={styles.pageContainer}>
      <Text style={styles.pageTitle}>All Tasks</Text>
      
      <View style={styles.taskBox}>
        {tasks.map((task, index) => (
          <View key={task.id}>
            <Task
              title={task.title}
              list={task.list}
              date={task.dueDate}
              time={task.time}
            />

            {index < tasks.length - 1 && (
              <View style={styles.divider} />
            )}
            </View>
          ))}
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