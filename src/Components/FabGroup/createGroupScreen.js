import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, KeyboardAvoidingView, Pressable, Modal } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput } from 'react-native-paper';
import { Input } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import CssStyles from '../../CssStyles/CssStyles';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Dropdown, GroupDropdown, MultiselectDropdown } from 'sharingan-rn-modal-dropdown';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import TextStyles from '../../CssStyles/TextStyles';



export const data = [
  {
    value: '1',
    label: 'Tiger Nixon',
  },
  {
    value: '2',
    label: 'Garrett Winters',

  },
  {
    value: '3',
    label: 'Ashton Cox',

  },
  {
    value: '4',
    label: 'Cedric Kelly',
  },
];
class CreateGroupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
      city: null,
      cities: [],
      enterdesc: '',
    };
  }
  changeCity(item) {
    this.setState({
      city: item.value
    });
  }

  renderCustomIconA = () => {
    return (

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={TextStyles.h4lightwhite}>35</Text>
        {/* <Image
          style={{
            resizeMode: 'contain', width: wp('5%'),
            height: hp('5%'),
          }}
          source={require('../../Images/smile.png')}
        /> */}
      </View>


    );
  };
  renderCustomIconB = () => {
    return (

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
        <Text style={TextStyles.h4lightwhite, { textAlign: 'center' }}>135{" "}</Text>
        <Image
          style={{
            resizeMode: 'contain', width: wp('5%', 812),
            height: hp('5%', 812),
          }}
          source={require('../../Images/smile.png')}
        />
      </View>


    );
  };


  render() {
    return (
      <ScrollView style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
        <View style={{ width: '100%', height: '100%' }}>
          <View style={{ height: hp('8%'), backgroundColor: '#792BA9', }}>
            {/* <ImageBackground style={CssStyles.backgroundImage, { height: hp('10%') }}
            resizeMode='cover'
            source={require('../../Images/bg.png')}> */}
            <View style={styles.mainfirstview}>
              <TouchableOpacity style={styles.rounrectview} onPress={() => this.props.navigation.pop()}>
                <Image style={styles.roundrecimagestyles} source={require('../../Images/back.png')} />
              </TouchableOpacity>
              <View style={styles.groupinview}>
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'flex-start', }}>
                  <Text style={TextStyles.h3white}>Create Group</Text>
                  <Text style={TextStyles.h4whitewof}>35 contacts uploaded</Text>
                </View>
              </View>
           
            </View>
            {/* </ImageBackground> */}
          </View>


          <View style={styles.mainview}>
            <ImageBackground source={require('../../Images/ellipse8.png')} style={{
              resizeMode: 'contain', alignItems: 'center', justifyContent: 'center', width: 100,
              height: 100,
            }}>
              <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont' }}>
                <Text style={{ color: 'white', fontSize: RFValue(14, 812), fontFamily: 'silka-medium-webfont' }}>Add Group</Text>
                <Text style={{ color: 'white', fontSize: RFValue(14, 812), fontFamily: 'silka-medium-webfont' }}>Icon</Text>
              </View>
              <ImageBackground source={require('../../Images/Ellipse9.png')} style={styles.badge}>
                <Image source={require('../../Images/camera.png')} style={styles.badgeimage} />
              </ImageBackground>
            </ImageBackground>
          </View>
          {/* <View style={styles.adminfirstcolum}>
                        <View style={{
                            backgroundColor: '#fff', elevation: 5,
                            width: wp(20, 812), height: hp(30, 812),
                            justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                            borderRadius: 10, flex: 1,
                            backfaceVisibility: 'hidden',
                            shadowOffset: { width: 10, height: 10 },
                            shadowColor: 'transparent',
                            marginLeft: '2%',


                        }}>
                            <Text>Hello</Text>
                          
                        </View>

                    </View> */}
          <View style={styles.generalgrid}>
            {/* <View style={{ flexDirection: 'row', margin: wp('2%'), marginLeft: wp('1%') }}> */}
            <View style={{ flex: 0.5, }}>
              <Image style={{
                resizeMode: 'contain', width: wp('7%'),
                height: hp('8%')
              }} source={require('../../Images/excel1.png')} />
            </View>
            <View style={{ flex: 2, }}>
              <Text style={TextStyles.h5blackbold}>File Name.xls</Text>
              <Text style={TextStyles.h4lightwhite}>35 KB</Text>
            </View>
            {/* </View> */}

            <View style={CssStyles.buttonview, { alignItems: 'flex-end' }}>
              <TouchableOpacity style={CssStyles.button} >
                <Text style={CssStyles.buttontext}>CHANGE</Text>
              </TouchableOpacity>
            </View>



          </View>
          <View style={{ width: '95%', borderLeftColor: "#fff", marginLeft: '2%', marginTop: '3%', }}>
            <Input
              placeholder="Enter Group Name"
              rightIcon={() => this.renderCustomIconA()}
              style={{ width: '100%', borderLeftColor: "#fff", }}
              // onChangeText={value => this.setState({ Email: value })}
              inputStyle={TextStyles.h4lightwhite}
            />
          </View>
          <View style={{ width: '95%', borderLeftColor: "#fff", marginLeft: '2%', marginTop: '1%', }}>
            <Input
              placeholder="Enter Description"
              rightIcon={() => this.renderCustomIconB()}
              style={{ width: '100%', borderLeftColor: "#fff", }}
              onChangeText={value => this.setState({ enterdesc: value })}
              inputStyle={TextStyles.h4lightwhite}
            />
          </View>
          <View style={styles.container}>
            <Dropdown
              label="Category"
              data={data}
              color={'white'}
              //   enableSearch
              // value={valueSS}
              // underlineColor={'#FFFFFF'}
              onChange={item => this.changeCity(item)}
              textStyle={TextStyles.h4lightwhite}
            // containerStyle={{ height: 50, width: '92%' }}
            // style={{ backgroundColor: '#ECF2F3', fontFamily: 'silka-regular-webfont', fontSize: RFValue(16, 812), marginLeft: '5%' }}

            />
          </View>


          <View style={{ marginTop: '3%', margin: '3%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: '2%' }}>
              <Text style={TextStyles.h4lightwhite}>Location</Text>
              <Image source={require('../../Images/map-pin.png')} />
            </View>
            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
                margin: '1%',
              }}
            />
          </View>
          <View style={CssStyles.buttonview}>
            <TouchableOpacity style={CssStyles.button}>
              <Text style={CssStyles.buttontext}>CREATE GROUP</Text>
              {/* <Image source={require('../Images/rightarrow.png')} style={CssStyles.rightarrowstyle} /> */}
            </TouchableOpacity>
          </View>
        </View>
       

      </ScrollView>);
  }
}


