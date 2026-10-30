import { View, Text, StyleSheet } from 'react-native';
import { ListTask } from '../components/ListTask.js';

export function AllTasksScreen() {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageTitle}>All Tasks</Text>
      
      <View style={styles.todayTaskBox}>
        <ListTask title="Lab 6" list="Mobile" date="10/16/26" time="10:00AM"/>
        <View style={styles.divider} />
        <ListTask title="Read Section 3.4" list="Networks"  date="10/16/26" time="10:00AM"/>
        <View style={styles.divider} />
        <ListTask title="Project Demo Slides" list="Internship"  date="10/16/26" time="10:00AM"/>
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

  pageTitle: {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  todayTaskBox: {
    marginTop: 15,
    borderColor: '#4e4c4c',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    width: '100%',
  },

  divider: {
    height: 1,
    backgroundColor: '#4e4c4c',
    margin: 8,
  },
});