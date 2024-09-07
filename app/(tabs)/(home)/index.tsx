import { Text, View, SafeAreaView, StyleSheet, Pressable, Modal, TouchableOpacity} from "react-native";
import { useState } from "react";

//vector icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'


export default function Home() {
  const [saveModalVisible, setSaveModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Saving today?</Text>
    
      <Modal
        transparent={true}
        animationType="fade"
        visible={saveModalVisible}
        onRequestClose={() => setSaveModalVisible(!saveModalVisible)}>
          
          <TouchableOpacity
            style={styles.backdrop}
            activeOpacity={1}
            // onPressOut={() => setSaveModalVisible(!saveModalVisible)}
          >
            <View style={styles.modalView}>
              <Pressable
                onPress={()=>setSaveModalVisible(!saveModalVisible)}>
                <FontAwesomeIcon icon={faCircleXmark} color="grey" size={25}/>
              </Pressable>
              <Text style={styles.modalText}>This is a centered modal!</Text>
            </View>
          </TouchableOpacity>
      </Modal>
      
      <Pressable
        style={styles.button}
        onPress={()=>setSaveModalVisible(true)}>
        <Text>Save</Text>
      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },

  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Transparent backdrop with 50% opacity
    justifyContent: 'center', // Center vertically
    alignItems: 'center',    // Center horizontally
  },

  modalView: {
    width: "90%",
    height: "80%",
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },

  modalText: {
    textAlign: 'center',
    fontFamily: 'Montserrat Regular',
  },

  text: {
    fontSize: 36,
    fontFamily: 'Montserrat Regular',
  },

  button: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },


})