export default CreateGroupScreen;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  maincontainersub: {
    flex: 0.29,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  imageiconStyle: {
    width: 10,
    marginTop: wp('10%'),
    marginLeft: 10
  },
  searchview: { flex: 1, alignItems: 'flex-end', justifyContent: 'center', marginRight: '2%' },
  avatar: {
    // backgroundColor: 'black',                                                                                                                                                                                    
    width: 80,
    height: 80,
  },
  badge: {
    //  backgroundColor: 'red',                                                                                                                                                                                      
    width: 30,
    height: 30,
    left: 24,
    top: 24,
  },
  dropdownStyle: {
    margin: 10,
    width: '30%'
  },
  close: {
    //  backgroundColor: 'red',                                                                                                                                                                                      
    width: 30,
    height: 30,
    left: 34,
    top: 0,
  },
  textboxfield: {
    fontFamily: 'silka-regular-webfont',

  },
  rounrectview: {
    alignItems: 'flex-start', alignContent: 'center', justifyContent: 'center', padding: 10,
  },
  roundrecimagestyles: {
    resizeMode: 'contain', width: wp('3%'),
    height: hp('3%'),
  },
  mainfirstview: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', },
  mainview: { alignItems: 'center', justifyContent: 'center', marginTop: '5%' },
  groupinview: {
    flex: 4, alignItems: 'flex-start', alignContent: 'center', justifyContent: 'center',
  },
  badge: {
    //  backgroundColor: 'red',                                                                                                                                                                                      
    width: 50,
    height: 50,
    left: 40,
    top: 24,
  },
  badgeimage: {
    width: 18,
    height: 18,
    left: 17,
    top: 10,
  },
  buttonview: { alignItems: 'center', alignContent: 'center', marginLeft: wp('20%'), margin: '5%' },
  button: { borderRadius: hp('5%'), backgroundColor: "#65248E", height: hp('5%'), width: wp('19%'), justifyContent: 'center', alignContent: 'center', alignItems: 'center', elevation: 10, margin: '10%' },
  buttontext: {
    textAlign: 'center',
    fontSize: RFValue(16, 812),
    color: '#fff',
    fontFamily: 'silka-medium-webfont',
  },
  authtextstyle: { fontSize: RFValue(18, 812), fontFamily: 'silka-medium-webfont', color: 'black' },
  container: {
    //   paddingTop: 30,
    //   marginLeft: 20,
    //   marginRight: 20,
    //  flex: 1,
    //  width:'80%'
    // height: 50,
    width: '90%',
    // marginTop: 8,
    // borderRadius: 2,
    // borderColor: 'gray',
    fontSize: 20,
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: '4%', marginBottom: '8%'
  },
  buttontext: {
    textAlign: 'center',
    fontSize: RFValue(18, 812),
    color: '#fff',
    fontFamily: 'silka-medium-webfont'
  },
  generalgrid: {
    elevation: 1, backgroundColor: '#FAF4FF', flexDirection: 'row', borderRadius: 10, justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: '2%',
    marginTop: '3%', marginBottom: '1%', marginLeft: '5%', marginRight: '5%',
    height: hp('11%', 812),
  },

})