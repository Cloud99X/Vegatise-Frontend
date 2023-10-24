import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

export default function VehicleUpdate({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.headerRed} />
      <TouchableOpacity
        onPress={() => navigation.navigate('ProfileScreen')}
        style={styles.leftArrow}>
        <Image source={require('../../assets/images/arrow-left.png')} />
      </TouchableOpacity>
      <Text style={styles.heading1}>Vehicle Update</Text>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.border}>
            <View style={styles.imgSlider}>
              <TouchableOpacity>
                <Image
                  style={styles.arrowImg}
                  source={require('../../assets/images/arrow-right3.png')}
                />
              </TouchableOpacity>

              <Image
                style={styles.img}
                source={require('../../assets/images/car-img.png')}
              />

              <TouchableOpacity>
                <Image
                  style={styles.arrowImg}
                  source={require('../../assets/images/arrow-left3.png')}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.carTitle}>KA - 2206</Text>
            <Text style={styles.carSubTitle}>KIA Carrens - 2015</Text>

            <Text style={styles.basicInfoTitle}>Basic Info</Text>

            <Text style={styles.label}>Your Identity</Text>
            <View style={styles.inputArea}>
              <Text style={styles.info}>Driver</Text>
            </View>

            <Text style={styles.label}>Car Brand</Text>
            <View style={styles.inputArea}>
              <Text style={styles.info}>Abdurrahman Ahamed</Text>
            </View>

            <Text style={styles.label}>Car Model</Text>
            <View style={styles.inputArea}>
              <Text style={styles.info}>Abdurrahman Ahamed</Text>
            </View>

            <Text style={styles.label}>Year Of Making The Car</Text>
            <View style={styles.inputArea}>
              <Text style={styles.info}>Abdurrahman Ahamed</Text>
            </View>

            <Text style={styles.label}>Car Color</Text>
            <View style={styles.inputArea}>
              <Text style={styles.info}>Abdurrahman Ahamed</Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('VehicleRegistration')}>
              <View style={styles.section}>
                <Text style={styles.labelSec}>Vehicle Registration Number</Text>
                <Image
                  style={styles.leftArrowSec}
                  source={require('../../assets/images/arrow-left3.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.inputArea}>
              <Text style={styles.info}>Abdurrahman Ahamed</Text>
            </View>

            <Text style={styles.label}>Registration Period</Text>
            <View style={styles.inputArea}>
              <Text style={styles.info}>Abdurrahman Ahamed</Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('InsuranceTerm')}>
              <View style={styles.section}>
                <Text style={styles.labelSec}>Insurance Term</Text>
                <Image
                  style={styles.leftArrowSec}
                  source={require('../../assets/images/arrow-left3.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.inputArea}>
              <Text style={styles.info}>Abdurrahman Ahamed</Text>
            </View>

            <Text style={styles.label}>Car Usage</Text>
            <View style={styles.inputArea}>
              <Text style={styles.info}>Abdurrahman Ahamed</Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    marginHorizontal: 24,
    marginBottom: 120,
    marginTop: 25,
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
    top: 13,
    left: 60,
    color: '#F4F4F4',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },

  imgSlider: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },

  img: {
    width: 284,
    height: 179,
  },

  arrowImg: {
    width: 24,
    height: 24,
  },

  carTitle: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 12,
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },

  carSubTitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Medium',
  },

  basicInfoTitle: {
    marginTop: 30,
    fontSize: 18,
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },

  label: {
    marginTop: 30,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Medium',
    height: 24,
  },

  inputArea: {
    borderBottomWidth: 1,
    borderColor: '#DADADA',
    fontSize: 12,
    height: 25,
  },

  section: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftArrowSec: {
    width: 18,
    height: 18,
  },

  labelSec: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Medium',
  },

  info: {
    color: '#0E0E0E',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
});
