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

const AllGoodScreen = ({navigation}) => {
  // import images
  const arrowLeft = require('../../assets/images/arrowleftwight.png');
  const image = require('../../assets/images/CheckCircle1.png');

  const handleArrowLeft = () => {
    navigation.navigate('CampaignReviewScreen');
  };
  const handleButton = () => {};

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
          <Text style={styles.textStyle1}>You're All Good To Go!</Text>

          <Image
            source={image}
            style={{alignSelf: 'center', marginTop: 82, marginBottom: 42}}
          />
          <Text style={styles.textStyle2}>
            Get Ready To Vegatise And Start Earning
          </Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={handleButton}>
              <LinearGradient
                style={styles.button}
                colors={['#FB4E02', '#C8102E']}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 0}}>
                <Text style={styles.btnText}>Start Driving</Text>
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
    fontFamily: 'Poppins-Bold',
    color: '#2E2E2E',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },
  bodySection: {
    flex: 1,
  },
  textStyle2: {
    fontFamily: 'Poppins-SemiBold',
    color: '#2E2E2E',
    fontSize: 18,
    width: 342,
    textAlign: 'center',
    alignSelf: 'center',
  },
  btnContainer: {
    marginTop: 100,
    marginBottom: 20,
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
export default AllGoodScreen;
