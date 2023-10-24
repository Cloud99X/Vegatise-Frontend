import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default function VehicleInformation({navigation}) {
  const [isImageVisible1, setImageVisible1] = useState(false);
  const [isImageVisible2, setImageVisible2] = useState(false);
  const [isImageVisible3, setImageVisible3] = useState(false);
  const [isImageVisible4, setImageVisible4] = useState(false);
  const [isImageVisible5, setImageVisible5] = useState(false);

  const handleButtonPress1 = () => {
    setImageVisible1(!isImageVisible1);
    setImageVisible2(false);
    setImageVisible3(false);
  };

  const handleButtonPress2 = () => {
    setImageVisible2(!isImageVisible2);
    setImageVisible1(false);
    setImageVisible3(false);
  };

  const handleButtonPress3 = () => {
    setImageVisible3(!isImageVisible3);
    setImageVisible1(false);
    setImageVisible2(false);
  };

  const handleButtonPress4 = () => {
    setImageVisible4(!isImageVisible4);
    setImageVisible5(false);
  };

  const handleButtonPress5 = () => {
    setImageVisible5(!isImageVisible5);
    setImageVisible4(false);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.headerRed} />

      <TouchableOpacity
        style={styles.leftArrow}
        onPress={() => navigation.navigate('GettingStarted3')}>
        <Image source={require('../../assets/images/arrow-left.png')} />
      </TouchableOpacity>
      <Text style={styles.heading1}>Getting Started</Text>
      <SafeAreaView>
        <View style={styles.border}>
          <Text style={styles.heading2}>Vehicle Information</Text>

          <View style={styles.section}>
            <Text style={styles.label}>Car Type</Text>
            <View style={styles.sectionWithMenu}>
              <TextInput style={styles.brandInputArea} placeholder="Ex-SUV" />
              <TouchableOpacity>
                <Image
                  style={styles.downArrow}
                  source={require('../../assets/images/ArrowDown.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.brandSection}>
            <View>
              <Text style={styles.label}>Car Brand</Text>
              <View style={styles.brandSectionWithMenu}>
                <TextInput style={styles.brandInputArea} placeholder="Ex-Kia" />
              </View>
            </View>
            <View>
              <Text style={styles.label}>Car Model</Text>
              <View style={styles.brandSectionWithMenu}>
                <TextInput
                  style={styles.brandInputArea}
                  placeholder="Ex-Carrens"
                />
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Car Number Plate</Text>
            <View style={styles.sectionWithMenu}>
              <TextInput
                style={styles.brandInputArea}
                placeholder="Ex-BHP 4080"
              />
            </View>
          </View>

          <View style={styles.brandSection}>
            <View>
              <Text style={styles.label}>Year Of Making The Car</Text>
              <View style={styles.brandSectionWithMenu}>
                <TextInput
                  style={styles.brandInputArea}
                  placeholder="Ex-2015"
                />
                <TouchableOpacity>
                  <Image
                    style={styles.downArrow}
                    source={require('../../assets/images/ArrowDown.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.label}>Car Color</Text>
              <View style={styles.brandSectionWithMenu}>
                <TextInput
                  style={styles.brandInputArea}
                  placeholder="Ex-Black"
                />
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Your Identity</Text>
            <View style={styles.termsContainer1}>
              <TouchableOpacity onPress={handleButtonPress4}>
                {/* onPress={[onPressFunction1, onPressFunction2]} */}
                <View style={styles.box}>
                  {isImageVisible4 && (
                    <Image
                      source={require('../../assets/images/checkImg.png')}
                      style={styles.imageCheck}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <Text
                style={
                  isImageVisible4
                    ? [styles.termsText, {color: '#2B2F32'}]
                    : styles.termsText
                }>
                I Am The Owner And Driver Of This Vehicle
              </Text>
            </View>
            <View style={styles.termsContainer1}>
              <TouchableOpacity onPress={handleButtonPress5}>
                <View style={styles.box}>
                  {isImageVisible5 && (
                    <Image
                      source={require('../../assets/images/checkImg.png')}
                      style={styles.imageCheck}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <Text
                style={
                  isImageVisible5
                    ? [styles.termsText, {color: '#2B2F32'}]
                    : styles.termsText
                }>
                I Am Not The Owner Of The Vehicle
              </Text>
            </View>
          </View>

          <View style={styles.sectionLast}>
            <Text style={styles.label}>Car Usage</Text>
            <View style={styles.termsContainer1}>
              <TouchableOpacity onPress={handleButtonPress1}>
                <View style={styles.box}>
                  {isImageVisible1 && (
                    <Image
                      source={require('../../assets/images/checkImg.png')}
                      style={styles.imageCheck}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <Text
                style={
                  isImageVisible1
                    ? [styles.termsText, {color: '#2B2F32'}]
                    : styles.termsText
                }>
                Business Car
              </Text>
            </View>
            <View style={styles.termsContainer1}>
              <TouchableOpacity onPress={handleButtonPress2}>
                <View style={styles.box}>
                  {isImageVisible2 && (
                    <Image
                      source={require('../../assets/images/checkImg.png')}
                      style={styles.imageCheck}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <Text
                style={
                  isImageVisible2
                    ? [styles.termsText, {color: '#2B2F32'}]
                    : styles.termsText
                }>
                Private
              </Text>
            </View>
            <View style={styles.termsContainer1}>
              <TouchableOpacity onPress={handleButtonPress3}>
                <View style={styles.box}>
                  {isImageVisible3 && (
                    <Image
                      source={require('../../assets/images/checkImg.png')}
                      style={styles.imageCheck}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <Text
                style={
                  isImageVisible3
                    ? [styles.termsText, {color: '#2B2F32'}]
                    : styles.termsText
                }>
                Rent A Car
              </Text>
            </View>
          </View>
          <View style={styles.sectionBtn}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ReviewScreen')}>
              <LinearGradient
                style={styles.btn}
                locations={[0, 1]}
                colors={['#fb4e02', '#c8102e']}
                useAngle={true}
                angle={-90}>
                <Text style={styles.btnText}>Save</Text>
              </LinearGradient>
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
    //fontFamily: 'Poppins',
  },

  headerRed: {
    backgroundColor: 'rgba(194, 48, 48, 1)',
    height: 54,
  },

  leftArrow: {
    position: 'absolute',
    top: 19,
    left: 25,
  },

  heading1: {
    position: 'absolute',
    top: 16,
    left: 60,
    color: '#F4F4F4',
    fontSize: 20,
    //fontFamily: 'Poppins-Thin',
    fontWeight: '700',
  },

  border: {
    marginTop: 15,
    marginHorizontal: 24,
  },

  heading2: {
    color: '#2E2E2E',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },

  section: {
    marginTop: 10,
    marginBottom: 15,
  },

  label: {
    marginBottom: 10,
    color: '#2E2E2E',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },

  sectionWithMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    alignItems: 'center',
    backgroundColor: 'rgba(239, 241, 249, 0.90)',
    borderRadius: 8,
  },

  downArrow: {
    flex: 0,
    marginRight: 15,
  },

  brandSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  brandSectionWithMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    width: 160,
    height: 50,
    alignItems: 'center',
    backgroundColor: 'rgba(239, 241, 249, 0.90)',
    borderRadius: 8,
    fontWeight: '400',
  },

  brandInputArea: {
    width: 100,
    marginRight: 10,
    fontSize: 10,
    color: '#A1A1A1',
    fontFamily: 'Poppins-Regular',
  },

  termsContainer1: {
    flexDirection: 'row',
    marginBottom: 5,
  },

  box: {
    width: 24,
    height: 24,
    marginRight: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CFD3D4',
  },

  termsText: {
    color: '#83898C',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },

  btn: {
    borderRadius: 15,
    width: 252,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },

  sectionBtn: {
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 30,
  },

  imageCheck: {
    width: 25,
    height: 25,
  },
});
