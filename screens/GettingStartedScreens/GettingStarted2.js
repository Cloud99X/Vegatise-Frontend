import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';

const GettingStarted2 = ({navigation}) => {
  const [valid, setValid] = React.useState(true);
  const [showInfo1, setShowInfo1] = React.useState(false);
  const [showInfo2, setShowInfo2] = React.useState(false);
  const [showInfo3, setShowInfo3] = React.useState(false);
  const [permission1, setPermission1] = React.useState(false);
  const [permission2, setPermission2] = React.useState(false);
  const [permission3, setPermission3] = React.useState(false);
  // import images
  const arrowLeft = require('../../assets/images/ArrowLeft.png');
  const image = require('../../assets/images/gsd2image.png');
  const infoImage = require('../../assets/images/infocircle.png');

  const handleArrowClick = () => {
    navigation.navigate('GettingStarted1');
  };

  const handleShowInfo1Click1 = () => {
    if (showInfo1) {
      setShowInfo1(false);
    } else {
      setShowInfo1(true);
    }
  };
  const handleShowInfo1Click2 = () => {
    if (showInfo2) {
      setShowInfo2(false);
    } else {
      setShowInfo2(true);
    }
  };
  const handleShowInfo1Click3 = () => {
    if (showInfo3) {
      setShowInfo3(false);
    } else {
      setShowInfo3(true);
    }
  };

  // add correct screen
  const handleNextClick = () => {
    //navigation.navigate('VehicleImageScreen');
  };
  return (
    <SafeAreaView style={styles.window}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={handleArrowClick}>
          <Image source={arrowLeft} style={styles.arrowleft} />
        </TouchableOpacity>
        <View style={styles.section1}>
          <Text style={styles.title}>Check Permission</Text>
          <Image source={image} style={styles.image} />
          <Text style={styles.description}>
            To begin accurately detecting trip information such as start and end
            points and locating recurring driving patterns, the following
            accesses are required.
          </Text>
        </View>
        <View style={styles.permissionsSection}>
          <View
            style={
              showInfo1
                ? [styles.permissionContainer, {height: 104, marginBottom: 20}]
                : styles.permissionContainer
            }>
            <Text style={styles.permissionText}>Locations</Text>
            <View style={styles.grantPermissionContainer}>
              <TouchableOpacity
                onPress={handleShowInfo1Click1}
                style={styles.infoIcon}>
                <Image source={infoImage} />
              </TouchableOpacity>
              {showInfo1 ? (
                <Text style={styles.showInfo1}>
                  This permission allows your device to capture and pass
                  location details to this application. “Precise” locations
                  should be enabled “while using the app”, so each trip can be
                  reliably recorded
                </Text>
              ) : (
                ''
              )}

              <TouchableOpacity>
                {permission1 ? (
                  <Text style={styles.grantedText}>Granted</Text>
                ) : (
                  <Text style={styles.grantText}>Grant Permission</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={
              showInfo2
                ? [styles.permissionContainer, {height: 104, marginBottom: 20}]
                : styles.permissionContainer
            }>
            <Text style={styles.permissionText}>Locations In Background</Text>
            <View style={styles.grantPermissionContainer1}>
              <TouchableOpacity
                onPress={handleShowInfo1Click2}
                style={styles.infoIcon}>
                <Image source={infoImage} />
              </TouchableOpacity>
              {showInfo2 ? (
                <Text style={styles.showInfo1}>
                  If you are asked about background locations, please “Allow all
                  the time”. as a default, this application runs in the
                  background, saving battery life and giving insights you care
                  about easily.
                </Text>
              ) : (
                ''
              )}
              <TouchableOpacity>
                {permission2 ? (
                  <Text style={styles.grantedText}>Granted</Text>
                ) : (
                  <Text style={styles.grantText}>Grant Permission</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={
              showInfo3
                ? [styles.permissionContainer, {height: 104}]
                : styles.permissionContainer
            }>
            <Text style={styles.permissionText}>Activity</Text>
            <View style={styles.grantPermissionContainer2}>
              <TouchableOpacity
                onPress={handleShowInfo1Click3}
                style={styles.infoIcon}>
                <Image source={infoImage} />
              </TouchableOpacity>
              {showInfo3 ? (
                <Text style={styles.showInfo1}>
                  Allow this permission to minimize battery usage, which enables
                  the use physical motion to help detect starts and ends of
                  trip.
                </Text>
              ) : (
                ''
              )}
              <TouchableOpacity>
                {permission3 ? (
                  <Text style={styles.grantedText}>Granted</Text>
                ) : (
                  <Text style={styles.grantText}>Grant Permission</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.btnContainer}>
            {valid ? (
              <TouchableOpacity onPress={handleNextClick}>
                <LinearGradient
                  style={styles.button}
                  colors={['#FB4E02', '#C8102E']}
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 0}}>
                  <Text style={styles.btnText}>Next</Text>
                </LinearGradient>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.button} disabled>
                <Text style={styles.btnText}>Next</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  window: {
    width: '100%',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  arrowleft: {
    width: 18,
    height: 18,
    marginLeft: 24,
    marginTop: 30,
  },
  section1: {
    height: 275,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 5,
  },
  title: {
    width: 342,
    height: 60,
    fontSize: 20,
    color: 'rgba(0, 12, 32, 1)',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  image: {
    width: 203,
    height: 180,
  },
  infoIcon: {
    width: 20,
    height: 20,
  },
  description: {
    marginTop: 10,
    width: 290,
    fontSize: 12,
    color: 'rgba(46, 46, 46, 1)',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  permissionsSection: {
    marginTop: 100,
    paddingLeft: 24,
    gap: 20,
  },
  permissionText: {
    fontSize: 18,
    color: '#2E2E2E',
    fontFamily: 'Poppins-SemiBold',
  },
  grantText: {
    fontSize: 12,
    color: '#D33A3A',
    fontFamily: 'Poppins-SemiBold',
    marginLeft: -40,
  },
  grantedText: {
    fontSize: 12,
    color: '#0D901B',
    fontFamily: 'Poppins-SemiBold',
    marginLeft: -15,
  },
  permissionContainer: {
    height: 52,
    flexDirection: 'row',
  },
  permissionContainer1: {
    height: 104,
    flexDirection: 'column',
  },
  grantPermissionContainer: {
    marginLeft: 200,
    gap: 10,
  },
  grantPermissionContainer1: {
    marginLeft: 62,
    gap: 10,
  },
  grantPermissionContainer2: {
    marginLeft: 220,
    gap: 10,
  },
  btnContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',
  },
  button: {
    marginLeft: -24,
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
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 1)',
  },
  showInfo1: {
    marginLeft: -288,
    width: 350,
  },
});
export default GettingStarted2;
