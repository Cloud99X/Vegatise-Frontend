import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const BasicInfoScreen = ({navigation}) => {
  const [checked, setChecked] = React.useState(false);
  // import images
  const arrowLeft = require('../../assets/images/arrowleftwight.png');
  const arrowRight = require('../../assets/images/arrow-right.png');
  const checkIcon = require('../../assets/images/checkicon.png');
  const check = require('../../assets/images/Check1.png');

  const handleArrowLeft = () => {
    navigation.navigate('ProfileScreen');
  };
  const handleCheckbox1Change = () => {
    setChecked(!checked);
  };
  const changeEmail = () => {
    navigation.navigate('UpdateEmailScreen');
  };
  const changePhoneNumber = () => {
    navigation.navigate('UpdatePhoneNumberScreen');
  };
  const handleChangePassword = () => {
    navigation.navigate('ChangePasswordScreen');
  };
  const handleDeleteAcc = () => {
    navigation.navigate('DeleteAccountScreen');
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
          <Text style={styles.textStyle1}>Basic Info</Text>
          <View style={styles.container}>
            <Text style={styles.textStyle2}>Full Name</Text>
            <Text style={styles.textStyle3}>Abdurrahman Ahamed</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={changeEmail}>
              <View style={styles.container1}>
                <View>
                  <View style={{flexDirection: 'row', gap: 5}}>
                    <Text style={styles.textStyle2}>Email</Text>
                    <Image
                      source={check}
                      style={{width: 12, height: 12, marginTop: 5}}
                    />
                  </View>
                  <Text style={styles.textStyle3}>Sdsadas@Domain</Text>
                </View>
                <Image source={arrowRight} style={styles.arrowRightIcon} />
              </View>
            </TouchableOpacity>
            <View style={styles.line} />
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={changePhoneNumber}>
              <View style={[styles.container1, {gap: 180}]}>
                <View>
                  <Text style={styles.textStyle2}>Phone Number</Text>
                  <Text style={styles.textStyle3}>0769016271</Text>
                </View>
                <Image source={arrowRight} style={styles.arrowRightIcon} />
              </View>
            </TouchableOpacity>
            <View style={styles.line} />
          </View>
          <View style={styles.container}>
            <Text style={styles.textStyle2}>NIC Number</Text>
            <Text style={styles.textStyle3}>200235300851</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.container}>
            <Text style={styles.textStyle2}>Driving License Number</Text>
            <Text style={styles.textStyle3}>200235300851</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.container}>
            <Text style={styles.textStyle2}>Date Of Birth</Text>
            <Text style={styles.textStyle3}>12/18/2002</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.container}>
            <Text style={styles.textStyle2}>Gender</Text>
            <Text style={styles.textStyle3}>Male</Text>
            <View style={styles.line} />
          </View>
          <View style={[styles.container, {marginBottom: 0}]}>
            <TouchableOpacity onPress={handleChangePassword}>
              <View style={[styles.container1, {gap: 155}]}>
                <View>
                  <Text style={styles.textStyle2}>Change Password</Text>
                </View>
                <Image source={arrowRight} style={styles.arrowRightIcon} />
              </View>
            </TouchableOpacity>
            <View style={styles.line} />
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={handleDeleteAcc}>
              <View style={[styles.container1, {gap: 178}]}>
                <View>
                  <Text style={styles.textStyle2}>Delete Account</Text>
                </View>
                <Image source={arrowRight} style={styles.arrowRightIcon} />
              </View>
            </TouchableOpacity>
            <View style={styles.line} />
          </View>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={handleCheckbox1Change}>
              {checked ? (
                <View style={styles.checked}>
                  <Image source={checkIcon} />
                </View>
              ) : (
                ''
              )}
            </TouchableOpacity>
            <View>
              <Text style={styles.checkboxText}>I Am A Gig Economy Worker</Text>
              <Text style={styles.checkboxText}>
                (Food/Package Delivery, Uber/Pickme, Etc...)
              </Text>
            </View>
          </View>
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
    marginLeft: 24,
    marginRight: 24,
  },
  textStyle1: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 18,
    marginTop: 30,
    marginBottom: 30,
  },
  container: {
    width: 342,
    height: 59,
    marginBottom: 15,
  },
  container1: {
    flexDirection: 'row',
    gap: 190,
  },
  arrowRightIcon: {
    marginTop: 5,
  },
  textStyle2: {
    fontFamily: 'Poppins-Medium',
    color: '#161616',
    fontSize: 16,
  },
  textStyle3: {
    fontFamily: 'Poppins-Regular',
    color: '#0E0E0E',
    fontSize: 12,
  },
  line: {
    borderWidth: 1,
    borderColor: '#DADADA',
    width: 342,
  },
  checkboxContainer: {
    marginBottom: 40,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(207, 211, 212, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  checkboxText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  checkboxText1: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  checked: {
    backgroundColor: '#C23030',
    borderRadius: 8,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default BasicInfoScreen;
