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


function ListsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListsScreen" component={ListsScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ListDetailScreen" component={ListDetailScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default function App() {
  const [tasks, setTasks] = useState([
  {
    id: "1", 
    title: "Lab 8", 
    list: "Mobile",
    dueDate: "11/10/26",
    time: "11:59 PM",
    location: "",
    notes: "",
    completed: false
  },
  {
    id: "2",
    title: "Networks Homework",
    list: "Networks",
    dueDate: "11/12/26",
    time: "11:59 PM",
    location: "",
    notes: "",
    completed: false
  }
]);
const [nextId, setNextId] = useState(3);

const addTask = (newTask) => { //newTask = task object from addTaskScreen.js
  const taskToAdd = { //creates final version of task 
    id: String(nextId), // Convert the nextId to a string
    ...newTask, //copies all other properties from newTask into taskToAdd
    completed: false
  };

  setTasks([...tasks, taskToAdd]); // updates tasks array
  setNextId(nextId + 1); // increases ID counter
};

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
        
        <Tab.Screen name="Lists" component={ListsNavigator} 
          listeners={({ navigation }) => ({ 
            tabPress: () => { 
              navigation.navigate('Lists', {
                screen: 'ListsScreen'
              });
            },
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}