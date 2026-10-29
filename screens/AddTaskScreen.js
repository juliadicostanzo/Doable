import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export function AddTaskScreen() {
  return (
    <View style={styles.addTaskPage}>
      <Text style={styles.addTaskTitle}>Add Task</Text>
      <Text style={styles.inputBoxLabel}>Task name</Text>
      <TextInput style={styles.taskInputBox}
        placeholder="Enter task name"
      />

      <Text style={styles.inputBoxLabel}>List</Text>
      <TextInput style={styles.taskInputBox}
        placeholder="Select a List"
      />

      <Text style={styles.inputBoxLabel}>Due Date</Text>
      <TextInput style={styles.taskInputBox}
        placeholder="MM/DD/YYYY"
      />

      <Text style={styles.inputBoxLabel}>Time</Text>
      <TextInput style={styles.taskInputBox}
        placeholder="Enter a Time"
      />

      <Text style={styles.inputBoxLabel}>Location</Text>
      <TextInput style={styles.taskInputBox}
        placeholder="Optional"
      />

      <Text style={styles.inputBoxLabel}>Notes</Text>
      <TextInput style={styles.taskInputBox}
        placeholder="Optional"
      />

      <TouchableOpacity style={styles.saveTaskButton}>
        <Text style={styles.saveTaskButtonText}>Save Task</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  addTaskPage: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  addTaskTitle: {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  inputBoxLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 8,
  },
  

  taskInputBox: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    width: '100%',
  },

  saveTaskButton: {
    marginTop: 25,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#2d68e9',
    alignItems: 'center',
  },

  saveTaskButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});