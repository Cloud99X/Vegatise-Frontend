import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import images from '../../constants/images';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [error, setError] = useState('');
  const [emailerror, setEmailError] = useState('');
  const [valid, setValid] = useState(false);
  const [canLogin, setCanLogin] = useState(true);
  const [currentTab, setCurrentTab] = useState('phone');
  const [eyeOnOff, setEyeOnOff] = useState(false);
  const countryCode = '+94';

  React.useEffect(() => {
    if (phoneNumber.length === 9) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [phoneNumber]);

  const handleSignIn = async () => {
    navigation.replace('GettingStarted1');
  };

  const handlePhoneNumberChange = number => {
    setPhoneNumber(number);
  };
  const handEmailChange = emailText => {
    setEmail(emailText);
  };
  const handPasswordChange = pass => {
    setPassword(pass);
  };

  const handleTabChange = tab => {
    setCurrentTab(tab);
  };

  const handleOTPBtn = () => {
    navigation.navigate('OTPScreen');
  };

  const handleEyeOnOff = prop => {
    setEyeOnOff(prop);
  };

  const handleCreateACC = () => {
    navigation.navigate('CreateAcc1');
  };

  const handleforgotpassword = () => {
    navigation.navigate('Page1');
  };
  const handleLogin = () => {
    navigation.navigate('GettingStarted1');
  };

  const renderTab = () => {
    if (currentTab === 'phone') {
      return (
        <>
          {/* Phone Number Tab */}
          <View>
            <Text style={valid ? styles.valid : styles.phoneNumber}>
              Phone Number
            </Text>
            <View style={styles.phoneNumberContainer}>
              <View style={styles.countryCode}>
                <Image source={images.slFlag} style={styles.flag} />
                <Text style={{fontSize: 12, fontFamily: 'Poppins-Regular'}}>
                  +94
                </Text>
              </View>
              <View style={styles.phoneNumberInputContainer}>
                <TextInput
                  placeholder="769016274"
                  keyboardType="numeric"
                  value={phoneNumber}
                  onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                  style={
                    phoneNumber.length > 0
                      ? styles.inputfieldFilled
                      : styles.inputfield
                  }
                />
                {valid ? (
                  <Image source={images.u_check} />
                ) : (
                  <View style={{width: 16}} />
                )}
              </View>
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
          </View>
          <View>
            <TouchableOpacity
              style={valid ? styles.validOTP : styles.otpBtn}
              disabled={!valid}>
              <Text style={styles.btnText}>Request OTP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lastSection}>
            <Text style={styles.text1}>Not Registered Yet?</Text>
            <TouchableOpacity onPress={handleCreateACC}>
              <Text style={styles.text2}>Create An Account</Text>
            </TouchableOpacity>
          </View>
        </>
      );
    } else if (currentTab === 'email') {
      return (
        // Email Tab
        <View style={styles.emailAddressContainer}>
          <Text style={styles.emailPasswordText}>Email Address</Text>
          <TextInput
            placeholder="Email@Domain.Com"
            value={email}
            onChangeText={email => setEmail(email)}
            style={styles.emailTextField}
          />
          <View>
            <Text style={styles.emailPasswordText}>Password</Text>
            <View
              style={
                emailerror
                  ? [
                      styles.passwordContainer,
                      {backgroundColor: 'rgba(252, 243, 242, 1)'},
                    ]
                  : styles.passwordContainer
              }>
              <Image source={images.LockImg} />
              <TextInput
                secureTextEntry={!eyeOnOff}
                value={password}
                onChangeText={password => setPassword(password)}
                style={styles.passInputField}
              />
              {!eyeOnOff ? (
                <TouchableOpacity onPress={() => handleEyeOnOff(true)}>
                  <Image source={images.eyeoff} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => handleEyeOnOff(false)}>
                  <Image source={images.eye} />
                </TouchableOpacity>
              )}
            </View>
            {emailerror && <Text style={styles.emailerror}>{emailerror}</Text>}
          </View>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              width: 105,
              marginTop: -20,
              marginBottom: 41,
            }}
            onPress={handleforgotpassword}>
            <Text
              style={{
                color: '#576DBC',
                fontSize: 12,
                fontFamily: 'Poppins-Regular',
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              onPress={handleSignIn}
              style={canLogin ? styles.validOTP : styles.otpBtn}
              disabled={!canLogin}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.lastSection}>
            <Text style={styles.text1}>Not Registered Yet?</Text>
            <TouchableOpacity onPress={handleCreateACC}>
              <Text style={styles.text2}>Create An Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.window}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>
        <Image source={images.Vegatise} style={styles.brandLogo} />
        <View style={styles.section1}>
          <View style={styles.titlecontainer}>
            <Text style={styles.title}>Welcome To, Vegatise</Text>
          </View>
          <View style={styles.phoneEmailContainer}>
            <TouchableOpacity onPress={() => handleTabChange('phone')}>
              <View
                style={
                  currentTab === 'phone'
                    ? [
                        styles.tabContainer,
                        {
                          backgroundColor: 'rgba(255, 255, 255, 1)',
                          borderRadius: 10,
                        },
                      ]
                    : styles.tabContainer
                }>
                <Text
                  style={
                    currentTab === 'phone'
                      ? [styles.tabText, {color: 'rgba(20, 20, 20, 1)'}]
                      : styles.tabText
                  }>
                  Phone Number
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTabChange('email')}>
              <View
                style={
                  currentTab === 'email'
                    ? [
                        styles.tabContainer,
                        {
                          backgroundColor: 'rgba(255, 255, 255, 1)',
                          borderRadius: 10,
                        },
                      ]
                    : styles.tabContainer
                }>
                <Text
                  style={
                    currentTab === 'email'
                      ? [styles.tabText, {color: 'rgba(20, 20, 20, 1)'}]
                      : styles.tabText
                  }>
                  Email
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {renderTab()}
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
  brandLogo: {
    width: 201,
    height: 40,
    alignSelf: 'center',
  },
  flag: {
    width: 27,
    height: 27,
  },
  scrollcontainer: {
    flex: 1,
  },
  titlecontainer: {
    paddingTop: 10,
    paddingRight: 0,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  title: {
    width: 226,
    height: 30,
    fontSize: 20,
    lineHeight: 30,
    color: 'rgba(41, 41, 41, 1)',
    fontFamily: 'Poppins-SemiBold',
  },
  container: {
    gap: 41,
    height: 502,
    top: 49,
  },
  section1: {
    gap: 20,
    width: 342,
    height: 118,
    marginLeft: 23,
    marginRight: 25,
    alignSelf: 'center',
  },
  phoneEmailContainer: {
    backgroundColor: '#EDEDED',
    width: 342,
    height: 48,
    borderRadius: 12,
    paddingTop: 5,
    paddingRight: 6,
    paddingBottom: 5,
    paddingLeft: 6,
    flexDirection: 'row',
  },
  tabContainer: {
    width: 165,
    height: 38,
    paddingTop: 10,
    paddingRight: 37,
    paddingBottom: 10,
    paddingLeft: 37,
    gap: 5,
  },
  tabText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: 'rgba(79, 79, 79, 1)',
  },
  phoneNumberContainer: {
    gap: 6,
    width: 342,
    height: 52,
    flexDirection: 'row',
    marginLeft: 23,
    marginRight: 25,
    alignSelf: 'center',
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
  phoneNumberInputContainer: {
    width: 216,
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
    width: 180,
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
    width: 180,
    height: 39,
    borderRadius: 8,
    fontFamily: 'Poppins-Regular',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 1)',
  },
  otpBtn: {
    width: 342,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgba(199, 199, 204, 1)',
    justifyContent: 'center',
    marginBottom: 10,
    alignSelf: 'center',
  },
  lastSection: {
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    width: 155,
    height: 24,
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    color: 'rgba(151, 151, 151, 1)',
  },
  text2: {
    color: '#C23030',
    width: 153,
    height: 24,
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  error: {
    width: 142,
    paddingTop: 10,
    fontWeight: '400',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    lineHeight: 14.52,
    color: 'rgba(245, 126, 119, 1)',
  },
  emailerror: {
    width: 142,
    height: 18,
    fontWeight: '400',
    fontSize: 12,
    marginTop: -15,
    marginBottom: 10,
    color: 'rgba(194, 48, 48, 1)',
  },
  valid: {
    color: 'rgba(50, 147, 111, 1)',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    paddingTop: 0,
    paddingRight: 4,
    paddingBottom: 0,
    paddingLeft: 4,
    marginBottom: 10,
    width: 342,
    alignSelf: 'center',
  },
  validOTP: {
    width: 342,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgba(244, 66, 42, 1)',
    justifyContent: 'center',
    marginBottom: 10,
    alignSelf: 'center',
  },
  emailAddressContainer: {
    width: 342,
    height: 78,
    gap: 8,
    alignSelf: 'center',
  },
  emailPasswordText: {
    fontWeight: '600',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: 'rgba(94, 99, 102, 1)',
    paddingTop: 0,
    paddingRight: 4,
    paddingBottom: 0,
    paddingLeft: 4,
  },
  emailTextField: {
    width: 342,
    height: 52,
    backgroundColor: '#E5EFF1F9',
    borderRadius: 10,
    marginBottom: 21,
    paddingLeft: 16,
    paddingBottom: 10,
    fontFamily: 'Poppins-Regular',
  },
  passwordContainer: {
    marginTop: 8,
    width: 342,
    height: 52,
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    gap: 8,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#E5EFF1F9',
    alignItems: 'center',
    marginBottom: 20,
  },
  passInputField: {
    width: 234,
    height: 50,
    fontFamily: 'Poppins-Regular',
  },
});

export default LoginScreen;
