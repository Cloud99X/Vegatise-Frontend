import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
const Marketplace2 = ({navigation}) => {
  const [showDetails, setShowDetails] = React.useState(true);
  const [showAdditionalInfo, setShowAdditionalInfo] = React.useState(false);
  const [showAbout, setShowAbout] = React.useState(false);
  // import images
  const arrowLeft = require('../../assets/images/arrowleftwight.png');
  const arrowLeft1 = require('../../assets/images/arrow-left1.png');
  const arrowRight = require('../../assets/images/arrow-right1.png');
  const arrowRight1 = require('../../assets/images/arrow-right.png');
  const arrowDown = require('../../assets/images/arrow-down.png');
  const img = require('../../assets/images/C4Circle.png');
  const img1 = require('../../assets/images/image8.png');
  const handleArrowLeft = () => {
    navigation.navigate('Marketplace1');
  };
  return (
    <View style={styles.window}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleArrowLeft}>
          <Image source={arrowLeft} />
        </TouchableOpacity>
        <Text style={styles.title}>Market Place</Text>
      </View>
      <SafeAreaView style={styles.bodySection}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.carImageContainer}>
            <Image source={img} style={{width: 77, height: 77}} />
            <View
              style={{
                flexDirection: 'row',
                gap: 25,
                alignItems: 'center',
                marginTop: -20,
              }}>
              <Image source={arrowLeft1} />
              <Image
                source={img1}
                style={{width: 253, height: 127, marginTop: -30}}
              />
              <Image source={arrowRight} />
            </View>
          </View>
          <View style={styles.section}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                gap: 10,
                height: 24,
                width: 72,
                alignItems: 'center',
              }}
              onPress={() => setShowDetails(!showDetails)}>
              <Text style={styles.textStyle1}>Details</Text>
              {showDetails ? (
                <Image source={arrowDown} />
              ) : (
                <Image source={arrowRight1} />
              )}
            </TouchableOpacity>
            {showDetails ? (
              <View style={styles.detailSection}>
                <View style={styles.lineSection}>
                  <Text style={styles.textStyle2}>Company Name</Text>
                  <Text style={{width: 4}}>:</Text>
                  <Text style={styles.textStyle3}>Daraz</Text>
                </View>
                <View style={styles.lineSection}>
                  <Text style={styles.textStyle2}>Duration</Text>
                  <Text style={{width: 4}}>:</Text>
                  <Text style={styles.textStyle3}>3 Months</Text>
                </View>
                <View style={styles.lineSection}>
                  <Text style={styles.textStyle2}>Design Type</Text>
                  <Text style={{width: 4}}>:</Text>
                  <Text style={styles.textStyle3}>Little Wrap</Text>
                </View>
                <View style={styles.lineSection}>
                  <Text style={styles.textStyle2}>Kms Required</Text>
                  <Text style={{width: 4}}>:</Text>
                  <Text style={styles.textStyle3}>350 Km</Text>
                </View>
                <View style={styles.lineSection}>
                  <Text style={styles.textStyle2}>Route Prefference</Text>
                  <Text style={{width: 4}}>:</Text>
                  <Text style={styles.textStyle3}>Colombo Galle Road</Text>
                </View>
                <View style={styles.lineSection}>
                  <Text style={styles.textStyle2}>Reward</Text>
                  <Text style={{width: 4}}>:</Text>
                  <Text style={[styles.textStyle3, {color: '#137C1E'}]}>
                    15,000/= Per Month
                  </Text>
                </View>
              </View>
            ) : (
              ''
            )}

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                height: 24,
                width: 205,
                gap: 10,
                alignItems: 'center',
              }}
              onPress={() => setShowAdditionalInfo(!showAdditionalInfo)}>
              <Text style={styles.textStyle1}>Additional Information</Text>
              {showAdditionalInfo ? (
                <Image source={arrowDown} />
              ) : (
                <Image source={arrowRight1} />
              )}
            </TouchableOpacity>
            {showAdditionalInfo ? (
              <View style={styles.additionalSection}>
                <View style={styles.lineSection}>
                  <Text style={styles.textStyle2}>Brand Rewards</Text>
                  <Text style={{width: 4}}>:</Text>
                  <Text style={styles.textStyle3}>
                    Enjoy 10% Discount On All Storer Products
                  </Text>
                </View>
                <View style={styles.lineSection}>
                  <Text style={styles.textStyle2}>Vegatise Rewards</Text>
                  <Text style={{width: 4}}>:</Text>
                  <Text style={styles.textStyle3}>
                    Air Fresher Vegatise Phone Holder, Etc...
                  </Text>
                </View>
                <View style={styles.lineSection}>
                  <Text style={styles.textStyle2}>Bonus</Text>
                  <Text style={{width: 4}}>:</Text>
                  <Text style={styles.textStyle3}>
                    Earn Additional Rewards By Driving To Selected Hotspots
                  </Text>
                </View>
              </View>
            ) : (
              ''
            )}

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                height: 24,
                width: 72,
                gap: 10,
                alignItems: 'center',
              }}
              onPress={() => setShowAbout(!showAbout)}>
              <Text style={styles.textStyle1}>About</Text>
              {showAbout ? (
                <Image source={arrowDown} />
              ) : (
                <Image source={arrowRight1} />
              )}
            </TouchableOpacity>
            {showAbout ? (
              <View style={styles.aboutSection}>
                <Text style={styles.aboutText}>
                  Daraz Is An Online E Com Store Celebration There 11th
                  Consecutive Anniversary....
                </Text>
              </View>
            ) : (
              ''
            )}
            <TouchableOpacity
              onPress={() => navigation.navigate('CongratulationScreen')}>
              <LinearGradient
                style={styles.button}
                colors={['#FB4E02', '#C8102E']}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 0}}>
                <Text style={styles.btnText}>Request</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  window: {
    width: '100%',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 50,
    backgroundColor: '#C23030',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingLeft: 24,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    paddingTop: 5,
  },
  bodySection: {
    flex: 1,
  },
  textStyle1: {
    fontFamily: 'Poppins-Medium',
    color: '#303030',
    fontSize: 16,
  },
  carImageContainer: {
    marginTop: 20,
    width: 342,
    height: 166,
    alignSelf: 'center',
  },
  section: {
    marginTop: 50,
    marginBottom: 50,
    width: 342,
    alignSelf: 'center',
    gap: 20,
  },
  detailSection: {
    width: 342,
    height: 233,
    borderRadius: 8,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  lineSection: {
    flexDirection: 'row',
    gap: 25,
    justifyContent: 'center',
  },
  textStyle2: {
    width: 109,
    fontFamily: 'Poppins-SemiBold',
    color: '#303030',
    fontSize: 12,
  },
  textStyle3: {
    width: 157,
    fontFamily: 'Poppins-Regular',
    color: '#303030',
    fontSize: 12,
  },
  additionalSection: {
    width: 342,
    height: 208,
    borderRadius: 8,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  aboutSection: {
    width: 342,
    height: 86,
    borderRadius: 8,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutText: {
    fontFamily: 'Poppins-Regular',
    color: '#303030',
    fontSize: 12,
    width: 312,
  },
  button: {
    marginTop: 20,
    width: 202,
    height: 38,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
});
export default Marketplace2;
