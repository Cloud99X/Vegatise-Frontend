// import React, {useState} from 'react';
// import {
//   Text,
//   View,
//   SafeAreaView,
//   Image,
//   StatusBar,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   Modal,
//   ScrollView,
// } from 'react-native';

// export default function Message3({navigation}) {
//   const [modalVisible, setModalVisible] = useState(false);

//   const arrowLeft = require('../../assets/images/arrowleftwight.png');

//   const handleArrowLeft = () => {
//     navigation.navigate('Message2');
//   };
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle={'light-content'} />
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleArrowLeft}>
//           <Image source={arrowLeft} />
//         </TouchableOpacity>
//         <Text style={styles.title}>Message</Text>
//       </View>
//       <SafeAreaView style={styles.bodySection}>
//         <ScrollView showsVerticalScrollIndicator={false}>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//           <Text style={styles.title1}>Vegatise Support</Text>
//         </ScrollView>
//       </SafeAreaView>
//       <View
//         style={{
//           justifyContent: 'flex-end',
//           marginBottom: 20,
//         }}>
//         <View style={styles.container4}>
//           <TouchableOpacity onPress={() => setModalVisible(true)}>
//             <Image
//               style={styles.Icon}
//               source={require('../../assets/images/plus.png')}
//             />
//           </TouchableOpacity>
//           <TextInput
//             style={styles.container4Text}
//             placeholder="Type message here"
//             placeholderTextColor="#000"
//           />
//           <TouchableOpacity>
//             <Image
//               style={styles.Icon}
//               source={require('../../assets/images/send.png')}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     flex: 1,
//   },
//   header: {
//     height: 50,
//     backgroundColor: '#C23030',
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 12,
//     paddingLeft: '4%',
//   },
//   title: {
//     color: '#ffffff',
//     fontSize: 20,
//     fontFamily: 'Poppins-Bold',
//     paddingTop: 5,
//   },
//   bodySection: {
//     flex: 1,
//   },

//   title1: {
//     fontSize: 18,
//     marginBottom: 23,
//     fontFamily: 'Poppins-SemiBold',
//     color: '#000',
//     textAlign: 'center',
//   },
//   container4: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#C5D0E6',
//     paddingLeft: 15,
//     paddingRight: 15,
//     marginLeft: '5%',
//     marginRight: '5%',
//   },

//   Icon: {
//     width: 24,
//     height: 24,
//   },

//   container4Text: {
//     width: 223,
//     fontSize: 12,
//     fontFamily: 'Poppins-SemiBold',
//   },

//   popUpContainer1: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: 280,
//     marginTop: 20,
//     marginBottom: 24,
//   },
// });
import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  ScrollView,
} from 'react-native';

