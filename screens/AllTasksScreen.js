import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { TaskSection } from '../components/TaskSection.js'; 
import { Task } from '../components/Task.js'; 
import { useState } from 'react';

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

  // Fliter only compeleted tasks
  const completedTasks = tasks.filter(task => task.completed == true);
  
  // Sort compeleted tasks by date 
  const compeletedTasksByDate = [...completedTasks].sort((a, b) => { 
    return convertToDateTime(a.dueDate, a.time) - convertToDateTime(b.dueDate, b.time);
  });

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

  //true if any of the arrays has a task
  const hasUncompletedTasks = 
    overDueTasks.length > 0 ||
    tasksDueToday.length > 0 ||
    tasksDueThisWeek.length > 0 ||
    tasksDueAfterThisWeek.length > 0;

  // show/hide completed uncompleted tasks
    const [showCompleted, setShowCompleted] = useState(true);

  return (
    <ScrollView style={styles.pageContainer}>
      <Text style={styles.pageTitle}>All Tasks</Text>

      {/* No incomplete tasks */}
      {!hasUncompletedTasks && (
        <View style={styles.noTasksContainer}>
          <Text style={styles.noTasksText}>No tasks due</Text>
        </View>
      )}

      {/* OverDue Tasks - only show section if there is at least one overdue task*/}
      {overDueTasks.length > 0 && (
        <TaskSection
          title="Overdue"
          tasks={overDueTasks}
          lists={lists}
          onToggleTaskComplete={onToggleTaskComplete}
        />
      )}

      {/* Due Today */}
      {tasksDueToday.length > 0 && (
        <TaskSection
          title="Due Today"
          tasks={tasksDueToday}
          lists={lists}
          onToggleTaskComplete={onToggleTaskComplete}
        />
      )}

      {/* Due This Week */}
      {tasksDueThisWeek.length > 0 && (
        <TaskSection
          title="Due This Week"
          tasks={tasksDueThisWeek}
          lists={lists}
          onToggleTaskComplete={onToggleTaskComplete}
        />
      )}

      {/* Due After This Week */}
      {tasksDueAfterThisWeek.length > 0 && (
        <TaskSection
          title="Due After This Week"
          tasks={tasksDueAfterThisWeek}
          lists={lists}
          onToggleTaskComplete={onToggleTaskComplete}
        />
      )}

      {/* All Compeleted Tasks */}
      {compeletedTasksByDate.length > 0 && (
        <>
          <View style={styles.completedHeader}>
            <Text style={styles.sectionTitle}>Completed</Text>

            <TouchableOpacity onPress={() => setShowCompleted(!showCompleted)}>
              <Text style={styles.hideText}>
                {showCompleted ? 'Hide' : 'Show'}
              </Text>
            </TouchableOpacity>
          </View>

          {showCompleted && (
            <TaskSection
              tasks={compeletedTasksByDate}
              lists={lists}
              onToggleTaskComplete={onToggleTaskComplete}
            />
          )}
        </>
      )}
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

  noTasksContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 100,
  },

  noTasksText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    paddingVertical: 10,
  },

  completedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  hideText: {
    fontSize: 16,
    color: '#2d68e9',
    marginBottom: 10,
    //fontWeight: 'bold',
    marginRight: 10,
  },
});