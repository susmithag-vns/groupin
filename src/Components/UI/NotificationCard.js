import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

class NotificationCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switchValue: '',
            valueSwitch: ''
        }
    }
    toggleSwitch = (value) => {
        this.setState({ switchValue: value });
        return this.state.switchValue ? null : null;
    }
    switchToggle = (value) => {
        this.setState({ valueSwitch: value });
        return this.state.valueSwitch ? null : null;
    }
    render() {
        return (
            <View>
                <View style={{ marginTop: '4%' }}>
                    <Text style={{ fontFamily: 'silka-bold-webfont' }}>Notification tone</Text>
                    <Text>Lorem ipsum</Text>
                </View>
                <View style={{ borderBottomWidth: 0.2, borderBottomColor: 'black', marginTop: '3%' }} />
                <View style={{ flexDirection: 'row', marginTop: '3%' }}>
                    <View style={{ marginTop: '2%' }}>
                        <Text style={{ fontFamily: 'silka-bold-webfont' }}>Vibrate</Text>
                        {this.state.switchValue ?
                            <Text>Yes</Text>
                            :
                            <Text>No</Text>
                        }
                    </View>
                    <View style={styles.toggleview}>
                        <Switchtoggle
                            toggleSwitch={this.toggleSwitch}
                            switchValue={this.state.switchValue}
                        />
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.2, borderBottomColor: 'black', marginTop: '3%' }} />
                <View style={{ flexDirection: 'row', marginTop: '3%' }}>
                    <View style={{ marginTop: '2%' }}>
                        <Text style={{ fontFamily: 'silka-bold-webfont' }}>Pop up Notifications</Text>
                        {this.state.valueSwitch ?
                            <Text>Yes</Text>
                            :
                            <Text>No</Text>
                        }
                    </View>
                    <View style={styles.toggleview}>
                        <Switchtoggle
                            toggleSwitch={this.switchToggle}
                            switchValue={this.state.valueSwitch}
                        />
                    </View>
                </View>
                <View style={{ borderBottomWidth: 0.2, borderBottomColor: 'black', marginTop: '3%' }} />

                <View style={{ marginTop: '4%' }}>
                    <Text style={{ fontFamily: 'silka-bold-webfont' }}>High Priority Notifications</Text>
                    <Text>Show Preview on top of the screen</Text>
                </View>
            </View>

        );
    }
}

export default NotificationCard;
const styles = StyleSheet.create({
    toggleview: { marginLeft: 'auto', justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center', },

})