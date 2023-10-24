import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CenteredImage from './screens/Onboarding/Onboarding5';
import Onboard6 from './screens/Onboarding/Onboarding6';
import Onboard7 from './screens/Onboarding/Onboarding7';
import Onboard8 from './screens/Onboarding/Onboarding8';
import LoginScreen from './screens/LogInScreens/LogIn';
import OTPScreen from './screens/LogInScreens/OTPScreen';
import ForgotpasswordScreen from './screens/ForgotPassword/ForgotPassword';

import CreateAcc1 from './screens/SignupScreens/CreateAcc1';
import CreateAcc2 from './screens/SignupScreens/CreateAcc2';
import CreateAcc3 from './screens/SignupScreens/CreateAcc3';
import ScheduleNoUpcomingSchedule from './screens/ProfileSection/ScheduleNoUpcomingSchedule';
import Wallet1 from './screens/ProfileSection/Wallet1';
import WalletAddCard from './screens/ProfileSection/WalletAddCard';
import GettingStarted1 from './screens/GettingStartedScreens/GettingStarted1';
import GettingStarted2 from './screens/GettingStartedScreens/GettingStarted2';
import GettingStarted3 from './screens/GettingStartedScreens/GettingStarted3';
import GettingStarted4 from './screens/GettingStartedScreens/GettingStarted4';
import Page1 from './screens/ForgotPassword/page1';
import Page2 from './screens/ForgotPassword/page2';
import Page3 from './screens/ForgotPassword/page3';
import PersonalInfo from './screens/GettingStartedScreens/personalInformation';
import VehicleInformation from './screens/GettingStartedScreens/Vehicle_information';
import AddressNRoutesD from './screens/GettingStartedScreens/AddressNRoutesD';
import ReviewScreen from './screens/GettingStartedScreens/ReviewScreen';
import DrivingLicenseImageScreen from './screens/GettingStartedScreens/DrivingLicenseImageScreen';
import NICImageScreen from './screens/GettingStartedScreens/NICImageScreen';
import VehicleImageScreen from './screens/GettingStartedScreens/VehicleImageScreen';
import VehicleInsuranceScreen from './screens/GettingStartedScreens/VehicleInsuaranceScreen';
import VehicleRegDocumentScreen from './screens/GettingStartedScreens/VehicleRegistrationDocumentScreen';
import BillingDocumentScreen from './screens/GettingStartedScreens/BillingDocumentScreen';
import Marketplace1 from './screens/MarketPlace/Marketplace1';
import Marketplace2 from './screens/MarketPlace/Marketplace2';
import AllGoodScreen from './screens/MarketPlace/AllGoodScreen';
import CampaignReviewScreen from './screens/MarketPlace/CampaignReviewScreen';
import CampaignVehicleImageScreen from './screens/MarketPlace/CampaignVehicleImageScreen';
import CongratulationScreen from './screens/MarketPlace/CongratsScreen';
import WrappingAppointment1 from './screens/MarketPlace/WrappingAppointment1';
import BasicInfoScreen from './screens/ProfileSection/BasicInforScreen';
import ChangePasswordScreen from './screens/ProfileSection/ChangePasswordScreen';
import DeleteAccountScreen from './screens/ProfileSection/DeleteAccScreen';
import ProfileScreen from './screens/ProfileSection/Profile';
import UpdateEmailScreen from './screens/ProfileSection/UpdateEmail';
import UpdatePhoneNumberScreen from './screens/ProfileSection/UpdatePhoneNumber';

import AboutUs from './screens/ProfileSection/AboutUs';
import AddressNRoutes from './screens/ProfileSection/AddressNRoutes';
import Help from './screens/ProfileSection/Help';
import InsuranceTerm from './screens/ProfileSection/InsuranceTerm';
import Language from './screens/ProfileSection/Language';
import Message from './screens/ProfileSection/Message';
import Message2 from './screens/ProfileSection/Message2';
import Message3 from './screens/ProfileSection/Message3';
import VehicleRegistration from './screens/ProfileSection/VehicleRegistration';
import VehicleUpdate from './screens/ProfileSection/VehicleUpdate';

import Activity1 from './screens/ActivitySection/Activity1';
import Activity2 from './screens/ActivitySection/Activity2';
import Activity3 from './screens/ActivitySection/Activity3';

import Drive from './screens/Drive/Drive';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CenteredImage"
        component={CenteredImage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Page1"
        component={Page1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="page2"
        component={Page2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="page3"
        component={Page3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboard6"
        component={Onboard6}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PersonalInfo"
        component={PersonalInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboard7"
        component={Onboard7}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboard8"
        component={Onboard8}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotpasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateAcc1"
        component={CreateAcc1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateAcc2"
        component={CreateAcc2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateAcc3"
        component={CreateAcc3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GettingStarted1"
        component={GettingStarted1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GettingStarted2"
        component={GettingStarted2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GettingStarted3"
        component={GettingStarted3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GettingStarted4"
        component={GettingStarted4}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VehicleInformation"
        component={VehicleInformation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddressNRoutesD"
        component={AddressNRoutesD}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReviewScreen"
        component={ReviewScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DrivingLicenseImageScreen"
        component={DrivingLicenseImageScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NICImageScreen"
        component={NICImageScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VehicleImageScreen"
        component={VehicleImageScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VehicleRegDocumentScreen"
        component={VehicleRegDocumentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VehicleInsuaranceScreen"
        component={VehicleInsuranceScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BillingDocumentScreen"
        component={BillingDocumentScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Marketplace1"
        component={Marketplace1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Marketplace2"
        component={Marketplace2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CongratulationScreen"
        component={CongratulationScreen}
        options={{headerShown: false}} // Hide header
      />
      <Stack.Screen
        name="WrappingAppointment1"
        component={WrappingAppointment1}
        options={{headerShown: false}} // Hide header
      />
      <Stack.Screen
        name="CampaignVehicleImageScreen"
        component={CampaignVehicleImageScreen}
        options={{headerShown: false}} // Hide header
      />
      <Stack.Screen
        name="CampaignReviewScreen"
        component={CampaignReviewScreen}
        options={{headerShown: false}} // Hide header
      />
      <Stack.Screen
        name="AllGoodScreen"
        component={AllGoodScreen}
        options={{headerShown: false}} // Hide header
      />

      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="AddressNRoutes"
        component={AddressNRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Help"
        component={Help}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InsuranceTerm"
        component={InsuranceTerm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Message"
        component={Message}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Message2"
        component={Message2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Message3"
        component={Message3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VehicleRegistration"
        component={VehicleRegistration}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VehicleUpdate"
        component={VehicleUpdate}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BasicInfoScreen"
        component={BasicInfoScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateEmailScreen"
        component={UpdateEmailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdatePhoneNumberScreen"
        component={UpdatePhoneNumberScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DeleteAccountScreen"
        component={DeleteAccountScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ScheduleNoUpcomingSchedule"
        component={ScheduleNoUpcomingSchedule}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Wallet1"
        component={Wallet1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WalletAddCard"
        component={WalletAddCard}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Activity1"
        component={Activity1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Activity2"
        component={Activity2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Activity3"
        component={Activity3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Drive"
        component={Drive}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
