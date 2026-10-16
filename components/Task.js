import { View, Text } from 'react-native';

export function Task(props) {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>{props.dueDate}</Text>
    </View>
  );
}