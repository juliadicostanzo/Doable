import { View, Text, StyleSheet } from 'react-native';

export function CalendarScreen() {
  return (
    <View style={styles.pageContainer}>
    
      <Text style={styles.pageTitle}>Calendar Screen</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20, //everything on page is 20 pixels from horizontal edge
    paddingTop: 60,
  },
  pageTitle: {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },
});