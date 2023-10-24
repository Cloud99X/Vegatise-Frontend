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

const UpdatePhoneNumberScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [valid, setValid] = React.useState(true);
  // import images
  const arrowLeft = require('../../assets/images/arrowleftwight.png');
  const slFlag = require('../../assets/images/slFlag.png');
  const arrowDown = require('../../assets/images/ArrowDown.png');
  const handleArrowLeft = () => {
    navigation.navigate('BasicInfoScreen');
  };
  const handlePhoneNumberChange = number => {
    setPhoneNumber(number);
  };
  const handleSaveChanges = () => {};
  return (
    <View style={styles.window}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleArrowLeft}>
          <Image source={arrowLeft} />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
      </View>
      <SafeAreaView style={styles.bodySection}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.textStyle1}>Update Phone Number</Text>
          <Text style={styles.textStyle2}>
            Will Use This Phone Number As Your Primary Phone Number
          </Text>
          <Text style={styles.phoneText}>Phone Number</Text>
          <View style={styles.phoneNumberContainer}>
            <View style={styles.countryCode}>
              <Image source={slFlag} />
              <Text style={{fontSize: 12, fontFamily: 'Poppins-Regular'}}>
                +94
              </Text>
              <Image source={arrowDown} />
            </View>

            <TextInput
              placeholder="769016274"
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
              style={styles.inputfield}
            />
          </View>
          <TouchableOpacity
            style={valid ? styles.validBtn : styles.button}
            disabled={!valid}>
            <Text style={styles.btnText}>Save Changes</Text>
          </TouchableOpacity>
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
  bodySection: {
    flex: 1,
    width: 342,
    alignSelf: 'center',
  },
  textStyle1: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 18,
    marginTop: 30,
    marginBottom: 10,
  },
  textStyle2: {
    fontFamily: 'Poppins-Regular',
    color: '#000',
    fontSize: 12,
    marginBottom: 30,
  },
  phoneText: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: '#2E2E2E',
    marginBottom: 10,
  },
  phoneNumberContainer: {
    gap: 6,
    width: 342,
    height: 52,
    flexDirection: 'row',
  },
  countryCode: {
    width: 120,
    height: 52,
    borderRadius: 8,
    gap: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(239, 241, 249, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputfield: {
    width: 216,
    height: 52,
    borderRadius: 8,
    paddingLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',
    backgroundColor: 'rgba(239, 241, 249, 1)',
    fontSize: 12,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: 'rgba(255, 255, 255, 1)',
  },
  button: {
    width: 342,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgba(199, 199, 204, 1)',
    justifyContent: 'center',
    marginTop: 70,
  },
  validBtn: {
    width: 342,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgba(244, 66, 42, 1)',
    justifyContent: 'center',
    marginTop: 70,
  },
});
export default UpdatePhoneNumberScreen;
