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
        onPress={() => navigation.navigate('ProfileScreen')}
        style={styles.leftArrow}>
        <Image source={require('../../assets/images/arrow-left.png')} />
      </TouchableOpacity>
      <Text style={styles.heading1}>Address And Routes</Text>
      <SafeAreaView>
        <View style={styles.border}>
          <Text style={styles.insuranceTeam}>Address And Route Details</Text>

          <Text style={styles.label}>Address Line 1</Text>
          <View style={styles.inputArea}>
            <Text style={styles.text}>12/5, Purana Vihara Road, Colombo 6</Text>
          </View>

          <Text style={styles.label}>Address Line 2</Text>
          <View style={styles.inputArea}>
            <Text style={styles.text}>12/5, Purana Vihara Road, Colombo 6</Text>
          </View>

          <Text style={styles.label}>Work Address</Text>
          <View style={styles.inputArea}>
            <Text style={styles.text}>12/5, Purana Vihara Road, Colombo 6</Text>
          </View>

          <Text style={styles.label}>City</Text>
          <View style={styles.inputArea}>
            <Text style={styles.text}>Colombo</Text>
          </View>

          <Text style={styles.label}>Average Kilometers (KM) Per Day</Text>
          <View style={styles.inputArea}>
            <Text style={styles.text}>799km</Text>
          </View>

          <Text style={styles.label}>Average Travel Route</Text>
          <View style={styles.inputArea}>
            <Text style={styles.text}>Dehiwalla - borella</Text>
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
    marginTop: 15,
    marginBottom: 15,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },

  label: {
    marginTop: 15,
    fontSize: 16,
    height: 24,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },

  inputArea: {
    borderBottomWidth: 0.5,
    borderColor: '#DADADA',
    fontSize: 16,
    height: 35,
  },

  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
});
