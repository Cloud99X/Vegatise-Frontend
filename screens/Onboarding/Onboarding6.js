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

const Onboard6 = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        {/* Top Heading */}
        <View style={styles.headingContainer}>
          <Text style={styles.subHeading}>Welcome To Vegatise</Text>
          <Text style={styles.subHeading1}>
            A Platform To Earn Income Passively By Partnering With Brands
          </Text>
        </View>

        {/* Image */}
        <View style={styles.imageContainer}>
          <Image source={images.Img_car1} style={styles.image} />
        </View>

        {/* Red Blocks */}

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
            <TouchableOpacity onPress={() => navigation.navigate('Drive')}>
              <Text style={styles.buttonText}>Google Maps</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => navigation.navigate('Onboard7')}>
              <View>
                <Image source={images.Loader} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // padding: 10,
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
    //marginBottom: 10,
    fontSize: 24,
  },
  subHeading1: {
    fontFamily: 'Poppins-Medium',
    color: '#3E3D3D',
    fontSize: 16,
    //marginBottom: -10,
  },

  imageContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: '15%',
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
    //position: 'absolute',
    //bottom: 20,
    //right: 20,
    //padding: 10,
    width: 58,
    height: 58,
    borderRadius: 25, // Half of width and height to make it a circle
  },

  buttonText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
});

export default Onboard6;
