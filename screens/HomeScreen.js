import { ScrollView, Text, View } from 'react-native';
import { styles } from '../styles.js';
import { TodayTask } from '../components/TodayTask.js';
import { AddTask } from '../components/AddTask.js';

export function HomeScreen() {

  const today = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>

      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Doable</Text>
      </View>

      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{today}</Text>
      </View>

      <View style={styles.todaysProgressContainer}>
        <Text style={styles.todayTitle}>
          Today's Progress
        </Text>

        <View style={styles.progressBox}>
          <Text>Progress bar</Text>
          <Text>0 out of 3 tasks done</Text>
        </View>
      </View>

      <View style={styles.space}/>

      <View style={styles.todaysTasksContainer}>
        <Text style={styles.todayTitle}> Today's Tasks </Text>
          <View style={styles.todayTaskBox}>
            
          </View>
      </View>

      <View style={styles.space}/>
      

        {/* <StatusBar style="auto" /> */}

    </ScrollView>
  );
}