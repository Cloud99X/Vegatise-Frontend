import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import images from '../../constants/images';

export default function CreateAcc2({navigation}) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [verificationId, setVerificationId] = useState('');
  const [user, setUser] = React.useState('');
  const countryCode = '+94';
  const route = useRoute();

  const sendVerificationCode = () => {};
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('CreateAcc1')}
        style={styles.arrow}>
        <Image source={require('../../assets/images/arrow.png')} />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={images.Vector}
          style={styles.vector}
          resizeMode="cover"
        />
        <ImageBackground
          source={images.VerificationImage}
          style={styles.verificationImage}
          resizeMode="cover"
        />
        <Image
          source={images.Logo1}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>OTP Verification</Text>
        <Text style={styles.headingText2}>
          We will send you a one time password on this mobile number
        </Text>
      </View>

      <Text
        style={[styles.label, isCorrect ? styles.correctText : styles.label]}>
        Phone Number
      </Text>
      <View style={styles.phoneNumberContainer}>
        <View
          style={
            isCorrect
              ? [styles.countryCode, {backgroundColor: '#F0F9F6'}]
              : styles.countryCode
          }>
          <Image source={images.slFlag} style={styles.flag} />
          <Text style={{fontSize: 12, fontFamily: 'Poppins-Regular'}}>+94</Text>
          <Image
            style={styles.downArrow}
            source={require('../../assets/images/downArrow.png')}
          />
        </View>
        <View
          style={
            isCorrect
              ? [styles.phoneNumberInputContainer, {backgroundColor: '#F0F9F6'}]
              : styles.phoneNumberInputContainer
          }>
          <TextInput
            placeholder="769016274"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            style={isCorrect ? styles.inputfieldFilled : styles.inputfield}
          />
          {isCorrect ? (
            <Image
              source={require('../../assets/images/Check1.png')}
              style={styles.image}
            />
          ) : (
            ''
          )}
        </View>
      </View>
      <TouchableOpacity
        style={[styles.btn, isCorrect ? styles.correctButton : styles.btn]}
        disabled={!isCorrect}
        onPress={sendVerificationCode}>
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  arrow: {
    width: 18,
    height: 18,
    marginLeft: 24,
    marginTop: 30,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  vector: {
    width: 184,
    height: 142,
    flex: 1,
  },
  verificationImage: {
    width: 141,
    height: 112.83414,
    flex: 1,
    marginTop: 15,
    marginLeft: 10,
  },
  logoImage: {
    width: 22.81974,
    height: 22.81974,
    marginTop: 40,
    marginBottom: 70,
    marginLeft: 10,
  },
  heading: {
    marginTop: 10,
    alignItems: 'center',
    color: '#000C20',
    fontSize: 18,
    fontWeight: '600',
  },
  headingText: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#000C20',
  },
  headingText2: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 30,
    color: '#595959',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textTransform: 'capitalize',
    width: 228,
  },

  btn: {
    backgroundColor: '#C7C7CC',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 20,
    marginRight: 24,
    marginLeft: 24,
  },

  correctButton: {
    borderRadius: 8,
    height: 50,
    marginTop: 20,
    backgroundColor: '#F4422A',
  },

  btnText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },

  label: {
    color: '#5E6366',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 24,
  },

  correctText: {
    color: '#32936F',
  },

  TextInputCorrect: {
    backgroundColor: ' rgba(50, 147, 111, 0.24)',
  },
  phoneNumberContainer: {
    gap: 6,
    //width: 342,
    height: 52,
    flexDirection: 'row',
    marginLeft: 23,
    marginRight: 25,
    //alignSelf: 'center',
    alignItems: 'center',
  },
  phoneNumber: {
    color: 'rgba(177, 71, 38, 1)',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    gap: 10,
    paddingTop: 0,
    paddingRight: 4,
    paddingBottom: 0,
    paddingLeft: 4,
    marginBottom: 10,
    width: 342,
    alignSelf: 'center',
  },
  countryCode: {
    width: 120,
    height: 52,
    borderRadius: 8,
    gap: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(239, 241, 249, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flag: {
    width: 27,
    height: 27,
  },
  phoneNumberInputContainer: {
    //width: '80%',
    height: 52,
    gap: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(239, 241, 249, 0.6)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputfield: {
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 8,
    width: 184,
    height: 39,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',
  },
  inputfieldFilled: {
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 8,
    width: 148,
    height: 39,
    fontFamily: 'Poppins-Regular',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
