import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export function ListsScreen() {
  return (
    <ScrollView style={styles.pageContainer}>
      <Text style={styles.pageTitle}>Lists</Text>
      <TouchableOpacity style={styles.listRow}>
        <View>
          <Text style={styles.listName}>Mobile</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>›</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.listRow}>
        <View>
          <Text style={styles.listName}>Networks</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>›</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.listRow}>
        <View>
          <Text style={styles.listName}>Internship</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>›</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.listRow}>
        <View>
          <Text style={styles.listName}>Archived Lists</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>›</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.listRow}>
        <View>
          <Text style={styles.listName}>Deleted Lists</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>›</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.listRow}>
        <View>
          <Text style={styles.listName}>Deleted Tasks</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>›</Text>
        </View>
      </TouchableOpacity>
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

  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
  },

  arrowContainer: {
    alignItems: 'flex-end',
  },
  arrow: {
    fontSize: 28,
  }

});