import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export function ListDetailScreen({ route, navigation }) {
  const { listName } = route.params;

  return (
    <ScrollView style={styles.pageContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text> Back </Text>
      </TouchableOpacity>

      <Text style={styles.pageTitle}>{listName}</Text>
      </ScrollView>
  );
}
const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 20, //everything on page is 20 pixels from horizontal edge
    paddingTop: 60,
    paddingBottom: 40,
  },
  pageTitle: {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },
   backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});