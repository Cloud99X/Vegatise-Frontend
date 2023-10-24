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
import BottomNavBar from '../../BottomNavigation';

const ProfileScreen = ({navigation}) => {
  // import images
  const img = require('../../assets/images/Component2.png');
  const img2 = require('../../assets/images/Ellipse11.png');
  const arrowRight = require('../../assets/images/arrow-right.png');
  const helpIcon = require('../../assets/images/Component60.png');
  const walletIcon = require('../../assets/images/WalletIcon.png');
  const calIcon = require('../../assets/images/CalenderIcon.png');
  const carIcon = require('../../assets/images/CarIcon1.png');
  const locIcon = require('../../assets/images/LocationIcon.png');
  const msgIcon = require('../../assets/images/MsgIcon.png');
  const langIcon = require('../../assets/images/LangIcon.png');
  const emerIcon = require('../../assets/images/EmergencyIcon.png');
  const infoIcon = require('../../assets/images/infocircle.png');

  const nextScreen = () => {
    navigation.navigate('BasicInfoScreen');
  };
  return (
    <View style={styles.window}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity>
          <Image source={img} />
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.bodySection}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.section1}>
            <View style={styles.profileDetails}>
              <Text
                style={[
                  styles.textStyle1,
                  {
                    fontSize: 18,
                  },
                ]}>
                Abdullah Ihthisham
              </Text>
              <Text
                style={[
                  styles.textStyle1,
                  {
                    fontSize: 12,
                  },
                ]}>
                #100485
              </Text>
              <TouchableOpacity onPress={nextScreen}>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-Medium',
                    color: '#D33A3A',
                    marginTop: 10,
                  }}>
                  Update Profile
                </Text>
              </TouchableOpacity>
            </View>
            <Image source={img2} />
          </View>
          <View style={styles.section2}>
            <TouchableOpacity onPress={() => navigation.navigate('Help')}>
              <View style={styles.container}>
                <Image source={helpIcon} />
                <Text style={styles.textStyle2}>Help</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Wallet1')}>
              <View style={styles.container}>
                <Image source={walletIcon} />
                <Text style={styles.textStyle2}>Wallet</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('ScheduleNoUpcomingSchedule')}>
              <View style={styles.container}>
                <Image source={calIcon} />
                <Text style={styles.textStyle2}>Schedule</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
          <View style={styles.section3}>
            <View>
              <View style={[styles.container1, {gap: 160}]}>
                <View style={styles.container2}>
                  <Image source={carIcon} />
                  <TouchableOpacity
                    onPress={() => navigation.navigate('VehicleUpdate')}>
                    <Text style={styles.textStyle3}>Update Vehicle</Text>
                  </TouchableOpacity>
                </View>
                <Image source={arrowRight} />
              </View>
              <View style={styles.line1} />
            </View>
            <View>
              <View style={[styles.container1, {gap: 120}]}>
                <View style={styles.container2}>
                  <Image source={locIcon} />
                  <TouchableOpacity
                    onPress={() => navigation.navigate('AddressNRoutes')}>
                    <Text style={styles.textStyle3}>Address And Routes</Text>
                  </TouchableOpacity>
                </View>
                <Image source={arrowRight} />
              </View>
              <View style={styles.line1} />
            </View>
            <View>
              <View style={[styles.container1, {gap: 200}]}>
                <View style={styles.container2}>
                  <Image source={msgIcon} />
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Message2')}>
                    <Text style={styles.textStyle3}>Messages</Text>
                  </TouchableOpacity>
                </View>
                <Image source={arrowRight} />
              </View>
              <View style={styles.line1} />
            </View>
            <View>
              <View style={[styles.container1, {gap: 190}]}>
                <View style={styles.container2}>
                  <Image source={langIcon} />
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Language')}>
                    <Text style={styles.textStyle3}>Languages</Text>
                  </TouchableOpacity>
                </View>
                <Image source={arrowRight} />
              </View>
              <View style={styles.line1} />
            </View>
            <View>
              <View style={[styles.container1, {gap: 110}]}>
                <View style={styles.container2}>
                  <Image source={emerIcon} />
                  <TouchableOpacity>
                    <Text style={styles.textStyle3}>Emergency Contacts</Text>
                  </TouchableOpacity>
                </View>
                <Image source={arrowRight} />
              </View>
              <View style={styles.line1} />
            </View>
            <View>
              <View style={[styles.container1, {gap: 210}]}>
                <View style={styles.container2}>
                  <Image source={infoIcon} />
                  <TouchableOpacity
                    onPress={() => navigation.navigate('AboutUs')}>
                    <Text style={styles.textStyle3}>About Us</Text>
                  </TouchableOpacity>
                </View>
                <Image source={arrowRight} />
              </View>
              <View style={styles.line1} />
            </View>
          </View>
          <View style={styles.bottomNavContainer}>
            <BottomNavBar />
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
    paddingLeft: 24,
    justifyContent: 'space-between',
    paddingRight: 24,
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
  section1: {
    marginTop: 20,
    height: 92,
    flexDirection: 'row',
    gap: 85,
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'space-between',
  },
  textStyle1: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
  section2: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 21,
    marginLeft: 24,
    marginRight: 24,
  },
  container: {
    width: 70,
    height: 70,
    gap: 5,
    backgroundColor: '#F4F4F4',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle2: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  line: {
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#DADADA',
  },
  section3: {
    marginTop: 40,
    marginBottom: 60,
    height: 401,
  },
  container1: {
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 50,
  },
  container2: {
    flexDirection: 'row',
    gap: 15,
  },
  textStyle3: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#2E2E2E',
  },
  line1: {
    borderWidth: 1,
    borderColor: '#DADADA',
    marginLeft: 62,
    marginBottom: 24,
    marginRight: 40,
  },
  bottomNavContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
export default ProfileScreen;
