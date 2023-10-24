import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';

import images from '../../constants/images';
import {useRoute} from '@react-navigation/native';
//
const OTPScreen = ({navigation}) => {
  // change mobile number accordingly
  const route = useRoute();

  const handleArrowClick = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.window}>
      <TouchableOpacity onPress={handleArrowClick}>
        <Image source={images.ArrowLeft} style={styles.arrowleft} />
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
      <View style={styles.section1}>
        <View style={styles.section2}>
          <Text style={styles.title}>OTP Verification</Text>
          <Text style={styles.body}>
            An 4 Digit Code Has Been Sent To +94 769016274
          </Text>
          <View style={styles.numberContainer}>
            <TextInput
              placeholder=""
              keyboardType="numeric"
              style={
                error
                  ? [styles.numberInput, {backgroundColor: '#E5C0C0'}]
                  : styles.numberInput
              }
              value={otp1}
              maxLength={1}
            />
            <TextInput
              placeholder=""
              keyboardType="numeric"
              style={
                error
                  ? [styles.numberInput, {backgroundColor: '#E5C0C0'}]
                  : styles.numberInput
              }
              value={otp2}
              maxLength={1}
            />
            <TextInput
              placeholder=""
              keyboardType="numeric"
              style={
                error
                  ? [styles.numberInput, {backgroundColor: '#E5C0C0'}]
                  : styles.numberInput
              }
              value={otp3}
              maxLength={1}
            />
            <TextInput
              placeholder=""
              keyboardType="numeric"
              style={
                error
                  ? [styles.numberInput, {backgroundColor: '#E5C0C0'}]
                  : styles.numberInput
              }
              value={otp4}
              maxLength={1}
            />
            <TextInput
              placeholder=""
              keyboardType="numeric"
              style={
                error
                  ? [styles.numberInput, {backgroundColor: '#E5C0C0'}]
                  : styles.numberInput
              }
              value={otp5}
              maxLength={1}
            />
            <TextInput
              placeholder=""
              keyboardType="numeric"
              style={
                error
                  ? [styles.numberInput, {backgroundColor: '#E5C0C0'}]
                  : styles.numberInput
              }
              value={otp6}
              maxLength={1}
            />
          </View>
          <TouchableOpacity
            disabled={!canVerify}
            style={canVerify ? styles.validverify : styles.verifyBtn}
            onPress={verifySmsCode}>
            <Text style={styles.verifyText}>Verify</Text>
          </TouchableOpacity>
          {error ? <Text style={styles.error}>{error}</Text> : ''}
        </View>
      </View>
      <View style={styles.lastSection}>
        {error ? (
          <TouchableOpacity onPress={resendOTP}>
            <Text
              style={[styles.poppinsMedium, {textDecorationLine: 'underline'}]}>
              Resent OTP
            </Text>
          </TouchableOpacity>
        ) : (
          <>
            <Text style={styles.poppinsMedium}>Didn't Get Your OTP?</Text>
            <TouchableOpacity onPress={resendOTP}>
              <Text
                style={[styles.poppinsMedium, {color: 'rgba(194, 48, 48, 1)'}]}>
                RESEND IT
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  arrowleft: {
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
  section1: {
    height: 303,
    gap: 50,
  },
  section2: {
    gap: 23,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    height: 30,
    fontSize: 18,
    color: 'rgba(0, 12, 32, 1)',
    fontFamily: 'Poppins-SemiBold',
  },
  body: {
    marginTop: -20,
    width: 200,
    height: 40,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    color: 'rgba(89, 89, 89, 1)',
    textAlign: 'center',
  },
  numberContainer: {
    width: 300,
    height: 64,
    gap: 16,
    flexDirection: 'row',
  },
  numberInput: {
    width: 50,
    height: 54,
    backgroundColor: 'rgba(237, 237, 237, 1)',
    borderRadius: 15,
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    textAlignVertical: 'center',
  },
  verifyBtn: {
    width: 342,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgba(199, 199, 204, 1)',
    textTransform: 'none',
    justifyContent: 'center',
    marginBottom: 50,
  },
  verifyText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Poppins-SemiBold',
  },
  validverify: {
    width: 342,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgba(244, 66, 42, 1)',
    textTransform: 'none',
    justifyContent: 'center',
    marginBottom: 50,
  },
  lastSection: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  poppinsMedium: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: 'rgba(0, 14, 36, 1)',
    fontWeight: '500',
  },
  error: {
    width: 282,
    marginLeft: -50,
    marginTop: -60,
    fontWeight: '400',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    lineHeight: 14.52,
    color: 'rgba(245, 126, 119, 1)',
  },
});
export default OTPScreen;
