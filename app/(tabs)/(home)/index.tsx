import { Text, View, SafeAreaView, StyleSheet, Pressable, Modal, TouchableOpacity} from "react-native";
import { useState } from "react";

//vector icon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faCircleInfo, faPiggyBank } from "@fortawesome/free-solid-svg-icons";

const InfoButton = () => {
  const [ModalVisible, setModalVisible] = useState(false)

  return (
    <View>
      <Modal
        transparent={false}
        animationType="fade"
        visible={false} //change to ModalVisible for full implementation
        onRequestClose={() => setModalVisible(!ModalVisible)}>
      </Modal>

      <Pressable onPress={() => setModalVisible(!ModalVisible)}>
        <FontAwesomeIcon icon={faCircleInfo} color="#BBD0FF" size={20}/>
      </Pressable>

    </View>
  );
};

const PiggyBank = () => {
  return (
    <View>
      <Pressable style={styles.piggy}>
        <FontAwesomeIcon icon={faPiggyBank} color="#3562C7" size={250} />
      </Pressable>

      <View style={styles.savingText}>
        {/* <Text style={{
          fontFamily: 'Montserrat Bold',
          fontSize: 20,
          color: '#3562C7',
          }}>
          Saved:
        </Text> */}

        <Text style={{
          fontFamily: 'Montserrat Bold',
          fontSize: 20,
          color: '#3562C7',
          }}>
          $ 928.00
        </Text>
      </View>
    </View>
  );
};


const SavePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <InfoButton />
      <View style={styles.piggyContainer}>
        <PiggyBank />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    margin: 30,
    marginTop: 50,
  },

  piggyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: '40%',
  },

  piggy: {
    position: 'relative',
    transform: [{ translateX: -10 }, { translateY: 0 }],
  },

  savingText: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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

  text: {
    fontSize: 36,
    fontFamily: 'Montserrat Regular',
  },

  modalText: {
    textAlign: 'center',
    fontFamily: 'Montserrat Regular',
  },

  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
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

export default SavePage;



// square-poll-horizontal


// export default function Home() {
//   const [saveModalVisible, setSaveModalVisible] = useState(false);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.text}>Saving today?</Text>
    
//       <Modal
//         transparent={true}
//         animationType="fade"
//         visible={saveModalVisible}
//         onRequestClose={() => setSaveModalVisible(!saveModalVisible)}>
          
//           <TouchableOpacity
//             style={styles.backdrop}
//             activeOpacity={1}
//             // onPressOut={() => setSaveModalVisible(!saveModalVisible)}
//           >
//             <View style={styles.modalView}>
//               <Pressable
//                 onPress={()=>setSaveModalVisible(!saveModalVisible)}>
//                 <FontAwesomeIcon icon={faCircleXmark} color="grey" size={25}/>
//               </Pressable>
//               <Text style={styles.modalText}>This is a centered modal!</Text>
//             </View>
//           </TouchableOpacity>
//       </Modal>
      
//       <View style={styles.buttonView}>
//         <Pressable
//           style={styles.button}
//           onPress={()=>setSaveModalVisible(true)}>
//           <Text>Save</Text>
//         </Pressable>
//       </View>

//     </SafeAreaView>
//   );
// }