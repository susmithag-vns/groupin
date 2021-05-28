import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Animated, Alert, ImageBackground, Image, TextInput, ToastAndroid, KeyboardAvoidingView } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CssStyles from '../CssStyles/CssStyles';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Input } from 'react-native-elements';
import TextStyles from '../CssStyles/TextStyles';

export default class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phonenumber: '',
            email: ''
        }
    }
    renderCustomIconA = () => {
        return (
            <Image
                style={{
                    resizeMode: 'contain', width: wp('5%', 812),
                    height: hp('5%', 812),
                }}
                source={require('../Images/mail.png')}
            />

        );
    };
    renderCustomIconB = () => {
        return (
            <View style={{ width: '100%', borderRightWidth: 1, borderRightColor: '#fff', padding: '1%' }}>
                <Text style={{ fontSize: RFValue(18, 812), fontFamily: 'silka-medium-webfont', color: '#fff', textAlign: 'center' }}>+91</Text>
            </View>

        );
    };
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <ImageBackground style={styles.backgroundImage}
                    resizeMode='stretch'
                    source={require('../Images/bg.png')}>
                    <View style={{ flexDirection: 'row', marginTop: '3%', marginLeft: '5%', }}>
                        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                            <Image source={require('../Images/backarrow.png')} style={{
                                resizeMode: 'contain', width: wp('6%', 812),
                                height: hp('6%', 812),
                            }} />
                        </TouchableOpacity>
                        {/* <View style={{ marginTop: '3%', marginLeft: 'auto', marginRight: '5%' }} onPress={() => this.props.navigation.pop()}>
                            <Image source={require('../Images/logo.png')} style={{
                                resizeMode: 'contain', width: wp('8%'),
                                height: hp('6%'),
                            }} />
                        </View> */}
                    </View>
                    <ScrollView style={styles.groupimage}>
                        <View style={styles.groupimageview}>
                            <Text style={styles.h1whitecenterbold}>Create Account</Text>
                        </View>
                        {/* <View style={styles.welcjustycenter, { marginTop: '2%' }}>
                            <Text style={styles.textstylewelscrn}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                        </View> */}
                        <View style={styles.welcjustycenter, { marginTop: '3%', marginLeft: '5%', marginRight: '5%', marginBottom: '3%', }}>
                            <Text style={TextStyles.ptextcenter}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                        </View>
                        {/* <View style={{ flexDirection: 'row', width: '89%', alignContent: 'center', alignItems: 'center', borderBottomColor: '#808080', borderBottomWidth: 1,  marginLeft: '5%', marginRight:'5%', marginTop: '3%'}}>
                            <View style={{ width: '10%', }}>
                                <Text style={{ fontSize: RFValue(18, 812), fontFamily: 'silka-medium-webfont', color: '#fff', textAlign: 'center' }}>+91</Text>
                            </View>
                            <View style={{ borderLeftWidth: 1, borderLeftColor: '#fff', height:hp(5,812), }} />
                            <View style={{ width: '100%', borderLeftColor: "#fff", marginLeft: '2%', marginTop: '3%' }}>
                                <TextInput
                                    style={{ fontSize: RFValue(18, 812), fontFamily: 'silka-medium-webfont', color: '#fff', }}
                                    placeholderTextColor="#E3E3E3"
                                    placeholder="Phone Number"
                                    keyboardType='numeric'
                                    placeholderTextColor="#AD7ACC"
                                    onChangeText={value => this.setState({ phonenumber: value })}
                                />
                            </View>
                        </View> */}
                        <View style={{ marginLeft: '5%', marginRight: '5%' }}>
                            <Input
                                placeholder="Phone Number"
                                leftIcon={() => this.renderCustomIconB()}
                                style={{ width: '100%', borderLeftColor: "#fff", }}
                                onChangeText={value => this.setState({ email: value })}
                                inputStyle={TextStyles.phoneinputtextstyle}
                                inputContainerStyle={{ color: '#fff', borderColor: '#808080', }}
                                placeholderTextColor="#AD7ACC"
                            />
                        </View>
                        <View style={{ marginLeft: '5%', marginRight: '5%', }}>
                            <Input
                                placeholder="Email"
                                leftIcon={() => this.renderCustomIconA()}
                                style={{ width: '100%', borderLeftColor: "#fff", }}
                                onChangeText={value => this.setState({ email: value })}
                                inputStyle={TextStyles.inputtextstyle}
                                inputContainerStyle={{ color: '#fff', borderColor: '#808080', }}
                                placeholderTextColor="#AD7ACC"
                            />
                        </View>

                        <View style={CssStyles.arrowbuttonview}>
                            <TouchableOpacity style={CssStyles.arrowbutton} onPress={() => {
                                this.props.navigation.navigate("InputOtp", {
                                    sign: "signup"
                                });
                            }}>
                                {/* <Text style={CssStyles.submittext}>Next</Text> */}
                                <Image source={require('../Images/rightarrow.png')} style={CssStyles.rightarrowstyle} />
                            </TouchableOpacity>

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
    container: { flex: 1, width: '100%', height: '100%', alignItems: 'center', },
    backgroundImage: {
        flex: 1,
        width: '100%', height: '100%'
    },
    welcjustycenter: { alignContent: 'center', alignItems: 'center', justifyContent: 'center', },
    textstylewelscrn: { fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont', color: '#D9C9E4', textAlign: 'center', },
    groupimage: { width: '100%', height: '100%', marginTop: '10%' },
    groupimageview: { alignContent: 'center', alignItems: 'center', justifyContent: 'center', },
    textstyle: { fontSize: RFValue(20, 812), fontFamily: 'silka-medium-webfont', color: '#fff', textAlign: 'center' },
    authtextstyle: { fontSize: RFValue(18, 812), fontFamily: 'silka-medium-webfont', color: '#fff' },
    h1whitecenterbold:{ fontSize: RFValue(30, 812), fontFamily: 'silka-medium-webfont', color: '#fff',textAlign:'center', },

})