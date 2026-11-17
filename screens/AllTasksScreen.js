import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TaskSection } from '../components/TaskSection.js'; 
import { Task } from '../components/Task.js'; 

export function AllTasksScreen({ tasks, lists, onToggleTaskComplete }) {
  
  // Today's date
  const currentDate = new Date();

  // Today's date in MM/DD/YY format
  const todayDueDate =
    String(currentDate.getMonth() + 1) + '/' +
    String(currentDate.getDate()) + '/' +
    String(currentDate.getFullYear()).slice(-2);

  // Func to convert date and time string into date and time object
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

  // Fliter only uncompeleted tasks
  const uncompletedTasks = tasks.filter(task => task.completed == false);
  
  // Sort uncompeleted tasks by date 
  const tasksByDate = [...uncompletedTasks].sort((a, b) => { 
    return convertToDateTime(a.dueDate, a.time) - convertToDateTime(b.dueDate, b.time);
  });

  // Overdue Tasks
  const overDueTasks = tasksByDate.filter((task) => {
    const taskDate = convertToDateTime(task.dueDate, task.time);
    return taskDate < currentDate;
  });

  // Tasks due Today
  const tasksDueToday = tasksByDate.filter(task => task.dueDate === todayDueDate);
  
  // End of this week date
  const endOfWeek = new Date(currentDate);
  endOfWeek.setDate(currentDate.getDate() + 7);
  
  // Tasks due by the end of the week
  const tasksDueThisWeek = tasksByDate.filter((task) => {
    const taskDate = convertToDateTime(task.dueDate, task.time);
    return taskDate >= currentDate && taskDate <= endOfWeek;
  });
  
  // After end of this week date
  const afterEndOfWeek = new Date(currentDate);
  afterEndOfWeek.setDate(currentDate.getDate() + 14);
  
  // Tasks due by the end of the week
  const tasksDueAfterThisWeek = tasksByDate.filter((task) => {
    const taskDate = convertToDateTime(task.dueDate, task.time);
    return taskDate > endOfWeek && taskDate <= afterEndOfWeek;
  });

  return (
    <ScrollView style={styles.pageContainer}>
      <Text style={styles.pageTitle}>All Tasks</Text>

      {/* OverDue Tasks - only show section if there is at least one overdue task*/}
      {overDueTasks.length > 0 && (
      <>
        <Text style={styles.sectionTitle}>Overdue</Text>

        <View style={styles.taskBox}>
          {overDueTasks.map((task, index) => {
         
          // Find the Task's list color
          const taskList = lists.find(list => list.name === task.list);

          return (
            <View key={task.id}>
              <Task
                task={task}
                color={taskList.color}
                onPress={() => onToggleTaskComplete(task.id)}
              />

              {index < overDueTasks.length - 1 && (
                <View style={styles.divider} />
              )}
            </View>
          );
          })}
        </View>
      </>
    )}

      {/* Due Today */}
      <TaskSection
        title="Due Today"
        tasks={tasksDueToday}
        lists={lists}
        emptyMessage="No tasks due today"
        onToggleTaskComplete={onToggleTaskComplete}
      />

      {/* Due This Week */}
      <TaskSection
        title="Due This Week"
        tasks={tasksDueThisWeek}
        lists={lists}
        emptyMessage="No tasks due this week"
        onToggleTaskComplete={onToggleTaskComplete}
      />

      {/* Due After This Week */}
      <TaskSection
        title="Due After This Week"
        tasks={tasksDueAfterThisWeek}
        lists={lists}
        emptyMessage="No tasks due after this week"
        onToggleTaskComplete={onToggleTaskComplete}
      />
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