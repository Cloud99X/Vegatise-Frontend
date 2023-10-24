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

const Marketplace1 = ({navigation}) => {
  const [currentTab, setCurrentTab] = React.useState('1');
  // import images
  const img = require('../../assets/images/Component2.png');
  const carImage1 = require('../../assets/images/CarImage1.png');
  const carImage2 = require('../../assets/images/CarImage2.png');
  const carImage3 = require('../../assets/images/CarImage3.png');
  const handleTabChange = tab => {
    setCurrentTab(tab);
  };
  return (
    <View style={styles.window}>
      <View style={styles.header}>
        <Text style={styles.title}>Market Place</Text>
        <TouchableOpacity>
          <Image source={img} />
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.bodySection}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.tabs}>
            <TouchableOpacity onPress={() => handleTabChange('1')}>
              <View
                style={
                  currentTab === '1'
                    ? [
                        styles.tabContainer,
                        {backgroundColor: '#D33A3A', borderRadius: 10},
                      ]
                    : styles.tabContainer
                }>
                <Text
                  style={
                    currentTab === '1'
                      ? [styles.tabText, {color: 'rgba(244, 244, 244, 1)'}]
                      : styles.tabText
                  }>
                  Market Place
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTabChange('2')}>
              <View
                style={
                  currentTab === '2'
                    ? [
                        styles.tabContainer,
                        {backgroundColor: '#D33A3A', borderRadius: 10},
                      ]
                    : styles.tabContainer
                }>
                <Text
                  style={
                    currentTab === '2'
                      ? [styles.tabText, {color: 'rgba(244, 244, 244, 1)'}]
                      : styles.tabText
                  }>
                  Current Campaign
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 30, width: 342, alignSelf: 'center'}}>
            <Text style={styles.textStyle1}>
              Explorer The Marketplace To Find A Brand That Fits You!
            </Text>
          </View>
          <View style={{marginTop: 30, gap: 20, marginBottom: 50}}>
            <View style={styles.carImageContainer}>
              <Image source={carImage1} style={styles.imageStyle} />

              <View style={{flexDirection: 'row', gap: 100}}>
                <View style={{paddingLeft: 30}}>
                  <Text style={styles.textStyle3}>C4 Energy</Text>
                  <Text style={[styles.textStyle5, {color: '#3E3E3E'}]}>
                    Lite Wrap
                  </Text>
                  <Text style={[styles.textStyle5, {color: '#ABA4A4'}]}>
                    350km Required
                  </Text>
                </View>

                <View style={{flex: 1, paddingRight: 30}}>
                  <Text
                    style={[
                      styles.textStyle2,
                      {color: '#3E3E3E', textAlign: 'right'},
                    ]}>
                    3 Months
                  </Text>
                  <Text
                    style={[
                      styles.textStyle2,
                      {color: '#137C1E', textAlign: 'right'},
                    ]}>
                    15,000/Mon
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Marketplace2')}
                    style={[styles.reqButton, {alignSelf: 'flex-end'}]}>
                    <Text style={styles.textStyle4}>Request</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.carImageContainer}>
              <Image source={carImage2} style={styles.imageStyle1} />

              <View style={{flexDirection: 'row'}}>
                <View style={{paddingLeft: 30}}>
                  <Text style={styles.textStyle3}>Fillows</Text>
                  <Text style={[styles.textStyle5, {color: '#3E3E3E'}]}>
                    Partial Wrap
                  </Text>
                  <Text style={[styles.textStyle5, {color: '#ABA4A4'}]}>
                    350km Required
                  </Text>
                </View>
                <View style={{flex: 1, paddingRight: 30}}>
                  <Text
                    style={[
                      styles.textStyle2,
                      {color: '#3E3E3E', textAlign: 'right'},
                    ]}>
                    3 Months
                  </Text>
                  <Text
                    style={[
                      styles.textStyle2,
                      {color: '#137C1E', textAlign: 'right'},
                    ]}>
                    25,000/Mon
                  </Text>
                  <TouchableOpacity
                    style={[styles.penButton, {alignSelf: 'flex-end'}]}>
                    <Text style={styles.textStyle4}>Pending</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.carImageContainer}>
              <Image source={carImage3} style={styles.imageStyle} />
              <View style={{flexDirection: 'row'}}>
                <View style={{paddingLeft: 30}}>
                  <Text style={styles.textStyle3}>Innowave Inc</Text>
                  <Text style={[styles.textStyle5, {color: '#3E3E3E'}]}>
                    Full Wrap
                  </Text>
                  <Text style={[styles.textStyle5, {color: '#ABA4A4'}]}>
                    350km Required
                  </Text>
                </View>
                <View style={{flex: 1, paddingRight: 30}}>
                  <Text
                    style={[
                      styles.textStyle2,
                      {color: '#3E3E3E', textAlign: 'right'},
                    ]}>
                    1 Months
                  </Text>
                  <Text
                    style={[
                      styles.textStyle2,
                      {color: '#137C1E', textAlign: 'right'},
                    ]}>
                    35,000/Mon
                  </Text>
                  <TouchableOpacity
                    style={[styles.penButton, {alignSelf: 'flex-end'}]}>
                    <Text style={styles.textStyle4}>Pending</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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
  header: {
    height: 50,
    backgroundColor: '#C23030',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 220,
    paddingLeft: 24,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    paddingTop: 5,
  },
  textStyle1: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    fontSize: 16,
  },
  bodySection: {
    flex: 1,
  },
  tabs: {
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
  },
  tabContainer: {
    width: 162,
    height: 25,
    justifyContent: 'center',
  },
  tabText: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: 'rgba(79, 79, 79, 1)',
  },
  carImageContainer: {
    width: 342,
    alignSelf: 'center',
    elevation: 1.5,
    borderRadius: 15,
    paddingBottom: 20,
  },
  imageStyle: {
    alignSelf: 'center',
    width: 278,
    height: 170,
  },
  imageStyle1: {
    marginTop: 20,
    alignSelf: 'center',
    width: 278,
    height: 134,
  },
  textStyle2: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },
  textStyle3: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#1D1D1D',
  },
  textStyle4: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 11,
    color: '#F4F4F4',
  },
  textStyle5: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  reqButton: {
    width: 104,
    height: 24,
    borderRadius: 5.22,
    backgroundColor: '#D21913',
    alignItems: 'center',
    justifyContent: 'center',
  },
  penButton: {
    width: 104,
    height: 24,
    borderRadius: 5.22,
    backgroundColor: '#717171',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNavContainer: {
    justifyContent: 'flex-end', // position nav at the bottom of the screen
  },
});
export default Marketplace1;
