import { View } from 'react-native';
import { ListTask } from './ListTask.js';
import { styles } from '../styles.js';

export function TaskList() {
    return (
        <View style={styles.todayTaskBox}>
            <ListTask title="Project Part 1" list="Mobile" />
            
            <View style={styles.divider} />
            <ListTask title="Networks Lab" list="Networks" />
        </View>
    );
}