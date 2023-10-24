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

const VehicleImageScreen = ({navigation}) => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  // import images
  const arrowLeft = require('../../assets/images/arrow-left.png');
  const cameraIcon = require('../../assets/images/cameraicon.png');
  const checkIcon = require('../../assets/images/checkicon.png');
  const handleCheckbox1Change = () => {
    setChecked1(!checked1);
  };
  const handleCheckbox2Change = () => {
    setChecked2(!checked2);
  };
  const handleCheckbox3Change = () => {
    setChecked3(!checked3);
  };

  const handleSubmit = () => {
    navigation.navigate('ReviewScreen');
  };
  const handleArrowLeft = () => {
    navigation.navigate('GettingStarted3');
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
          <Text style={styles.subtitle}>Take A Photo Of Your Vehicle</Text>
          <Text style={styles.description}>
            If The Vehicle Owner Name On The Vehicle Documents is Different From
            Mine, Then I Hereby Confirm That I Have The Vehicle Owner's Consent
            To Drive This Vehicle On The Vegatise Platform. This Declaration Can
            Be Treated As A No-Objection Certificate And Releases Vegatise From
            Any Legal Obligations And Consequences.
          </Text>
          <Text style={styles.title1}>Vehicle Image</Text>
          <Text style={[styles.description, {marginTop: 5}]}>
            *please upload image of front view, side view and back view of the
            vehicle
          </Text>
          <View style={styles.imageSection}>
            <Text style={styles.title1}>Front View</Text>
            <TouchableOpacity>
              <View style={styles.rectangle}>
                <Image source={cameraIcon} />
                <Text style={[styles.title1, {color: '#E19191'}]}>
                  Add Your Photos Here
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.imageSection}>
            <Text style={styles.title1}>Back View</Text>
            <TouchableOpacity>
              <View style={styles.rectangle}>
                <Image source={cameraIcon} />
                <Text style={[styles.title1, {color: '#E19191'}]}>
                  Add Your Photos Here
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.imageSection}>
            <Text style={styles.title1}>Side View</Text>
            <TouchableOpacity>
              <View style={styles.rectangle}>
                <Image source={cameraIcon} />
                <Text style={[styles.title1, {color: '#E19191'}]}>
                  Add Your Photos Here
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.title1}>Vehicle Condition</Text>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={handleCheckbox1Change}>
                {checked1 ? (
                  <View style={styles.checked}>
                    <Image source={checkIcon} />
                  </View>
                ) : (
                  ''
                )}
              </TouchableOpacity>
              <Text style={styles.checkboxText}>Excellent Condition</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={handleCheckbox2Change}>
                {checked2 ? (
                  <View style={styles.checked}>
                    <Image source={checkIcon} />
                  </View>
                ) : (
                  ''
                )}
              </TouchableOpacity>
              <Text style={styles.checkboxText}>Good Condition</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={handleCheckbox3Change}>
                {checked3 ? (
                  <View style={styles.checked}>
                    <Image source={checkIcon} />
                  </View>
                ) : (
                  ''
                )}
              </TouchableOpacity>
              <Text style={styles.checkboxText}>Minor Scratch/Dents</Text>
            </View>
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
  },
  rectangle: {
    borderWidth: 1,
    borderColor: 'rgba(197, 208, 230, 1)',
    height: 83,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
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
  checkboxContainer: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(207, 211, 212, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  checkboxText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  checked: {
    backgroundColor: '#C23030',
    borderRadius: 8,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default VehicleImageScreen;
