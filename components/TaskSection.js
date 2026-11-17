import { View, Text, StyleSheet } from 'react-native';
import { Task } from './Task.js';

export function TaskSection({ title, tasks, lists, color, showList=true, showDueDate=true, onToggleTaskComplete }) {

  return (
    <>
      {/* Only show title if one was passed in */}
      {title && (<Text style={styles.sectionTitle}>{title}</Text> )}
      <View style={styles.taskBox}>

        {tasks.map((task, index) => {
            
            // If a fixed color was passed in, use it
            let taskColor = color;
            // Otherwise find the task's list color
            if (!taskColor) {
              const taskList = lists.find(list => list.name === task.list);
              taskColor = taskList.color;
            }

            return (
              <View key={task.id}>
                <Task
                  task={task}
                  color={taskColor}
                  onPress={() => onToggleTaskComplete(task.id)}
                  showList={showList}
                  showDueDate={showDueDate}
                />

                {index < tasks.length - 1 && (
                  <View style={styles.divider} />
                )}
              </View>
            );
          })
        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  taskBox: {
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    width: '100%',
    marginBottom: 25,
  },

  divider: {
    height: 1,
    backgroundColor: '#dddddd',
    marginVertical: 10,
  },

});