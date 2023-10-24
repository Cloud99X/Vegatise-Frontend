import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';

const PersonalInfo = ({navigation}) => {
  const [selectedGender, setSelectedGender] = useState('');
  const [showDate, setShowDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');

  const genderOptions = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'other'},
  ];

  const showDatePicker = () => {
    setShowDate(true);
  };

  const handleDateChange = (event, date) => {
    setShowDate(Platform.OS === 'ios');
    if (date !== undefined) {
      setSelectedDate(date);
    }
  };

  const handleNameChange = name => {
    setName(name);
    // setNameValid(name.trim() !== '');
  };

  const handleMailChange = mail => {
    setMail(mail);
  };

  const saveButtonStyle = {
    ...styles.saveButton,
    backgroundColor: 'transparent', // Set a transparent background color
    width: '70%', // Set the width to 90% of the screen width
    alignSelf: 'center', // Center the button horizontally
    marginTop: 40, // Adjust margin as needed
  };

  const GettingStarted = () => {
    navigation.navigate('GettingStarted3');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.rectangle}>
        <TouchableOpacity onPress={GettingStarted}>
          <Image source={require('../../assets/images/arrow-left.png')} />
        </TouchableOpacity>
        <Text style={styles.gettingStartedText}>Getting Started</Text>
      </View>

      <View style={styles.personalInfo}>
        <Text style={styles.personalInfoText}>Personal Information</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.profileImageBox}>
          <Image
            source={require('../../assets/images/pic.png')}
            style={styles.profileImage}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.changePhotoText}>Change Profile Photo</Text>
        </TouchableOpacity>

        <View style={styles.line} />

        <View style={styles.inputContainer}>
          <View style={styles.inputFrame}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <View style={[styles.inputFrame, styles.greyishInput]}>
              <TextInput
                value={name}
                onChangeText={handleNameChange}
                placeholder="Ex - Abdurrahman ahamed"
                placeholderTextColor="#aaaaaa"
                color="black"
                style={{fontFamily: 'Poppins-Regular'}}
              />
            </View>
          </View>

          <View style={styles.row}>
            {/* Date of Birth */}
            <View style={[styles.inputFrame, styles.dateOfBirthFrame]}>
              <Text style={styles.inputLabel}>Date Of Birth</Text>
              <TouchableOpacity
                onPress={showDatePicker}
                style={[styles.datePickerContainer, styles.dropdownBox]}>
                <Image
                  source={require('../../assets/images/calander.png')}
                  style={styles.calanderIcon}
                />
                <Text
                  style={[
                    styles.datePickerText,
                    {color: selectedDate ? 'black' : '#ABAFB1'},
                  ]}>
                  {selectedDate ? selectedDate.toLocaleDateString() : 'Date'}
                </Text>
                <Image
                  source={require('../../assets/images/dropDown.png')}
                  style={{marginLeft: 10}}
                />
              </TouchableOpacity>
            </View>

            {/* Gender */}
            <View style={[styles.inputFrame, styles.genderFrame]}>
              <Text style={styles.inputLabel}>Gender</Text>
              <View style={styles.dropdownBox}>
                <Picker
                  style={{
                    color: selectedGender ? 'black' : '#ABAFB1',
                  }}
                  selectedValue={selectedGender}
                  onValueChange={itemValue => setSelectedGender(itemValue)}>
                  <Picker.Item label="Gender" value="" />
                  {genderOptions.map(option => (
                    <Picker.Item
                      key={option.value}
                      label={option.label}
                      value={option.value}
                    />
                  ))}
                </Picker>
              </View>
            </View>
          </View>

          <Text style={[styles.inputLabel, {marginLeft: 10}]}>Email</Text>
          <View
            style={[
              styles.inputFrame,
              styles.greyishInput,
              {marginLeft: 10, marginRight: 10},
            ]}>
            <TextInput
              value={mail}
              onChangeText={handleMailChange}
              placeholder="Ex - Vegatise@Domain"
              placeholderTextColor="#aaaaaa"
              color="black"
              style={{fontFamily: 'Poppins-Regular'}}
            />
          </View>

          {showDate && (
            <DateTimePicker
              value={selectedDate || new Date()}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={saveButtonStyle}
            colors={['#c8102e', '#fb4e02']}>
            <TouchableOpacity
              //disabled={!allFieldsFilled}
              onPress={() => navigation.navigate('GettingStarted3')}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 34.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={[styles.saveButtonText]}>Save</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 0,
  },
  rectangle: {
    height: 50,
    backgroundColor: '#C23030',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingLeft: 24,
  },
  backIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  gettingStartedText: {
    color: '#F4F4F4',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    paddingTop: 5,
  },
  personalInfo: {
    marginTop: 20,
    marginBottom: 10,
  },
  personalInfoText: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 20,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 8,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 2,
  },
  profileImageBox: {
    marginTop: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  profileImage: {
    backgroundColor: 'grey',
    borderRadius: 12,
    width: '100%',
    aspectRatio: 1,
  },
  changePhotoText: {
    color: '#D33A3A',
    marginTop: 10,
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
  },
  line: {
    width: '70%', // Adjust the width as needed
    alignSelf: 'center', // Center the line horizontally
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#999999',
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  inputFrame: {
    marginBottom: 5,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateOfBirthFrame: {
    flex: 1,
    marginRight: 10,
  },
  genderFrame: {
    flex: 1,
  },
  inputLabel: {
    color: 'rgba(46, 46, 46, 1)',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 10,
    marginBottom: 5,
  },
  inputBox: {
    flex: 1,
    height: 90, // Increase the height of the input fields
    marginVertical: 10,
    marginTop: 15,
    paddingHorizontal: 5,
    color: 'black', // Make the text color black
  },
  dropdownBox: {
    height: 40,
    borderRadius: 8,
    backgroundColor: '#EFF1F9', // Light grey background for Date of Birth and Gender fields
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  calanderIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  datePickerText: {
    flex: 1,
    height: 20, //change the vertical position of "Date" text
    borderWidth: 0,
    marginBottom: 1,
    marginTop: 4,
    color: 'black', // Make the text color black
    fontFamily: 'Poppins-Regular',
  },
  saveButton: {
    width: 252,
    height: 40,
    alignSelf: 'center',
    borderRadius: 34.5,
    backgroundColor: '#C7C7CC', // Darker grey shade for Save button
    //paddingVertical: 10,
    marginTop: 20,
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold', // Bold font for Save button text
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  greyishInput: {
    backgroundColor: '#EFF1F9', // Light grey background for input fields
  },
  validContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },

  tickIcon: {
    width: 20,
    height: 20,
  },
});

export default PersonalInfo;
