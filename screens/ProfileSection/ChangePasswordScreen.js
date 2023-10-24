import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const ChangePasswordScreen = ({navigation}) => {
  const [allvalid, setAllValid] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');
  const [eyeOnOff, setEyeOnOff] = React.useState(false);
  const [eyeOnOff1, setEyeOnOff1] = React.useState(false);
  const [eyeOnOff2, setEyeOnOff2] = React.useState(false);
  const [newPassValid, setNewPassValid] = React.useState(false); // check all conditions are true or not for new password
  const [repeatPassValid, setRepeatPassValid] = React.useState(false); // check all conditions are true or not for repeat password
  // new password conditions
  const [valid1, setValid1] = React.useState(false); // check password contains at least 8 characters
  const [valid2, setValid2] = React.useState(false); // check password contains a capital letter
  const [valid3, setValid3] = React.useState(false); // check password contains a number
  const [valid4, setValid4] = React.useState(false); // check password contains a special character
  // repeat password condition
  const [rpvalid1, setRPValid1] = React.useState(false); // check password contains at least 8 characters
  const [rpvalid2, setRPValid2] = React.useState(false); // check password contains a capital letter
  const [rpvalid3, setRPValid3] = React.useState(false); // check password contains a number
  const [rpvalid4, setRPValid4] = React.useState(false); // check password contains a special character
  // Import local images
  const arrowLeft = require('../../assets/images/arrowleftwight.png');
  const lockImg = require('../../assets/images/LockImg.png');
  const eyeoff = require('../../assets/images/eyeoff.png');
  const eye = require('../../assets/images/eye.png');
  const check = require('../../assets/images/Check1.png');

  // run the function every time when the variables are changing
  React.useEffect(() => {
    checkNewPasswordValid();
  }, [newPassword]);

  // run the function every time when the variables are changing
  React.useEffect(() => {
    checkRepeatPasswordValid();
  }, [repeatPassword]);

  React.useEffect(() => {
    if (newPassValid && repeatPassValid) {
      checkPasswordMatch();
    } else {
      setAllValid(false);
    }
  }, [newPassValid, repeatPassValid]);

  const checkPasswordMatch = () => {
    if (newPassword === repeatPassword) {
      setAllValid(true);
    } else {
      setAllValid(false);
    }
  };
  const checkNewPasswordValid = () => {
    if (valid1 && valid2 && valid3 && valid4) {
      setNewPassValid(true);
    } else {
      setNewPassValid(false);
    }
  };

  const checkRepeatPasswordValid = () => {
    if (rpvalid1 && rpvalid2 && rpvalid3 && rpvalid4) {
      setRepeatPassValid(true);
    } else {
      setRepeatPassValid(false);
    }
  };
  const handleArrowLeft = () => {
    navigation.navigate('BasicInfoScreen');
  };
  const handleEyeOnOff = prop => {
    setEyeOnOff(prop);
  };
  const handleEyeOnOff1 = prop => {
    setEyeOnOff1(prop);
  };
  const handleEyeOnOff2 = prop => {
    setEyeOnOff2(prop);
  };
  const handPasswordChange = pass => {
    setPassword(pass);
  };
  const handNewPasswordChange = pass => {
    setNewPassword(pass);
    const has8characters = hasMinimumLength(pass);
    if (has8characters) {
      setValid1(true);
    } else {
      setValid1(false);
    }
    const hasCapitalLetter = hasUppercaseLetter(pass);
    if (hasCapitalLetter) {
      setValid2(true);
    } else {
      setValid2(false);
    }

    const hasNumber = hasDigit(pass);
    if (hasNumber) {
      setValid3(true);
    } else {
      setValid3(false);
    }

    const hasSpecCharacter = hasSpecialCharacter(pass);
    if (hasSpecCharacter) {
      setValid4(true);
    } else {
      setValid4(false);
    }
  };
  const handRepeatPasswordChange = pass => {
    setRepeatPassword(pass);
    const has8characters = hasMinimumLength(pass);
    if (has8characters) {
      setRPValid1(true);
    } else {
      setRPValid1(false);
    }
    const hasCapitalLetter = hasUppercaseLetter(pass);
    if (hasCapitalLetter) {
      setRPValid2(true);
    } else {
      setRPValid2(false);
    }
    const hasNumber = hasDigit(pass);
    if (hasNumber) {
      setRPValid3(true);
    } else {
      setRPValid3(false);
    }
    const hasSpecCharacter = hasSpecialCharacter(pass);
    if (hasSpecCharacter) {
      setRPValid4(true);
    } else {
      setRPValid4(false);
    }
  };

  const hasMinimumLength = pass => {
    return pass.length >= 8;
  };
  const hasUppercaseLetter = pass => {
    const uppercaseRegex = /[A-Z]/;
    return uppercaseRegex.test(pass);
  };
  const hasDigit = pass => {
    const digitRegex = /\d/;
    return digitRegex.test(pass);
  };
  const hasSpecialCharacter = pass => {
    const specialCharRegex = /[@$!%*?&#]/;
    return specialCharRegex.test(pass);
  };
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
          <Text style={styles.textStyle1}>Change Password</Text>
          <View style={styles.container}>
            <View>
              <Text style={styles.textStyle2}>Enter Current Password</Text>
              <View style={styles.passwordContainer}>
                <Image source={lockImg} />
                <TextInput
                  secureTextEntry={!eyeOnOff}
                  value={password}
                  onChangeText={handPasswordChange}
                  style={styles.passInputField}
                  placeholder="Placeholder"
                />
                {!eyeOnOff ? (
                  <TouchableOpacity onPress={() => handleEyeOnOff(true)}>
                    <Image source={eyeoff} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => handleEyeOnOff(false)}>
                    <Image source={eye} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <View>
              <Text
                style={
                  newPassValid
                    ? [styles.textStyle2, {color: '#32936F'}]
                    : styles.textStyle2
                }>
                Enter New Password
              </Text>
              <View
                style={
                  newPassValid
                    ? [
                        styles.passwordContainer1,
                        {backgroundColor: 'rgba(240, 249, 246, 1)'},
                      ]
                    : styles.passwordContainer1
                }>
                <Image source={lockImg} />
                <TextInput
                  secureTextEntry={!eyeOnOff1}
                  value={newPassword}
                  onChangeText={handNewPasswordChange}
                  style={styles.passInputField}
                />
                {newPassValid ? <Image source={check} /> : ''}

                {!eyeOnOff1 ? (
                  <TouchableOpacity onPress={() => handleEyeOnOff1(true)}>
                    <Image source={eyeoff} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => handleEyeOnOff1(false)}>
                    <Image source={eye} />
                  </TouchableOpacity>
                )}
              </View>
              <Text style={styles.textStyle3}>
                Password Must Be At Least
                {valid1 ? (
                  <Text style={{color: '#32936F'}}> 8 Characters </Text>
                ) : (
                  <Text style={{color: '#F57E77'}}> 8 Characters </Text>
                )}
                And Must Contain At Least A
                {valid2 ? (
                  <Text style={{color: '#32936F'}}> Capital Letter </Text>
                ) : (
                  <Text style={{color: '#F57E77'}}> Capital Letter </Text>
                )}
                , A{' '}
                {valid3 ? (
                  <Text style={{color: '#32936F'}}> Number </Text>
                ) : (
                  <Text style={{color: '#F57E77'}}> Number </Text>
                )}
                And A{' '}
                {valid4 ? (
                  <Text style={{color: '#32936F'}}> Special Character </Text>
                ) : (
                  <Text style={{color: '#F57E77'}}> Special Character </Text>
                )}
                .
              </Text>
            </View>
            <View>
              <Text
                style={
                  repeatPassValid
                    ? [styles.textStyle2, {color: '#32936F'}]
                    : styles.textStyle2
                }>
                Repeat New Password
              </Text>
              <View
                style={
                  repeatPassValid
                    ? [
                        styles.passwordContainer1,
                        {backgroundColor: 'rgba(240, 249, 246, 1)'},
                      ]
                    : styles.passwordContainer1
                }>
                <Image source={lockImg} />
                <TextInput
                  secureTextEntry={!eyeOnOff2}
                  value={repeatPassword}
                  onChangeText={handRepeatPasswordChange}
                  style={styles.passInputField}
                />
                {repeatPassValid ? <Image source={check} /> : ''}

                {!eyeOnOff2 ? (
                  <TouchableOpacity onPress={() => handleEyeOnOff2(true)}>
                    <Image source={eyeoff} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => handleEyeOnOff2(false)}>
                    <Image source={eye} />
                  </TouchableOpacity>
                )}
              </View>
              <Text style={styles.textStyle3}>
                Password Must Be At Least
                {rpvalid1 ? (
                  <Text style={{color: '#32936F'}}> 8 Characters </Text>
                ) : (
                  <Text style={{color: '#F57E77'}}> 8 Characters </Text>
                )}
                And Must Contain At Least A
                {rpvalid2 ? (
                  <Text style={{color: '#32936F'}}> Capital Letter </Text>
                ) : (
                  <Text style={{color: '#F57E77'}}> Capital Letter </Text>
                )}
                , A{' '}
                {rpvalid3 ? (
                  <Text style={{color: '#32936F'}}> Number </Text>
                ) : (
                  <Text style={{color: '#F57E77'}}> Number </Text>
                )}
                And A{' '}
                {rpvalid4 ? (
                  <Text style={{color: '#32936F'}}> Special Character </Text>
                ) : (
                  <Text style={{color: '#F57E77'}}> Special Character </Text>
                )}
                .
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={allvalid ? styles.validBtn : styles.button}
            disabled={!allvalid}>
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
    fontFamily: 'Poppins-SemiBold',
    color: '#2E2E2E',
    fontSize: 10.72,
  },
  textStyle3: {
    fontFamily: 'Poppins-Medium',
    color: '#ABAFB1',
    fontSize: 9,
    marginTop: 5,
  },
  container: {
    marginTop: 30,
    gap: 25,
  },
  passwordContainer: {
    marginTop: 8,
    width: 305,
    height: 52,
    gap: 12,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(239, 241, 249, 1)',
    alignItems: 'center',
    paddingLeft: 16,
  },
  passwordContainer1: {
    marginTop: 8,
    width: 342,
    height: 52,
    gap: 12,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(239, 241, 249, 1)',
    alignItems: 'center',
    paddingLeft: 16,
  },
  passInputField: {
    width: 212,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
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
    marginBottom: 20,
  },
  validBtn: {
    width: 342,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'rgba(244, 66, 42, 1)',
    justifyContent: 'center',
    marginTop: 70,
    marginBottom: 20,
  },
});
export default ChangePasswordScreen;
