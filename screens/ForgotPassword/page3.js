import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const Page3 = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const login = () => {
    navigation.navigate('Login');
  };

  const pageTwo = () => {
    navigation.navigate('page2');
  };

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      {/* Back Icon */}

      <TouchableOpacity onPress={pageTwo}>
        <Image
          style={styles.backIcon}
          source={require('../../assets/images/backicon.png')}
        />
      </TouchableOpacity>

      {/* Heading */}
      <Text style={styles.heading}>Create New Password</Text>

      {/* Enter New Password */}
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          justifyContent: 'space-between',
          marginTop: 50,
        }}>
        <Text style={[styles.subheading, styles.greenText]}>
          Enter New Password
        </Text>
        <View style={styles.passwordInputContainer}>
          <Image
            source={require('../../assets/images/lock.png')}
            style={styles.lockIcon}
          />
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          {password !== '' && (
            <Image
              source={require('../../assets/images/Check1.png')}
              style={styles.icon}
            />
          )}
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={require('../../assets/images/eyeoff.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* Password Requirements */}
        <Text style={[styles.passwordRequirements, styles.blackText]}>
          Password must be at least{' '}
          <Text style={styles.greenText}>8 Characters</Text> and must contain at
          least a<Text style={styles.greenText}> Capital Letter</Text>, a
          <Text style={styles.greenText}> Number</Text>, and a
          <Text style={styles.greenText}> Special Character</Text>.
        </Text>

        {/* Confirm Password */}
        <Text style={[styles.subheading, {color: '#5E6366'}]}>
          Confirm Password
        </Text>
        <View style={styles.passwordInputContainer}>
          <Image
            source={require('../../assets/images/lock.png')}
            style={styles.lockIcon}
          />
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Image
              source={require('../../assets/images/eyeoff.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* Save Changes Button */}
        <TouchableOpacity style={styles.saveButton} onPress={login}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backIcon: {
    width: 24,
    height: 24,
    marginLeft: 20,
    marginTop: 30,
  },
  heading: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#000C20',
    textAlign: 'center',
  },
  subheading: {
    marginBottom: 10,
    color: 'black',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF1F9',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  icon: {
    marginLeft: 10,
  },
  lockIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  passwordInput: {
    flex: 1,
    fontSize: 12,
    paddingVertical: 10,
    fontFamily: 'Poppins-Regular',
  },
  iconContainer: {
    padding: 5,
  },
  passwordRequirements: {
    fontSize: 12,
    marginBottom: 40,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  saveButton: {
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C7C7CC',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  greyButton: {},
  greenText: {
    color: '#32936F',
  },
  blackText: {
    color: '#ABAFB1',
  },
});

export default Page3;
