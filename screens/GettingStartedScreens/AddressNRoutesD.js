import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default function AddressNRoutesD({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.headerRed} />
      <TouchableOpacity
        onPress={() => navigation.navigate('GettingStarted3')}
        style={styles.leftArrow}>
        <Image source={require('../../assets/images/arrow-left.png')} />
      </TouchableOpacity>
      <Text style={styles.heading1}>Getting Started</Text>
      <SafeAreaView>
        <View style={styles.border}>
          <Text style={styles.title}>Address And Routes</Text>

          <View style={styles.section}>
            <Text style={styles.label}>Address Line 1</Text>
            <TextInput style={styles.inputArea} placeholder="Ex - SUV" />
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>
              Address Line 2<Text style={styles.greyText}> (Optional)</Text>
            </Text>
            <TextInput style={styles.inputArea} placeholder="Ex - SUV" />
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>
              If Commuting Please State Work Address
              <Text style={styles.greyText}> (Optional)</Text>
            </Text>
            <TextInput style={styles.inputArea} placeholder="Ex - SUV" />
          </View>

          <View style={styles.brandSection}>
            <View>
              <Text style={styles.label}>City</Text>
              <View style={styles.brandSectionWithMenu}>
                <TextInput
                  style={styles.brandInputArea}
                  placeholder="Ex-Colombo"
                />
                <TouchableOpacity>
                  <Image
                    style={styles.arrow}
                    source={require('../../assets/images/ArrowDown.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.label}>Province</Text>
              <View style={styles.brandSectionWithMenu}>
                <TextInput
                  style={styles.brandInputArea}
                  placeholder="Ex-Colombo"
                />
                <TouchableOpacity>
                  <Image
                    style={styles.arrow}
                    source={require('../../assets/images/ArrowDown.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Average Kilometers (KM) Per Day</Text>
            <View style={styles.inputArea}>
              <TextInput style={styles.des} placeholder="Ex - SUV" />
              <TouchableOpacity>
                <Image
                  style={styles.arrow}
                  source={require('../../assets/images/ArrowDown.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.label}>
            On Average Which Routes Do You Travel
          </Text>
          <View style={styles.brandSection}>
            <View>
              <Text style={styles.des2}>From</Text>
              <View style={styles.brandSectionWithMenu}>
                <TextInput
                  style={styles.brandInputArea}
                  placeholder="Ex-Colombo"
                />
                <TouchableOpacity>
                  <Image
                    style={styles.arrow}
                    source={require('../../assets/images/ArrowDown.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.des2}>To</Text>
              <View style={styles.brandSectionWithMenu}>
                <TextInput
                  style={styles.brandInputArea}
                  placeholder="Ex-Colombo"
                />
                <TouchableOpacity>
                  <Image
                    style={styles.arrow}
                    source={require('../../assets/images/ArrowDown.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.sectionBtn}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('ReviewScreen')}>
              <LinearGradient
                style={styles.btn}
                locations={[0, 1]}
                colors={['#fb4e02', '#c8102e']}
                useAngle={true}
                angle={-90}>
                <Text style={styles.btnText}>Submit</Text>
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
    height: '100%',
    backgroundColor: '#fff',
    //fontFamily: 'Poppins',
  },

  border: {
    marginTop: 20,
    marginHorizontal: 25,
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

  title: {
    marginBottom: 10,
    color: '#2E2E2E',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
  },

  section: {
    marginBottom: 20,
  },

  label: {
    color: '#2E2E2E',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    paddingBottom: 5,
  },

  inputArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#ABAFB1',
    fontSize: 10,
    //fontFamily: 'Poppins',
    width: '100%',
    height: 50,
    paddingLeft: 16,
    backgroundColor: 'rgba(239, 241, 249, 1)',
    borderRadius: 8,
  },

  greyText: {
    color: '#7E7E7E',
    fontSize: 12,
    //fontFamily: 'Poppins',
    fontWeight: '400',
  },

  brandSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
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
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    color: '#A1A1A1',
  },

  arrow: {
    flex: 0,
    marginRight: 15,
    width: 18,
    height: 18,
  },

  des: {
    color: '#2E2E2E',
    fontSize: 10,
    //fontFamily: 'Poppins',
    fontWeight: '400',
  },

  des2: {
    color: '#2E2E2E',
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    marginTop: 15,
    height: 15,
    marginLeft: 10,
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
    alignItems: 'center',
    marginBottom: 30,
  },
});
