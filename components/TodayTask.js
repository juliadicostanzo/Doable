import { View, Text, StyleSheet } from 'react-native';


export function TodayTask({ title, list, time }) {
  return (
    <View style={styles.taskRow}>
    
      <View>
        <Text style={styles.taskTitle}>{title}</Text>
        <Text style={styles.taskList}>{list}</Text>
      </View>

      <View style={styles.taskRight}>
        <Text style={styles.taskTime}>{time}</Text>
        {/* <Text style={styles.arrow}>›</Text> */}
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
  
  taskTime: {
    fontSize: 14
  },

  arrow: {
    fontSize: 28,
    marginLeft: 15,
  }
});