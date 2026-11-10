import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export function AddTaskScreen({ onAddTask }) {

  const [title, setTitle] = useState('');
  const [list, setList] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  const saveTask = () => {

    if (title === '' || list === '') {
      Alert.alert('Error', 'Please enter a task name and list.');
      return;
    }

    // .test(dueDate) returns true if the dueDate matches 
    // \d{1,2} 1 or 2 digits
    if (dueDate !== '' && !/^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(dueDate)) {
      Alert.alert('Error', 'Please enter a valid due date in MM/DD/YYYY format.');
      return;
    }

    if (time !== '' && !/^\d{1,2}:\d{1,2}\s?(AM|PM)$/i.test(time)) {
      Alert.alert('Error', 'Please enter a valid time in HH:MM AM/PM format.');
      return;
    }

    const newTask = {
      title: title,
      list: list,
      dueDate: dueDate,
      time: time,
      location: location,
      notes: notes
    };

    onAddTask(newTask);

    Alert.alert('Success', 'Task added!');

    setTitle('');
    setList('');
    setDueDate('');
    setTime('');
    setLocation('');
    setNotes('');
  };

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageTitle}>Add Task</Text>
      <Text style={styles.inputBoxLabel}>Task name</Text>
      
      <TextInput style={styles.taskInputBox}
        placeholder="Enter task name"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.inputBoxLabel}>List</Text>
      <TextInput style={styles.taskInputBox}
        placeholder="Select a List"
        value={list}
        onChangeText={setList}
      />

      <Text style={styles.inputBoxLabel}>Due Date</Text>
      <TextInput style={styles.taskInputBox}
        placeholder="MM/DD/YYYY"
        value={dueDate}
        onChangeText={setDueDate}
      />

      <Text style={styles.inputBoxLabel}>Time</Text>
      <TextInput style={styles.taskInputBox}
        placeholder="Enter a Time"
        value={time}
        onChangeText={setTime}
      />

      <Text style={styles.inputBoxLabel}>Location</Text>
      <TextInput style={styles.taskInputBox}
        placeholder="Optional"
        value={location}
        onChangeText={setLocation}
      />

      <Text style={styles.inputBoxLabel}>Notes</Text>
      <TextInput style={styles.taskInputBox}
        placeholder="Optional"
        value={notes}
        onChangeText={setNotes}
      />

      <TouchableOpacity style={styles.saveTaskButton} onPress={saveTask}>
        <Text style={styles.saveTaskButtonText}>Save Task</Text>
      </TouchableOpacity>

    </View>
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