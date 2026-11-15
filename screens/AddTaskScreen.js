import { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from '@expo/vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Calendar } from 'react-native-calendars';

export function AddTaskScreen({ onAddTask, lists }) {

  const [title, setTitle] = useState('');
  const [list, setList] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);  
  const [time, setTime] = useState('');
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
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

  const listOptions = lists.map((item) => ({
    label: item.name,
    value: item.name,
    color: item.color
  }));

  const renderListItem = (item) => {
    return (
      <View style={styles.dropdownItem}>
        <Ionicons name="ellipse" size={14} color={item.color} style={styles.listIcon}/>

        <Text style={styles.dropdownItemText}>
          {item.label}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.pageContainer}>
      <Text style={styles.pageTitle}>Add Task</Text>

      {/* Task Name - Text Box */}
      <Text style={styles.inputBoxLabel}>Task name</Text>
      <TextInput style={styles.taskInputBox}
        placeholder="Enter task name"
        value={title}
        onChangeText={setTitle}
      />

      {/* List - Drop Down */}
      <Text style={styles.inputBoxLabel}>List</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderText}
        data={listOptions}
        //maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder="Select a List"
        value={list}
        
        // render color dot after list is selected
        renderLeftIcon={() => {
          const selectedList = lists.find(
            item => item.name === list
          );

          if (!selectedList) {
            return null;
          }

          return (
            <Ionicons name="ellipse" size={14} color={selectedList.color} style={styles.listIcon} />
          );
        }}

        renderItem={renderListItem}
        onChange={(item) => {
          setList(item.value);
        }}
      />
      
      {/* Date - Calendar */}
      <Text style={styles.inputBoxLabel}>Due Date</Text>
      <TouchableOpacity
        style={styles.taskInputBox}
        onPress={() => setShowDatePicker(!showDatePicker)}
      >
        <Text style={dueDate === '' ? styles.placeholderText : styles.inputText}>
          {dueDate === '' ? 'Select a Date' : dueDate}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <View style={styles.calendarContainer}>
          <Calendar
            onDayPress={(day) => {

              setSelectedDate(day.dateString);

              const [year, month, date] = day.dateString.split('-');

              const formattedDate =
                Number(month) + '/' +
                Number(date) + '/' +
                year.slice(-2);

              setDueDate(formattedDate);
              setShowDatePicker(false);
            }}

            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: '#2d68e9'
              }
            }}
          />
        </View>
      )}


      {/* Time - DateTime Picker */}
      <Text style={styles.inputBoxLabel}>Time</Text>
      <TouchableOpacity
        style={styles.taskInputBox}
        onPress={() => setShowTimePicker(!showTimePicker)}
      >
        <Text style={time === '' ? styles.placeholderText : styles.inputText}>
          {time === '' ? 'Select a Time' : time}
        </Text>
      </TouchableOpacity>
      {showTimePicker && (
        <>
          <DateTimePicker
            value={selectedTime}
            mode="time"
            display="spinner"
            //display="default"
            onChange={(event, selectedTimeValue) => {
              //setShowTimePicker(false);

              if (selectedTimeValue) {
                setSelectedTime(selectedTimeValue);

                const formattedTime = selectedTimeValue.toLocaleTimeString([], {
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true,
                });

                setTime(formattedTime);
              }
            }}
          />
          <TouchableOpacity
            style={styles.doneTimeButton}
            onPress={() => setShowTimePicker(false)}
          >
            <Text style={styles.doneTimeText}>Done</Text>
          </TouchableOpacity>
        </>
    )}



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

  dropdown: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 45,
  },

  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
  },

  listIcon: {
    marginRight: 10,
  },

  dropdownItemText: {
    fontSize: 16,
  },
  placeholderText: {
    color: '#aaaaaa',
    fontSize: 14,
  },

  inputText: {
    color: 'black',
    fontSize: 16,
  },

  doneTimeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },

  doneTimeText: {
    color: '#2d68e9',
    fontSize: 16,
    fontWeight: 'bold',
  },
});