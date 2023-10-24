import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BottomNavBar from '../../BottomNavigation';

const GettingStarted1 = ({navigation}) => {
  // Import local images
  const image = require('../../assets/images/gsd1image.png');

  const nextScreen = () => {
    navigation.navigate('GettingStarted2');
  };
  return (
    <View style={styles.window}>
      <StatusBar backgroundColor="#C23030" barStyle="light-content" />
      <View style={styles.section1}>
        <Text style={styles.title}>Get Started And Begin Earning Rewards!</Text>
        <Image source={image} style={styles.image} />
        <TouchableOpacity
          onPress={() => navigation.navigate('GettingStarted3')}>
          <LinearGradient
            style={styles.btncontainer}
            colors={['#FB4E02', '#C8102E']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}>
            <Text style={styles.btnText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNavContainer}>
        <BottomNavBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    width: '100%',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  section1: {
    height: 275,
    flexDirection: 'column',
    gap: 60,
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    width: 342,
    height: 60,
    fontSize: 20,
    color: 'rgba(0, 12, 32, 1)',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  image: {
    width: 288,
    height: 155,
  },
  btncontainer: {
    width: 252,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#ffffff',
    fontFamily: 'Poppins-SemiBold',
  },
  bottomNavContainer: {
    flex: 1,
    justifyContent: 'flex-end', // position nav at the bottom of the screen
  },
});
export default GettingStarted1;