export default function Message3({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  const arrowLeft = require('../../assets/images/arrowleftwight.png');

  const handleArrowLeft = () => {
    navigation.navigate('Message2');
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.header}>
        <TouchableOpacity onPress={handleArrowLeft}>
          <Image source={arrowLeft} />
        </TouchableOpacity>
        <Text style={styles.title}>Message</Text>
      </View>
      <SafeAreaView style={styles.bodySection}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title1}>Vegatise Support</Text>

          <View style={styles.container1}>
            <Image
              style={styles.heartLogo}
              source={require('../../assets/images/heart.png')}
            />
            <Text style={styles.heartText}>
              You Were On A Live Chat With Vegatise Support. Duration 10:34
            </Text>
          </View>

          <View style={styles.container2}>
            <TouchableOpacity>
              <Image
                style={styles.mssgImg2}
                source={require('../../assets/images/mssgImg2.png')}
              />
            </TouchableOpacity>
            <View style={styles.mssg2TextBox}>
              <Text style={styles.mssg2}>
                Is there any Tesla car like this that can i rent?
              </Text>
            </View>
            <Text style={styles.time}>12.23pm</Text>
          </View>
          <View style={styles.mssg2TextBox2}>
            <Text style={styles.mssg3}>Oh No It’s Full For Today</Text>
          </View>
          <Text style={styles.time}>12.23pm</Text>
        </ScrollView>
      </SafeAreaView>
      <View
        style={{
          justifyContent: 'flex-end',
          marginBottom: 20,
        }}>
        <View style={styles.container4}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              style={styles.Icon}
              source={require('../../assets/images/plus.png')}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.container4Text}
            placeholder="Type message here"
            placeholderTextColor="#000"
          />
          <TouchableOpacity>
            <Image
              style={styles.Icon}
              source={require('../../assets/images/send.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.popUpContainer1}>
              <Text style={styles.modalTitle}>Attach file</Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  style={styles.Icon}
                  source={require('../../assets/images/close.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.popUpContainer2}>
              <TouchableOpacity
                style={styles.imageBorder}
                onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  style={styles.Icon}
                  source={require('../../assets/images/newImg.png')}
                />
              </TouchableOpacity>
              <Text style={styles.textStyle}>Attach new image</Text>
            </View>

            <View style={styles.popUpContainer2}>
              <TouchableOpacity
                style={styles.imageBorder}
                onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  style={styles.Icon}
                  source={require('../../assets/images/paperclip.png')}
                />
              </TouchableOpacity>
              <Text style={styles.textStyle}>Upload a File</Text>
            </View>

            <View style={styles.popUpContainer2}>
              <TouchableOpacity
                style={styles.imageBorder}
                onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  style={styles.Icon}
                  source={require('../../assets/images/voice-square.png')}
                />
              </TouchableOpacity>
              <Text style={styles.textStyle}>Share an sound</Text>
            </View>

            <View style={styles.popUpContainer2}>
              <TouchableOpacity
                style={styles.imageBorder}
                onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  style={styles.Icon}
                  source={require('../../assets/images/location.png')}
                />
              </TouchableOpacity>
              <Text style={styles.textStyle}>Send current location</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
{
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: '#C23030',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingLeft: '4%',
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    paddingTop: 5,
  },
  bodySection: {
    flex: 1,
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25,
  },

  title1: {
    fontSize: 18,
    marginBottom: 23,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    textAlign: 'center',
  },

  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    gap: 10,
  },

  heartLogo: {
    width: 18,
    height: 16,
  },

  heartText: {
    fontSize: 9,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },

  inbox: {},

  container2: {
    alignItems: 'flex-end',
    marginTop: 40,
  },

  mssgImg2: {
    width: 118,
    height: 118,
  },

  mssg2TextBox: {
    padding: 8,
    marginTop: 30,
    marginLeft: '50%',
    backgroundColor: 'rgba(210, 25, 19, 0.17)',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },

  mssg2: {
    color: '#181818',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },

  time: {
    color: '#A9B4CD',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },

  mssg2TextBox2: {
    padding: 8,
    marginTop: 30,
    marginRight: '50%',
    backgroundColor: 'rgba(211, 58, 58, 1)',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  mssg3: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },

  container4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C5D0E6',
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: '5%',
    marginRight: '5%',
  },

  Icon: {
    width: 24,
    height: 24,
  },

  container4Text: {
    width: 223,
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },

  popUpContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
    marginTop: 20,
    marginBottom: 24,
  },

  popUpContainer2: {
    flexDirection: 'row',
    width: 230,
    marginRight: 50,
    marginBottom: 12,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 90,
    backgroundColor: 'rgba(49.94, 49.94, 49.94, 0.28)',
  },

  imageBorder: {
    borderWidth: 0.5,
    padding: 5,
    borderColor: '#848FAC',
    borderRadius: 10,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 315,
    height: 280,
    alignItems: 'center',
  },

  textStyle: {
    color: '#848FAC',
    fontSize: 16,
    marginLeft: 24,
    marginTop: 5,
    fontFamily: 'Poppins-Medium',
  },

  modalTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: '#191919',
  },
});
