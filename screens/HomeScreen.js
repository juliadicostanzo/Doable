import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TodayTask } from '../components/TodayTask.js';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
//import { DancingScript_500Medium } from '@expo-google-fonts/dancing-script';
import { Satisfy_400Regular } from '@expo-google-fonts/satisfy';
import { PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';

export function HomeScreen({ navigation, tasks, onToggleTaskComplete }) {

  const [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
    Satisfy_400Regular,
    PatrickHand_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const currentDate = new Date();

  const todayDateString = currentDate.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const todayDueDate =
    String(currentDate.getMonth() + 1)+ '/' +
    String(currentDate.getDate())+ '/' +
    String(currentDate.getFullYear()).slice(-2);

  //filter only tasks due today
  const todayTasks = tasks.filter(task => task.dueDate === todayDueDate && task.completed == false);
  const todayCompletedTasks = tasks.filter(task => task.dueDate === todayDueDate && task.completed);
  
  const allTasksCount = todayTasks.length + todayCompletedTasks.length;
  const completedTaskPercent = allTasksCount === 0 ? '0%' : todayCompletedTasks.length / allTasksCount * 100 + '%';
      
  return (
    <ScrollView style={styles.pageContainer}>
      
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Doable</Text>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{todayDateString}</Text>
      </View>

      {/* Progress Section */}
      <View style={styles.progressContainer}>
        <Text style={styles.sectionTitle}> Today's Progress</Text>

        <View style={styles.progressBarBackground}>
          <View style={{backgroundColor: '#2d68e9', height: '100%', width: completedTaskPercent}} />
        </View>

        {todayTasks.length === 0 ? (
          <Text style={styles.noTasksText}>No tasks due today!</Text>
        ) : (
          <Text style={styles.progressText}> {todayCompletedTasks.length} of {allTasksCount} tasks complete </Text>
        )}
      </View>  
      {/* Progress Section End */}

      {/* Task Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}> Today's Tasks </Text>
        <TouchableOpacity style={styles.viewAllContainer} onPress={() => navigation.navigate('All Tasks')}>
          <Text style={styles.viewAllText}>View All</Text>
          <Text style={styles.viewAllArrow}>›</Text>
        </TouchableOpacity>
      </View>

        <View style={styles.taskContainer}>
          {todayTasks.length === 0 ? (
            <Text style={styles.noTasksText}>No tasks due today!</Text>
          ) : (
          todayTasks.map((task, index) => (
            <View key={task.id}>
              <TouchableOpacity style={styles.taskRow} onPress={() => onToggleTaskComplete(task.id)}>
                  
                <Ionicons name="radio-button-off" size={24} color= '#2d68e9' style={styles.completeButton}/>
                  
                <View style={styles.taskContent}>
                  <TodayTask
                    title={task.title}
                    list={task.list}
                    time={task.time}
                  />
                </View>
              </TouchableOpacity>

              {index < todayTasks.length - 1 && (
                <View style={styles.divider} />
              )}
            </View>
          ))
          )}
        </View>
        {/* Task Section End */}
      
      

        {/* <StatusBar style="auto" /> */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20, //everything on page is 20 pixels from horizontal edge
    paddingTop: 60,
  },

  // Logo
  logoContainer: {
    alignItems: 'center',
    marginBottom: 15,   
  },

  logo: {
    fontSize: 55,
    //fontFamily: 'sacramento',
    fontFamily: 'Nunito_800ExtraBold',
    //fontWeight: 'bold',
    color: '#2d68e9',
  },

  // Date
  dateContainer: {
    marginBottom: 10,   
  },

  dateText: {
    fontSize: 26,
    fontFamily: 'Satisfy_400Regular',
    //fontFamily: 'PatrickHand_400Regular',
  },

  // Today's Progress, To Do's
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  //Progress
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

  noTasksText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    paddingVertical: 10,
  },

  progressText: {
    marginTop: 8,
    fontSize: 14,
  },

  // Today's Tasks & View all container
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // View all >
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  viewAllText: {
    fontSize: 14,
    marginRight: 6,
  },

  viewAllArrow: {
    fontSize: 24,
  },

  taskContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 12,
    padding: 12,
    marginBottom: 25,
  },

  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  completeButton: {
    marginRight: 10,
  },

  taskContent: {
    flex: 1,
  },

  divider: {
    height: 1,
    backgroundColor: '#dddddd',
    marginVertical: 10,
  },
  
});