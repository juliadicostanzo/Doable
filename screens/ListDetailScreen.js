import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export function ListDetailScreen({ route, navigation }) {
  const { listName } = route.params;

  return (
    <ScrollView style={styles.pageContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text> Back </Text>
      </TouchableOpacity>

      <Text style={styles.pageTitle}>{listName}</Text>
 
      <View style={styles.progressContainer}>
        <Text style={styles.sectionTitle}>Progress</Text>

        <View style={styles.progressBarBackground}>
          <View style={styles.progressBarFill} />
        </View>

        <Text style={styles.progressText}> 4 of 5 tasks complete </Text>
      </View>
      
      <Text style={styles.sectionTitle}>Tasks</Text>
      
      <View style={styles.taskContainer}>

        <TouchableOpacity style={styles.taskRow}>
          <View>
            <Text style={styles.taskTitle}>Lab 8</Text>
          </View>

          <View style={styles.taskRight}>
            <Text style={styles.taskDate}>Nov 10</Text>
            <Text style={styles.arrow}>›</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.taskRow}>
          <View>
            <Text style={styles.taskTitle}>Project Part 2</Text>
          </View>

          <View style={styles.taskRight}>
            <Text style={styles.taskDate}>Nov 15</Text>
            <Text style={styles.arrow}>›</Text>
          </View>
        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.deletedList}>
        <Text style={styles.deletedText}>Deleted Tasks</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

    </ScrollView>

  );
}
const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20, //everything on page is 20 pixels from horizontal edge
    paddingTop: 60,
    paddingBottom: 40,
  },
  pageTitle: {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },
   backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  progressContainer: {
    backgroundColor: '#efefef',
    borderRadius: 15,
    padding: 15,
    marginBottom: 25,
  },

  progressBarBackground: {
    height: 12,
    backgroundColor: '#dddddd',
    borderRadius: 6,
    overflow: 'hidden',
  },

  progressBarFill: {
    width: '80%',
    height: '100%',
    backgroundColor: '#2d68e9',
  },

  progressText: {
    marginTop: 8,
    fontSize: 14,
  },

  taskContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 12,
    padding: 12,
  },

  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  taskTitle: {
    fontSize: 16,
  },

  taskRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  taskDate: {
    fontSize: 14,
  },

  arrow: {
    fontSize: 26,
    marginLeft: 8,
  },

  divider: {
    height: 1,
    backgroundColor: '#dddddd',
    marginVertical: 10,
  },


  deletedList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    marginBottom: 40,
  },

  deletedText: {
    fontSize: 16,
  },

});