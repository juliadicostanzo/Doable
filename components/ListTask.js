import { View, Text } from 'react-native';

export function Task(props) {
  return (
    <View>
      <Text style={styles.taskTitle}> {props.title}</Text>
      <Text>{props.dueDate}</Text>
    </View>
  );
}