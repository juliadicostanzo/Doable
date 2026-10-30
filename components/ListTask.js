import { View, Text, StyleSheet } from 'react-native';


export function ListTask({ title, list, date, time }) {
  return (
    
    <View style={styles.taskRow}>

      <View>
        <Text style={styles.taskTitle}>{title}</Text>
        <Text style={styles.taskSubtitle}>{list}</Text>
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

  dateTimeContainer: {
    alignItems: 'flex-end',
  },
  
  taskTitle: {
    fontSize: 16,
  },

  taskSubtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  
  taskTime: {
    fontSize: 14,
    marginRight: 2,
  },

  taskDate: {
    fontSize: 14,
  },
});