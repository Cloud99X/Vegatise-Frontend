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

const BillingDocumentScreen = ({navigation}) => {
  const [selectedOption, setSelectedOption] = React.useState('Select');
  const [showOptions, setShowOptions] = React.useState(false);
  const options = ['Select', 'Utility Bill', 'Bank Statement'];
  // import images
  const arrowLeft = require('../../assets/images/arrow-left.png');
  const cameraIcon = require('../../assets/images/cameraicon.png');
  const receiptIcon = require('../../assets/images/Receipt.png');
  const downIcon = require('../../assets/images/chevron_down.png');
  const handleSubmit = () => {
    navigation.navigate('ReviewScreen');
  };
  const handleArrowLeft = () => {
    navigation.navigate('GettingStarted3');
  };

  const handleOptionChange = itemValue => {
    setSelectedOption(options[itemValue]);
    setShowOptions(false);
  };

  return (
    <View style={styles.window}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleArrowLeft}>
          <Image source={arrowLeft} />
        </TouchableOpacity>
        <Text style={styles.title}>Getting Started</Text>
      </View>
      <SafeAreaView style={styles.bodySection}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.subtitle}>
            Take A Photo Of Your Billing Document
          </Text>
          <Text style={styles.description}>
            Billing Proof Is Used To Confirm Your Address. It Can Be A Utility
            Bill (Water, Electricity Or Landline Phone) Or A Bank Statement With
            Your Correct Address.
          </Text>
          <Text style={[styles.title1, {marginBottom: 20}]}>
            Billing Document
          </Text>
          <Text style={styles.title1}>Type Of Document</Text>

          <View style={styles.container}>
            <Image source={receiptIcon} />
            <TouchableOpacity onPress={() => setShowOptions(!showOptions)}>
              <Text style={[styles.textStyle7, {width: 236}]}>
                {selectedOption}
              </Text>
            </TouchableOpacity>
            <Image source={downIcon} />
          </View>

          {showOptions ? (
            <View style={styles.wrappingCentersContainer}>
              <View style={styles.wrappingCenter}>
                <TouchableOpacity onPress={() => handleOptionChange(1)}>
                  <Text
                    style={
                      selectedOption === 1
                        ? [styles.textStyle6, {color: '#fff'}]
                        : styles.textStyle6
                    }>
                    Utility Bill
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.wrappingCenter}>
                <TouchableOpacity onPress={() => handleOptionChange(2)}>
                  <Text style={styles.textStyle6}>Bank Statement</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            ''
          )}
          <View style={styles.imageSection}>
            <Text style={styles.title1}>Image</Text>
            <TouchableOpacity>
              <View style={styles.rectangle}>
                <Image source={cameraIcon} />
                <Text style={[styles.title1, {color: '#E19191'}]}>
                  Add Your Photos Here
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={handleSubmit}>
              <LinearGradient
                style={styles.button}
                colors={['#FB4E02', '#C8102E']}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 0}}>
                <Text style={styles.btnText}>Submit</Text>
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
  subtitle: {
    color: 'rgba(46, 46, 46, 1)',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 25,
  },
  description: {
    color: 'rgba(46, 46, 46, 1)',
    fontSize: 9,
    fontFamily: 'Poppins-Medium',
    marginTop: 15,
    marginBottom: 25,
  },
  title1: {
    color: 'rgba(46, 46, 46, 1)',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },
  bodySection: {
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
  },
  imageSection: {
    gap: 11,
    paddingBottom: 20,
    marginTop: 30,
  },
  rectangle: {
    borderWidth: 1,
    borderColor: 'rgba(197, 208, 230, 1)',
    height: 83,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginBottom: 10,
  },

  btnContainer: {
    marginTop: 30,
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
  selectionContainer: {
    width: 300,
    borderWidth: 0,
    height: 52,
    paddingTop: 15,
  },
  container: {
    marginTop: 5,
    flexDirection: 'row',
    backgroundColor: 'rgba(239,241,249,1)',
    alignItems: 'center',
    borderRadius: 8,
    gap: 30,
    paddingLeft: 20,
    height: 50,
  },
  wrappingCentersContainer: {
    marginLeft: '7%',
    marginTop: 10,
    marginBottom: 20,
    gap: 10,
  },
  wrappingCenter: {
    width: 234,
    height: 30,
    elevation: 1,
    borderRadius: 6,
    paddingLeft: 10,
    justifyContent: 'center',
    marginLeft: 30,
  },
  textStyle6: {
    fontFamily: 'Poppins-Regular',
    color: '#2E2E2E',
    fontSize: 12,
  },
  textStyle7: {
    fontFamily: 'Poppins-Regular',
    color: '#2E2E2E',
    fontSize: 12,
  },
});
export default BillingDocumentScreen;
