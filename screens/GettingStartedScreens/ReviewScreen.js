import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default function ReviewScreen2({navigation}) {
  return (
    <View style={styles.container}>
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
          <View style={styles.section}>
            <Image
              style={styles.reviewImg}
              source={require('../../assets/images/review-image.png')}
            />
            <Text style={styles.bodyText1}>Were Reviewing Your Document</Text>
            <View style={styles.line} />
            <Text style={styles.bodyText2}>
              It Usually Takes Less Than A Day For Us To Complete The Process
            </Text>
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("GettingStarted4")}>
            <Text style={styles.btnText}>Account Status</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('GettingStarted3')}>
            <LinearGradient
              style={styles.btn}
              locations={[0, 1]}
              colors={['#fb4e02', '#c8102e']}
              useAngle={true}
              angle={-90}>
              <Text style={styles.btnText}>Next Step</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
    fontFamily: 'Poppins-Bold',
  },

  border: {
    margin: 50,
    alignItems: 'center',
  },

  section: {
    marginTop: 50,
    marginBottom: 150,
  },

  reviewImg: {
    width: 271,
    height: 142,
  },

  bodyText1: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#2E2E2E',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 25,
    width: 272,
    height: 60,
  },

  line: {
    borderBottomWidth: 0.5,
    width: 271,
    borderBottomColor: '#DADADA',
  },

  bodyText2: {
    textAlign: 'center',
    color: '#2E2E2E',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginTop: 47,
    width: 256,
    height: 36,
  },

  btn: {
    backgroundColor: '#C7C7CC',
    //boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.10) inset',
    borderRadius: 15,
    width: 252,
    height: 40,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
});
