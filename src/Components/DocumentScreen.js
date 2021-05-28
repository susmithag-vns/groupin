import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, KeyboardAvoidingView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from 'react-native-gesture-handler';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import TextStyles from '../CssStyles/TextStyles'
import CssStyles from '../CssStyles/CssStyles';


const datareference = []

class DocumentScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customStyleIndex: 0,
        }
    }
    handleCustomIndexSelect = (index) => {
        this.setState(prevState => ({ ...prevState, customStyleIndex: index }))
    }
    render() {
        const { customStyleIndex, count_val } = this.state;
        return (
            <KeyboardAvoidingView style={styles.maincontainer} >
                <View style={{ height: hp('8%', 812), backgroundColor: '#792BA9', }}>
                    {/* <ImageBackground style={CssStyles.backgroundImage, {
                height: hp('10%')
            }}
                resizeMode='cover'
                source={require('../Images/bg.png')}> */}
                    <View style={styles.mainfirstview}>
                        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                            <Image source={require('../Images/backarrow.png')} style={{
                                resizeMode: 'contain', width: wp('8%'),
                                height: hp('8%'),
                            }} />
                        </TouchableOpacity>
                        <View style={styles.groupinviewstyle}>
                            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'flex-start', margin: '2%', marginBottom: '5%' }}>
                                <Text style={{ color: 'white', fontSize: RFValue(18, 812), fontFamily: 'silka-medium-webfont' }}>Name</Text>
                                {/* <Text style={{ color: 'white', fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont' }}>35 contacts uploaded</Text> */}
                            </View>
                        </View>
                        {/* <Text style={{fontSize: RFValue(16, 812), fontFamily: 'silka-bold-webfont', color: '#fff', textAlign: 'center',}}>Name</Text> */}
                        <View style={styles.groupinview}>
                        </View>
                        {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}> */}


                        <TouchableOpacity style={styles.moreview}>
                            <Image style={{
                                resizeMode: 'contain', width: wp('3%', 812),
                                height: hp('3%', 812),
                            }} source={require('../Images/more3x.png')} />
                        </TouchableOpacity>
                        {/* </View> */}

                    </View>
                </View>
                <SegmentedControlTab
                    values={['Photos', 'Videos', 'Docs', 'Links']}
                    selectedIndex={customStyleIndex}
                    // badges={count_val}
                    // tabBadgeStyle={styles.tabBadgeStyle}
                    // tabBadgeContainerStyle={styles.tabBadgeContainerStyle}
                    // activeTabBadgeContainerStyle={styles.activeTabBadgeContainerStyle}
                    // activeTabBadgeStyle={styles.activeTabBadgeStyle}
                    onTabPress={this.handleCustomIndexSelect}
                    // borderRadius={50}
                    tabsContainerStyle={styles.tabsContainerStyle}
                    tabStyle={styles.tabStyle}
                    activeTabStyle={styles.activeTabStyle}
                    tabTextStyle={TextStyles.tabTextStyle}
                    activeTabTextStyle={TextStyles.activeTabTextStyle}
                />
                {datareference.length === 0 && customStyleIndex === 0 ?

                    <View style={{ backgroundColor: 'rgba(250, 244, 255, 1)' }}>
                        <View>
                            <Text style={{
                                fontSize: RFValue(16, 812),
                                color: '#A47CC3',
                                fontFamily: 'silka-medium-webfont', margin: '5%'
                            }}>Today</Text>
                            <View style={{ flexDirection: 'row', marginLeft: '4%' }}>
                                <View style={{
                                    backgroundColor: '#fff', width: '40%', height: hp('15%', 812), borderRadius: hp('2%', 812),
                                    borderRadius: 20, shadowOffset: { width: 10, height: 10, },
                                    shadowColor: 'black', shadowOpacity: 1.0, width: '30%'
                                }}>
                                    <Image
                                        resizeMode='center'
                                        style={{
                                            resizeMode: 'contain', width: wp('25%', 812),
                                            height: hp('9%', 812), margin: '8%',
                                        }} source={require('../Images/group3x.png')} />
                                </View>
                                <View style={{
                                    backgroundColor: '#fff', width: '40%', height: hp('15%', 812), borderRadius: hp('2%', 812),
                                    borderRadius: 20, shadowOffset: { width: 10, height: 10, }, marginLeft: '2%',
                                    shadowColor: 'black', shadowOpacity: 1.0, width: '30%'
                                }}>
                                    <Image
                                        resizeMode='center'
                                        style={{
                                            resizeMode: 'contain', width: wp('25%', 812),
                                            height: hp('9%', 812), marginTop: '15%'
                                        }} source={require('../Images/userimage.png')} />
                                </View>
                            </View>

                        </View>
                        <View>
                            <Text style={{
                                fontSize: RFValue(16, 812),
                                color: '#A47CC3',
                                fontFamily: 'silka-medium-webfont', margin: '5%'
                            }}>Yesterday</Text>
                            <View style={{ flexDirection: 'row', marginLeft: '4%' }}>
                                <View style={{
                                    backgroundColor: '#fff', width: '40%', height: hp('15%', 812), borderRadius: hp('2%', 812),
                                    borderRadius: 20, shadowOffset: { width: 10, height: 10, },
                                    shadowColor: 'black', shadowOpacity: 1.0, width: '30%'
                                }}>
                                    <Image
                                        resizeMode='center'
                                        style={{
                                            resizeMode: 'contain', width: wp('25%', 812),
                                            height: hp('9%', 812), marginTop: '15%'
                                        }} source={require('../Images/user3icon.png')} />
                                </View>
                                <View style={{
                                    backgroundColor: '#fff', width: '40%', height: hp('15%', 812), borderRadius: hp('2%', 812),
                                    borderRadius: 20, shadowOffset: { width: 10, height: 10, }, marginLeft: '2%',
                                    shadowColor: 'black', shadowOpacity: 1.0, width: '30%',borderColor:'black'
                                }}>
                                    <Image
                                        resizeMode='center'
                                        style={{
                                            resizeMode: 'contain', width: wp('25%', 812),
                                            height: hp('9%', 812), marginTop: '10%'
                                        }} source={require('../Images/user2icon.png')} />
                                </View>
                            </View>

                        </View>
                    </View>
                    : null}

            </KeyboardAvoidingView>


        );
    }
}

