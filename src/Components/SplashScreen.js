import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import CssStyles from '../CssStyles/CssStyles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

class SplashScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImageStyle,{ width: '100%', height: '100%',alignContent: 'center', alignItems: 'center', justifyContent: 'center' ,}}
                    resizeMode='stretch'
                    source={require('../Images/bg.png')}>
                        <View style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            justifyContent: 'center',
                        }}>
                            <Image source={require('../Images/logo.png')} style={CssStyles.logostyle} resizeMode="contain" />
                        </View>
                        <View style={CssStyles.splashvnsview}>
                            <Text style={CssStyles.poweredbytext}>Powered By</Text>
                            <Image source={require('../Images/vnslogo.png')} style={CssStyles.vnsimagestyles} resizeMode="contain" />
                        </View>
                 
                </ImageBackground>
            </View>

        );
    }
}

export default SplashScreen;
const styles = StyleSheet.create({
    container: { width: '100%', height: '100%',flex:1 ,alignContent: 'center', alignItems: 'center', justifyContent: 'center' ,},
    backgroundImageStyle: {
        flex: 1,
        resizeMode: 'cover',
    },
  
})