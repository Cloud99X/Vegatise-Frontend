import React from 'react';
import {Text, StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GettingStarted4 = ({navigation}) => {
  // Define the style generator function
  const getStyleValue = (key, value) => {
    if (value === undefined) return;
    return {[key]: value === 'unset' ? undefined : value};
  };

  // Define the Property1Default component
  const Property1Default = ({
    getStarted,
    property1DefaultPosition,
    property1DefaultHeight,
    property1DefaultMarginLeft,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultBorderRadius,
    fontFamily,
  }) => {
    const property1DefaultStyle = {
      ...getStyleValue('position', property1DefaultPosition),
      ...getStyleValue('height', property1DefaultHeight),
      ...getStyleValue('marginLeft', property1DefaultMarginLeft),
      ...getStyleValue('top', property1DefaultTop),
      ...getStyleValue('left', property1DefaultLeft),
      ...getStyleValue('borderRadius', property1DefaultBorderRadius),
      ...getStyleValue('fontFamily', fontFamily),
    };

    return (
      <LinearGradient
        style={[styles.property1default, property1DefaultStyle]}
        locations={[0, 1]}
        colors={['#fb4e02', '#c8102e']}
        useAngle={true}
        angle={-90}>
        <Text style={styles.getStarted}>{getStarted}</Text>
      </LinearGradient>
    );
  };

  return (
    <View style={styles.container}>
      {/* Colored bar at the top */}
      <View style={styles.coloredBar} />
      <View style={styles.gettingStarted08}>
        <Text style={[styles.youreAllGood, styles.youCanNowText]}>
          you're all good to go!
        </Text>
        <Image
          style={styles.successIcon}
          resizeMode="cover"
          source={require('../../assets/images/success.png')}
        />
        <Text style={[styles.congratsOnSetting, styles.youCanNowText]}>
          {`Congrats on setting up your account `}
        </Text>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Marketplace1')}> */}
        {/* Use the integrated Property1Default component */}
        {/* <Property1Default
            getStarted="marketplace"
            property1DefaultPosition="absolute"
            property1DefaultHeight={40}
            property1DefaultMarginLeft={-126}
            property1DefaultTop={572}
            property1DefaultLeft="50%"
            property1DefaultBorderRadius={15}
            fontFamily="Poppins-Bold"
          />
        </TouchableOpacity> */}
        <View style={styles.sectionBtn}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Marketplace1')}>
            <LinearGradient
              style={styles.btn}
              locations={[0, 1]}
              colors={['#fb4e02', '#c8102e']}
              useAngle={true}
              angle={-90}>
              <Text style={styles.btnText}>MarketPlace</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Text style={[styles.youCanNow, styles.youCanNowText]}>
          you can now view the marketplace, partner with brands and start
          earning rewards
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  youCanNowText: {
    textAlign: 'center',
    textTransform: 'capitalize',
    position: 'absolute',
  },
  youreAllGood: {
    top: 94,
    left: 24,
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#2c2c2c',
    width: 342,
  },
  successIcon: {
    top: 159,
    left: 42,
    width: 307,
    height: 174,
    position: 'absolute',
    overflow: 'hidden',
  },
  congratsOnSetting: {
    top: 353,
    left: 45,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    color: '#066710',
    width: 300,
  },
  youCanNow: {
    marginLeft: -162,
    top: 441,
    left: '50%',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#2e2e2e',
    width: 324,
  },
  gettingStarted08: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 844,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    backgroundColor: '#C23030', // Colored bar background color
  },
  coloredBar: {
    height: 30,
  },
  getStarted: {
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  property1default: {
    borderRadius: 4,
    width: 252,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  sectionBtn: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 550,
  },
  btn: {
    borderRadius: 15,
    width: 252,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
});

export default GettingStarted4;
