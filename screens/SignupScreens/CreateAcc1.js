import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function CreateAcc1() {
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const [secureTextEntry2, setSecureTextEntry2] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = React.useState('');
  const [valid, setValid] = React.useState(true);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const togglePasswordVisibility2 = () => {
    setSecureTextEntry2(!secureTextEntry2);
  };



  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View style={styles.border}>
          <View style={styles.img}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/logoText.png')}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>Create An Account</Text>
            <Text style={styles.description}>
              Please complete all input fields to create your account
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              placeholder="First Name , Last Name"
              style={styles.inputArea}
              placeholderTextColor="#909090"
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              placeholder="Email@Domain.com"
              placeholderTextColor="#909090"
              style={styles.inputArea}
              value={email}
              onChangeText={email => setEmail(email)}
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.sectionPassword}>
              <TouchableOpacity>
                <Image
                  style={styles.lockIcon}
                  source={require('../../assets/images/lock.png')}
                />
              </TouchableOpacity>
              <TextInput
                secureTextEntry={secureTextEntry}
                style={styles.inputAreaPassword}
                value={password}
                onChangeText={password => setPassword(password)}
              />
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Image
                  style={styles.hiddenIcon}
                  source={require('../../assets/images/fi_eye-off.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.sectionPassword}>
              <TouchableOpacity>
                <Image
                  style={styles.lockIcon}
                  source={require('../../assets/images/lock.png')}
                />
              </TouchableOpacity>
              <TextInput
                secureTextEntry={secureTextEntry2}
                style={styles.inputAreaPassword}
              />
              <TouchableOpacity onPress={togglePasswordVisibility2}>
                <Image
                  style={styles.hiddenIcon}
                  source={require('../../assets/images/fi_eye-off.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <TouchableOpacity
              
              style={valid ? styles.validBtn : styles.btn}>
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.terms}>
              By Signing Up, You Agree To Our
              <Text style={styles.redText}> Terms Of Service</Text> And
              <Text style={styles.redText}> Privacy Policy</Text>
            </Text>
          </View>

          <View style={styles.section1}>
            <Text style={styles.accText}>Already Have An Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.redText}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  border: {
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25,
  },

  logo: {
    width: 200,
    height: 40,
  },

  img: {
    alignItems: 'center',
  },

  section: {
    marginTop: 10,
    marginBottom: 12,
  },
  section1: {
    marginTop: 10,
    marginBottom: 12,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  heading: {
    color: '#292929',
    fontSize: 20,
    marginBottom: 5,
    marginTop: 20,
    fontFamily: 'Poppins-SemiBold',
  },

  description: {
    color: '#A1A1A1',
    fontSize: 13,
    paddingRight: 80,
    fontFamily: 'Inter',
  },

  inputArea: {
    height: 52,
    paddingLeft: 10,
    backgroundColor: 'rgba(239, 241, 249, 0.90)',
    borderRadius: 8,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    //color: '#909090',
  },

  label: {
    marginBottom: 10,
    color: '#5E6366',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },

  btn: {
    backgroundColor: '#C7C7CC',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  validBtn: {
    backgroundColor: '#F4422A',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },

  terms: {
    textAlign: 'center',
    color: '#282828',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    paddingHorizontal: 20,
  },

  accText: {
    textAlign: 'center',
    color: '#A1A1A1',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },

  redText: {
    color: '#D33A3A',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },

  sectionPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 52,
    backgroundColor: 'rgba(239, 241, 249, 0.90)',
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },

  inputAreaPassword: {
    width: 265,
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
});
