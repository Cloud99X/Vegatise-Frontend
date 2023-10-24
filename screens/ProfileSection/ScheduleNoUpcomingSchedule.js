import * as React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const ScheduleNoUpcomingSchedule = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.wallet1}>
      <View style={[styles.component71, styles.component71Layout]}>
        <View style={[styles.component71Child, styles.component71Layout]} />

        <View style={styles.arrowLeftParent}>
          <TouchableOpacity onPress={handleBackPress}>
            <Image
              style={styles.arrowLeftIcon}
              resizeMode="cover"
              source={require('../../assets/images/arrow-left.png')}
            />
          </TouchableOpacity>
          <Text style={styles.marketPlace}>schedule</Text>
        </View>
      </View>
      <Text style={[styles.viewUpcomingSchedule, styles.youHaveNoText]}>
        View upcoming schedule
      </Text>
      <Text style={[styles.youHaveNo, styles.youHaveNoText]}>
        you have no upcoming schedules
      </Text>
      <Image
        style={[styles.scheduleImageIcon, styles.homeIndicatorPosition]}
        resizeMode="cover"
        source={require('../../assets/images/schedule-image.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wallet1: {
    flex: 1,
    height: 844,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: '#fff',
    top: -44,
  },

  youHaveNoText: {
    color: '#000',
    textAlign: 'left',
    textTransform: 'capitalize',
    left: 25,
    position: 'absolute',
  },
  component71Child: {
    backgroundColor: '#c23030',
    top: 0,
    height: 50,
  },

  arrowLeftIcon: {
    width: 25,
    height: 25,
  },
  component7: {
    top: -44,
  },
  marketPlace: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#f4f4f4',
    marginLeft: 15,
    textAlign: 'left',
    textTransform: 'capitalize',
  },
  arrowLeftParent: {
    top: 10,
    left: 25,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
  },
  component71: {
    top: 44,
    overflow: 'hidden',
  },
  viewUpcomingSchedule: {
    top: 129,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
  youHaveNo: {
    top: 181,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    width: 295,
  },
  scheduleImageIcon: {
    marginLeft: 105,
    top: 255,
    width: 270,
    height: 233,
    overflow: 'hidden',
  },
});

export default ScheduleNoUpcomingSchedule;
