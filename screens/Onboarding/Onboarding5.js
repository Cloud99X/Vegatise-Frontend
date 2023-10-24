import React, {useEffect} from 'react';
import {View, Image, StyleSheet, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import images from '../../constants/images';

const CenteredImage = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // timeout to navigate to 'Onboard6' after 2 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Onboard6');
      //navigation.navigate('Drive');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Image source={images.LOGO} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default CenteredImage;
