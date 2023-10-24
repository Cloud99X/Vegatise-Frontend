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
} from 'react-native';

export default function InsuranceTerm({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.headerRed} />
      <TouchableOpacity
        onPress={() => navigation.navigate('VehicleUpdate')}
        style={styles.leftArrow}>
        <Image source={require('../../assets/images/arrow-left.png')} />
      </TouchableOpacity>
      <Text style={styles.heading1}>Vehicle Update</Text>
      <SafeAreaView>
        <View style={styles.border}>
          <Text style={styles.insuranceTeam}>Vehicle Registration</Text>
          <Text style={styles.insuranceNum}>Vehicle Registration Number</Text>
          <Text style={styles.insuranceCode}>20023524545a</Text>
          <Text style={styles.insuranceNum}>Registration Period</Text>
          <Text style={styles.insuranceCode}>2023/12/28</Text>
          <Text style={styles.imgTitle}>Image of the registration card</Text>

          <View style={styles.section}>
            <View style={styles.imgBox}>
              <Image
                style={styles.img}
                source={require('../../assets/images/registrationCardImg.png')}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  border: {
    margin: 25,
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
    top: 13.5,
    left: 60,
    color: '#F4F4F4',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },

  insuranceTeam: {
    fontSize: 18,
    marginBottom: 4,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },

  insuranceNum: {
    marginTop: 25,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },

  insuranceCode: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },

  imgTitle: {
    marginTop: 20,
    marginBottom: 25,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },

  section: {
    alignItems: 'center',
  },

  imgBox: {
    backgroundColor: '#E5E5E9',
    width: 311,
    height: 194,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: 274,
    height: 165,
  },
});
