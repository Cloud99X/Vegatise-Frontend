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

export default function Help({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.headerRed} />
      <TouchableOpacity
        onPress={() => navigation.navigate('ProfileScreen')}
        style={styles.leftArrow}>
        <Image source={require('../../assets/images/arrow-left.png')} />
      </TouchableOpacity>
      <Text style={styles.heading1}>Help</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={styles.border}>
            <Text style={styles.bodyText1}>Current Campaign</Text>
            <Text style={styles.bodyText2}>Start Date : 2023/08/23</Text>
            <Text style={styles.bodyText2}>End Date : 2023/11/23</Text>

            <View style={[styles.card, styles.shadow]}>
              <View style={styles.cardUpper}>
                <Image
                  style={styles.yellowLogo}
                  source={require('../../assets/images/Ellipse15.png')}
                />
                <Text style={styles.yellowText}>
                  C4 Energy <Text style={styles.normalText}>3 months</Text>
                </Text>
              </View>
              <View style={styles.cardBottom}>
                <Text style={styles.normalText1}>
                  Light Wrap
                  <Text style={styles.greyText}> 350Km Required</Text>
                </Text>
                <TouchableOpacity style={styles.onGoingBtn}>
                  <Text style={styles.onGoingBtnText}>On Going</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.bodyText5}>
              Report An Issue With This Campaign
            </Text>
            <View style={styles.line} />
            <Text style={styles.bodyText5}>All Topics</Text>
            <TouchableOpacity>
              <View style={styles.topics}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={styles.infoCircle}
                    source={require('../../assets/images/info-circle2.png')}
                  />
                  <Text style={styles.topicsText}>
                    Account And Payment Options
                  </Text>
                </View>
                <Image
                  style={styles.infoCircle}
                  source={require('../../assets/images/arrow-left2.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.topics}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={styles.infoCircle}
                    source={require('../../assets/images/info-circle2.png')}
                  />
                  <Text style={styles.topicsText}>Help With A Campaign</Text>
                </View>
                <Image
                  style={styles.infoCircle}
                  source={require('../../assets/images/arrow-left2.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.topics}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={styles.infoCircle}
                    source={require('../../assets/images/info-circle2.png')}
                  />
                  <Text style={styles.topicsText}>App Issues</Text>
                </View>
                <Image
                  style={styles.infoCircle}
                  source={require('../../assets/images/arrow-left2.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.topics}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={styles.infoCircle}
                    source={require('../../assets/images/info-circle2.png')}
                  />
                  <Text style={styles.topicsText}>A Guide To Vegatise</Text>
                </View>
                <Image
                  style={styles.infoCircle}
                  source={require('../../assets/images/arrow-left2.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.topics}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={styles.infoCircle}
                    source={require('../../assets/images/info-circle2.png')}
                  />
                  <Text style={styles.topicsText}>Accessibility</Text>
                </View>
                <Image
                  style={styles.infoCircle}
                  source={require('../../assets/images/arrow-left2.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.topics}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={styles.infoCircle}
                    source={require('../../assets/images/info-circle2.png')}
                  />
                  <Text style={styles.topicsText}>Customer Care</Text>
                </View>
                <Image
                  style={styles.infoCircle}
                  source={require('../../assets/images/arrow-left2.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.topics}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={styles.infoCircle}
                    source={require('../../assets/images/info-circle2.png')}
                  />
                  <Text style={styles.topicsText}>Vehicle And Wrap Safety</Text>
                </View>
                <Image
                  style={styles.infoCircle}
                  source={require('../../assets/images/arrow-left2.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.topics}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={styles.infoCircle}
                    source={require('../../assets/images/info-circle2.png')}
                  />
                  <Text style={styles.topicsText}>Contact Agent</Text>
                </View>
                <Image
                  style={styles.infoCircle}
                  source={require('../../assets/images/arrow-left2.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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

  heading1: {
    position: 'absolute',
    top: 13,
    left: 60,
    color: '#F4F4F4',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  bodyText1: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    height: 27,
    color: '#000',
  },

  bodyText2: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    height: 18,
    color: '#000',
  },

  card: {
    height: 131,
    backgroundColor: '#F9F9F9',
    marginTop: 20,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: '#DDDDDD',
    overflow: 'hidden',
    paddingVertical: 15,
    paddingHorizontal: 25,
  },

  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
  },

  line: {
    borderWidth: 1,
    borderColor: 'rgba(218, 218, 218, 1)',
  },

  bodyText5: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },

  infoCircle: {
    width: 24,
    height: 24,
  },

  topics: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  topicsText: {
    width: 280,
    marginTop: 4,
    marginLeft: 20,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },

  cardUpper: {
    flexDirection: 'row',
  },

  yellowLogo: {
    width: 50,
    height: 50,
  },

  yellowText: {
    color: '#1D1D1D',
    fontSize: 18,
    width: 100,
    marginLeft: 17,
    fontFamily: 'Poppins-Bold',
  },

  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    alignItems: 'center',
  },

  normalText: {
    color: '#3E3E3E',
    fontSize: 12,
    width: 105,
    fontFamily: 'Poppins-Medium',
  },
  normalText1: {
    color: '#3E3E3E',
    fontSize: 12,
    width: 110,
    fontFamily: 'Poppins-SemiBold',
  },
  onGoingBtn: {
    width: 104,
    height: 24,
    justifyContent: 'center',
    borderRadius: 5.22,
    backgroundColor: '#2E921E',
  },

  greyText: {
    color: '#ABA4A4',
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
  },

  onGoingBtnText: {
    textAlign: 'center',
    color: '#F4F4F4',
    fontSize: 11,
    fontFamily: 'Poppins-SemiBold',
  },
});
