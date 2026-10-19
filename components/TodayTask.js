import { View, Text } from 'react-native';
import { styles } from '../styles.js';

export function TodayTask({ title, list }) {
  return (
    <View>
      <Text style={styles.taskTitle}>{title}</Text>
      <Text style={styles.taskSubtitle}>{list}</Text>
    </View>
  );
}