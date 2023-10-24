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

import BottomNavBar from '../../BottomNavigation';

export default function Activity1({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.headerRed} />
      <TouchableOpacity
        onPress={() => navigation.navigate('')}
        style={styles.bell}>
        <Image source={require('../../assets/images/bell.png')} />
      </TouchableOpacity>
      <Text style={styles.heading1}>Activity</Text>
      <SafeAreaView>
        <View style={styles.border}>
          <View style={styles.container1}>
            <View style={styles.container1sub1}>
              <TouchableOpacity>
                <Text style={styles.container1Text1}>Ongoing Campaign</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container1sub2}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Activity3')}>
                <Text style={styles.container1Text2}>Past Campaigns</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container2}>
            <View style={styles.container2part1}>
              <Image
                style={styles.car}
                source={require('../../assets/images/car.png')}
              />
            </View>
            <View style={styles.cardText}>
              <View style={styles.cardTextSec}>
                <Text style={styles.c4EnergyText}>C4 Energy</Text>
                <Text style={styles.monthsText}>
                  3 Months <Text style={styles.greenText}>15,000/Mon</Text>
                </Text>
              </View>
              <View style={styles.cardTextSec}>
                <View>
                  <Text style={styles.littleWrapText}>Lite wrap</Text>
                  <Text style={styles.greyText}>350km Required</Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Activity2')}
                  style={styles.btnGreen}>
                  <Text style={styles.btnGreenText}>On Going</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Image
            style={styles.logoC4}
            source={require('../../assets/images/Ellipse15.png')}
          />
          <View style={styles.container3}>
            <View style={styles.container3Part1}>
              <Text style={styles.container3Text}>
                Distance driven
                <Text style={styles.container3TextBold}> 177.76 KM</Text>
              </Text>
              <Image
                style={styles.driver}
                source={require('../../assets/images/driver.png')}
              />
            </View>
            <View style={styles.container3Part1}>
              <Text style={styles.container3Text2}>
                Est Payout
                <Text style={styles.container3TextBold}> 13, 000 LKR</Text>
              </Text>
              <Image
                style={styles.driver}
                source={require('../../assets/images/PiggyBank.png')}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.bottomNavContainer}>
        <BottomNavBar />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    flex: 1,
  },

  border: {
    //margin: 25,
  },

  headerRed: {
    backgroundColor: 'rgba(194, 48, 48, 1)',
    height: 54,
  },

  bell: {
    position: 'absolute',
    top: 19,
    right: 25,
  },

  heading1: {
    position: 'absolute',
    top: 16,
    left: 25,
    color: '#F4F4F4',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },

  container1: {
    backgroundColor: '#EDEDED',
    width: 342,
    height: 35,
    borderRadius: 12,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderColor: '#DCDCDC',
    borderWidth: 1,
    gap: 5,
    marginBottom: 38,
    justifyContent: 'space-between',
    paddingLeft: 5,
  },
  container1sub1: {
    backgroundColor: 'rgba(211, 58, 58, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 25,
    width: 162,
  },
  container1sub2: {
    width: 162,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  container1Text1: {
    color: '#F4F4F4',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },

  container1Text2: {
    color: '#4F4F4F',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },

  container2: {
    height: 242,
    borderRadius: 15.66,
    backgroundColor: '#F9F9F9',
    shadowColor: 'rgba(0, 0, 0, 0.11)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: 342,
  },

  container2part1: {
    backgroundColor: '#fff',
    borderTopRightRadius: 15.66,
    borderTopLeftRadius: 15.66,
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.11)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 2,
  },

  cardText: {
    marginTop: 15,
  },

  car: {
    width: 278,
    height: 134,
  },

  logoC4: {
    position: 'absolute',
    top: 210,
    left: '41%',
    width: 64,
    height: 64,
  },

  cardTextSec: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  littleWrapText: {
    textAlign: 'left',
    fontFamily: 'Poppins-Medium',
    color: '#3E3E3E',
  },

  c4EnergyText: {
    color: '#1D1D1D',
    fontSize: 18,
    width: 110,
    fontFamily: 'Poppins-Bold',
  },

  monthsText: {
    textAlign: 'right',
    width: 100,
    color: '#3E3E3E',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },

  greyText: {
    color: '#ABA4A4',
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    width: 110,
  },

  greenText: {
    color: '#137C1E',
    fontSize: 12,
    fontWeight: '600',
  },

  btnGreen: {
    width: 104,
    height: 24,
    marginTop: 8,
    backgroundColor: '#2E921E',
    borderRadius: 5.22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnGreenText: {
    color: '#F4F4F4',
    fontSize: 11,
    fontFamily: 'Poppins-SemiBold',
  },

  container3: {
    marginTop: 28,
    height: 60,
    backgroundColor: '#F3F3F3',
    borderRadius: 5,
    flexDirection: 'row',
    shadowColor: 'rgba(0, 0, 0, 0.11)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
    marginRight: 24,
    marginLeft: 24,
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: 342,
    paddingLeft: 24,
    paddingRight: 24,
  },

  container3Part1: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  container3Text: {
    width: 95,
    color: '#3E3E3E',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },

  container3TextBold: {
    color: '#2B2B2B',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },

  driver: {
    width: 35,
    height: 35,
  },

  container3Text2: {
    width: 70,
    color: '#3E3E3E',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },

  bottomNavContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
