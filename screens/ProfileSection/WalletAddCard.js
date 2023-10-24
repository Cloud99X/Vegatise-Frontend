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
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const WalletAddCard = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [accNum, setAccNum] = React.useState('');
  const [bank, setBank] = React.useState('');
  const [branch, setBranch] = React.useState('');
  // import images
  const arrowLeft = require('../../assets/images/arrowleftwight.png');

  const handleArrowLeft = () => {
    navigation.navigate('Wallet1');
  };
  const handleNameChange = text => {
    setName(text);
  };
  const handleAccChange = text => {
    setAccNum(text);
  };
  const handleBankChange = text => {
    setBank(text);
  };
  const handleBranchChange = text => {
    setBranch(text);
  };
  const handleSaveChanges = () => {};

  return (
    <View style={styles.window}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleArrowLeft}>
          <Image source={arrowLeft} />
        </TouchableOpacity>
        <Text style={styles.title}>Wallet</Text>
      </View>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.bodySection}>
            <Text style={styles.textStyle1}>Add Your Account</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Name on card</Text>
              <TextInput
                placeholder="A A Ihthisham"
                placeholderTextColor="#707070"
                value={name}
                onChangeText={handleNameChange}
                style={styles.emailTextField}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Account number</Text>
              <TextInput
                placeholder="250020030956"
                placeholderTextColor="#707070"
                value={accNum}
                onChangeText={handleAccChange}
                style={styles.emailTextField}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Banck</Text>
              <TextInput
                placeholder="Hatton National Bank (HNB)"
                placeholderTextColor="#707070"
                value={bank}
                onChangeText={handleBankChange}
                style={styles.emailTextField}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Branch</Text>
              <TextInput
                placeholder="Dehiwala"
                placeholderTextColor="#707070"
                value={branch}
                onChangeText={handleBranchChange}
                style={styles.emailTextField}
              />
            </View>
            <Text style={styles.textStyle2}>
              By adding a new card, you agree to the
              <Text style={{color: '#D33A3A'}}>credit/debit card terms.</Text>
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleSaveChanges}
            style={{width: 252, alignSelf: 'center'}}>
            <LinearGradient
              style={styles.btncontainer}
              colors={['#FB4E02', '#C8102E']}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}>
              <Text style={styles.btnText}>Add Account</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
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
  bodySection: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  textStyle1: {
    fontFamily: 'Poppins-SemiBold',
    color: '#111111',
    fontSize: 22,
    marginTop: 30,
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#111111',
    marginBottom: 10,
  },
  inputContainer: {
    height: 88,
    marginBottom: 16,
  },
  emailTextField: {
    height: 58,
    borderRadius: 4,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#707070',
    borderColor: '#CFCFCF',
    borderWidth: 1.5,
    paddingLeft: 24,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },

  btncontainer: {
    width: 252,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 60,
  },
  textStyle2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#707070',
    width: 269,
    textTransform: 'capitalize',
    marginTop: 14,
  },
});
export default WalletAddCard;
