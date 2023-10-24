import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const GettingStarted3 = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const personalInformation = () => {
    navigation.navigate('PersonalInfo');
  };

  const VehicleInformation = () => {
    navigation.navigate('VehicleInformation');
  };

  const AddressNroutes = () => {
    navigation.navigate('AddressNRoutesD');
  };

  const DrivingLicense = () => {
    navigation.navigate('DrivingLicenseImageScreen');
  };
  return (
    <ScrollView>
      <View style={styles.gettingStarted04}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image
            style={styles.iconly}
            resizeMode="cover"
            source={require('../../assets/images/iconly.png')}
          />
        </TouchableOpacity>
        <View style={[styles.frameParent, styles.buttonPosition]}>
          <View style={styles.requiredStepsParent}>
            <Text style={[styles.requiredSteps, styles.requiredStepsText]}>
              required steps
            </Text>
            <Text style={styles.heresWhatYou}>
              Heres what you need to do to set up your account
            </Text>
          </View>

          <View style={styles.instanceParent}>
            <View style={styles.requiredStepsParent}>
              <TouchableOpacity onPress={personalInformation}>
                <View style={styles.frameContainer}>
                  <View style={styles.component47Parent}>
                    <Image
                      style={styles.component47Icon}
                      resizeMode="cover"
                      source={require('../../assets/images/component-47.png')}
                    />
                    <Text
                      style={[
                        styles.personalInformation,
                        styles.requiredStepsText,
                      ]}>
                      personal information
                    </Text>
                  </View>
                  <Image
                    style={[styles.arrowLeftIcon, styles.arrowIconLayout]}
                    resizeMode="cover"
                    source={require('../../assets/images/arrowleft.png')}
                  />
                </View>
              </TouchableOpacity>
              <View
                style={[styles.approvedParent, styles.approvedParentLayout]}>
                <Text style={[styles.approved, styles.approvedTypo]}>
                  approved
                </Text>
                <View style={styles.frameChildLayout} />
              </View>
            </View>
            <View style={styles.frameView}>
              <TouchableOpacity onPress={VehicleInformation}>
                <View style={styles.frameContainer}>
                  <View style={styles.component47Parent}>
                    <Image
                      style={styles.component47Icon}
                      resizeMode="cover"
                      source={require('../../assets/images/component-47.png')}
                    />
                    <Text
                      style={[
                        styles.personalInformation,
                        styles.requiredStepsText,
                      ]}>
                      vehicle information
                    </Text>
                  </View>
                  <Image
                    style={[styles.arrowLeftIcon1, styles.arrowIconLayout]}
                    resizeMode="cover"
                    source={require('../../assets/images/arrowleft.png')}
                  />
                </View>
              </TouchableOpacity>
              <View
                style={[styles.approvedParent, styles.approvedParentLayout]}>
                <Text style={[styles.approved, styles.approvedTypo]}>
                  approved
                </Text>
                <View style={styles.frameChildLayout} />
              </View>
            </View>
            <View style={styles.frameView}>
              <TouchableOpacity onPress={AddressNroutes}>
                <View style={styles.frameContainer}>
                  <View style={styles.component47Parent}>
                    <Image
                      style={styles.component47Icon}
                      resizeMode="cover"
                      source={require('../../assets/images/component-47.png')}
                    />
                    <Text
                      style={[
                        styles.personalInformation,
                        styles.requiredStepsText,
                      ]}>
                      address and routes
                    </Text>
                  </View>
                  <Image
                    style={[styles.arrowLeftIcon2, styles.arrowIconLayout]}
                    resizeMode="cover"
                    source={require('../../assets/images/arrowleft.png')}
                  />
                </View>
              </TouchableOpacity>
              <View
                style={[styles.approvedParent, styles.approvedParentLayout]}>
                <Text style={[styles.approved, styles.approvedTypo]}>
                  approved
                </Text>
                <View style={styles.frameChildLayout} />
              </View>
            </View>
            <View style={styles.frameView}>
              <TouchableOpacity onPress={DrivingLicense}>
                <View style={styles.frameContainer}>
                  <View style={styles.component47Parent}>
                    <Image
                      style={styles.component47Icon}
                      resizeMode="cover"
                      source={require('../../assets/images/component-471.png')}
                    />
                    <Text
                      style={[
                        styles.personalInformation,
                        styles.requiredStepsText,
                      ]}>
                      driving license
                    </Text>
                  </View>
                  <Image
                    style={[styles.arrowLeftIcon3, styles.arrowIconLayout]}
                    resizeMode="cover"
                    source={require('../../assets/images/arrowleft.png')}
                  />
                </View>
              </TouchableOpacity>
              <View
                style={[styles.approvedParent, styles.approvedParentLayout]}>
                <Text style={[styles.approved, styles.approvedTypo]}>
                  approved
                </Text>
                <View style={styles.frameChildLayout} />
              </View>
            </View>
            <View style={styles.frameView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('NICImageScreen')}>
                <View style={styles.frameContainer}>
                  <View style={styles.component47Parent}>
                    <Image
                      style={styles.component47Icon}
                      resizeMode="cover"
                      source={require('../../assets/images/component-471.png')}
                    />
                    <Text
                      style={[
                        styles.personalInformation,
                        styles.requiredStepsText,
                      ]}>
                      NIC Information
                    </Text>
                  </View>
                  <Image
                    style={[styles.arrowLeftIcon4, styles.arrowIconLayout]}
                    resizeMode="cover"
                    source={require('../../assets/images/arrowleft.png')}
                  />
                </View>
              </TouchableOpacity>
              <View
                style={[styles.approvedParent, styles.approvedParentLayout]}>
                <Text style={[styles.approved, styles.approvedTypo]}>
                  approved
                </Text>
                <View style={styles.frameChildLayout} />
              </View>
            </View>
            <View style={styles.frameView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('VehicleImageScreen')}>
                <View style={styles.frameContainer}>
                  <View style={styles.component47Parent}>
                    <Image
                      style={styles.component47Icon}
                      resizeMode="cover"
                      source={require('../../assets/images/component-471.png')}
                    />
                    <Text
                      style={[
                        styles.personalInformation,
                        styles.requiredStepsText,
                      ]}>
                      Vehicle image
                    </Text>
                  </View>
                  <Image
                    style={[styles.arrowLeftIcon5, styles.arrowIconLayout]}
                    resizeMode="cover"
                    source={require('../../assets/images/arrowleft.png')}
                  />
                </View>
              </TouchableOpacity>
              <View
                style={[styles.approvedParent, styles.approvedParentLayout]}>
                <Text style={[styles.approved, styles.approvedTypo]}>
                  approved
                </Text>
                <View style={styles.frameChildLayout} />
              </View>
            </View>
            <View style={styles.frameView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('VehicleRegDocumentScreen')}>
                <View style={styles.frameContainer}>
                  <View style={styles.component47Parent}>
                    <Image
                      style={styles.component47Icon}
                      resizeMode="cover"
                      source={require('../../assets/images/component-471.png')}
                    />
                    <Text
                      style={[
                        styles.personalInformation,
                        styles.requiredStepsText,
                      ]}>
                      vehicle registration document
                    </Text>
                  </View>
                  <Image
                    style={[styles.arrowLeftIcon6, styles.arrowIconLayout]}
                    resizeMode="cover"
                    source={require('../../assets/images/arrowleft.png')}
                  />
                </View>
              </TouchableOpacity>
              <View
                style={[styles.approvedParent, styles.approvedParentLayout]}>
                <Text style={[styles.approved, styles.approvedTypo]}>
                  approved
                </Text>
                <View style={styles.frameChildLayout} />
              </View>
            </View>
            <View style={styles.frameView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('VehicleInsuaranceScreen')}>
                <View style={styles.frameContainer}>
                  <View style={styles.component47Parent}>
                    <Image
                      style={styles.component47Icon}
                      resizeMode="cover"
                      source={require('../../assets/images/component-471.png')}
                    />
                    <Text
                      style={[
                        styles.personalInformation,
                        styles.requiredStepsText,
                      ]}>
                      vehicle insurance
                    </Text>
                  </View>
                  <Image
                    style={[styles.arrowLeftIcon7, styles.arrowIconLayout]}
                    resizeMode="cover"
                    source={require('../../assets/images/arrowleft.png')}
                  />
                </View>
              </TouchableOpacity>
              <View
                style={[styles.approvedParent, styles.approvedParentLayout]}>
                <Text style={[styles.approved, styles.approvedTypo]}>
                  approved
                </Text>
                <View style={styles.frameChildLayout} />
              </View>
            </View>
            <View style={styles.frameView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('BillingDocumentScreen')}>
                <View style={styles.frameContainer}>
                  <View style={styles.component47Parent}>
                    <Image
                      style={styles.component47Icon}
                      resizeMode="cover"
                      source={require('../../assets/images/component-472.png')}
                    />
                    <Text
                      style={[
                        styles.personalInformation,
                        styles.requiredStepsText,
                      ]}>
                      billing proof (optional)
                    </Text>
                  </View>
                  <Image
                    style={[styles.arrowLeftIcon8, styles.arrowIconLayout]}
                    resizeMode="cover"
                    source={require('../../assets/images/arrowleft.png')}
                  />
                </View>
              </TouchableOpacity>
              <View
                style={[styles.approvedParent, styles.approvedParentLayout]}>
                <Text style={[styles.approved, styles.approvedTypo]}>
                  approved
                </Text>
                <View style={styles.frameChildLayout} />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.submittedWrapper, styles.instancePosition]}>
          <Text style={[styles.submitted, styles.submittedTypo]}>
            Submitted
          </Text>
        </View>
        <View style={[styles.instanceGroup, styles.instancePosition]}>
          <View style={styles.requiredStepsParent}>
            <TouchableOpacity>
              <View style={styles.frameContainer}>
                <View style={styles.component47Parent}>
                  <Image
                    style={styles.component47Icon}
                    resizeMode="cover"
                    source={require('../../assets/images/component-473.png')}
                  />
                  <Text
                    style={[
                      styles.personalInformation,
                      styles.requiredStepsText,
                    ]}>
                    personal information
                  </Text>
                </View>
                <Image
                  style={[styles.arrowLeftIcon, styles.arrowIconLayout]}
                  resizeMode="cover"
                  source={require('../../assets/images/arrowleft.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={[styles.approvedParent7, styles.approvedParentLayout]}>
              <Text style={styles.approvedTypo}>approved</Text>
              <View style={[styles.frameChild6, styles.frameChildLayout]} />
            </View>
          </View>
          <View style={styles.frameView}>
            <TouchableOpacity>
              <View style={styles.frameContainer}>
                <View style={styles.component47Parent}>
                  <Image
                    style={styles.component47Icon}
                    resizeMode="cover"
                    source={require('../../assets/images/component-473.png')}
                  />
                  <Text
                    style={[
                      styles.personalInformation,
                      styles.requiredStepsText,
                    ]}>
                    vehicle information
                  </Text>
                </View>
                <Image
                  style={[styles.arrowLeftIcon1, styles.arrowIconLayout]}
                  resizeMode="cover"
                  source={require('../../assets/images/arrowleft.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={[styles.approvedParent7, styles.approvedParentLayout]}>
              <Text style={styles.approvedTypo}>approved</Text>
              <View style={[styles.frameChild6, styles.frameChildLayout]} />
            </View>
          </View>
          <View style={styles.frameView}>
            <TouchableOpacity>
              <View style={styles.frameContainer}>
                <View style={styles.component47Parent}>
                  <Image
                    style={styles.component47Icon}
                    resizeMode="cover"
                    source={require('../../assets/images/component-474.png')}
                  />
                  <Text
                    style={[
                      styles.personalInformation,
                      styles.requiredStepsText,
                    ]}>
                    driving license
                  </Text>
                </View>
                <Image
                  style={[styles.arrowLeftIcon3, styles.arrowIconLayout]}
                  resizeMode="cover"
                  source={require('../../assets/images/arrowleft.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={[styles.approvedParent7, styles.approvedParentLayout]}>
              <Text style={styles.approvedTypo}>In review</Text>
              <View style={[styles.frameChild6, styles.frameChildLayout]} />
            </View>
          </View>
          <View style={styles.frameView}>
            <TouchableOpacity>
              <View style={styles.frameContainer}>
                <View style={styles.component47Parent}>
                  <Image
                    style={styles.component47Icon}
                    resizeMode="cover"
                    source={require('../../assets/images/component-474.png')}
                  />
                  <Text
                    style={[
                      styles.personalInformation,
                      styles.requiredStepsText,
                    ]}>
                    NIC Information
                  </Text>
                </View>
                <Image
                  style={[styles.arrowLeftIcon4, styles.arrowIconLayout]}
                  resizeMode="cover"
                  source={require('../../assets/images/arrowleft.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={[styles.approvedParent7, styles.approvedParentLayout]}>
              <Text style={styles.approvedTypo}>In review</Text>
              <View style={[styles.frameChild6, styles.frameChildLayout]} />
            </View>
          </View>
        </View>
        <View style={[styles.instanceContainer, styles.instancePosition]}>
          <View style={styles.requiredStepsParent}>
            <TouchableOpacity>
              <View style={styles.frameContainer}>
                <View style={styles.component47Parent}>
                  <Image
                    style={styles.component47Icon}
                    resizeMode="cover"
                    source={require('../../assets/images/component-473.png')}
                  />
                  <Text
                    style={[
                      styles.personalInformation,
                      styles.requiredStepsText,
                    ]}>
                    personal information
                  </Text>
                </View>
                <Image
                  style={[styles.arrowLeftIcon, styles.arrowIconLayout]}
                  resizeMode="cover"
                  source={require('../../assets/images/arrowleft.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={[styles.approvedParent7, styles.approvedParentLayout]}>
              <Text style={styles.approvedTypo}>approved</Text>
              <View style={[styles.frameChild6, styles.frameChildLayout]} />
            </View>
          </View>
          <View style={styles.frameView}>
            <TouchableOpacity>
              <View style={styles.frameContainer}>
                <View style={styles.component47Parent}>
                  <Image
                    style={styles.component47Icon}
                    resizeMode="cover"
                    source={require('../../assets/images/component-473.png')}
                  />
                  <Text
                    style={[
                      styles.personalInformation,
                      styles.requiredStepsText,
                    ]}>
                    vehicle information
                  </Text>
                </View>
                <Image
                  style={[styles.arrowLeftIcon1, styles.arrowIconLayout]}
                  resizeMode="cover"
                  source={require('../../assets/images/arrowleft.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={[styles.approvedParent7, styles.approvedParentLayout]}>
              <Text style={styles.approvedTypo}>approved</Text>
              <View style={[styles.frameChild6, styles.frameChildLayout]} />
            </View>
          </View>
          <View style={styles.frameView}>
            <TouchableOpacity>
              <View style={styles.frameContainer}>
                <View style={styles.component47Parent}>
                  <Image
                    style={styles.component47Icon}
                    resizeMode="cover"
                    source={require('../../assets/images/component-473.png')}
                  />
                  <Text
                    style={[
                      styles.personalInformation,
                      styles.requiredStepsText,
                    ]}>
                    address and routes
                  </Text>
                </View>
                <Image
                  style={[styles.arrowLeftIcon2, styles.arrowIconLayout]}
                  resizeMode="cover"
                  source={require('../../assets/images/arrowleft.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={[styles.approvedParent7, styles.approvedParentLayout]}>
              <Text style={styles.approvedTypo}>approved</Text>
              <View style={[styles.frameChild6, styles.frameChildLayout]} />
            </View>
          </View>
          <View style={styles.frameView}>
            <TouchableOpacity>
              <View style={styles.frameContainer}>
                <View style={styles.component47Parent}>
                  <Image
                    style={styles.component47Icon}
                    resizeMode="cover"
                    source={require('../../assets/images/component-473.png')}
                  />
                  <Text
                    style={[
                      styles.personalInformation,
                      styles.requiredStepsText,
                    ]}>
                    driving license
                  </Text>
                </View>
                <Image
                  style={[styles.arrowLeftIcon3, styles.arrowIconLayout]}
                  resizeMode="cover"
                  source={require('../../assets/images/arrowleft.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={[styles.approvedParent7, styles.approvedParentLayout]}>
              <Text style={styles.approvedTypo}>approved</Text>
              <View style={[styles.frameChild6, styles.frameChildLayout]} />
            </View>
          </View>
          <View style={styles.frameView}>
            <TouchableOpacity>
              <View style={styles.frameContainer}>
                <View style={styles.component47Parent}>
                  <Image
                    style={styles.component47Icon}
                    resizeMode="cover"
                    source={require('../../assets/images/component-473.png')}
                  />
                  <Text
                    style={[
                      styles.personalInformation,
                      styles.requiredStepsText,
                    ]}>
                    NIC Information
                  </Text>
                </View>
                <Image
                  style={[styles.arrowLeftIcon4, styles.arrowIconLayout]}
                  resizeMode="cover"
                  source={require('../../assets/images/arrowleft.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={[styles.approvedParent7, styles.approvedParentLayout]}>
              <Text style={styles.approvedTypo}>approved</Text>
              <View style={[styles.frameChild6, styles.frameChildLayout]} />
            </View>
          </View>
          <View style={styles.frameView}>
            <TouchableOpacity>
              <View style={styles.frameContainer}>
                <View style={styles.component47Parent}>
                  <Image
                    style={styles.component47Icon}
                    resizeMode="cover"
                    source={require('../../assets/images/component-473.png')}
                  />
                  <Text
                    style={[
                      styles.personalInformation,
                      styles.requiredStepsText,
                    ]}>
                    Vehicle image
                  </Text>
                </View>
                <Image
                  style={[styles.arrowLeftIcon5, styles.arrowIconLayout]}
                  resizeMode="cover"
                  source={require('../../assets/images/arrowleft.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={[styles.approvedParent7, styles.approvedParentLayout]}>
              <Text style={styles.approvedTypo}>approved</Text>
              <View style={[styles.frameChild6, styles.frameChildLayout]} />
            </View>
          </View>
          <View style={styles.frameView}>
            <TouchableOpacity>
              <View style={styles.frameContainer}>
                <View style={styles.component47Parent}>
                  <Image
                    style={styles.component47Icon}
                    resizeMode="cover"
                    source={require('../../assets/images/component-473.png')}
                  />
                  <Text
                    style={[
                      styles.personalInformation,
                      styles.requiredStepsText,
                    ]}>
                    vehicle registration document
                  </Text>
                </View>
                <Image
                  style={[styles.arrowLeftIcon6, styles.arrowIconLayout]}
                  resizeMode="cover"
                  source={require('../../assets/images/arrowleft.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={[styles.approvedParent7, styles.approvedParentLayout]}>
              <Text style={styles.approvedTypo}>approved</Text>
              <View style={[styles.frameChild6, styles.frameChildLayout]} />
            </View>
          </View>
          <View style={styles.frameView}>
            <TouchableOpacity>
              <View style={styles.frameContainer}>
                <View style={styles.component47Parent}>
                  <Image
                    style={styles.component47Icon}
                    resizeMode="cover"
                    source={require('../../assets/images/component-473.png')}
                  />
                  <Text
                    style={[
                      styles.personalInformation,
                      styles.requiredStepsText,
                    ]}>
                    vehicle insurance
                  </Text>
                </View>
                <Image
                  style={[styles.arrowLeftIcon7, styles.arrowIconLayout]}
                  resizeMode="cover"
                  source={require('../../assets/images/arrowleft.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={[styles.approvedParent7, styles.approvedParentLayout]}>
              <Text style={styles.approvedTypo}>approved</Text>
              <View style={[styles.frameChild6, styles.frameChildLayout]} />
            </View>
          </View>
          <View style={styles.frameView}>
            <TouchableOpacity>
              <View style={styles.frameContainer}>
                <View style={styles.component47Parent}>
                  <Image
                    style={styles.component47Icon}
                    resizeMode="cover"
                    source={require('../../assets/images/component-473.png')}
                  />
                  <Text
                    style={[
                      styles.personalInformation,
                      styles.requiredStepsText,
                    ]}>
                    billing proof (optional)
                  </Text>
                </View>
                <Image
                  style={[styles.arrowLeftIcon8, styles.arrowIconLayout]}
                  resizeMode="cover"
                  source={require('../../assets/images/arrowleft.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={[styles.approvedParent7, styles.approvedParentLayout]}>
              <Text style={styles.approvedTypo}>approved</Text>
              <View style={[styles.frameChild6, styles.frameChildLayout]} />
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <LinearGradient
            style={[styles.button, styles.buttonPosition]}
            locations={[0, 1]}
            colors={['#fb4e02', '#c8102e']}
            useAngle={true}
            angle={-90}>
            <Text style={[styles.getStarted, styles.submittedTypo]}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    left: '50%',
    position: 'absolute',
  },
  requiredStepsText: {
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#2e2e2e',
  },
  arrowIconLayout: {
    height: 18,
    width: 18,
  },
  approvedParentLayout: {
    width: 264,
    justifyContent: 'center',
  },
  approvedTypo: {
    textAlign: 'left',
    color: '#716a6a',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textTransform: 'capitalize',
  },
  instancePosition: {
    left: 45,
    position: 'absolute',
  },
  submittedTypo: {
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Bold',
  },
  frameChildLayout: {
    height: 1,
    width: 289,
    borderTopWidth: 1,
    borderColor: '#dadada',
    borderStyle: 'solid',
  },
  iconly: {
    top: 25,
    left: 25,
    width: 20,
    height: 20,
    position: 'absolute',
  },
  requiredSteps: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  heresWhatYou: {
    marginTop: 15,
    width: 342,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textAlign: 'center',
    color: '#2e2e2e',
    textTransform: 'capitalize',
  },
  requiredStepsParent: {
    alignItems: 'center',
  },
  component47Icon: {
    width: 22,
    height: 22,
    overflow: 'hidden',
  },
  personalInformation: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    marginLeft: 15,
  },
  component47Parent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowLeftIcon: {
    marginLeft: 92,
  },
  frameContainer: {
    paddingRight: 31,
    flexDirection: 'row',
    width: 342,
    alignItems: 'center',
  },
  approved: {
    display: 'none',
  },
  approvedParent: {
    paddingHorizontal: 0,
    paddingVertical: 11,
    justifyContent: 'center',
  },
  arrowLeftIcon1: {
    marginLeft: 103,
  },
  frameView: {
    marginTop: 20,
    alignItems: 'center',
  },
  arrowLeftIcon2: {
    marginLeft: 99,
  },
  arrowLeftIcon3: {
    marginLeft: 140,
  },
  arrowLeftIcon4: {
    marginLeft: 134,
  },
  arrowLeftIcon5: {
    marginLeft: 145,
  },
  arrowLeftIcon6: {
    marginLeft: 11,
  },
  arrowLeftIcon7: {
    marginLeft: 117,
  },
  arrowLeftIcon8: {
    marginLeft: 78,
  },
  instanceParent: {
    marginTop: 50,
  },
  frameParent: {
    marginLeft: -171,
    top: 60,
  },
  submitted: {
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    color: '#2e2e2e',
    fontSize: 18,
  },
  submittedWrapper: {
    top: 835,
    height: 41,
    flexDirection: 'row',
  },
  frameChild6: {
    marginTop: 11,
  },
  approvedParent7: {
    justifyContent: 'center',
  },
  instanceGroup: {
    top: 887,
  },
  instanceContainer: {
    top: 1190,
  },
  getStarted: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    justifyContent: 'center',
  },
  button: {
    marginLeft: -133,
    top: 1925,
    borderRadius: 15,
    width: 252,
    height: 40,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  gettingStarted04: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 2000,
    overflow: 'hidden',
  },
});

export default GettingStarted3;
