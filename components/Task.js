import { View, Text, StyleSheet } from 'react-native';


export function Task({ title, list, date, time }) {
  return (
    
    <View style={styles.taskRow}>

      <View>
        <Text style={styles.taskTitle}>{title}</Text>
        <Text style={styles.taskList}>{list}</Text>
      </View>

      <View style={styles.dateTimeContainer}>
        <Text style={styles.taskDate}>{date}</Text>
        <Text style={styles.taskTime}>{time}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  taskTitle: {
    fontSize: 16,
  },

  taskList: {
    fontSize: 14,
    marginTop: 2,
  },

  taskRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dateTime: {
    alignItems: 'flex-end',
  },
  
  taskTime: {
    fontSize: 14,
    marginRight: 2,
  },

  taskDate: {
    fontSize: 14,
  },


});