import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import DatePicker from 'react-native-modern-datepicker';

const DrivingLicenseImageScreen = ({navigation}) => {
  const [drivingLicense, setDrivingLicens] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  // import images
  const arrowLeft = require('../../assets/images/arrow-left.png');
  const cameraIcon = require('../../assets/images/cameraicon.png');
  const checkIcon = require('../../assets/images/checkicon.png');
  const downIcon = require('../../assets/images/chevron_down.png');
  const handleCheckbox1Change = () => {
    setChecked(!checked);
  };

  const handleSubmit = () => {
    navigation.navigate('ReviewScreen');
  };
  const handleArrowLeft = () => {
    navigation.navigate('GettingStarted3');
  };
  const handleDrivingLicenseChange = number => {
    setDrivingLicens(number);
  };

  const handleDatePicker = () => {
    setOpen(!open);
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
            Take A Photo Of Your Driving License
          </Text>
          <Text style={styles.description}>
            If The Vehicle Owner Name On The Vehicle Documents is Different From
            Mine, Then I Hereby Confirm That I Have The Vehicle Owner's Consent
            To Drive This Vehicle On The Vegatise Platform. This Declaration Can
            Be Treated As A No-Objection Certificate And Releases Vegatise From
            Any Legal Obligations And Consequences.
          </Text>
          <Text style={[styles.title1, {marginBottom: 10}]}>
            Driving License
          </Text>
          <View style={styles.imageSection}>
            <Text style={styles.title1}>Driving License Front</Text>
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
            <Text style={styles.title1}>Driving License Rear</Text>
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
            <Text style={styles.title1}>Driving License Number</Text>
            <TouchableOpacity>
              <TextInput
                style={styles.textfield}
                placeholder="Ex - SUV"
                value={drivingLicense}
                onChangeText={handleDrivingLicenseChange}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.title1}>Expiration Date</Text>
            <TouchableOpacity onPress={handleDatePicker}>
              <View style={styles.exDateContainer}>
                <Text style={styles.expireText}>{expirationDate}</Text>
                <Image source={downIcon} />
              </View>
            </TouchableOpacity>
          </View>
          {/* Date Picker */}
          <Modal animationType="slide" transparent={true} visible={open}>
            <View style={styles.centeredDatePicker}>
              <View style={styles.modalView}>
                <DatePicker
                  onDateChange={date => setExpirationDate(date)}
                  options={{
                    //textHeaderColor: '#ED2B2A',
                    //textDefaultColor: '#ED2B2A',
                    selectedTextColor: '#fff',
                    mainColor: '#C23030',
                    //textSecondaryColor: '#ED2B2A',
                    borderColor: 'rgba(122, 146, 165, 0.1)',
                  }}
                />
                <TouchableOpacity onPress={handleDatePicker}>
                  <Text
                    style={{fontFamily: 'Poppins-SemiBold', color: '#ED2B2A'}}>
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={handleCheckbox1Change}>
              {checked ? (
                <View style={styles.checked}>
                  <Image source={checkIcon} />
                </View>
              ) : (
                ''
              )}
            </TouchableOpacity>
            <Text style={styles.checkboxText}>
              My License Doesn't Have An Expiration Date (For Older Licenses)
            </Text>
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
    marginBottom: 4,
  },
  bodySection: {
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
  },
  imageSection: {
    gap: 11,
    paddingBottom: 10,
  },
  rectangle: {
    borderWidth: 1,
    borderColor: 'rgba(197, 208, 230, 1)',
    height: 83,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginBottom: 25,
  },
  textfield: {
    height: 52,
    backgroundColor: 'rgba(239,241,249,1)',
    borderRadius: 10,
    marginBottom: 21,
    paddingLeft: 16,
    paddingBottom: 10,
    fontFamily: 'Poppins-Regular',
  },
  exDateContainer: {
    marginTop: 8,
    height: 52,
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    gap: 200,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(239,241,249,1)',
    alignItems: 'center',
  },
  expireText: {
    fontFamily: 'Poppins-Regular',
    width: 100,
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
  centeredDatePicker: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: '90%',
    padding: 35,
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
  checkboxContainer: {
    marginTop: 10,
    marginBottom: 10,
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
    width: 280,
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
export default DrivingLicenseImageScreen;
