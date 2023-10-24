import {
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React from 'react';

export default function Page2({navigation}) {
  const verify = () => {
    navigation.navigate('page3');
  };

  const pageOne = () => {
    navigation.navigate('Page1');
  };
  const handleCreateACC = () => {
    navigation.navigate('CreateAcc1');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        {/* Back Icon */}
        <View style={styles.backIconContainer}>
          <TouchableOpacity onPress={pageOne}>
            <Image
              style={styles.backIcon}
              source={require('../../assets/images/backicon.png')}
            />
          </TouchableOpacity>
        </View>

        {/* Center Content */}
        <View style={styles.centerContent}>
          {/* Title */}
          <Text style={styles.title}>OTP Verification</Text>

          {/* Verification Image */}
          <Image
            style={styles.verificationImage}
            source={require('../../assets/images/verification.png')}
          />

          {/* Enter OTP Frame */}
          <View style={styles.enterOtpFrame}>
            <Text style={styles.enterOtpText}>Enter OTP</Text>
            <Text style={styles.infoText}>
              An 4 digit Code has been sent to your Email
            </Text>
          </View>

          {/* OTP Input */}
          <View style={styles.otpInputContainer}>
            {/* You can use TextInput for each digit */}
            <TextInput style={styles.otpInput} maxLength={1} />
            <TextInput style={styles.otpInput} maxLength={1} />
            <TextInput style={styles.otpInput} maxLength={1} />
            <TextInput style={styles.otpInput} maxLength={1} />
          </View>

          {/* OTP Timer */}
          <View style={styles.timerTextContainer}>
            <Text style={styles.timerText}>You should receive the OTP in</Text>
            <Text style={styles.orangeText}> 30 seconds</Text>
          </View>

          {/* Verify Button */}
          <TouchableOpacity style={styles.verifyButton} onPress={verify}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>

          {/* Create Account Text */}
          <View style={{flexDirection: 'row', gap: 5}}>
            <Text style={styles.createAccountText}>Don't Have an Account?</Text>
            <TouchableOpacity onPress={handleCreateACC}>
              <Text style={styles.orangeText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  backIconContainer: {
    top: 40,
    left: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  centerContent: {
    marginTop: 50,
    alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  verificationImage: {
    width: 290,
    height: 290,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  enterOtpFrame: {
    borderWidth: 1,
    borderColor: 'transparent', // Invisible frame
    alignItems: 'flex-start',
    marginTop: 20,
    marginLeft: -50,
  },
  enterOtpText: {
    fontSize: 18,
    height: 27,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    textAlign: 'left',
  },
  infoText: {
    fontSize: 12,
    textAlign: 'left',
    fontFamily: 'Poppins-SemiBold',
    color: '#575757',
  },
  otpInputContainer: {
    flexDirection: 'row',
    width: 300,
    height: 64,
    marginTop: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#FFF',
    backgroundColor: '#EDEDED',
    width: 63,
    height: 64,
    marginHorizontal: 5,
    marginRight: 7,
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 15,
  },
  timerText: {
    fontSize: 12,
    color: '#575757',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  orangeText: {
    fontSize: 12,
    color: '#D33A3A',
    fontFamily: 'Poppins-SemiBold',
  },
  verifyButton: {
    backgroundColor: '#F4422A',
    width: 342,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 34,
    marginBottom: 20,
  },
  verifyButtonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center', // Center horizontally
    textAlignVertical: 'center',
  },
  createAccountTextContainer: {
    marginTop: 20,
  },
  timerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  createAccountText: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
});
