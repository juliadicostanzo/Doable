import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Task } from '../components/Task.js'; 

export function AllTasksScreen({ tasks, lists, onToggleTaskComplete }) {
  
  // Today's date
  const currentDate = new Date();

  // Today's date in MM/DD/YY format
  const todayDueDate =
    String(currentDate.getMonth() + 1) + '/' +
    String(currentDate.getDate()) + '/' +
    String(currentDate.getFullYear()).slice(-2);

  // Func to convert date string into date object
  const convertToDate = (dateString) => {
    const [month, day, year] = dateString.split('/');

    return new Date(
      2000 + Number(year),
      Number(month) - 1,
      Number(day)
    );
  };

  // Fliter only uncompeleted tasks
  const uncompletedTasks = tasks.filter(task => task.completed == false);
  
  // Sort uncompeleted tasks by date 
  const tasksByDate = [...uncompletedTasks].sort((a, b) => { 
    return convertToDate(a.dueDate) - convertToDate(b.dueDate);
  });

  // Tasks due Today
  const tasksDueToday = tasksByDate.filter(task => task.dueDate === todayDueDate);
  
  // End of this week date
  const endOfWeek = new Date(currentDate);
  endOfWeek.setDate(currentDate.getDate() + 7);
  
  // Tasks due by the end of the week
  const tasksDueThisWeek = tasksByDate.filter((task) => {
    const taskDate = convertToDate(task.dueDate);
    return taskDate >= currentDate && taskDate <= endOfWeek;
  });
  
  // After end of this week date
  const afterEndOfWeek = new Date(currentDate);
  afterEndOfWeek.setDate(currentDate.getDate() + 14);
  
  // Tasks due by the end of the week
  const tasksDueAfterThisWeek = tasksByDate.filter((task) => {
    const taskDate = convertToDate(task.dueDate);
    return taskDate > endOfWeek && taskDate <= afterEndOfWeek;
  });

  return (
    <ScrollView style={styles.pageContainer}>
      <Text style={styles.pageTitle}>All Tasks</Text>
      
      {/* All Tasks?? */}
      <View style={styles.taskBox}>
        {tasksByDate.length === 0 ? (
          <Text style={styles.noTasksText}>No tasks due</Text>
        ) : (
        tasksByDate.map((task, index) => {
         
          // Find the Task's list color
          const taskList = lists.find(list => list.name === task.list);

          return (
            <View key={task.id}>
              <Task
                title={task.title}
                list={task.list}
                date={task.dueDate}
                time={task.time}
                color={taskList.color}
                completed={task.completed}
                onPress={() => onToggleTaskComplete(task.id)}
              />

              {index < tasksByDate.length - 1 && (
                <View style={styles.divider} />
              )}
            </View>
          );
        })
      )}
      </View>

      {/* Due Today */}
      <Text style={styles.sectionTitle}> Due Today </Text>
      <View style={styles.taskBox}>
        {tasksDueToday.length === 0 ? (
          <Text style={styles.noTasksText}>No tasks due today</Text>
        ) : (
        tasksDueToday.map((task, index) => {
         
          // Find the Task's list color
          const taskList = lists.find(list => list.name === task.list);

          return (
            <View key={task.id}>
              <Task
                title={task.title}
                list={task.list}
                date={task.dueDate}
                time={task.time}
                color={taskList.color}
                completed={task.completed}
                onPress={() => onToggleTaskComplete(task.id)}
              />

              {index < tasksDueToday.length - 1 && (
                <View style={styles.divider} />
              )}
            </View>
          );
        })
      )}
      </View>

      {/* Due This Week */}
      <Text style={styles.sectionTitle}> Due This Week </Text>
      <View style={styles.taskBox}>
        {tasksDueThisWeek.length === 0 ? (
          <Text style={styles.noTasksText}>No tasks due this week</Text>
        ) : (
        tasksDueThisWeek.map((task, index) => {
         
          // Find the Task's list color
          const taskList = lists.find(list => list.name === task.list);

          return (
            <View key={task.id}>
              <Task
                title={task.title}
                list={task.list}
                date={task.dueDate}
                time={task.time}
                color={taskList.color}
                completed={task.completed}
                onPress={() => onToggleTaskComplete(task.id)}
              />

              {index < tasksDueThisWeek.length - 1 && (
                <View style={styles.divider} />
              )}
            </View>
          );
        })
      )}
      </View>

      {/* Due After This Week */}
      <Text style={styles.sectionTitle}> Due After This Week </Text>
      <View style={styles.taskBox}>
        {tasksDueAfterThisWeek.length === 0 ? (
          <Text style={styles.noTasksText}>No tasks due after this week</Text>
        ) : (
        tasksDueAfterThisWeek.map((task, index) => {
         
          // Find the Task's list color
          const taskList = lists.find(list => list.name === task.list);

          return (
            <View key={task.id}>
              <Task
                title={task.title}
                list={task.list}
                date={task.dueDate}
                time={task.time}
                color={taskList.color}
                completed={task.completed}
                onPress={() => onToggleTaskComplete(task.id)}
              />

              {index < tasksDueAfterThisWeek.length - 1 && (
                <View style={styles.divider} />
              )}
            </View>
          );
        })
      )}
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
    marginBottom: 15,
  },

  taskBox: {
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    width: '100%',
    marginBottom: 25,
  },

  divider: {
    height: 1,
    backgroundColor: '#dddddd',
    marginVertical: 10,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  noTasksText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    paddingVertical: 10,
  },
});