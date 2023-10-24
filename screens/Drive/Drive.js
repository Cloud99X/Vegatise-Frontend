import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LinearGradient} from 'react-native-linear-gradient';
import BottomNavBar from '../../BottomNavigation';
import initialPositionImage from '../../assets/images/initialPosition.png';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

import Geolocation from '@react-native-community/geolocation';

import {customMapStyle} from './MapStyles';
import start from '../../assets/images/initialPosition.png';
import end from '../../assets/images/finalPosition.png';
import {decode} from '@googlemaps/polyline-codec';

//
const Drive = () => {
  const navigation = useNavigation();

  const [permission, setPermission] = useState(false);
  const [currentLatitude, setcurrentLatitude] = useState(0);
  const [currentLongitude, setcurrentLongitude] = useState(0);
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);
  const [coordinates, setCoordinates] = useState(null);

  const [allGood, setAllGood] = useState(false);

  //-------------
  const [startLocation, setStartLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const endLocation = {
    latitude: 6.7106,
    longitude: 79.9074,
  };
  //------------------
  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (result === RESULTS.GRANTED) {
        setPermission(true);
        console.log('Location permission granted.');
        getCurrentLocation();
        requestRoutes();
      } else {
        const permissionResult = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
        if (permissionResult === RESULTS.GRANTED) {
          setPermission(true);
          console.log('Location permission granted.');
          getCurrentLocation();
          requestRoutes();
        }
      }
    } catch (error) {
      console.error('Location permission error:', error);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        setcurrentLatitude(position.coords.latitude);
        setcurrentLongitude(position.coords.longitude);
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const requestRoutes = async () => {
    try {
      const respons = await fetch(
        'https://routes.googleapis.com/directions/v2:computeRoutes',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': 'AIzaSyBBbhl6sB4azklF9M6Id7be7qyRi5mc9Kw',
            'X-Goog-FieldMask':
              'routes.duration,routes.distanceMeters,routes.polyline',
          },
          body: JSON.stringify({
            origin: {
              location: {
                latLng: {
                  latitude: currentLatitude,
                  longitude: currentLongitude,
                },
              },
            },
            destination: {
              location: {
                latLng: {
                  latitude: endLocation.latitude,
                  longitude: endLocation.longitude,
                },
              },
            },
            travelMode: 'DRIVE',
            routingPreference: 'TRAFFIC_AWARE',
            languageCode: 'en-US',
            units: 'IMPERIAL',
          }),
        },
      );
      const json = await respons.json();
      console.log(json);

      if (json) {
        const distanceMeters = json.routes[0].distanceMeters;
        console.log(distanceMeters);
        const kilometers = distanceMeters / 1000;
        setDistance(kilometers);

        const timeSeconds = json.routes[0].duration;
        const time = timeSeconds.slice(0, -1);
        const time1 = secondsToMinutesAndSeconds(time);
        console.log(time1);
        setTime(time1);

        // get the encoded polyline
        const polyline = json.routes[0].polyline.encodedPolyline;
        console.log(polyline);

        // decode the polyline and get the coordinates
        const coordinates1 = decode(polyline);
        console.log(coordinates1);

        // Map over the coordinates and create a new array with "latitude" and "longitude" added
        const coordinates2 = coordinates1.map((coord, index) => ({
          latitude: coord[0],
          longitude: coord[1],
        }));
        setCoordinates(coordinates2);
        console.log(coordinates2);
        setAllGood(true);
      } else {
        console.log('Error in JSON');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const secondsToMinutesAndSeconds = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return {minutes, seconds: remainingSeconds};
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          backgroundColor="rgba(208, 12, 6, 1)"
          barStyle="light-content"
        />
        <LinearGradient
          style={styles.orangeUpper}
          colors={['#D08540', '#CF0000']}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}>
          <View style={styles.allTextBox}>
            <View style={styles.textBox}>
              <Text style={styles.text1}>{distance}</Text>
              <Text style={styles.text2}>KM</Text>
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text1}>
                {time.minutes}:{time.seconds}
              </Text>
              <Text style={styles.text2}>Min</Text>
            </View>
          </View>
        </LinearGradient>
        {allGood && permission ? (
          <MapView
            style={{flex: 1}}
            provider={PROVIDER_GOOGLE}
            customMapStyle={customMapStyle}
            initialRegion={{
              latitude: 6.585395,
              longitude: 79.960739,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0821,
            }}>
            <Polyline
              coordinates={coordinates}
              strokeColor="#FF8A65"
              strokeWidth={3}
              geodesic
            />
            <Marker
              coordinate={{
                latitude: currentLatitude,
                longitude: currentLongitude,
              }}
              title="Current Location"
              image={start}
              style={{width: 500, height: 500}}
            />

            {/*marker for the end location */}
            <Marker
              coordinate={{
                latitude: endLocation.latitude,
                longitude: endLocation.longitude,
              }}
              title="End Location"
              image={end}
              style={{width: 500, height: 500}}
            />
            {/*---------------------------------*/}
          </MapView>
        ) : (
          ''
        )}
      </SafeAreaView>

      <View style={styles.bottomNavContainer}>
        <BottomNavBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  safeArea: {
    flex: 1,
  },

  orangeUpper: {
    width: '100%',
    height: 168,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },

  text1: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'Poppins-SemiBold',
  },

  text2: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Poppins-Medium',
  },

  textBox: {
    alignItems: 'center',
  },

  allTextBox: {
    flexDirection: 'row',
    height: 168,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginRight: '10%',
  },

  bottomNavContainer: {
    justifyContent: 'flex-end',
  },
});

export default Drive;
