import React, { useState, useEffect, useRef, Component } from 'react'
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, SafeAreaView, Alert, ImageBackground, Image, ToastAndroid, Keyboard } from 'react-native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import CodeInput from 'react-native-confirmation-code-input';
import { render } from 'react-dom';
import { Chat } from '@material-ui/icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CssStyles from '../CssStyles/CssStyles';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import OTPVerification from './UI/OTPVerification';
import TextStyles from '../CssStyles/TextStyles';

// const CELL_COUNT = 5;
export default class InputOtpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: this.props.route.params,
      otpvalue: '1234',
    
    }
  }
  componentDidMount() {
    console.log(this.state.navigation)
  }

  // Dialog box code starts
  _onvalidatecode(isvalid) {
    this.setState({ otpvalue: isvalid })
  }
  validinput(otpval,) {
    // this.refs.codevalue.clear()
    if (otpval == "1234" || otpval == 1234) {
      Keyboard.dismiss()
      {
        this.state.navigation.sign ?

          this.props.navigation.navigate("SignUpScreen")
          :
          this.props.navigation.navigate("GroupInHome")
      }

    }
    else {
      ToastAndroid.show("Enter valid otp 1234", ToastAndroid.SHORT)
      this.setState({ otpval: "" })

    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <ImageBackground style={{ width: wp('100%', 812), height: hp('100%', 812), }}
          resizeMode='stretch'
          source={require('../Images/bg.png')}>
          <ScrollView>
            <View style={{ flexDirection: 'row', marginTop: '3%', marginLeft: '5%', }}>
              <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                <Image source={require('../Images/backarrow.png')} style={{
                  resizeMode: 'contain', width: wp('6%', 812),
                  height: hp('6%', 812),
                }} />
              </TouchableOpacity>
              {/* <View  style={{marginTop:'3%',marginLeft:'auto',marginRight:'5%'}} onPress={() => this.props.navigation.pop()}>
            <Image source={require('../Images/logo.png')} style={{
                resizeMode: 'contain', width: wp('8%',812),
                height: hp('6%',812),
              }} />
              </View> */}
            </View>
            <View style={CssStyles.groupimage}>
              {/* <View style={CssStyles.groupimageview}>
              <Image source={require('../Images/logo.png')} style={CssStyles.loginlogostyle} />
            </View> */}
              <View style={styles.welcometext}>
                <Text style={TextStyles.h2whitecenter}>We have sent an OTP on your mobile number</Text>
              </View>
            
              <OTPVerification
                cellCount={4}
                value={this.state.otpvalue}
                onChangeText={(text) => this.setState({ otpvalue: text })}
              />

              
              <View style={styles.subcontainerviewofview1}>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert("Enter 1234")
                  }}
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                >

                  <Text style={TextStyles.h4whitecenter}>RESEND OTP</Text>
                </TouchableOpacity>
              </View>
              <View style={CssStyles.arrowbuttonview}>
                <TouchableOpacity style={CssStyles.arrowbutton} onPress={() => { this.validinput(this.state.otpvalue) }}>
                  {/* <Text style={CssStyles.submittext}>Next</Text> */}
                  <Image source={require('../Images/rightarrow.png')} style={CssStyles.rightarrowstyle} />
                </TouchableOpacity>
              </View>

            </View>

          </ScrollView>
          <View style={{ marginLeft: 'auto', marginRight: '12%', marginBottom: '6%' }}>
            <Image source={require('../Images/logo.png')} style={{
              resizeMode: 'contain', width: wp('11%', 812),
              height: hp('11%', 812),
            }} />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>





    )
  }

};
const styles = StyleSheet.create({
  container: { width: '100%', height: '100%', flex: 1, },
  root: { padding: 20, minHeight: 300 },
  resendtext: { color: '#fff', fontSize: RFValue(20, 812), textAlign: 'center', fontFamily: 'silka-medium-webfont', },
  welcometext: { alignContent: 'center', justifyContent: 'center', alignSelf: 'center', marginLeft: '5%', marginRight: '5%', marginTop: '5%' },
  otptext: { fontSize: RFValue(20, 812), fontFamily: 'silka-medium-webfont', color: '#fff', textAlign: 'center' },
  subcontainerviewofview1: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '5%', },
})