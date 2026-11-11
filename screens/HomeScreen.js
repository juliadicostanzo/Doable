import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TodayTask } from '../components/TodayTask.js';

export function HomeScreen({ navigation, tasks, onToggleTaskComplete }) {

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
    <ScrollView contentContainerStyle={styles.pageContainer}>
      
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


      {/* OLD Progress Section */}
      <View style={styles.todaysProgressContainer}>
        <Text style={styles.todayTitle}>
          Today's Progress
        </Text>

        <View style={styles.progressBox}>
          <Text>Progress bar</Text>
          {todayTasks.length === 0 ? (
              <Text style={styles.noTasksText}>No tasks due today!</Text>
            ) : (<Text >{todayCompletedTasks.length} out of {todayTasks.length} tasks done</Text>)} 
        </View>
      </View>

      <View style={styles.space}/>

      <View style={styles.todaysTasksContainer}>

        <View style={styles.sectionHeader}>
          <Text style={styles.todayTitle}> Today's Tasks </Text>
          <TouchableOpacity style={styles.viewAllContainer} onPress={() => navigation.navigate('All Tasks')}>
            <Text style={styles.viewAllText}>View All</Text>
            <Text style={styles.viewAllArrow}>›</Text>
            
          </TouchableOpacity>
        </View>

          <View style={styles.todayTaskBox}>
            {todayTasks.length === 0 ? (
              <Text style={styles.noTasksText}>No tasks due today!</Text>
            ) : (
            todayTasks.map((task, index) => (
              <View key={task.id}>
                <TouchableOpacity>
                  <TodayTask
                    title={task.title}
                    list={task.list}
                    time={task.time}
                  />
                </TouchableOpacity>

                {index < todayTasks.length - 1 && (
                  <View style={styles.divider} />
                )}
              </View>
            ))
          )}
          </View>
      </View>

      <View style={styles.space}/>
      

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

  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,   
  },

  logo: {
    fontSize: 40,
    //fontFamily: 'sacramento',
    fontWeight: 'bold',
    color: '#2d68e9',
  },

  dateContainer: {
    marginBottom: 10,   
  },

  dateText: {
    fontSize: 18,
  },

  todaysProgressContainer: {
    backgroundColor: '#efefef',
    padding: 10,
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 1,
  },

  progressBox: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    width: '100%',
  },

  space: {
    paddingTop: 10
  },

  todaysTasksContainer: {
    //backgroundColor: '#f8d5d3',
    padding: 10,
    borderColor: '#ef5752',
    borderRadius: 20,
    borderWidth: 1,
  },

  todayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  todayTaskBox: {
    borderColor: '#ef5752',
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

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

  noTasksText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    paddingVertical: 10,
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

  progressText: {
    marginTop: 8,
    fontSize: 14,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});