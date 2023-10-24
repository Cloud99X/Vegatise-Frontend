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

export default function Message({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.headerRed} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Message2')}
        style={styles.leftArrow}>
        <Image source={require('../../assets/images/arrow-left.png')} />
      </TouchableOpacity>
      <Text style={styles.heading1}>Message</Text>
      <SafeAreaView>
        <View style={styles.border}>
          <Image
            style={styles.letterBox}
            source={require('../../assets/images/letterBox.png')}
          />
          <Text style={styles.title}>No Conversation Yet</Text>
          <Text style={styles.para}>
            You Didn’t Start New Conversation. All New Messages Will Be
            Displayed Here
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },

  border: {
    margin: 25,
    alignItems: 'center',
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

  letterBox: {
    width: 168,
    height: 165,
    marginTop: 100,
  },

  title: {
    fontSize: 20,
    //fontFamily: 'Poppins',
    fontWeight: '600',
    marginBottom: 10,
  },

  para: {
    textAlign: 'center',
    color: '#A9B4CD',
    fontSize: 16,
    //fontFamily: 'Poppins',
    fontWeight: '400',
  },
});
