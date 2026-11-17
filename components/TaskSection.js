import { View, Text, StyleSheet } from 'react-native';
import { Task } from './Task.js';

export function TaskSection({ title, tasks, lists, emptyMessage, onToggleTaskComplete }) {

  return (
    <>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.taskBox}>

        {tasks.length === 0 ? (
          <Text style={styles.noTasksText}> {emptyMessage} </Text>
        ) : (
          tasks.map((task, index) => {
            
            // Find the Task's list color
            const taskList = lists.find(list => list.name === task.list);

            return (
              <View key={task.id}>
                <Task
                  task={task}
                  color={taskList.color}
                  onPress={() => onToggleTaskComplete(task.id)}
                />

                {index < tasks.length - 1 && (
                  <View style={styles.divider} />
                )}
              </View>
            );
          })
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  taskBox: {
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    width: '100%',
    marginBottom: 25,
  },

  noTasksText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    paddingVertical: 10,
  },

  divider: {
    height: 1,
    backgroundColor: '#dddddd',
    marginVertical: 10,
  },

});