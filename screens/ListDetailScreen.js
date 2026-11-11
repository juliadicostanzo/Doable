import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export function ListDetailScreen({ route, navigation, tasks, onToggleTaskComplete }) {
  const { listName, listColor } = route.params;

  const listTasks = tasks.filter(task => task.list === listName && task.completed == false);
  const listCompletedTasks = tasks.filter(task => task.list === listName && task.completed);
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
      <Text style={styles.pageTitle}>{listName}</Text>

      {/* Progress Section */}
      <View style={styles.progressContainer}>
        <Text style={styles.sectionTitle}>Progress</Text>

        <View style={styles.progressBarBackground}>
          <View style={{backgroundColor: listColor, height: '100%', width: completedTaskPercent}} />
        </View>

        <Text style={styles.progressText}> {listCompletedTasks.length} of {allTasksCount} tasks complete </Text>
      </View>

      {/* Task Section */}
      <Text style={styles.sectionTitle}>Tasks</Text>
      <View style={styles.taskContainer}>
        {listTasks.length === 0 ? (
          <Text style={styles.noTasksText}>No tasks</Text>
        ) : (
        listTasks.map((task, index) => (
          <View key={task.id}>
            <TouchableOpacity style={styles.taskRow}  onPress={() => onToggleTaskComplete(task.id)}>
              <Ionicons name="radio-button-off" size={24} color= {listColor} style={styles.completeButton}/>

              <Text style={styles.taskTitle}>{task.title}</Text>

              <View style={styles.taskRight}>
                <Text style={styles.taskDate}>{task.dueDate}</Text>
                <Text style={styles.taskTime}>{task.time}</Text>
              </View>
            </TouchableOpacity>

            {index < listTasks.length - 1 && (
              <View style={styles.divider} />
            )}
          </View>
        ))
      )}
      </View>

      {/* Completed Task Section */}
      <Text style={styles.sectionTitle}>Completed Tasks</Text>
      
      <View style={styles.taskContainer}>
        {listCompletedTasks.length === 0 ? (
          <Text style={styles.noTasksText}>No completed tasks yet</Text>
        ) : (
        listCompletedTasks.map((task, index) => (
          <View key={task.id}>
            {/* Button */}
            <TouchableOpacity style={styles.taskRow} onPress={() => onToggleTaskComplete(task.id)}>
              <Ionicons name="radio-button-on" size={24} color= {listColor} style={styles.completeButton}/>

              <Text style={styles.taskTitle}>{task.title}</Text>

              <View style={styles.taskRight}>
                <Text style={styles.taskDate}>{task.dueDate}</Text>
                <Text style={styles.taskTime}>{task.time}</Text>
              </View>
            </TouchableOpacity>
            {index < listCompletedTasks.length - 1 && (
              <View style={styles.divider} />
            )}
          </View>
        ))
      )}
      </View>

      <TouchableOpacity style={styles.deletedList}>
        <Text style={styles.deletedText}>Deleted Tasks</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

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
    fontSize: 14
  },

  arrow: {
    fontSize: 26,
    marginLeft: 8,
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

});