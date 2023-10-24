import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

export default function CreateAcc3({navigation}) {
  const createUserWithLinking = () => {};
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.border}>
          {console.log(user)}
          <View style={styles.leftNRight}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateAcc2')}
              style={styles.arrow}>
              <View style={styles.ArrowIcon}>
                <Image source={require('../../assets/images/arrow.png')} />
              </View>
            </TouchableOpacity>
            <Text style={styles.heading}>OTP Verification</Text>
            <View style={styles.rightPart} />
          </View>
          {console.log(verificationId)}
          <View style={styles.centerText}>
            <Text style={styles.subHeading}>
              Enter the 4 digits number sent to your mobile number
            </Text>
          </View>

          <View style={styles.boxQueue}>
            <TextInput
              value={otp1}
              onChangeText={handleOTP1Change}
              keyboardType="number-pad"
              maxLength={1}
              style={styles.box}
            />
            <TextInput
              value={otp2}
              onChangeText={handleOTP2Change}
              keyboardType="number-pad"
              maxLength={1}
              //autoFocus={true}
              style={styles.box}
            />
            <TextInput
              value={otp3}
              onChangeText={handleOTP3Change}
              keyboardType="number-pad"
              maxLength={1}
              //autoFocus={true}
              style={styles.box}
            />
            <TextInput
              value={otp4}
              onChangeText={handleOTP4Change}
              keyboardType="number-pad"
              maxLength={1}
              style={styles.box}
            />
            <TextInput
              value={otp5}
              onChangeText={handleOTP5Change}
              keyboardType="number-pad"
              maxLength={1}
              style={styles.box}
            />
            <TextInput
              value={otp6}
              onChangeText={handleOTP6Change}
              keyboardType="number-pad"
              maxLength={1}
              style={styles.box}
            />
          </View>

          <View style={styles.lastTextSec}>
            <Text style={styles.lastText}> Didn't Get Your OTP?</Text>
            <TouchableOpacity>
              <Text style={styles.redText}>RESEND IT</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[styles.btn, isCorrect ? styles.correctButton : styles.btn]}
            onPress={createUserWithLinking}>
            <Text style={styles.btnText}>Verify</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },

  border: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
  },

  leftNRight: {
    flexDirection: 'row',
    marginTop: 20,
  },

  arrow: {
    flex: 1,
    width: 24,
    height: 24,
  },

  heading: {
    flex: 1,
    flexGrow: 4,
    color: '#000C20',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },

  rightPart: {
    flex: 1,
  },

  centerText: {
    alignItems: 'center',
  },

  subHeading: {
    textAlign: 'center',
    color: '#000E24',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    marginTop: 50,
    width: 268,
    textTransform: 'capitalize',
  },

  boxQueue: {
    flexDirection: 'row',
    marginTop: 50,
    gap: 16,
    alignSelf: 'center',
  },

  box: {
    backgroundColor: '#EDEDED',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 15,
    textAlign: 'center',
    fontSize: 20,
    width: 50,
    height: 54,
  },

  lastTextSec: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lastText: {
    color: '#000E24',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },

  redText: {
    marginLeft: 5,
    color: '#D33A3A',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },

  btn: {
    alignItems: 'center',
    backgroundColor: '#C7C7CC',
    borderRadius: 8,
    marginTop: 50,
    height: 50,
    justifyContent: 'center',
  },

  btnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },

  correctButton: {
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    height: 50,
    marginTop: 50,
    backgroundColor: '#F4422A',
  },
});
