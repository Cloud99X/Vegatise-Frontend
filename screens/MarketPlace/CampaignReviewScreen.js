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

const CampaignReviewScreen = ({navigation}) => {
  // import images
  const arrowLeft = require('../../assets/images/arrowleftwight.png');
  const largeCheckIcon = require('../../assets/images/LargeCheckIcon.png');
  const number3 = require('../../assets/images/Number3Green.png');
  const image = require('../../assets/images/Car_review_image.png');

  const handleArrowLeft = () => {
    navigation.navigate('CampaignVehicleImageScreen');
  };
  const handleNext = () => {
    navigation.navigate('AllGoodScreen');
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
          <View style={{marginTop: 25, textAlign: 'center'}}>
            <Text style={styles.textStyle1}>
              Just A Few More Steps To Start
            </Text>
            <Text style={styles.textStyle1}>Vegatising!</Text>
          </View>
          <View style={styles.section1}>
            <View style={{alignItems: 'center'}}>
              <Image source={largeCheckIcon} />
              <Text style={styles.textStyle2}>Approve </Text>
              <Text style={styles.textStyle2}>Campaign</Text>
            </View>
            <View style={styles.line} />
            <View style={{alignItems: 'center'}}>
              <Image source={largeCheckIcon} />
              <Text style={styles.textStyle2}>Schedule </Text>
              <Text style={styles.textStyle2}>Wrapping Date</Text>
            </View>
            <View style={styles.line} />
            <View style={{alignItems: 'center'}}>
              <Image source={number3} />
              <Text style={[styles.textStyle2, {marginTop: 5}]}>Approve </Text>
              <Text style={styles.textStyle2}>Wrapping</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image source={image} />
            </View>
            <View>
              <Text style={styles.textStyle3}>
                Please Hang On To Your Brakes A Bit Longer As We Still Trying To
                Verify Your Status
              </Text>
            </View>
            <View style={styles.line1} />
            <Text style={styles.textStyle4}>
              It Usually Takes Less Than A Day For Us To Complete The Process
            </Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity onPress={handleNext}>
                <LinearGradient
                  style={styles.button}
                  colors={['#FB4E02', '#C8102E']}
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 0}}>
                  <Text style={styles.btnText}>Next Step</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
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
  textStyle1: {
    fontFamily: 'Poppins-SemiBold',
    color: '#2E2E2E',
    fontSize: 18,
    textAlign: 'center',
  },
  bodySection: {
    flex: 1,
  },
  section1: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  textStyle2: {
    fontFamily: 'Poppins-Medium',
    color: '#2E2E2E',
    fontSize: 9,
    width: 73,
    textAlign: 'center',
  },
  line: {
    width: 50,
    height: 0,
    borderWidth: 1,
    borderColor: '#181818',
    marginTop: 25,
  },
  textStyle3: {
    fontFamily: 'Poppins-SemiBold',
    color: '#2E2E2E',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    width: 342,
  },
  textStyle4: {
    fontFamily: 'Poppins-Regular',
    color: '#2E2E2E',
    fontSize: 12,
    alignSelf: 'center',
    textAlign: 'center',
    width: 256,
  },
  container: {
    gap: 25,
    marginLeft: '7%',
    marginRight: '7%',
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  line1: {
    width: 271,
    height: 0,
    borderWidth: 1,
    borderColor: '#DADADA',
    alignSelf: 'center',
  },
  btnContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  button: {
    width: 252,
    height: 40,
    borderRadius: 15,
    backgroundColor: 'rgba(199, 199, 204, 1)',
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
});
export default CampaignReviewScreen;
