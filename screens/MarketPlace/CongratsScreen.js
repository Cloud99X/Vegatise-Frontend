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
const CongratulationScreen = ({navigation}) => {
  // import images
  const img1 = require('../../assets/images/CongratsImg1.png');
  const img2 = require('../../assets/images/CongratsImg2.png');
  const img3 = require('../../assets/images/C4Circle.png');
  const handleSubmit = () => {
    navigation.navigate('WrappingAppointment1');
  };
  return (
    <View style={styles.window}>
      <View style={styles.header}>
        <Text style={styles.title}>Market Place</Text>
      </View>
      <SafeAreaView style={styles.bodySection}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageSection}>
            <Image source={img1} style={styles.leftImg} />
            <Image source={img3} style={styles.centerImg} />
            <Image source={img2} style={styles.rightImg} />
          </View>
          <View style={{marginTop: '-20%'}}>
            <Text
              style={[
                styles.textStyle1,
                {color: '#057A26', textAlign: 'center'},
              ]}>
              Congratulation
            </Text>
            <Text style={[styles.textStyle1, {textAlign: 'center'}]}>
              On Partnering With Daraz!
            </Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={handleSubmit}>
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
    paddingLeft: 24,
    justifyContent: 'center',
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
  textStyle1: {
    fontFamily: 'Poppins-SemiBold',
    color: '#2E2E2E',
    fontSize: 18,
  },
  imageSection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftImg: {
    marginLeft: '-8%',
    marginTop: '-20%',
  },
  centerImg: {
    marginTop: '30%',
    width: 125,
    height: 125,
  },
  rightImg: {
    marginLeft: '-15%',
    marginTop: '-20%',
  },
  btnContainer: {
    marginTop: 100,
    marginBottom: 50,
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
export default CongratulationScreen;
