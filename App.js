import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import { styles } from './styles.js';

import { TodayTask } from './components/TodayTask.js';
import { AddTask } from './components/AddTask.js';
import { TaskList } from './components/TaskList.js';
import { Calendar } from './components/Calendar.js';


export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Project Part 1',
      list: 'Mobile',
      dueDate: '10/26/26',
      completed: false,
    },
    {
      id: '2',
      title: 'Networks Lab',
      list: 'Networks',
      dueDate: '10/26/26',
      completed: false,
    },
  ]);
  
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const today = new Date().toLocaleDateString(undefined, {
    weekday: 'long', // "Monday"
    year: 'numeric', // "2026"
    month: 'long',   // "October"
    day: 'numeric',  // "17"
  });

  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      
      <View style={styles.logoContainer}>
        <Text style={styles.logo}> Doable </Text>
      </View>
      
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{today}</Text>
      </View>

      <View style={styles.todaysProgressContainer}>
        <Text style={styles.todayTitle}> Today's Progress </Text>
        
        <View style={styles.progressBox}>
          <Text>Progress bar</Text>
          <Text>0 out of 3 tasks done</Text>
        </View>
      
      </View>

      <View style={styles.space}/>

      <View style={styles.todaysTasksContainer}>
        <Text style={styles.todayTitle}> Today's Tasks </Text>
          <View style={styles.todayTaskBox}>
            {tasks.map((task, index) => (
              <View key={index}>
                <TodayTask title={task.title} list={task.list} />
              {index < tasks.length - 1 && (
                <View style={styles.divider} />
              )}
              </View>
            ))}
          </View>
      </View>

      <View style={styles.space} />

      <AddTask onAddTask={addTask} />

      

      
      
      <StatusBar style="auto" />
    </ScrollView>
  );
};
