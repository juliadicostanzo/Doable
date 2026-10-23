import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from './screens/HomeScreen.js';
import { CalendarScreen } from './screens/CalendarScreen.js';
import { AddTaskScreen } from './screens/AddTaskScreen.js';
import { AllTasksScreen } from './screens/AllTasksScreen.js';
import { ListsScreen } from './screens/ListsScreen.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />

        <Tab.Screen
          name="Calendar"
          component={CalendarScreen}
        />

        <Tab.Screen
          name="Add Task"
          component={AddTaskScreen}
        />

        <Tab.Screen
          name="All Tasks"
          component={AllTasksScreen}
        />

        <Tab.Screen
          name="Lists"
          component={ListsScreen}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}