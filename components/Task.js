import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export function Task({ task, color, onPress, showDueDate=true, showList=true}) {
  
  return (
    <TouchableOpacity style={styles.taskRow} onPress={onPress}>
      
      {/* Button */}
      <Ionicons
        name={task.completed ? "radio-button-on" : "radio-button-off"}
        size={24}
        color={color}
        style={styles.completeButton}
      />
      
      <View style={styles.taskLeft}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        {showList && (<Text style={styles.taskList}>{task.list}</Text>)}
      </View>

      <View style={styles.taskRight}>
        {showDueDate && (<Text style={styles.taskDate}>{task.dueDate}</Text>)}
        <Text style={styles.taskTime}>{task.time}</Text>
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  taskLeft: {
    flex: 1,
  },
  
  taskTitle: {
    fontSize: 16,
  },

  taskList: {
    fontSize: 14,
    marginTop: 2,
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

  completeButton: {
    marginRight: 10,
  },


});