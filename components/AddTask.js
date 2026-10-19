import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from '../styles.js';

export function AddTask({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [list, setList] = useState('');

  const saveTask = () => {
    const newTask = {
      title: title,
      list: list,
      completed: false,
    };

    onAddTask(newTask);

    setTitle('');
    setList('');
  };

  return (
    <View>
      <View style={styles.logoContainer}>
        <Text style={styles.addTaskTitle} >Add Task</Text>
      </View>
      
      <TextInput style={styles.taskInputBox}
        placeholder="Task name"
        value={title}
        onChangeText={setTitle}
      />
      
      <View style={styles.space} />

      <TextInput style={styles.taskInputBox}
        placeholder="List"
        value={list}
        onChangeText={setList}
      />

      <Button
        title="Save Task"
        onPress={saveTask}
      />
    </View>
  );
}