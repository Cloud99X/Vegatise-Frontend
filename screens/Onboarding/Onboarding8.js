import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import images from '../../constants/images';

const Onboard8 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {/* Top Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.subHeading}>
          Explore The Marketplace To Find A Brand That Fits You
        </Text>
        <Text style={styles.subHeading1}>
          We give Our Drivers The Choice To Partner With The Company Of Their
          Liking
        </Text>
      </View>

      {/* Image */}
      <View style={styles.imageContainer}>
        <Image source={images.Img_car4} style={styles.image} />
      </View>

      <View
        style={{
          justifyContent: 'flex-end',
          flex: 1,
          marginBottom: '3%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginRight: 28,
            marginLeft: 28,
          }}>
          <View>
            <View style={styles.redblocks}>
              <View style={styles.redblock1} />
              <View style={styles.redblock2} />
              <View style={styles.redblock3} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Skip</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate('Login')}>
            <View>
              <Image source={images.Loader} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headingContainer: {
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 24,
    marginRight: 24,
  },
  subHeading: {
    fontFamily: 'Poppins-Bold',
    color: '#3E3D3D',
    fontSize: 24,
    //marginBottom: 10,
  },
  subHeading1: {
    color: '#382E2E',
    //marginTop: -10,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  imageContainer: {
    marginTop: '15%',
    alignSelf: 'flex-start',
  },
  image: {
    width: 390,
    height: 428,
    //marginTop: -500,
  },
  redblocks: {
    flexDirection: 'row',
    gap: 5,
    alignSelf: 'flex-end',
  },
  redblock1: {
    width: 20,
    height: 8,
    borderRadius: 5,
    backgroundColor: '#D33A3A',
  },
  redblock2: {
    width: 9,
    height: 9,
    borderRadius: 10,
    backgroundColor: '#FF9F9F',
  },
  redblock3: {
    width: 9,
    height: 9,
    borderRadius: 10,
    backgroundColor: '#FF9F9F',
  },
  nextButton: {
    width: 58,
    height: 58,
    borderRadius: 25,
  },
  skipButton: {
    //position: 'absolute',
    bottom: 20,
    left: 20,
    padding: 10,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
});

export default Onboard8;
