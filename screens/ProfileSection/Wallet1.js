import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const Wallet1 = ({navigation}) => {
  // import images
  const arrowLeft = require('../../assets/images/arrowleftwight.png');

  const [isEnabled, setIsEnabled] = React.useState(false);
  const [isEnabled1, setIsEnabled1] = React.useState(false);

  const handleArrowLeft = () => {
    navigation.navigate('ProfileScreen');
  };

  return (
    <View style={styles.window}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleArrowLeft}>
          <Image source={arrowLeft} />
        </TouchableOpacity>
        <Text style={styles.title}>Wallet</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 35, marginBottom: 57}}>
          <Text style={[styles.textStyle1, {textAlign: 'center'}]}>
            Total Earnings
          </Text>
          <Text style={[styles.textStyle2, {textAlign: 'center'}]}>
            LKR 230,000.00
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: '5%',
            marginRight: '5%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 25,
          }}>
          <Text style={styles.textStyle1}>Billing</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('WalletAddCard')}>
            <Image source={require('../../assets/images/pluscircle.png')} />
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={styles.container}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <View style={styles.container1}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.textStyle3}>Account holder name</Text>
                <Switch
                  value={isEnabled}
                  onValueChange={value => setIsEnabled(value)}
                  trackColor={{false: '#ff0000', true: '#399921'}}
                  thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
                />
              </View>
              <Text style={styles.textStyle4}>a a ihthisham</Text>
            </View>
            <View>
              <Text style={styles.textStyle3}>Account number</Text>
              <Text style={styles.textStyle4}>250020030956</Text>
            </View>
            <View>
              <Text style={styles.textStyle3}>Bank</Text>
              <Text style={styles.textStyle4}>hatton national bank (HNB)</Text>
            </View>
            <View>
              <Text style={styles.textStyle3}>branch</Text>
              <Text style={styles.textStyle4}>Bambalapitiya</Text>
            </View>
          </View>
          <View style={styles.container1}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.textStyle3}>Account holder name</Text>
                <Switch
                  value={isEnabled1}
                  onValueChange={value => setIsEnabled1(value)}
                  trackColor={{false: '#ff0000', true: '#399921'}}
                  thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
                />
              </View>
              <Text style={styles.textStyle4}>a a ihthisham</Text>
            </View>
            <View>
              <Text style={styles.textStyle3}>Account number</Text>
              <Text style={styles.textStyle4}>250020030956</Text>
            </View>
            <View>
              <Text style={styles.textStyle3}>Bank</Text>
              <Text style={styles.textStyle4}>hatton national bank (HNB)</Text>
            </View>
            <View>
              <Text style={styles.textStyle3}>branch</Text>
              <Text style={styles.textStyle4}>Bambalapitiya</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.bodySection}>
          <Text style={[styles.textStyle1, {marginBottom: 25}]}>History</Text>
          <View style={styles.container2}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.textStyle1}>Vegatise campaign</Text>
                <Text style={styles.textStyle5}>LKR 15,000.00</Text>
              </View>
              <Text style={styles.textStyle6}>Mar 24, 2023 7:11 PM</Text>
              <Text style={styles.textStyle6}>Ref No - 2002358952358</Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.textStyle1}>Vegatise campaign</Text>
                <Text style={styles.textStyle7}>LKR 5,000.00</Text>
              </View>
              <Text style={styles.textStyle6}>Mar 24, 2023 7:11 PM</Text>
              <Text style={styles.textStyle6}>Ref No - 2002358952358</Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.textStyle1}>scope cinemas campaign</Text>
                <Text style={styles.textStyle5}>LKR 30,000.00</Text>
              </View>
              <Text style={styles.textStyle6}>Mar 24, 2023 7:11 PM</Text>
              <Text style={styles.textStyle6}>Ref No - 2002358952358</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: 50,
    backgroundColor: '#C23030',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingLeft: '4%',
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    paddingTop: 5,
  },
  textStyle1: {
    fontFamily: 'Poppins-Medium',
    color: '#000',
    fontSize: 16,
  },
  textStyle2: {
    fontFamily: 'Poppins-Bold',
    color: '#111111',
    fontSize: 24,
  },
  container: {
    flexDirection: 'row',
    gap: 21,
    marginLeft: '5%',
    width: 600,
    marginBottom: 30,
  },
  container1: {
    width: 234,
    height: 200,
    backgroundColor: '#F5F5F5',
    borderRadius: 6,
    borderColor: '#B4B4B3',
    borderWidth: 0.7,
    gap: 10,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  textStyle3: {
    color: '#303030',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    textTransform: 'capitalize',
  },
  textStyle4: {
    color: '#5E6366',
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    textTransform: 'capitalize',
  },
  bodySection: {
    marginLeft: '5%',
    marginRight: '5%',
    justifyContent: 'space-between',
  },
  textStyle5: {
    fontFamily: 'Poppins-Medium',
    color: '#0D901B',
    fontSize: 16,
  },
  textStyle6: {
    fontFamily: 'Poppins-Medium',
    color: '#6F6F6F',
    fontSize: 9,
  },
  textStyle7: {
    fontFamily: 'Poppins-Medium',
    color: '#C23030',
    fontSize: 16,
  },
  container2: {
    gap: 12,
    marginBottom: 60,
  },
});
export default Wallet1;
