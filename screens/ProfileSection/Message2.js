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
import {ScrollView} from 'react-native-gesture-handler';

export default function Message2({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.headerRed} />
      <TouchableOpacity
        onPress={() => navigation.navigate('ProfileScreen')}
        style={styles.leftArrow}>
        <Image source={require('../../assets/images/arrow-left.png')} />
      </TouchableOpacity>
      <Text style={styles.heading1}>Message</Text>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View style={styles.border}>
            <TouchableOpacity onPress={() => navigation.navigate('Message3')}>
              <View style={styles.section}>
                <Image
                  style={styles.messageLogo}
                  source={require('../../assets/images/messageLogo.png')}
                />
                <View>
                  <Text style={styles.title}>Review Support</Text>
                  <Text style={styles.des}>
                    Is This Vehicle Available For Rent?
                  </Text>
                </View>
                <View>
                  <Text style={styles.time}>12.33pm</Text>
                  <View style={styles.backgroundMssNum}>
                    <Text style={styles.mssgNum}>2</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Message3')}>
              <View style={styles.section}>
                <Image
                  style={styles.messageLogo}
                  source={require('../../assets/images/messageLogo.png')}
                />
                <View>
                  <Text style={styles.title}>Payment Support</Text>
                  <Text style={styles.des}>
                    Is This Vehicle Available For Rent?
                  </Text>
                </View>
                <View>
                  <Text style={styles.time}>12.33pm</Text>
                  <View style={styles.backgroundMssNum}>
                    <Text style={styles.mssgNum}>2</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    //fontFamily: 'Poppins',
  },

  scrollView: {
    height: '100%',
  },

  border: {
    margin: 20,
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

  section: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 35,
  },

  messageLogo: {
    width: 48,
    height: 48,
  },

  title: {
    fontSize: 16,
    height: 24,
    fontFamily: 'Poppins-Medium',
    color: '#191919',
  },

  des: {
    color: '#848FAC',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },

  time: {
    fontSize: 12,
    height: 18,
    fontFamily: 'Poppins-Medium',
    color: '#191919',
  },

  mssgNum: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    color: '#191919',
  },

  backgroundMssNum: {
    backgroundColor: '#E6C5C5',
    width: 20,
    height: 20,
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 30,
  },
});
