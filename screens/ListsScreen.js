import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import { useState } from 'react';

export function ListsScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [listName, setListName] = useState('');
  
  return (
    <ScrollView style={styles.pageContainer}>
      
      <View style={styles.headerContainer}>
        <Text style={styles.pageTitle}>Lists</Text>

        <TouchableOpacity style={styles.addListButton} 
          onPress={() => setModalVisible(true)}
        >
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

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            
            <Text style={styles.modalTitle}>Add List</Text>
            <Text style={styles.inputLabel}>List Name</Text>
            
            <TextInput
              style={styles.inputBox}
              placeholder="Enter list name"
              value={listName}
              onChangeText={setListName}
            />
            
            <View style={styles.modalButtons}>

              <TouchableOpacity style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.saveButton}
                onPress={() => {
                  console.log(listName);
                  setModalVisible(false);
                  setListName('');
                }}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>

            </View>

          </View>
        </View>
      </Modal>

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

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBox: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  inputBox: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    padding: 12,
  },

  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },

  cancelButton: {
    padding: 12,
    marginRight: 10,
  },

  saveButton: {
    backgroundColor: '#2d68e9',
    padding: 12,
    borderRadius: 8,
  },

  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});