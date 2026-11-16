import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { Task } from '../components/Task.js'; 

export function CalendarScreen({tasks, lists, onToggleTaskComplete}) {
  // Today's date
  const currentDate = new Date();

  // Calendar uses dates in YYYY-MM-DD format
  const today =
    currentDate.getFullYear() +
    '-' +
    String(currentDate.getMonth() + 1).padStart(2, '0') +
    '-' +
    String(currentDate.getDate()).padStart(2, '0');

  // Store which date the user selected on the calendar
  // default: today's date
  const [selectedDate, setSelectedDate] = useState(today);

  // funciton to convert calendar date format (YYYY-MM-DD) to task date format (MM/DD/YY)
  const convertCalendarDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return (Number(month) + '/' + Number(day) + '/' + year.slice(-2));
  };

  // convert selected calendar date into the format tasks use
  const selectedTaskDate = convertCalendarDate(selectedDate);

  // Convert selected calendar date string into a JavaScript Date object
  const [selectedYear, selectedMonth, selectedDay] = selectedDate.split('-');

  const selectedDateObject = new Date(
    Number(selectedYear),
    Number(selectedMonth) - 1,
    Number(selectedDay)
  );

  // Format selected date to display above tasks
  const selectedDateString = selectedDateObject.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // function to convert task date and time strings into a JavaScript Date object
  const convertToDateTime = (dateString, timeString) => {
    const [month, day, year] = dateString.split('/');

    const [time, period] = timeString.trim().split(/\s+/);
    let [hour, minute] = time.split(':');

    hour = Number(hour);
    minute = Number(minute);

    // Convert PM times into 24-hour time
    if (period.toUpperCase() === 'PM' && hour !== 12) {
      hour += 12;
    }

    // Convert 12 AM to hour 0
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

  // filter tasks for only the selected date and sort them by time
  const selectedDateTasks = tasks
    .filter(task => task.dueDate === selectedTaskDate)
    .sort((a, b) => {
      return (
        convertToDateTime(a.dueDate, a.time) -
        convertToDateTime(b.dueDate, b.time)
      );
    });



  return (
    <View style={styles.pageContainer}>
    
      {/* Page Title */}
      <Text style={styles.pageTitle}>Calendar</Text>

      {/* Calendar */}
      <Calendar
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}

        // Highlights selected date
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: '#2d68e9',
          }
        }}
      />

      {/* Tasks for Selected Date */}
      <Text style={styles.selectedDateText}>{selectedDateString}</Text>
      <ScrollView style={styles.taskContainer}>
        {selectedDateTasks.length === 0 ? (

          <Text style={styles.noTasksText}>
            No tasks due
          </Text>

        ) : (
          selectedDateTasks.map((task, index) => {

            const taskList = lists.find( list => list.name === task.list);

            return (
              <View key={task.id}>

                <Task
                  task={task}
                  color={taskList.color}
                  onPress={() => onToggleTaskComplete(task.id)}
                />

                {index < selectedDateTasks.length - 1 && (
                  <View style={styles.divider} />
                )}
              </View>
            );
          })
        )}
      </ScrollView>
      
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
    marginBottom: 15,
  },

  selectedDateText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },

  taskContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 12,
    padding: 12,
    marginTop: 20,
  },

  divider: {
    height: 1,
    backgroundColor: '#dddddd',
    marginVertical: 10,
  },

  noTasksText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    paddingVertical: 10,
  },

});