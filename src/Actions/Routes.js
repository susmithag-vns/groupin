// import React, { Component } from 'react';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
// import AuthenticationScreen from './AuthenticationScreen'
// import HomeScreen from './HomeScreen'
// import InputOtpScreen from './InputOtpScreen'


// // const Stack = createStackNavigator();

// // export default function Routes(){
// //     return(
// //         <NavigationContainer>
// //             <Stack.Navigator initialRouteName="AuthenticationScreen">
// //                 <Stack.Screen name="Authentication" component={AuthenticationScreen}/>
// //                 <Stack.Screen name="InputOtp" component={InputOtpScreen}/>
// //                 <Stack.Screen name="Home" component={HomeScreen}/>
// //             </Stack.Navigator>
// //         </NavigationContainer>
// //     )
// // }

// const AppSwitchNavigator = createStackNavigator(
//     {
//         Authentication: { screen: AuthenticationScreen },
//         InputOtp: { screen: InputOtpScreen },
//         Home: { screen: HomeScreen }
//   },
//     {
//       initialRouteName: 'AuthenticationScreen',
//       headerMode: 'none'
//     }    
//   );
//  class Routes extends Component {

//     render() {
//         return (
//             <AppSwitchNavigator />
//         );
//     }

// }

// export default createAppContainer(Routes);


import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationScreen from '../Components/AuthenticationScreen'
import InputOtpScreen from '../Components/InputOtpScreen'
import AdminChatScreen from '../Components/AdminChatScreen';
import SettingsScreen from '../Components/Menu/SettingsScreen';
import GroupInHome from '../Components/GroupInHome';
import CreateGroup from '../Components/FabGroup/CreateGroup';
import SearchScreen from '../Components/SearchScreen';
import GeneralChatScreen from '../Components/GeneralChatScreen';
import CreateGroupScreen from '../Components/FabGroup/createGroupScreen';
import SignUpScreen from '../Components/SignUpScreen';
import WelcomeScreen from '../Components/WelcomeScreen';
import SignInScreen from '../Components/SignInScreen';
import GroupInfoScreen from '../Components/GroupInfoScreen';
import DetailsScreen from '../Components/DetailsScreen'
import Switchtoggle from '../Components/UI/Switchtoggle'
import OTPVerification from '../Components/UI/OTPVerification'
import BroadcastGroupinfoScreen from '../Components/BroadcastGroupinfoScreen'
import BroadcastChatScreen from '../Components/BroadcastChatScreen'
import DocumentScreen from '../Components/DocumentScreen'
import NotificationScreen from '../Components/Menu/NotificationScreen';


const Stack = createStackNavigator();

class Routes extends React.Component {
  // constructor(props){
  //     super(props);
  //       this.state={
  //     };
  //   }
  // componentDidMount() {
  //   // do stuff while splash screen is shown
  //     // After having done stuff (such as async tasks) hide the splash screen
  //     SplashScreen.hide();
  // }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
          <Stack.Screen name="Authentication" component={AuthenticationScreen} />
          <Stack.Screen name="InputOtp" component={InputOtpScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="AdminChatScreen" component={AdminChatScreen} />
          <Stack.Screen name ="GroupInHome" component={GroupInHome}/>
          <Stack.Screen name="CreateGroup" component={CreateGroup}/>
          <Stack.Screen name="Search" component={SearchScreen}/>
          <Stack.Screen name="GeneralChatScreen" component ={GeneralChatScreen}/>
          <Stack.Screen name="CreateGroupScreen" component ={CreateGroupScreen}/>
          <Stack.Screen name="SignUpScreen" component ={SignUpScreen}/>
          <Stack.Screen name="SignInScreen" component ={SignInScreen}/>
          <Stack.Screen name="GroupInfoScreen" component ={GroupInfoScreen}/>
          <Stack.Screen name="DetailsScreen" component ={DetailsScreen}/>
          <Stack.Screen name="Switchtoggle" component ={Switchtoggle}/>
          <Stack.Screen name="OTPVerification" component ={OTPVerification}/>
          <Stack.Screen name="BroadcastChatScreen" component ={BroadcastChatScreen}/>
          <Stack.Screen name="BroadcastGroupinfo" component ={BroadcastGroupinfoScreen}/>
          <Stack.Screen name="DocumentScreen" component ={DocumentScreen}/>
          <Stack.Screen name="NotificationScreen" component ={NotificationScreen}/>


          

         </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Routes;