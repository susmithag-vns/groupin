import React from 'react'
import { Component } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, ImageBackground, Image, PixelRatio, TextInput, Alert ,Modal,Pressable} from 'react-native';
import CssStyles from '../CssStyles/CssStyles'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TextStyles from '../CssStyles/TextStyles';


class GeneralChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: this.props.route.params,
            message_name: "",

        }
    }
    componentDidMount() {
        console.log(this.state.navigation)
    }
    messageChange(event) {
        if (event !== null && event !== "" && event.length > 0) {
            //   this.SearchData(event);
            console.log("event", event)
        }
    }
    showmenufn(value) {
        this.setState({ showmenu: value })
    }
    showexitgroupfn(value) {
        this.setState({ exitgroupmenu: value })
    }
    showattachdocfn(value) {
        this.setState({ attachdocmenu: value })
    }

    render() {
        return (
            <View style={styles.maincontainer}>
                <View style={{ height: hp('8%'), backgroundColor: '#792BA9', }}>
                    {/* <ImageBackground style={CssStyles.backgroundImage, { height: hp('12%') }}
                    source={require('../Images/bg.png')}> */}
                    <View style={styles.mainfirstview}>

                        <TouchableOpacity style={styles.rounrectview} onPress={() => this.props.navigation.pop()}>
                            <Image style={styles.roundrecimagestyles} source={require('../Images/back.png')} />
                            <ImageBackground style={styles.ellipsebackground} resizeMode='contain'
                                source={require('../Images/whiteellipse.png')}>
                                <Image style={{
                                    resizeMode: 'contain', width: wp('10%'),
                                    height: hp('6%'),
                                }} source={this.state.navigation.uri} />
                            </ImageBackground>
                        </TouchableOpacity>

                        <View style={styles.groupinview}>

                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', }}
                                onPress={() => {
                                    this.props.navigation.navigate("GroupInfoScreen", {
                                        itemId: this.state.navigation.itemId,
                                        tittle: this.state.navigation.tittle,
                                        grouptext: this.state.navigation.grouptext,
                                        otherParam: 'true',
                                        uri: this.state.navigation.uri,
                                        admin: this.state.navigation.admin
                                    });
                                }}
                            >
                                <Text
                                    numberOfLines={1} style={{ flex: 0.4, fontSize: RFValue(14, 812), color: '#fff', fontFamily: 'silka-bold-webfont', }}
                                >
                                    {this.state.navigation.tittle}</Text>
                                <Text
                                    numberOfLines={1} style={{ flex: 0.4, fontSize: RFValue(14, 812), color: '#fff', fontFamily: 'silka-medium-webfont', }}
                                >{this.state.navigation.grouptext}</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.searchview} onPress={() => { Alert.alert("Userplus clicked") }}>
                            <Image style={{
                                resizeMode: 'contain', width: wp('6%'),
                                height: hp('7%'),
                            }} source={require('../Images/user-plus.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.moreview} onPress={() => { this.showmenufn(true) }}>
                            <Image style={{
                                resizeMode: 'contain', width: wp('3%'),
                                height: hp('3%'),
                            }} source={require('../Images/more.png')} />
                        </TouchableOpacity>

                    </View>
                    {/* </ImageBackground> */}
                </View>
                <ImageBackground style={CssStyles.backgroundImage}
                    source={require('../Images/bg2.png')}>
                    <ScrollView style={{ flex: 1, }}>
                        <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center', marginTop: '5%', margin: '3%' }}>
                            <View style={{ flex: 1, height: 20, borderRadius: 5, borderWidth: 1, alignContent: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: "#B388CD", borderColor: "#B388CD", }}>
                                <Text style={{ fontSize: RFValue(14, 812), fontFamily: 'silka-medium-webfont', color: '#fff', marginLeft: '2%', marginRight: '2%' }}>Yesterday</Text>
                            </View>
                        </View>
                        {/* Left chat box starts */}
                        <View style={{ alignItems: 'flex-start', margin: '1%', flexDirection: 'row' }}>
                            <View style={styles.talkBubble}>
                                <View style={styles.talkBubbleTriangle} >
                                    {/* <View style={styles.talkBubbleTriangle}/> */}
                                    <Image style={{
                                        width: wp('6%', 812),
                                        height: hp('5%', 812),
                                    }} resizeMode='contain' source={this.state.navigation.uri} />
                                </View>
                                <View style={styles.talkBubbleSquare} >
                                    <View style={{ marginLeft: "2%" }}>
                                        <Text style={{ fontSize: RFValue(14, 812), fontFamily: 'silka-bold-webfont', color: '#8a2be2', margin: '4%', marginBottom: '1%' }}>
                                            Contactname
                                            </Text>
                                        <Text style={{ flex: 3, fontSize: RFValue(14, 812), fontFamily: 'silka-regular-webfont', marginLeft: '4%', }}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', }}>
                                        <View style={{ flex: 1, }}>
                                            <Text style={{ fontSize: RFValue(16, 812), fontFamily: 'silka-regular-webfont', color: '#b2b2b2', marginLeft: '5%', marginTop: '3%' }}>3.32pm</Text>
                                        </View>
                                    </View>
                                </View>


                            </View>
                            <TouchableOpacity style={styles.sendview} onPress={() => { Alert.alert("Send clicked") }}>
                                <Image source={require('../Images/Send.png')} />
                            </TouchableOpacity>

                        </View>
                        {/* Left chat box ends */}
                        {/* Right chat view starts */}
                        <View style={{ alignItems: 'flex-end', margin: '1%', flexDirection: 'row' }}>

                            <View style={styles.RighttalkBubble}>
                                <View style={styles.RighttalkBubbleSquare} >
                                    <View >
                                        <Text style={{ flex: 3, fontSize: RFValue(14, 812), fontFamily: 'silka-regular-webfont', margin: '3%' }}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', }}>
                                        <View style={{ flex: 1, fontSize: RFValue(14, 812), fontFamily: 'silka-medium-webfont', alignItems: 'flex-start', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: RFValue(14, 812), fontFamily: 'silka-regular-webfont', color: '#b2b2b2', marginLeft: '5%' }}>3.32pm</Text>
                                        </View>
                                        <View style={{ flex: 0.2, alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'flex-end', marginRight: '2%', }}>
                                            <View style={{ flexDirection: 'row', width: wp('6%', 812), alignItems: 'center', marginTop: '-2%', }}>
                                                <Image style={{
                                                    resizeMode: 'contain', width: wp('3.5%', 812), position: 'relative', height: hp('3.5%', 812)

                                                }} source={require('../Images/purplecheck3x.png')} />
                                                <Image style={{
                                                    resizeMode: 'contain', width: wp('3.5%', 812), position: 'relative', left: -13, height: hp('3.5%', 812), top: 2


                                                }} source={require('../Images/purplecheck3x.png')} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.RighttalkBubbleTriangle} />

                            </View>
                        </View>
                        {/* Right chat view ends */}
                        {/* Left chat box starts */}
                        <View style={{ flex: 1, alignItems: 'flex-start', margin: '1%', flexDirection: 'row' }}>
                            <View style={styles.talkBubble}>
                                <View style={styles.talkBubbleTriangle} />
                                <View style={styles.talkBubbleSquare} >
                                    <View style={{ marginLeft: "2%" }}>
                                        <Text style={{ fontSize: RFValue(14, 812), fontFamily: 'silka-bold-webfont', fontWeight: 'bold', color: '#90ee90', margin: '4%', marginBottom: '1%' }}>
                                            Contactname
                                            </Text>
                                        <Text style={{ flex: 3, fontSize: RFValue(14, 812), fontFamily: 'silka-regular-webfont', marginLeft: '4%', }}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', }}>
                                        <View style={{ flex: 1, }}>
                                            <Text style={{ fontSize: RFValue(14, 812), fontFamily: 'silka-regular-webfont', color: '#b2b2b2', marginLeft: '5%', marginTop: '3%' }}>3.32pm</Text>
                                        </View>

                                    </View>
                                </View>


                            </View>
                            <TouchableOpacity style={styles.sendview} onPress={() => { Alert.alert("Send clicked") }}>
                                <Image source={require('../Images/Send.png')} />
                            </TouchableOpacity>

                        </View>
                        {/* Left chat box ends */}
                        {/* Left chat box starts */}
                        <View style={{ flex: 1, alignItems: 'flex-start', margin: '1%', flexDirection: 'row' }}>
                            <View style={styles.talkBubble}>
                                <View style={styles.talkBubbleTriangle} />
                                <View style={styles.talkBubbleSquare} >
                                    <View style={{ marginLeft: "2%" }}>
                                        <Text style={{ fontSize: RFValue(14, 812), fontFamily: 'silka-bold-webfont', color: '#a0522d', margin: '4%', marginBottom: '1%' }}>
                                            Contactname
                                            </Text>
                                        <Text style={{ flex: 3, fontSize: RFValue(14, 812), fontFamily: 'silka-regular-webfont', marginLeft: '4%', }}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ fontSize: RFValue(14, 812), fontFamily: 'silka-regular-webfont', color: '#b2b2b2', marginLeft: '5%', marginTop: '3%' }}>3.32pm</Text>
                                        </View>

                                    </View>
                                </View>


                            </View>
                            <TouchableOpacity style={styles.sendview} onPress={() => { Alert.alert("Send clicked") }}>
                                <Image source={require('../Images/Send.png')} />
                            </TouchableOpacity>

                        </View>
                        {/* Left chat box ends */}



                    </ScrollView>


                    <View style={{ backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', bottom: 5, width: '100%', justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: wp('100%', 812), }}>
                        <View style={{ backgroundColor: '#FAF4FF', borderWidth: 0.2, borderRadius: 50, borderColor: "#8E8E93", flexDirection: 'row', marginLeft: '1%', width: wp('85%', 812), }}>
                            <View style={{ flex: 6, width: wp('90%', 812), justifyContent: 'center', }}>
                                <TextInput
                                    style={{ flex: 1, fontSize: RFValue(14, 812), fontFamily: 'silka-medium-webfont', color: '#808080', marginLeft: '2%' }}
                                    placeholder="Enter Text Here ....."
                                    placeholderTextColor="#808080"
                                    underlineColorAndroid="transparent"
                                    onChange={event => {
                                        this.
                                            messageChange(
                                                event.nativeEvent.text
                                            )
                                        this.setState({
                                            message_name: event.nativeEvent.text
                                        });
                                    }}
                                    value={this.state.message_name}
                                />
                            </View>
                            <View style={{ flex: 1, width: wp('5%', 812), justifyContent: 'center', }}>
                                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }} onPress={() => {
                                    // this.documentsync()
                                    this.showattachdocfn(true)
                                }}>
                                    <Image style={{
                                        resizeMode: 'contain', width: wp('5%'),
                                        height: hp('5%'),
                                    }} source={require('../Images/paperclip3x.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, width: wp('5%', 812), justifyContent: 'center', }}>
                                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', }} onPress={() => { Alert.alert("camera clicked") }}>
                                    <Image style={{
                                        resizeMode: 'contain', width: wp('5%'),
                                        height: hp('5%'),
                                    }} source={require('../Images/camera3x.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {this.state.message_name == "" ?
                            <TouchableOpacity style={{ flex: 1, width: wp('12%', 812), marginLeft: 'auto', justifyContent: 'center' }}
                                onPress={() => { Alert.alert("Record audio clicked") }}>
                                <ImageBackground style={styles.ellipsebackground} resizeMode='cover'
                                    source={require('../Images/greenellipse.png')}>

                                    <Image style={{
                                        resizeMode: 'contain', width: wp('4%'),
                                        height: hp('5%', 812),
                                    }} source={require('../Images/RecordAudio3x.png')} />

                                </ImageBackground>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={{ flex: 1, width: wp('12%', 812), marginLeft: 'auto', justifyContent: 'center' }}
                                onPress={() => { Alert.alert("send clicked") }}
                            >
                                <Image style={{
                                    resizeMode: 'cover', width: wp('12%', 812),
                                    height: hp('5%', 812),
                                }} source={require('../Images/Send.png')} />
                            </TouchableOpacity>
                        }

                    </View>
                    {/* Message box ends */}

                    {/* Exit group Model starts */}

                    {/* More Model starts */}

                    {this.state.showmenu == true ?
                        <View>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={this.state.showmenu}
                                onRequestClose={() => {
                                    this.showmenufn(false);
                                }}
                            >
                                <Pressable style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "transperent",
                                    marginTop: '1%',

                                }}
                                    onPress={() => { this.showmenufn(false) }}
                                >
                                    <View style={{
                                        height: 'auto', width: 200, backgroundColor: '#fff',

                                        elevation: 30,
                                        marginLeft: 'auto', padding: '2%',
                                        // borderEndColor: '#69C7FF', 
                                        // borderBottomRightRadius: 30,
                                        // borderEndWidth: 10,
                                        borderStartColor: '#69C7FF',
                                        borderTopStartRadius: 30,
                                        borderStartWidth: 8,
                                        top: 10,
                                        borderBottomStartRadius: 30,
                                        borderBottomWidth: 2,
                                        borderBottomColor: '#69C7FF'
                                    }}>
                                        <Pressable style={({ pressed }) => [
                                            {
                                                backgroundColor: pressed
                                                    ? 'rgb(210, 230, 255)'
                                                    : 'white',
                                                borderRadius: 8,
                                                padding: 6
                                            },

                                        ]}

                                            onPress={() => {
                                                this.props.navigation.navigate("BroadcastGroupinfo", {
                                                    itemId: this.state.navigation.itemId,
                                                    tittle: this.state.navigation.tittle,
                                                    grouptext: this.state.navigation.grouptext,
                                                    otherParam: 'true',
                                                    uri: this.state.navigation.uri,
                                                    admin: this.state.navigation.admin
                                                });
                                                this.showmenufn(false)
                                            }}>
                                            <Text style={TextStyles.h5purple}>Group Info</Text>
                                        </Pressable>
                                        <View>
                                            <Pressable style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : 'white',
                                                    borderRadius: 8,
                                                    padding: 6
                                                },

                                            ]} onPress={() => { Alert.alert("Search"), this.showmenufn(false) }}>
                                                <Text style={TextStyles.h5purple}>Search</Text>
                                            </Pressable>
                                        </View>
                                        <View>
                                            <Pressable style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : 'white',
                                                    borderRadius: 8,
                                                    padding: 6
                                                },

                                            ]} onPress={() => { Alert.alert("Mute Notification"), this.showmenufn(false) }}>
                                                <Text style={TextStyles.h5purple}>Mute Notification</Text>
                                            </Pressable>
                                        </View>
                                        <View>
                                            <Pressable style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : 'white',
                                                    borderRadius: 8,
                                                    padding: 6
                                                },

                                            ]} onPress={() => { Alert.alert("Clear Chat"), this.showmenufn(false) }}>
                                                <Text style={TextStyles.h5purple}>Clear Chat</Text>
                                            </Pressable>
                                        </View>
                                        <View>
                                            <Pressable style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : 'white',
                                                    borderRadius: 8,
                                                    padding: 6
                                                },

                                            ]} onPress={() => { Alert.alert("Star Messages"), this.showmenufn(false) }}>
                                                <Text style={TextStyles.h5purple}>Star Messages</Text>
                                            </Pressable>
                                        </View>
                                        <View>
                                            <Pressable
                                                style={({ pressed }) => [
                                                    {
                                                        backgroundColor: pressed
                                                            ? 'rgb(210, 230, 255)'
                                                            : 'white',
                                                        borderRadius: 8,
                                                        padding: 6
                                                    },

                                                ]} onPress={() => { this.showexitgroupfn(true), this.showmenufn(false) }}>
                                                <Text style={TextStyles.h5purple}>Exit Group</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </Pressable>
                            </Modal>
                        </View>
                        : null}
                    {/* More modal ends */}

                    {/* exit group Model starts */}
                    {this.state.exitgroupmenu == true ?
                        <View>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={this.state.exitgroupmenu}
                                onRequestClose={() => {
                                    this.showexitgroupfn(false);
                                }}

                            >
                                <Pressable style={{
                                    width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5);'

                                }}
                                    onPress={() => { this.showexitgroupfn(false) }}
                                >
                                    <View style={{
                                        elevation: 50, backgroundColor: '#fff', width: '100%', height: hp('10%', 812),
                                        position: 'absolute', marginLeft: '5%', marginRight: '5%', width: wp('90%', 812),
                                        padding: '1%',
                                        bottom: hp('45%', 812),
                                        borderStartWidth: 10, borderStartColor: 'rgb(210, 230, 255)',
                                        borderTopStartRadius: 30, borderBottomEndRadius: 30,
                                        borderEndWidth: 10,
                                        borderEndColor: 'rgb(210, 230, 255)',


                                    }}>
                                        <ScrollView
                                            showsVerticalScrollIndicator={false}

                                        >
                                            <View style={{ paddingLeft: '2%', paddingTop: '2%', flex: 1, paddingBottom: '1%', }}>
                                                <Text style={{ flex: 1, fontSize: RFValue(14, 812), fontFamily: 'silka-medium-webfont', color: '#800080', }}>Exit "{this.state.navigation.tittle}" group {" ?"}</Text>
                                            </View>
                                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', marginLeft: 'auto', }}>
                                                <Pressable style={({ pressed }) => [
                                                    {
                                                        backgroundColor: pressed
                                                            ? 'rgb(210, 230, 255)'
                                                            : 'white',
                                                        borderRadius: 8,
                                                        padding: 6,
                                                        marginRight: '3%'
                                                    },

                                                ]} onPress={() => { this.showexitgroupfn(false) }}>
                                                    <Text style={TextStyles.oktextstyle}>CANCEL</Text>
                                                </Pressable>
                                                <Pressable style={({ pressed }) => [
                                                    {
                                                        backgroundColor: pressed
                                                            ? 'rgb(210, 230, 255)'
                                                            : 'white',
                                                        borderRadius: 8,
                                                        padding: 6,
                                                        marginLeft: '3%', marginRight: '3%'
                                                    },


                                                ]} onPress={() => { this.showexitgroupfn(false) }}>
                                                    <Text style={TextStyles.oktextstyle}>EXIT</Text>
                                                </Pressable>

                                            </View>
                                        </ScrollView>
                                    </View>
                                </Pressable>
                            </Modal>
                        </View>
                        : null}

                    {/* exit group model ends */}
                    {/* Documnets group model starts*/}
                    {this.state.attachdocmenu == true ?
                        <View>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={this.state.attachdocmenu}
                                onRequestClose={() => {
                                    this.showattachdocfn(false);
                                }}
                            >
                                <Pressable style={{
                                    width: '100%', height: '100%',
                                    //  backgroundColor: 'rgba(0, 0, 0, 0.5);'
                                    backgroundColor: 'transparent'

                                }}
                                    onPress={() => { this.showattachdocfn(false) }}
                                >
                                    <View style={{
                                        elevation: 20, backgroundColor: '#fff', width: 'auto', height: 'auto', borderRadius: hp('1%', 812),
                                        borderRadius: 20, position: 'absolute', marginLeft: '5%', marginRight: '5%', width: '90%', bottom: hp('7%', 812)
                                    }}>
                                        <ScrollView >
                                            <View style={{ margin: '1%', }}>
                                                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', paddingBottom: '1%', paddingTop: '1%' }}>
                                                    <Text style={{ fontSize: RFValue(15, 812), fontFamily: 'silka-medium-webfont', textAlign: 'center', color: '#800080' }}>Upload New</Text>
                                                </View>

                                                <View style={{ flexDirection: 'row', paddingBottom: '1%', paddingTop: '1%' }}>
                                                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                                        <Pressable style={({ pressed }) => [{
                                                            flexDirection: 'column', backgroundColor: pressed
                                                                ? '#f2f2f2' : '#fbce63',
                                                            justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                                                            elevation: 10, borderRadius: hp('2%', 812), height: hp('7%', 812), width: wp('16%', 812)
                                                        }]}
                                                            
                                                        onPress={() => {
                                                            this.showattachdocfn(false)
                                                        }}

                                                        >
                                                            <Image style={{
                                                                resizeMode: 'contain', width: wp('6%', 812),
                                                                height: hp('6%', 812),
                                                            }} source={require('../Images/UI/document.png')} />

                                                        </Pressable>
                                                        <Text style={TextStyles.brocastext}>Document</Text>
                                                    </View>
                                                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                                        <Pressable
                                                            style={({ pressed }) => [{
                                                                flexDirection: 'column', backgroundColor: pressed
                                                                    ? '#f2f2f2' : '#ff904b',
                                                                justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                                                                elevation: 10, borderRadius: hp('2%', 812), height: hp('7%', 812), width: wp('16%', 812)
                                                            }]}>
                                                            <Image style={{
                                                                resizeMode: 'contain', width: wp('6%', 812),
                                                                height: hp('6%', 812),
                                                            }} source={require('../Images/UI/camera.png')} />

                                                        </Pressable>
                                                        <Text style={TextStyles.brocastext}>Camera</Text>
                                                    </View>
                                                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                                        <Pressable style={({ pressed }) => [{
                                                            flexDirection: 'column', backgroundColor: pressed
                                                                ? '#f2f2f2' : '#F167B1',
                                                            justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                                                            elevation: 10, borderRadius: hp('2%', 812), height: hp('7%', 812), width: wp('16%', 812)
                                                        }]}>
                                                            <Image style={{
                                                                resizeMode: 'contain', width: wp('6%', 812),
                                                                height: hp('6%', 812),
                                                            }} source={require('../Images/UI/gallary.png')} />

                                                        </Pressable>
                                                        <Text style={TextStyles.brocastext}>Gallery</Text>
                                                    </View>
                                                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                                        <Pressable style={({ pressed }) => [{
                                                            flexDirection: 'column', backgroundColor: pressed
                                                                ? '#f2f2f2' : '#69C7FF',
                                                            justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                                                            elevation: 10, borderRadius: hp('2%', 812), height: hp('7%', 812), width: wp('16%', 812)
                                                        }]}>
                                                            <Image style={{
                                                                resizeMode: 'contain', width: wp('6%', 812),
                                                                height: hp('6%', 812),
                                                            }} source={require('../Images/UI/music.png')} />

                                                        </Pressable>
                                                        <Text style={TextStyles.brocastext}>Audio</Text>
                                                    </View>

                                                </View>

                                                <View style={{ flexDirection: 'row', paddingBottom: '1%', paddingTop: '1%' }}>

                                                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                                        <Pressable style={({ pressed }) => [{
                                                            flexDirection: 'column', backgroundColor: pressed
                                                                ? '#f2f2f2' : '#7f44b9',
                                                            justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                                                            elevation: 10, borderRadius: hp('2%', 812), height: hp('7%', 812), width: wp('16%', 812)
                                                        }]}>
                                                            <Image style={{
                                                                resizeMode: 'contain', width: wp('6%', 812),
                                                                height: hp('5%', 812),
                                                            }} source={require('../Images/UI/location.png')} />

                                                        </Pressable>
                                                        <Text style={TextStyles.brocastext}>Location</Text>
                                                    </View>
                                                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                                        <Pressable style={({ pressed }) => [{
                                                            flexDirection: 'column', backgroundColor: pressed
                                                                ? '#f2f2f2' : '#97df6a',
                                                            justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                                                            elevation: 10, borderRadius: hp('2%', 812), height: hp('7%', 812), width: wp('16%', 812)
                                                        }]}>
                                                            <Image style={{
                                                                resizeMode: 'contain', width: wp('6%', 812),
                                                                height: hp('6%', 812),
                                                            }} source={require('../Images/UI/contact.png')} />

                                                        </Pressable>
                                                        <Text style={TextStyles.brocastext}>Contact</Text>
                                                    </View>
                                                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>

                                                    </View>
                                                    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>

                                                    </View>

                                                </View>

                                            </View>




                                        </ScrollView>
                                    </View>

                                </Pressable>
                            </Modal>
                        </View>
                        : null}
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    maincontainer: { flex: 1, backgroundColor: '#FAF4FF' },
    container: {
        flex: 1,
        // margin: 20,
        backgroundColor: '#fff',
        height: 450
    },


    roundrecimagestyles: {
        resizeMode: 'contain', width: wp('3%'),
        height: hp('3%'),
    },
    counttext: { color: '#fff', fontWeight: 'normal', fontFamily: 'silka-medium-webfont', },
    moreview: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10, },
    searchview: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10, },

    groupinview: {
        width: wp('63%', 812), alignContent: 'center', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'flex-start', marginLeft: '2%'
    },
    rounrectview: {
        width: wp('15%', 812), alignItems: 'center', alignContent: 'space-around', justifyContent: 'space-around', flexDirection: 'row', marginLeft: '2%'
    },
    mainfirstview: { width: wp('100%', 812), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', },
    ellipsebackground: {
        alignItems: 'center', alignContent: 'center', justifyContent: 'center', width: wp('12%', 812),
    },
    generalgrid: { flex: 1, elevation: 10, backgroundColor: '#fff', marginTop: 2, marginBottom: 2, flexDirection: 'row' },
    generalfirstcolum: { flex: 0.8, alignItems: 'center', marginLeft: '2%', marginVertical: '2%' },
    generalseccolumn: { flex: 3, alignItems: 'flex-start', marginLeft: '2%', marginVertical: '2%' },
    generalthirdcolumn: { flex: 1, alignItems: 'center', marginRight: '2%', marginVertical: '2%' },
    sendview: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10, },
    // talkbubble style starts
    talkBubble: {
        width: '80%',
        backgroundColor: 'transparent',
        marginLeft: '5%',
        shadowOpacity: 0.5,
        flexDirection: 'row',
        shadowColor: '#F7FCFC'

    },
    talkBubbleSquare: {
        height: "auto",
        backgroundColor: '#fff',
        elevation: 5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 5,
    },
    talkBubbleTriangle: {
        elevation: 5,
        position: 'absolute',
        left: -26,
        top: 5,
        width: 0,
        height: 0,
        borderTopColor: 'transparent',
        borderTopWidth: 10,
        borderRightWidth: 30,
        borderRightColor: '#fff',
        borderBottomWidth: 5,
        borderBottomColor: 'transparent',
        justifyContent: 'space-between'


    },
    // talkbubble style starts
    RighttalkBubble: {
        width: '80%',
        backgroundColor: 'transparent',
        shadowOpacity: 0.5,
        shadowColor: '#F7FCFC',
        marginLeft: 'auto'

    },
    RighttalkBubbleSquare: {
        height: "auto",
        backgroundColor: '#E1CDFA',
        elevation: 5,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginRight: '5%',
        borderTopRightRadius: 5
    },
    RighttalkBubbleTriangle: {
        elevation: 5,
        position: 'absolute',
        right: 1,
        top: 5,
        width: 0,
        height: 0,
        borderTopColor: 'transparent',
        borderTopWidth: 10,
        borderLeftWidth: 30,
        borderLeftColor: '#E1CDFA',
        borderBottomWidth: 5,
        borderBottomColor: 'transparent',


    }
});
export default GeneralChatScreen;