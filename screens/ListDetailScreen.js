import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, TextInput, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { TaskSection } from '../components/TaskSection.js'; 
import { ListTask } from '../components/ListTask.js'; 

export function ListDetailScreen({ route, navigation, tasks, onToggleTaskComplete, onAddTask}) {
  const { list } = route.params;
  
  // add task 
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskTime, setTaskTime] = useState('');

  // add task modal
  const [modalVisible, setModalVisible] = useState(false);
  
  // show/hide completed uncompleted tasks
  const [showCompleted, setShowCompleted] = useState(true);
  
  const convertToDateTime = (dateString, timeString) => {
    const [month, day, year] = dateString.split('/');

    const [time, period] = timeString.trim().split(/\s+/);
    let [hour, minute] = time.split(':');

    hour = Number(hour);
    minute = Number(minute);

    if (period.toUpperCase() === 'PM' && hour !== 12) {
      hour += 12;
    }

    if (period.toUpperCase() === 'AM' && hour === 12) {
      hour = 0;
    }

    return new Date(
      2000 + Number(year),
      Number(month) - 1,
      Number(day),
      hour,
      minute
    );
  };

  const saveTask = () => {
      if (taskName === '' || taskDate === '' || taskTime === '') {
        Alert.alert('Error', 'Please enter a task name, date, and time.');
        return;
      }

      if (!/^\d{1,2}\/\d{1,2}\/\d{2}$/.test(taskDate)) {
        Alert.alert('Error', 'Please enter the date in MM/DD/YY format.');
        return;
      }

      if (!/^\d{1,2}:\d{2}\s?(AM|PM)$/i.test(taskTime)) {
        Alert.alert('Error', 'Please enter the time in HH:MM AM/PM format.');
        return;
      }

      const newTask = {
        title: taskName,
        list: list.name,
        dueDate: taskDate,
        time: taskTime,
        location: '',
        notes: ''
      };

      onAddTask(newTask);

      setTaskName('');
      setTaskDate('');
      setTaskTime('');
      setModalVisible(false);
    };

  const listTasks = tasks.filter(task => task.list === list.name && task.completed == false).sort((a, b) => {
    return (
      convertToDateTime(a.dueDate, a.time) -
      convertToDateTime(b.dueDate, b.time)
    );
  });
  const listCompletedTasks = tasks.filter(task => task.list === list.name && task.completed).sort((a, b) => {
    return (
      convertToDateTime(a.dueDate, a.time) -
      convertToDateTime(b.dueDate, b.time)
    );
  });
  const allTasksCount = listTasks.length + listCompletedTasks.length;
  const completedTaskPercent = allTasksCount === 0 ? '0%' : listCompletedTasks.length/allTasksCount * 100 + '%';
  
  return (
    <ScrollView style={styles.pageContainer}>
      
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text> Back </Text>
      </TouchableOpacity>

      {/* List Title */}
      <Text style={styles.pageTitle}>{list.name}</Text>

      {/* Progress Section */}
      <View style={styles.progressContainer}>
        <Text style={styles.sectionTitle}>Progress</Text>

        <View style={styles.progressBarBackground}>
          <View style={{backgroundColor: list.color, height: '100%', width: completedTaskPercent}} />
        </View>

        <Text style={styles.progressText}> {listCompletedTasks.length} of {allTasksCount} tasks complete </Text>
      </View>

      {/* Task or Calendar View Button Section */}

      {/* Task Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.sectionTitle}>To Do</Text>
        <TouchableOpacity style={styles.addListButton} 
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="add-circle" size={38} color={list.color}/>
          </TouchableOpacity>
      </View>

      {listTasks.length === 0 ? (
      <View style={styles.taskContainer}>
        <Text style={styles.noTasksText}>No tasks</Text>
      </View>
      ) : (
        <TaskSection
          tasks={listTasks}
          color={list.color}
          showList={false}
          onToggleTaskComplete={onToggleTaskComplete}
        />
      )}
    

      {/* Completed Task Section */}
      {/* Only show if there is a completed task */}
      {listCompletedTasks.length > 0 && (
      <>
        <View style={styles.completedHeader}>
          <Text style={styles.sectionTitle}>Done</Text>
          
          {/* toggle Show and Hide completed tasks */}
          <TouchableOpacity onPress={() => setShowCompleted(!showCompleted)}>
            <Text style={[styles.hideText, {color: list.color}]}>
              {showCompleted ? 'Hide' : 'Show'}
            </Text>
          </TouchableOpacity>
        </View>

        {showCompleted && (
          <TaskSection
            tasks={listCompletedTasks}
            color={list.color}
            showList={false}
            onToggleTaskComplete={onToggleTaskComplete}
          />
        )}
      </>
      )}

      <TouchableOpacity style={styles.deletedList}>
        <Text style={styles.deletedText}>Deleted Tasks</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={22}
          color="black"
        />
      </TouchableOpacity>

      {/* Add task modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>

            <Text style={styles.modalTitle}>Add Task</Text>

            <Text style={styles.inputLabel}>Task Name</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter task name"
              value={taskName}
              onChangeText={setTaskName}
            />

            <Text style={styles.inputLabel}>Due Date</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="MM/DD/YY"
              value={taskDate}
              onChangeText={setTaskDate}
            />

            <Text style={styles.inputLabel}>Time</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="3:30 PM"
              value={taskTime}
              onChangeText={setTaskTime}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.saveButton, { backgroundColor: list.color }]}
                onPress={saveTask}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>

    </ScrollView>

  );
}
const styles = StyleSheet.create({
  // Page Container
  pageContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20, // everything on page is 20 pixels from horizontal edge
    paddingTop: 60,
    paddingBottom: 40,
  },

  pageTitle: {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },

   backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  progressContainer: {
    backgroundColor: '#efefef',
    borderRadius: 15,
    padding: 15,
    marginBottom: 25,
  },

  progressBarBackground: {
    height: 12,
    backgroundColor: '#dddddd',
    borderRadius: 6,
    overflow: 'hidden',
  },

  progressText: {
    marginTop: 8,
    fontSize: 14,
  },

  // Progress, Task & Completed Tasks
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  taskContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 25,
  },

  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  completeButton: {
    marginRight: 10,
  },

  taskTitle: {
    fontSize: 16,
    flex: 1, // takes up remaining space
  },

  taskRight: {
    alignItems: 'flex-end',
  },

  taskDate: {
    fontSize: 14,
  },

  taskTime: {
    fontSize: 14,
    marginTop: 2,
  },

  arrow: {
    fontSize: 26,
    marginLeft: 8,
  },

  completedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  hideText: {
    fontSize: 16,
    color: '#2d68e9',
    marginBottom: 10,
    //fontWeight: 'bold',
    marginRight: 10,
  },

  divider: {
    height: 1,
    backgroundColor: '#dddddd',
    marginVertical: 10,
  },

  deletedList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    padding: 15,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    marginBottom: 40,
  },

  deletedText: {
    fontSize: 16,
  },

  noTasksText: {
    textAlign: 'center',
    color: 'gray',
    paddingVertical: 8,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },

  inputBox: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    padding: 12,
  },

  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },

  cancelButton: {
    padding: 12,
    marginRight: 10,
  },

  saveButton: {
    padding: 12,
    borderRadius: 8,
  },

  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

});