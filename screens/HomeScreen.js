import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { TodayTask } from '../components/TodayTask.js';

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
            <TodayTask title="Lab 6" list="Mobile" />
            <View style={styles.divider} />
            <TodayTask title="Read Section 3.4" list="Networks" />
            <View style={styles.divider} />
            <TodayTask title="Project Demo Slides" list="Internship" />
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
    paddingHorizontal: 10, //everything on page is 10 pixels from horizontal edge
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
    backgroundColor: '#f8d5d3',
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
});