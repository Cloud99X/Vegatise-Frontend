import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import BottomNavBar from '../../BottomNavigation';

export default function Activity3({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <View style={styles.headerRed} />
      <TouchableOpacity
        onPress={() => navigation.navigate('NavigationBtn')}
        style={styles.bell}>
        <Image source={require('../../assets/images/bell.png')} />
      </TouchableOpacity>
      <Text style={styles.heading1}>Activity</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={styles.container1}>
            <View style={styles.container1sub1}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Activity1')}>
                <Text style={styles.container1Text1}>Ongoing Campaign</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container1sub2}>
              <TouchableOpacity>
                <Text style={styles.container1Text2}>Past Campaigns</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.shadow}>
            <View style={styles.container2}>
              <Text style={styles.container2Text1}>McDonalds Campaign</Text>
              <Text style={styles.container2Text2}>
                Start Date - 12/18/2023 To 12/18/2023
              </Text>
              <View style={styles.container2sub}>
                <View style={styles.container2sub1}>
                  <View>
                    <Text style={styles.container2SubText}>Duration</Text>
                    <Text style={styles.container2SubText}>KM Driven</Text>
                    <Text style={styles.container2SubText}>Impressions</Text>
                  </View>
                  <View>
                    <Text style={styles.container2SubText2}>- 3 months</Text>
                    <Text style={styles.container2SubText2}>- 150 KM</Text>
                    <Text style={styles.container2SubText2}>
                      <Text style={styles.redText}>- 150,000</Text>
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.mac}
                  source={require('../../assets/images/mac.png')}
                />
              </View>
            </View>
            <View style={styles.container2Bottom}>
              <Text style={styles.container2BottomText}>
                Reward -
                <Text style={{fontFamily: 'Poppins-Bold'}}> 150,000 LKR</Text>
              </Text>
            </View>
          </View>

          <View style={styles.shadow}>
            <View style={styles.container2}>
              <Text style={styles.container2Text1}>Daraz Campaign</Text>
              <Text style={styles.container2Text2}>
                Start Date - 12/18/2023 To 12/18/2023
              </Text>
              <View style={styles.container2sub}>
                <View style={styles.container2sub1}>
                  <View>
                    <Text style={styles.container2SubText}>Duration</Text>
                    <Text style={styles.container2SubText}>KM Driven</Text>
                    <Text style={styles.container2SubText}>Impressions</Text>
                  </View>
                  <View>
                    <Text style={styles.container2SubText2}>- 3 months</Text>
                    <Text style={styles.container2SubText2}>- 150 KM</Text>
                    <Text style={styles.container2SubText2}>
                      <Text style={styles.redText}>- 150,000</Text>
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.mac}
                  source={require('../../assets/images/daraz.png')}
                />
              </View>
            </View>
            <View style={styles.container2Bottom}>
              <Text style={styles.container2BottomText}>
                Reward -
                <Text style={{fontFamily: 'Poppins-Bold'}}> 30,000 LKR</Text>
              </Text>
            </View>
          </View>

          <View style={styles.shadow}>
            <View style={styles.container2}>
              <Text style={styles.container2Text1}>Vegatise Campaign</Text>
              <Text style={styles.container2Text2}>
                Start Date - 12/18/2023 To 12/18/2023
              </Text>
              <View style={styles.container2sub}>
                <View style={styles.container2sub1}>
                  <View>
                    <Text style={styles.container2SubText}>Duration</Text>
                    <Text style={styles.container2SubText}>KM Driven</Text>
                    <Text style={styles.container2SubText}>Impressions</Text>
                  </View>
                  <View>
                    <Text style={styles.container2SubText2}>- 3 months</Text>
                    <Text style={styles.container2SubText2}>- 150 KM</Text>
                    <Text style={styles.container2SubText2}>
                      <Text style={styles.redText}>- 150,000</Text>
                    </Text>
                  </View>
                </View>
                <View style={styles.imgBorder}>
                  <Image
                    style={styles.mac}
                    source={require('../../assets/images/Asset3@4x3.png')}
                  />
                </View>
              </View>
            </View>
            <View style={styles.container2Bottom}>
              <Text style={styles.container2BottomText}>
                Reward -
                <Text style={{fontFamily: 'Poppins-Bold'}}>80,000 LKR</Text>
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles.bottomNavContainer}>
        <BottomNavBar />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
    paddingHorizontal: 5,
    marginTop: 30,
    borderColor: '#DCDCDC',
    borderWidth: 1,
    gap: 5,
    marginBottom: 38,
  },

  container1sub1: {
    width: 162,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  container1sub2: {
    backgroundColor: 'rgba(211, 58, 58, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 25,
    width: 162,
  },

  container1Text1: {
    color: '#4F4F4F',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },

  container1Text2: {
    color: '#F4F4F4',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },

  container2: {
    height: 144,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    borderRadius: 13.86,
    justifyContent: 'center',
  },

  container2Bottom: {
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 13.86,
    borderBottomRightRadius: 13.86,
    backgroundColor: '#238700',
    marginBottom: 30,
  },

  container2BottomText: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
  },

  container2Text1: {
    color: '#252525',
    fontSize: 18,
    height: 27,
    fontFamily: 'Poppins-SemiBold',
  },

  container2Text2: {
    color: '#3E3E3E',
    fontSize: 9,
    fontFamily: 'Poppins-Medium',
  },

  container2sub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  mac: {
    width: 73,
    height: 73,
  },

  // imgBorder: {
  //   width: 85,
  //   height: 85,
  //   borderWidth: 1,
  // },

  container2sub1: {
    flexDirection: 'row',
    marginTop: 10,
  },

  container2SubText: {
    color: '#3E3E3E',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 3,
  },

  container2SubText2: {
    paddingLeft: 28,
    color: '#3E3E3E',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginBottom: 3,
  },

  redText: {
    color: '#BF0000',
  },

  shadow: {
    // shadowColor: 'rgba(0, 0, 0, 0.15)',
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 2,
    // elevation: 5,
    height: 176,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 30,
    borderColor: '#E2E2E2',
    borderWidth: 1.5,
    borderRadius: 13.86,
    width: 342,
    alignSelf: 'center',
  },
});
