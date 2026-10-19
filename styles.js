// Julia Di Costanzo, Lab 6, Oct 15

import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
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

  taskTitle: {
    fontSize: 16,
  },

  taskSubtitle: {
    fontSize: 14,
    marginTop: 2,
  },

  addTaskTitle: {
    fontSize: 34,
    alignContent: 'center',
    fontWeight: 'bold',
  },

  taskInputBox: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    width: '100%',
  },
  
  
});


