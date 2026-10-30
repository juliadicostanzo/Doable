import { View, Text, StyleSheet } from 'react-native';

export function AllTasksScreen() {
  return (
    <View style={styles.pageContainer}>
    <View>
      <Text>All Tasks Screen</Text>
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20, //everything on page is 20 pixels from horizontal edge
    paddingTop: 60,
  },

});