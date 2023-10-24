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

const DeleteAccountScreen = ({navigation}) => {
  // import images
  const arrowLeft = require('../../assets/images/arrowleftwight.png');

  const handleArrowLeft = () => {
    navigation.navigate('BasicInfoScreen');
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
          <Text style={styles.textStyle1}>Delete Account</Text>
          <Text style={styles.textStyle2}>
            Please Contact Customer Service To Deactivate Or Delete Or Account
          </Text>
          <Text style={styles.textStyle3}>Mobile</Text>
          <Text style={styles.textStyle4}>077 0930447</Text>
          <Text style={styles.textStyle4}>011 2693950</Text>
          <Text style={[styles.textStyle3, {marginTop: 20}]}>Live Chat</Text>
          <TouchableOpacity>
            <Text
              style={[
                styles.textStyle4,
                {color: '#D33A3A', textDecorationLine: 'underline'},
              ]}>
              Contact An Vegatise Agent
            </Text>
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
    width: 295,
  },
  textStyle3: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000',
    marginBottom: 10,
  },
  textStyle4: {
    fontFamily: 'Poppins-Regular',
    color: '#000',
    fontSize: 12,
  },
});
export default DeleteAccountScreen;
