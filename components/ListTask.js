import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export function ListTask({ task, color, onToggleComplete, onOpenTask}) {
  return (
    <View style={styles.taskRow}>

      <TouchableOpacity style={styles.taskMain} onPress={onToggleComplete}>
        <Ionicons
          name={task.completed ? "radio-button-on" : "radio-button-off"}
          size={24}
          color={color}
          style={styles.completeButton}
        />

      <Text style={styles.taskTitle}>
        {task.title}
      </Text>

      <View style={styles.taskRight}>
        <Text style={styles.taskDate}>{task.dueDate}</Text>
        <Text style={styles.taskTime}>{task.time}</Text>
      </View>
      </TouchableOpacity>

        {/*
      <TouchableOpacity
        style={styles.arrow}
        //onPress={onOpenTask}
      >
        <Ionicons
          name="chevron-forward-outline"
          size={22}
          color="black"
        />
      </TouchableOpacity>
      */}

    </View>
  );
}

const styles = StyleSheet.create({
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  taskMain: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    },

  completeButton: {
    marginRight: 10,
  },
  
  taskTitle: {
    fontSize: 16,
    flex: 1,
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
    fontSize: 28,
    marginLeft: 15,
  }
});