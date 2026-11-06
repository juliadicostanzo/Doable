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

        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Calendar" component={CalendarScreen}/>
        <Tab.Screen name="Add Task" component={AddTaskScreen}/>
        <Tab.Screen name="All Tasks" component={AllTasksScreen}/>
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