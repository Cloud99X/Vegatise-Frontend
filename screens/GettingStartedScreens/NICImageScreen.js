import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';

const NICImageScreen = ({navigation}) => {
  const [nic, setNIC] = React.useState('');
  // import images
  const arrowLeft = require('../../assets/images/arrow-left.png');
  const cameraIcon = require('../../assets/images/cameraicon.png');

  const handleSubmit = () => {
    navigation.navigate('ReviewScreen');
  };
  const handleArrowLeft = () => {
    navigation.navigate('GettingStarted3');
  };
  const handleNICChange = NIC => {
    setNIC(NIC);
  };
  return (
    <View style={styles.window}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleArrowLeft}>
          <Image source={arrowLeft} />
        </TouchableOpacity>
        <Text style={styles.title}>Getting Started</Text>
      </View>
      <SafeAreaView style={styles.bodySection}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.subtitle}>
            Take A Photo Of Your Nation Identity Card (NIC)
          </Text>
          <View style={styles.imageSection}>
            <Text style={styles.title1}>NIC Front</Text>
            <TouchableOpacity>
              <View style={styles.rectangle}>
                <Image source={cameraIcon} />
                <Text style={[styles.title1, {color: '#E19191'}]}>
                  Add Your Photos Here
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.imageSection}>
            <Text style={styles.title1}>NIC Rear</Text>
            <TouchableOpacity>
              <View style={styles.rectangle}>
                <Image source={cameraIcon} />
                <Text style={[styles.title1, {color: '#E19191'}]}>
                  Add Your Photos Here
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.title1}>NIC Number</Text>
            <TouchableOpacity>
              <TextInput
                style={styles.textfield}
                placeholder=""
                value={nic}
                onChangeText={handleNICChange}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={handleSubmit}>
              <LinearGradient
                style={styles.button}
                colors={['#FB4E02', '#C8102E']}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 0}}>
                <Text style={styles.btnText}>Submit</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  window: {
    width: '100%',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 50,
    backgroundColor: '#C23030',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingLeft: 24,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    paddingTop: 5,
  },
  subtitle: {
    color: 'rgba(46, 46, 46, 1)',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 25,
    marginBottom: 38,
  },

  title1: {
    color: 'rgba(46, 46, 46, 1)',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },
  bodySection: {
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
  },
  imageSection: {
    gap: 11,
    paddingBottom: 20,
  },
  rectangle: {
    borderWidth: 1,
    borderColor: 'rgba(197, 208, 230, 1)',
    height: 83,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  btnContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',
  },
  button: {
    width: 252,
    height: 40,
    borderRadius: 15,
    backgroundColor: 'rgba(199, 199, 204, 1)',
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
  textfield: {
    height: 52,
    backgroundColor: 'rgba(239,241,249,1)',
    borderRadius: 10,
    marginBottom: 21,
    marginTop: 8,
    paddingLeft: 16,
    paddingBottom: 10,
    fontFamily: 'Poppins-Regular',
  },
});
export default NICImageScreen;
