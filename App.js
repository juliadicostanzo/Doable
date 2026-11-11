import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from '@expo/vector-icons/Ionicons';

import { HomeScreen } from './screens/HomeScreen.js';
import { CalendarScreen } from './screens/CalendarScreen.js';
import { AddTaskScreen } from './screens/AddTaskScreen.js';
import { AllTasksScreen } from './screens/AllTasksScreen.js';
import { ListsScreen } from './screens/ListsScreen.js';
import { ListDetailScreen } from './screens/ListDetailScreen.js';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  // Hardcoded Tasks
  const [tasks, setTasks] = useState([
    {id: "1", title: "Lab 7", list: "Mobile", dueDate: "11/9/26", time: "11:59 PM", location: "", notes: "", completed: true},
    {id: "2", title: "Lab 8", list: "Mobile", dueDate: "11/10/26", time: "11:59 PM", location: "", notes: "", completed: false},
    {id: "3", title: "Lab 9", list: "Mobile", dueDate: "11/11/26", time: "11:59 PM", location: "", notes: "", completed: false},
    {id: "4", title: "Lab 10", list: "Mobile", dueDate: "11/12/26", time: "11:59 PM", location: "", notes: "", completed: false},
  ]);
  const [nextId, setNextId] = useState(3);

  // Hardcoded Lists
  const [lists, setLists] = useState([
    { id: "1", name: "Mobile", color: "red" },
    { id: "2", name: "Networks", color: "blue" },
    { id: "3", name: "Internship", color: "green" }
  ]);

  const [nextListId, setNextListId] = useState(4);

  // Hardcoded DefaultLists
  const [defaultLists, setDefaultLists] = useState([
    { id: "1", name: "Archived"},
    { id: "2", name: "Deleted Lists"},
    { id: "3", name: "Deleted Tasks"}
  ]);

  // Function to addTask
  const addTask = (newTask) => { //newTask = task object from addTaskScreen.js
    const taskToAdd = { //creates final version of task 
      id: String(nextId), // Convert the nextId to a string
      ...newTask, //copies all other properties from newTask into taskToAdd
      completed: false
    };
    setTasks([...tasks, taskToAdd]); // updates tasks array
    setNextId(nextId + 1); // increases ID counter
  };

  // Function to addList
  const addList = (newList) => { //newList = task object from ListsScreen.js
    const listToAdd = { //creates final version of list 
      id: String(nextListId), // Convert the nextListId to a string
      ...newList //copies all other properties from newList into listToAdd
    };
    setLists([...lists, listToAdd]);
    setNextListId(nextListId + 1);
  };

  function ListsNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ListsScreen" options={{ headerShown: false }} >
          {(props) => (
            <ListsScreen
              navigation={props.navigation}
              route={props.route}
              lists={lists}
              onAddList={addList}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="ListDetailScreen" options={{ headerShown: false }}> 
          {(props) => (
            <ListDetailScreen
              navigation={props.navigation}
              route={props.route}
              tasks={tasks}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, //hides built in header
          
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } 
            else if (route.name === 'Calendar') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } 
            else if (route.name === 'Add Task') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } 
            else if (route.name === 'All Tasks') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            } 
            else if (route.name === 'Lists') {
              iconName = focused ? 'folder' : 'folder-outline';
            }

            return (
              <Ionicons
                name={iconName}
                size={22}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: '#2d68e9',
          tabBarInactiveTintColor: 'gray',
        })}
      >

        <Tab.Screen name="Home">
          {(props) => (
            <HomeScreen tasks={tasks} navigation={props.navigation}/>
          )}
        </Tab.Screen>
        
        <Tab.Screen name="Calendar" component={CalendarScreen}/>
        
        <Tab.Screen name="Add Task">
          {() => (
            <AddTaskScreen onAddTask={addTask}/>
          )}
        </Tab.Screen> 
        
        <Tab.Screen name="All Tasks">
          {() => (
            <AllTasksScreen tasks={tasks} />
          )}
        </Tab.Screen>
        
        <Tab.Screen name="Lists"
          component={ListsNavigator}
        /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}