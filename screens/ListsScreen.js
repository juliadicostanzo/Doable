import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export function ListsScreen({ navigation }) {
  return (
    <ScrollView style={styles.pageContainer}>
      
      <View style={styles.headerContainer}>
        <Text style={styles.pageTitle}>Lists</Text>

        <TouchableOpacity style={styles.addListButton}>
          <Text style={styles.addListText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.listRow} 
        onPress={() => navigation.navigate('ListDetailScreen', { listName: 'Mobile' })}
      >
        <View>
          <Text style={styles.listName}>Mobile</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>›</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.listRow}
        onPress={() => navigation.navigate('ListDetailScreen', { listName: 'Networks' })}
      >
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
  },
  addListButton: {
    position: 'absolute',
    right: 3,
    top: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2d68e9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addListText: {
    color: 'white',
    fontSize: 28,
    lineHeight: 30,
  },
  headerContainer: {
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
});