export default DocumentScreen;
const styles = StyleSheet.create({
    maincontainer: { flex: 1, backgroundColor: '#FAF4FF', },
    mainfirstview: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '3%', width: '100%' },
    rounrectview: { flex: 1, alignItems: 'flex-start', alignContent: 'center', justifyContent: 'center', },
    roundrecimagestyles: { resizeMode: 'contain', width: wp('7%', 812), height: hp('7%', 812) },
    groupinview: { flex: 2, alignItems: 'center', alignContent: 'center', justifyContent: 'center', width: '100%', },
    moreview: { flex: 1, alignItems: 'center', justifyContent: 'center', marginRight: '3%' },
    searchview: { flex: 1, alignItems: 'flex-start', justifyContent: 'center', },
    groupinviewstyle: {
        flex: 4, alignItems: 'flex-start', alignContent: 'center', justifyContent: 'center',
    },
    tabsContainerStyle: { backgroundColor: '#792BA9', borderColor: '#792BA9', height: hp('7%', 812), },
    tabStyle: { backgroundColor: '#792BA9', justifyContent: 'center', alignItems: 'center', borderColor: '#792BA9', },
    activeTabStyle: { backgroundColor: '#792BA9', borderBottomWidth: 5, borderBottomColor: '#fff' },
    tabTextStyle: { color: '#A47CC3', fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont', width: 'auto', justifyContent: 'center', alignItems: 'center', },
    activeTabTextStyle: { color: '#fff', width: 'auto', fontSize: RFValue(20, 812), fontFamily: 'silka-bold-webfont', justifyContent: 'center', alignItems: 'center', },


    activeTabBadgeContainerStyle: { backgroundColor: '#fff', borderEndWidth: 3, borderStartWidth: 3, borderEndColor: '#4429B5', borderStartColor: '#4429B5' },
    tabBadgeContainerStyle: { backgroundColor: '#2D1786', borderEndWidth: 3, borderStartWidth: 3, borderEndColor: '#a9a9a9', borderStartColor: '#a9a9a9' },
    activeTabBadgeStyle: { color: '#2D1786', justifyContent: 'center', alignItems: 'center', fontSize: RFValue(18, 812), marginTop: '8%', fontFamily: 'silka-bold-webfont', },
    tabBadgeStyle: { color: '#a9a9a9', fontSize: RFValue(18, 812), paddingRight: 3, justifyContent: 'center', fontFamily: 'silka-bold-webfont', alignItems: 'center', marginTop: '8%', },

})