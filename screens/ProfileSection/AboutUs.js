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

export default function AboutUs({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.headerRed} />
      <TouchableOpacity
        onPress={() => navigation.navigate('ProfileScreen')}
        style={styles.leftArrow}>
        <Image source={require('../../assets/images/arrow-left.png')} />
      </TouchableOpacity>
      <Text style={styles.heading1}>About Us</Text>
      <SafeAreaView>
        <View style={styles.border}>
          <View style={styles.center}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/logoText.png')}
            />
            <Text style={styles.para}>
              This Is Sri Lanka's First Transit Advertising Company That Takes
              The Power Of Advertising To The People Directly. Thus Creating A
              Lucrative Opportunity For The Smaller Communities By Partnering Up
              With Leading Brands
            </Text>
          </View>
          <Text style={styles.subTitle}>Website</Text>
          <Text style={styles.subTitle2}>Vegatise.Com</Text>
          <Text style={styles.para2}>
            Your Feedback Is Important To Us In Order To Make Vegatise Better
            For You. Report Any Bugs, Improvements And Your Suggestions
            Regarding Vegatise Som We Can Serve You Even Better.
          </Text>

          <TouchableOpacity>
            <View style={styles.listSec1}>
              <Text style={styles.listTitle1}>Legal</Text>
              <Image
                style={styles.listIcon}
                source={require('../../assets/images/arrow-left3.png')}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.line} />

          <TouchableOpacity>
            <View style={styles.listSec1}>
              <Text style={styles.listTitle1}>Privacy Policy</Text>
              <Image
                style={styles.listIcon}
                source={require('../../assets/images/arrow-left3.png')}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.line} />

          <View style={styles.listSec1}>
            <Text style={styles.listTitle1}>Follow US</Text>
          </View>
          <View style={styles.sIcons}>
            <TouchableOpacity>
              <Image
                style={styles.socialIcon}
                source={require('../../assets/images/fb.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.socialIcon}
                source={require('../../assets/images/twitter.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.socialIcon}
                source={require('../../assets/images/insta.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.socialIcon}
                source={require('../../assets/images/youtube.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },

  border: {
    margin: 23,
  },

  headerRed: {
    backgroundColor: 'rgba(194, 48, 48, 1)',
    height: 54,
  },

  leftArrow: {
    position: 'absolute',
    top: 19,
    left: 25,
  },

  heading1: {
    position: 'absolute',
    top: 13.5,
    left: 60,
    color: '#F4F4F4',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },

  logo: {
    width: 201,
    height: 40,
  },

  center: {
    alignItems: 'center',
  },

  para: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 30,
    marginBottom: 30,
    fontFamily: 'Poppins-Regular',
    color: '#000',
    width: 344,
  },

  subTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },

  subTitle2: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginTop: 10,
    marginBottom: 30,
    color: '#000',
  },

  para2: {
    fontSize: 9,
    fontFamily: 'Poppins-Medium',
    color: '#000',
    marginBottom: 45,
  },

  listSec1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  listTitle1: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },

  listIcon: {
    width: 24,
    height: 24,
  },

  line: {
    marginTop: 12,
    borderBottomWidth: 1,
    borderColor: '#DADADA',
  },

  socialIcon: {
    width: 17,
    height: 17,
    marginRight: 15,
    marginTop: 15,
  },

  sIcons: {
    flexDirection: 'row',
  },
});
