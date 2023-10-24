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

const UpdateEmailScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [valid, setValid] = React.useState(true);
  // import images
  const arrowLeft = require('../../assets/images/arrowleftwight.png');
  const check = require('../../assets/images/Check1.png');

  const handleArrowLeft = () => {
    navigation.navigate('BasicInfoScreen');
  };
  const handEmailChange = emailText => {
    setEmail(emailText);
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
          <Text style={styles.textStyle1}>Update Email Address</Text>
          <Text style={styles.textStyle2}>
            Will Use This Email Address As Your Primary Email Address
          </Text>
          <Text style={styles.emailText}>Email</Text>
          <View
            style={
              valid
                ? [
                    styles.inputContainer,
                    {backgroundColor: 'rgba(240, 249, 246, 1)'},
                  ]
                : styles.inputContainer
            }>
            <TextInput
              placeholder="Ex - Vegatise@Domain"
              value={email}
              onChangeText={handEmailChange}
              style={styles.emailTextField}
            />
            {valid ? <Image source={check} /> : ''}
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
  emailText: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: '#2E2E2E',
    marginBottom: 10,
  },
  inputContainer: {
    width: 342,
    height: 52,
    gap: 20,
    borderRadius: 8,
    backgroundColor: 'rgba(239, 241, 249, 1)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailTextField: {
    width: 288,
    borderRadius: 10,
    paddingLeft: 16,
    paddingBottom: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#5E6366',
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
export default UpdateEmailScreen;
