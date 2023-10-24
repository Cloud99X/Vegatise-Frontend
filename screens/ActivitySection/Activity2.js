import React, {useState} from 'react';
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

export default function Activity2({navigation}) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  const arrow = require('../../assets/images/arrow-down.png');
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.headerRed} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Activity1')}
        style={styles.leftArrow}>
        <Image source={require('../../assets/images/arrow-left.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bell}>
        <Image source={require('../../assets/images/bell.png')} />
      </TouchableOpacity>
      <Text style={styles.heading1}>Activity</Text>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.border}>
            <Image
              style={styles.logoC4}
              source={require('../../assets/images/Ellipse15.png')}
            />
            <View style={styles.imgSlider}>
              <TouchableOpacity>
                <Image
                  style={styles.icon}
                  source={require('../../assets/images/arrowL.png')}
                />
              </TouchableOpacity>
              <Image
                style={styles.car}
                source={require('../../assets/images/car.png')}
              />
              <TouchableOpacity>
                <Image
                  style={styles.icon}
                  source={require('../../assets/images/arrowR.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.btnPart}>
              <TouchableOpacity style={styles.btnGreen}>
                <Text style={styles.btnGreenText}>In Progress</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sec2}>
              <View style={styles.sec2Part1}>
                <Image
                  style={styles.sec2Icon}
                  source={require('../../assets/images/driver.png')}
                />
                <Text style={styles.sec2Text1}>Total driven</Text>
                <Text style={styles.sec2Text2}>0.49 KM</Text>
              </View>
              <View style={styles.sec2Part1}>
                <Image
                  style={styles.sec2Icon}
                  source={require('../../assets/images/eye2.png')}
                />
                <Text style={styles.sec2Text1}>Impression</Text>
                <Text style={styles.sec2Text2}>3592</Text>
              </View>
              <View style={styles.sec2Part1}>
                <Image
                  style={styles.sec2Icon}
                  source={require('../../assets/images/PiggyBank.png')}
                />
                <Text style={styles.sec2Text1}>Est payout</Text>
                <Text style={styles.sec2Text2}>9,586 LKR</Text>
              </View>
            </View>

            <View style={styles.list}>
              <TouchableOpacity style={styles.listItem} onPress={toggleContent}>
                <Text style={styles.listText}>Details</Text>
                {isVisible ? (
                  <Image style={styles.listIcon} source={arrow} />
                ) : (
                  <Image
                    style={styles.listIcon}
                    source={require('../../assets/images/arrow-left3.png')}
                  />
                )}
              </TouchableOpacity>

              <View>
                {isVisible && (
                  <View style={styles.infoSec}>
                    <View style={styles.info}>
                      <Text style={styles.infoSecText}>Company Name</Text>
                      <Text style={styles.infoSecTextDot}>:</Text>
                      <Text style={styles.infoSecTextSub}>Daraz</Text>
                    </View>
                    <View style={styles.info}>
                      <Text style={styles.infoSecText}>Duration</Text>
                      <Text style={styles.infoSecTextDot}>:</Text>
                      <Text style={styles.infoSecTextSub}>3 Months</Text>
                    </View>
                    <View style={styles.info}>
                      <Text style={styles.infoSecText}>Design Type</Text>
                      <Text style={styles.infoSecTextDot}>:</Text>
                      <Text style={styles.infoSecTextSub}>Lite Wrap</Text>
                    </View>
                    <View style={styles.info}>
                      <Text style={styles.infoSecText}>Kms Required</Text>
                      <Text style={styles.infoSecTextDot}>:</Text>
                      <Text style={styles.infoSecTextSub}>350 Km</Text>
                    </View>
                    <View style={styles.info}>
                      <Text style={styles.infoSecText}>Route Prefference</Text>
                      <Text style={styles.infoSecTextDot}>:</Text>
                      <Text style={styles.infoSecTextSub}>
                        Colombo Galle Road
                      </Text>
                    </View>
                    <View style={styles.info}>
                      <Text style={styles.infoSecText}>Reward</Text>
                      <Text style={styles.infoSecTextDot}>:</Text>
                      <Text style={styles.infoSecTextSub}>
                        <Text style={styles.greenText}>15,000/= Per Month</Text>
                      </Text>
                    </View>
                  </View>
                )}
              </View>

              <TouchableOpacity style={styles.listItem}>
                <Text style={styles.listText}>Additional Information</Text>
                <Image
                  style={styles.listIcon}
                  source={require('../../assets/images/arrow-left3.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.listItem}>
                <Text style={styles.listText}>About</Text>
                <Image
                  style={styles.listIcon}
                  source={require('../../assets/images/arrow-left3.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },

  border: {
    margin: 25,
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

  bell: {
    position: 'absolute',
    top: 19,
    right: 25,
  },

  heading1: {
    position: 'absolute',
    top: 13.5,
    left: 56,
    color: '#F4F4F4',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },

  logoC4: {
    position: 'absolute',
    top: 10,
    left: 5,
    width: 77,
    height: 77,
  },

  imgSlider: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },

  icon: {
    width: 19,
    height: 20,
  },

  car: {
    width: 253,
    height: 127,
    marginHorizontal: 15,
  },

  btnPart: {
    alignItems: 'center',
    marginTop: 30,
  },

  btnGreen: {
    width: 218,
    height: 26,
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

  sec2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },

  sec2Part1: {
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 6,
    width: 81,
  },

  sec2Icon: {
    width: 40,
    height: 40,
  },

  sec2Text1: {
    color: '#303030',
    fontSize: 9,
    marginTop: 10,
    height: 14,
    fontFamily: 'Poppins-Medium',
  },

  sec2Text2: {
    color: '#303030',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },

  list: {
    marginTop: 25,
    marginBottom: 30,
  },

  listItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    height: 24,
  },

  listIcon: {
    width: 18,
    height: 18,
    marginLeft: 5,
  },

  listText: {
    color: '#303030',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 315,
    height: 280,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  infoSec: {
    backgroundColor: '#EDEDED',
    borderRadius: 8,
    marginBottom: 20,
  },

  info: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },

  infoSecText: {
    color: '#303030',
    fontSize: 12,
    width: 110,
    fontFamily: 'Poppins-SemiBold',
  },

  infoSecTextDot: {
    color: '#303030',
    fontSize: 12,
  },

  infoSecTextSub: {
    color: '#303030',
    fontSize: 12,
    width: 130,
    fontFamily: 'Poppins-Regular',
  },

  greenText: {
    color: '#137C1E',
  },
});
