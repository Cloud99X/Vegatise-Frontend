import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function Language({navigation}) {
  const [buttonColor, setButtonColor] = useState('rgba(211, 58, 58, 1)');
  const [textColor, setTextColor] = useState('white');
  const [buttonColor2, setButtonColor2] = useState('rgba(176, 176, 176, 0.2)');
  const [textColor2, setTextColor2] = useState('black');
  const [buttonColor3, setButtonColor3] = useState('rgba(176, 176, 176, 0.2)');
  const [textColor3, setTextColor3] = useState('black');

  const handlePress = () => {
    const newColor =
      buttonColor === 'rgba(176, 176, 176, 0.2)'
        ? 'rgba(211, 58, 58, 1)'
        : 'rgba(176, 176, 176, 0.2)';
    const newTextcolor = textColor === 'black' ? 'white' : 'black';
    setButtonColor(newColor);
    setTextColor(newTextcolor);
    setButtonColor2('rgba(176, 176, 176, 0.2)');
    setTextColor2('black');
    setButtonColor3('rgba(176, 176, 176, 0.2)');
    setTextColor3('black');
  };

  const handlePress2 = () => {
    const newColor2 =
      buttonColor2 === 'rgba(176, 176, 176, 0.2)'
        ? 'rgba(211, 58, 58, 1)'
        : 'rgba(176, 176, 176, 0.2)';
    const newTextcolor2 = textColor2 === 'black' ? 'white' : 'black';
    setButtonColor2(newColor2);
    setTextColor2(newTextcolor2);
    setButtonColor('rgba(176, 176, 176, 0.2)');
    setTextColor('black');
    setButtonColor3('rgba(176, 176, 176, 0.2)');
    setTextColor3('black');
  };

  const handlePress3 = () => {
    const newColor3 =
      buttonColor3 === 'rgba(176, 176, 176, 0.2)'
        ? 'rgba(211, 58, 58, 1)'
        : 'rgba(176, 176, 176, 0.2)';
    const newTextcolor3 = textColor3 === 'black' ? 'white' : 'black';
    setButtonColor3(newColor3);
    setTextColor3(newTextcolor3);
    setButtonColor('rgba(176, 176, 176, 0.2)');
    setTextColor('black');
    setButtonColor2('rgba(176, 176, 176, 0.2)');
    setTextColor2('black');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.headerRed} />
      <TouchableOpacity
        onPress={() => navigation.navigate('ProfileScreen')}
        style={styles.leftArrow}>
        <Image source={require('../../assets/images/arrow-left.png')} />
      </TouchableOpacity>
      <Text style={styles.heading1}>Language</Text>
      <SafeAreaView>
        <View style={styles.border}>
          <Text style={styles.bodyHeading1}>Select Language</Text>
          <Text style={styles.bodyHeading2}>
            Select The Language Of Your Preference Bellow
          </Text>

          <TouchableOpacity
            onPress={handlePress}
            style={[styles.languageBtn, {backgroundColor: buttonColor}]}>
            <Text style={[styles.languageText, {color: textColor}]}>
              English
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handlePress2}
            style={[styles.languageBtn, {backgroundColor: buttonColor2}]}>
            <Text style={[styles.languageText, {color: textColor2}]}>
              සිංහල​
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handlePress3}
            style={[styles.languageBtn, {backgroundColor: buttonColor3}]}>
            <Text style={[styles.languageText, {color: textColor3}]}>
              தமிழ்
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
    top: 13.5,
    left: 60,
    color: '#F4F4F4',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },

  bodyHeading1: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },

  bodyHeading2: {
    color: 'black',
    fontSize: 16,
    marginTop: 25,
    marginBottom: 30,
    fontFamily: 'Poppins-Medium',
  },

  languageBtn: {
    width: 342,
    height: 50,
    marginTop: 15,
    justifyContent: 'center',
    borderRadius: 10,
  },

  languageText: {
    marginLeft: 25,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});
