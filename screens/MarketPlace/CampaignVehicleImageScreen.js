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

const CampaignVehicleImageScreen = ({navigation}) => {
  // import images
  const arrowLeft = require('../../assets/images/arrowleftwight.png');
  const largeCheckIcon = require('../../assets/images/LargeCheckIcon.png');
  const number3 = require('../../assets/images/Number3Green.png');
  const locationImage = require('../../assets/images/LocationRectangle.png');
  const cameraIcon = require('../../assets/images/cameraicon.png');
  const handleArrowLeft = () => {
    navigation.navigate('WrappingAppointment1');
  };
  const handleNext = () => {
    navigation.navigate('CampaignReviewScreen');
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

          <Text style={[styles.textStyle3, {marginLeft: '7%'}]}>Location</Text>

          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image source={locationImage} />
            </View>
            <View>
              <Text style={styles.textStyle3}>Appointment Date And Time</Text>
              <View style={styles.dateTimeContainer}>
                <View style={styles.dateContainer}>
                  <Text style={styles.textStyle4}>11:00 PM</Text>
                </View>
                <View style={styles.dateContainer}>
                  <Text style={styles.textStyle4}>12/15/2023</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.textStyle3}>
                Upload Image Of Vehicle Wrap
              </Text>
              <Text style={styles.textStyle5}>
                *Please Upload Image Of Front View, Side View And Back View Of
                Car
              </Text>
            </View>
            <View>
              <View style={styles.imageSection}>
                <Text style={styles.title1}>Front View</Text>
                <TouchableOpacity>
                  <View style={styles.rectangle}>
                    <Image source={cameraIcon} />
                    <Text style={[styles.title1, {color: '#E19191'}]}>
                      Add Your Photos Here
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.imageSection}>
                <Text style={styles.title1}>Back View</Text>
                <TouchableOpacity>
                  <View style={styles.rectangle}>
                    <Image source={cameraIcon} />
                    <Text style={[styles.title1, {color: '#E19191'}]}>
                      Add Your Photos Here
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.imageSection}>
                <Text style={styles.title1}>Side View</Text>
                <TouchableOpacity>
                  <View style={styles.rectangle}>
                    <Image source={cameraIcon} />
                    <Text style={[styles.title1, {color: '#E19191'}]}>
                      Add Your Photos Here
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.container}></View>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={handleNext}>
              <LinearGradient
                style={styles.button}
                colors={['#FB4E02', '#C8102E']}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 0}}>
                <Text style={styles.btnText}>Next</Text>
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
    fontSize: 12,
  },
  container: {
    gap: 25,
    marginLeft: '7%',
    marginRight: '7%',
  },
  imageContainer: {
    elevation: 2,
    height: 220,
    width: 342,
    borderRadius: 8,
    marginTop: 20,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    marginTop: 15,
    gap: 20,
  },
  dateContainer: {
    width: 74,
    height: 36,
    borderRadius: 6,
    backgroundColor: 'rgba(118, 118, 128, 0.12)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle4: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    fontSize: 11,
  },
  imageSection: {
    gap: 11,
    paddingBottom: 20,
  },
  rectangle: {
    borderWidth: 1,
    borderColor: 'rgba(197, 208, 230, 1)',
    height: 83,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  title1: {
    color: 'rgba(46, 46, 46, 1)',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },
  textStyle5: {
    fontFamily: 'Poppins-Regular',
    color: '#2E2E2E',
    fontSize: 12,
  },
  btnContainer: {
    marginTop: 50,
    marginBottom: 80,
    alignItems: 'center',
  },
  button: {
    width: 202,
    height: 38,
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
export default CampaignVehicleImageScreen;
