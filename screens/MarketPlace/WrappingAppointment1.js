import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import DatePicker from 'react-native-modern-datepicker';

const WrappingAppointment1 = ({navigation}) => {
  const [allValid, setAllValid] = React.useState(false);
  const [wrappingCenter, setWrappingCenter] = React.useState('');
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [showWrappingCenter, setShowWrappingCenter] = React.useState(false);
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [showTimePicker, setShowTimePicker] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(0);
  const [clickedNext, setClickedNext] = React.useState(false);
  // import images
  const arrowLeft = require('../../assets/images/arrowleftwight.png');
  const largeCheckIcon = require('../../assets/images/LargeCheckIcon.png');
  const number2 = require('../../assets/images/Number2.png');
  const number3 = require('../../assets/images/Number3.png');
  const stickercircle = require('../../assets/images/sticker-circle.png');
  const arrowDown = require('../../assets/images/ArrowDown.png');
  const calender = require('../../assets/images/calendar-2.png');
  const clock = require('../../assets/images/Clock.png');
  const check = require('../../assets/images/Check1.png');
  const check2 = require('../../assets/images/Check-2.png');
  const handleArrowLeft = () => {
    navigation.navigate('CongratulationScreen');
  };
  const handleNext = () => {
    setClickedNext(true);
  };
  const handleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  const handleTimePicker = () => {
    setShowTimePicker(!showTimePicker);
  };
  const handleWrappingCenter = () => {
    setShowWrappingCenter(!showWrappingCenter);
  };
  const handleOptionSelect = option => {
    setSelectedOption(option);
    setWrappingCenter(wrappingCenters[option]);
    setShowWrappingCenter(false);
  };

  const wrappingCenters = ['', 'Galle Road, Ratmalana', 'Pite Kotte, Nugegoda'];

  React.useEffect(() => {
    checkAllValid();
  }, [wrappingCenter, date, time]);

  const checkAllValid = () => {
    if (wrappingCenter !== '' && date !== '' && time !== '') {
      setAllValid(true);
    } else {
      setAllValid(false);
    }
  };

  const handleConfirm = () => {
    navigation.navigate('CampaignVehicleImageScreen');
  };
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
          <View style={{marginTop: 25, textAlign: 'center'}}>
            <Text style={styles.textStyle1}>
              Just A Few More Steps To Start
            </Text>
            <Text style={styles.textStyle1}>Vegatising!</Text>
          </View>
          <View style={styles.section1}>
            <View style={{alignItems: 'center'}}>
              <Image source={largeCheckIcon} />
              <Text style={styles.textStyle2}>Approve </Text>
              <Text style={styles.textStyle2}>Campaign</Text>
            </View>
            <View style={styles.line} />
            <View style={{alignItems: 'center'}}>
              <Image source={number2} />
              <Text style={styles.textStyle2}>Schedule </Text>
              <Text style={styles.textStyle2}>Wrapping Date</Text>
            </View>
            <View style={[styles.line, {borderColor: '#ABA9A9'}]} />
            <View style={{alignItems: 'center'}}>
              <Image source={number3} />
              <Text style={styles.textStyle2}>Approve </Text>
              <Text style={styles.textStyle2}>Wrapping</Text>
            </View>
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.textStyle3}>
              Please Schedule You're Wrapping Appointment
            </Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.textStyle4}>Select Wrapping Center</Text>
            <View
              style={
                wrappingCenter
                  ? [
                      styles.inputContainer,
                      {width: 260, backgroundColor: 'rgba(240, 249, 246, 0.7)'},
                    ]
                  : styles.inputContainer
              }>
              <Image source={stickercircle} />
              <TouchableOpacity onPress={handleWrappingCenter}>
                {wrappingCenter ? (
                  <Text style={[styles.placeholderText, {width: 150}]}>
                    {wrappingCenter}
                  </Text>
                ) : (
                  <Text style={styles.placeholderText}>Select</Text>
                )}
              </TouchableOpacity>
              {wrappingCenter ? (
                <Image source={check} />
              ) : (
                <Image source={arrowDown} />
              )}
            </View>
          </View>
          {showWrappingCenter ? (
            <View style={styles.wrappingCentersContainer}>
              <View
                style={
                  selectedOption === 1
                    ? [styles.wrappingCenter, {backgroundColor: '#D33A3A'}]
                    : styles.wrappingCenter
                }>
                <TouchableOpacity onPress={() => handleOptionSelect(1)}>
                  <Text
                    style={
                      selectedOption === 1
                        ? [styles.textStyle6, {color: '#fff'}]
                        : styles.textStyle6
                    }>
                    Galle Road, Ratmalana
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={
                  selectedOption === 2
                    ? [styles.wrappingCenter, {backgroundColor: '#D33A3A'}]
                    : styles.wrappingCenter
                }>
                <TouchableOpacity onPress={() => handleOptionSelect(2)}>
                  <Text
                    style={
                      selectedOption === 2
                        ? [styles.textStyle6, {color: '#fff'}]
                        : styles.textStyle6
                    }>
                    Pite Kotte, Nugegoda
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            ''
          )}
          <View style={styles.container}>
            <Text style={styles.textStyle4}>Select Date And Time</Text>
            <View
              style={
                date
                  ? [
                      styles.inputContainer,
                      {backgroundColor: 'rgba(240, 249, 246, 0.7)'},
                    ]
                  : styles.inputContainer
              }>
              <Image source={calender} />
              <TouchableOpacity onPress={handleDatePicker}>
                {date ? (
                  <Text style={styles.placeholderText}>{date}</Text>
                ) : (
                  <Text style={styles.placeholderText}>Date</Text>
                )}
              </TouchableOpacity>
              {date ? <Image source={check} /> : <Image source={arrowDown} />}
            </View>
          </View>
          {showDatePicker ? (
            <View style={styles.modalView}>
              <DatePicker
                mode="calendar"
                onDateChange={date => setDate(date)}
                options={{
                  //textHeaderColor: '#ED2B2A',
                  //textDefaultColor: '#ED2B2A',
                  selectedTextColor: '#fff',
                  mainColor: '#000',
                  //textSecondaryColor: '#ED2B2A',
                  borderColor: 'rgba(122, 146, 165, 0.1)',
                }}
              />
              <TouchableOpacity onPress={handleDatePicker}>
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    color: '#000',
                  }}>
                  Close
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            ''
          )}
          <View style={styles.container}>
            <Text style={styles.textStyle4}>Select Time</Text>
            <View
              style={
                time
                  ? [
                      styles.inputContainer,
                      {backgroundColor: 'rgba(240, 249, 246, 0.7)'},
                    ]
                  : styles.inputContainer
              }>
              <Image source={clock} />
              <TouchableOpacity onPress={handleTimePicker}>
                {time ? (
                  <Text style={styles.placeholderText}>{time}</Text>
                ) : (
                  <Text style={styles.placeholderText}>Time</Text>
                )}
              </TouchableOpacity>
              {time ? <Image source={check} /> : <Image source={arrowDown} />}
            </View>
          </View>
          {showTimePicker ? (
            <View style={styles.timePickerView}>
              <DatePicker
                mode="time"
                onTimeChange={selectedTime => setTime(selectedTime)}
                options={{
                  //textDefaultColor: '#ED2B2A',
                  mainColor: '#000',
                }}
                style={{fontFamily: 'Poppins-SemiBold'}}
              />
              <TouchableOpacity onPress={handleTimePicker}>
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    color: '#000',
                  }}>
                  Close
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            ''
          )}
          <View style={{marginLeft: '7%', gap: 10}}>
            <Text style={styles.textStyle5}>
              *Wrapping Usually Take About 10 Hours For Wrapping
            </Text>
            <Text style={[styles.textStyle5, {width: 342, marginBottom: 50}]}>
              *If Missed Wrapping Appointment And Not Rescheduled With 3 Days
              Prior To Wrapping Day. A Penalty Fee Will Be Deduced From Campaign
              Earnings
            </Text>
          </View>
          <View style={styles.btnContainer}>
            {allValid ? (
              <TouchableOpacity onPress={handleNext}>
                <LinearGradient
                  style={styles.button}
                  colors={['#FB4E02', '#C8102E']}
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 0}}>
                  <Text style={styles.btnText}>Next</Text>
                </LinearGradient>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity disabled style={styles.button}>
                <Text style={styles.btnText}>Next</Text>
              </TouchableOpacity>
            )}
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={clickedNext}
            onRequestClose={() => setClickedNext(false)}>
            <View style={{flex: 1, backgroundColor: 'rgba(44, 44, 44, 0.71)'}}>
              <View style={styles.centeredModal}>
                <View style={styles.modalView1}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontFamily: 'Poppins-SemiBold',
                        color: '#2E2E2E',
                      }}>
                      You're All Set
                    </Text>
                    <Image source={check2} />
                  </View>
                  <View
                    style={{
                      width: 234,
                      height: 160,
                      backgroundColor: '#F5F5F5',
                      justifyContent: 'center',
                      elevation: 2,
                      borderRadius: 6,
                    }}>
                    <View style={{marginLeft: 15}}>
                      <Text style={styles.textStyle4}>Location</Text>
                      <Text style={styles.textStyle7}>{wrappingCenter}</Text>
                    </View>
                    <View style={{marginTop: 8, marginLeft: 15}}>
                      <Text style={styles.textStyle4}>Date</Text>
                      <Text style={styles.textStyle7}>{date}</Text>
                    </View>
                    <View style={{marginTop: 8, marginLeft: 15}}>
                      <Text style={styles.textStyle4}>Time</Text>
                      <Text style={styles.textStyle7}>{time}</Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={handleConfirm}>
                    <LinearGradient
                      style={styles.button}
                      colors={['#FB4E02', '#C8102E']}
                      start={{x: 1, y: 0}}
                      end={{x: 0, y: 0}}>
                      <Text style={styles.btnText}>Confirm</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
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
    fontFamily: 'Poppins-SemiBold',
    color: '#2E2E2E',
    fontSize: 18,
    textAlign: 'center',
  },
  bodySection: {
    flex: 1,
  },
  section1: {
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  textStyle2: {
    fontFamily: 'Poppins-Medium',
    color: '#2E2E2E',
    fontSize: 9,
    width: 73,
    textAlign: 'center',
  },
  line: {
    width: 50,
    height: 0,
    borderWidth: 1,
    borderColor: '#181818',
    marginTop: 25,
  },
  textStyle3: {
    fontFamily: 'Poppins-SemiBold',
    color: '#2E2E2E',
    fontSize: 14,
  },
  txtContainer: {
    width: 314,

    marginBottom: 25,
    marginLeft: '7%',
  },
  container: {
    width: 181,
    height: 79,
    marginLeft: '7%',
    marginBottom: 30,
  },
  textStyle4: {
    fontFamily: 'Poppins-SemiBold',
    color: '#2E2E2E',
    fontSize: 12,
  },
  inputContainer: {
    marginTop: 10,
    width: 200,
    height: 50,
    flexDirection: 'row',
    gap: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(239, 241, 249, 1)',
    borderRadius: 8,
  },
  placeholderText: {
    fontFamily: 'Poppins-Regular',
    color: '#ABAFB1',
    fontSize: 10,
    width: 80,
  },
  textStyle5: {
    fontFamily: 'Poppins-Medium',
    color: '#777777',
    fontSize: 9,
  },
  btnContainer: {
    marginBottom: 50,
    alignItems: 'center',
  },
  button: {
    width: 202,
    height: 38,
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
    marginLeft: '7%',
    marginRight: '20%',
    marginTop: '-5%',
    marginBottom: 25,
    paddingBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
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
  timePickerView: {
    marginLeft: '7%',
    marginRight: '20%',
    marginTop: '-5%',
    marginBottom: 25,
    paddingBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
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
  wrappingCentersContainer: {
    marginLeft: '7%',
    marginTop: -20,
    marginBottom: 20,
    gap: 10,
  },
  wrappingCenter: {
    width: 181,
    height: 26,
    elevation: 1,
    borderRadius: 6,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  textStyle6: {
    fontFamily: 'Poppins-Regular',
    color: '#2E2E2E',
    fontSize: 9,
  },
  centeredModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView1: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '80%',
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
    gap: 20,
  },
  textStyle7: {
    fontFamily: 'Poppins-Regular',
    color: '#5E6366',
    fontSize: 10,
  },
});
export default WrappingAppointment1;
