import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export const forgotPasswordPage1 = {
  Default: 'Default',
  Disabled: 'Disabled',
};

const Page1 = ({navigation}) => {
  const [email, setEmail] = useState('');



  const sendCode = () => {
    navigation.navigate('page2');
  };

  const handleCreateACC = () => {
    navigation.navigate('CreateAcc1');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logoText.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot your Password?</Text>
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.enterEmailAddressText}>
          Enter your Email Address
        </Text>
        <View style={styles.emailInputFrame}>
          <TextInput
            style={styles.emailInput}
            onChangeText={setEmail}
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>
      </View>
      <TouchableOpacity onPress={sendCode}>
        <View style={classes.root}>
          <Text style={classes.requestOtp}>Send Code</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.dontHaveAccountContainer}>
        <Text style={styles.dontHaveAccountText}>Don't have an Account? </Text>
        <TouchableOpacity onPress={handleCreateACC}>
          <Text style={styles.createAccountText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  root: {
    width: 342,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4422A',
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
  },
  rootProperty1Disabled: {
    backgroundColor: '#CCC',
  },
  requestOtp: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  requestOtpProperty1Disabled: {
    opacity: 0.7,
  },
  forgotPasswordContainer: {
    marginTop: 50,
    marginBottom: 40,
  },
  forgotPasswordText: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
  logoContainer: {
    marginTop: 30, // Adjust this value as needed for the desired spacing
  },
  logo: {
    width: 201,
    height: 40,
  },
  emailContainer: {
    width: 342,
    height: 84,
    marginBottom: 20,
    justifyContent: 'center',
  },
  enterEmailAddressText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#000',
    marginBottom: 10,
  },
  emailInputFrame: {
    height: 46,
    backgroundColor: '#FFF', // Background color for the frame
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#8B8B8B',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  emailInput: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  dontHaveAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  dontHaveAccountText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  createAccountContainer: {
    width: 96,
    height: 18,
  },
  createAccountText: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: '#D33A3A',
  },
  accountTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Page1;
