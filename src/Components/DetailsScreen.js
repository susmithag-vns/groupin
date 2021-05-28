import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, ImageBackground, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import CssStyles from '../CssStyles/CssStyles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  Dropdown,
  GroupDropdown,
  MultiselectDropdown,
} from 'sharingan-rn-modal-dropdown';
import TextStyles from '../CssStyles/TextStyles';
export const categorydata = [
  {
    value: '1',
    label: 'Adult',
  },
  {
    value: '2',
    label: 'Student',

  },
  {
    value: '3',
    label: 'Employee',

  },
  {
    value: '4',
    label: 'Non-working category',
  },
];
export const countrydata = [
  {
    value: '1',
    label: 'Australia',
  },
  {
    value: '2',
    label: 'India',

  },
  {
    value: '3',
    label: 'Pakistan',

  },
  {
    value: '4',
    label: 'Srilanka',
  },
];
export const statedata = [
  {
    value: '1',
    label: 'Andhra Pradesh',
  },
  {
    value: '2',
    label: 'Kerala',

  },
  {
    value: '3',
    label: 'Tamilnadu',

  },
  {
    value: '4',
    label: 'Telangana',
  },
];

const DetailsScreen = (props) => {
  const [valueMS, setValueMS] = useState('');
  const [valueSS, setValueSS] = useState('');
  const [valueGS, setValueGS] = useState('');
  const onChangeMS = (value) => {
    setValueMS(value);
  };
  const onChangeSS = (value) => {
    setValueSS(value);
  };
  const onChangeGS = (value) => {
    setValueGS(value);
  };
  useEffect(() => () => console.log("unmount"), []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground style={styles.backgroundImage}
        resizeMode='stretch'
        source={require('../Images/bg.png')}>
        <View style={{ flexDirection: 'row', marginTop: '3%', marginLeft: '5%', }}>
          <TouchableOpacity onPress={() => props.navigation.pop()}>
            <Image source={require('../Images/backarrow.png')} style={{
              resizeMode: 'contain', width: wp('6%'),
              height: hp('6%'),
            }} />
          </TouchableOpacity>
          {/* <View style={{ marginTop: '3%', marginLeft: 'auto', marginRight: '5%' }} onPress={() => this.props.navigation.pop()}>
            <Image source={require('../Images/logo.png')} style={{
              resizeMode: 'contain', width: wp('8%'),
              height: hp('6%'),
            }} />
          </View> */}
        </View>
        <View style={styles.groupimage}>
          <View style={styles.groupimageview}>
            <Text style={TextStyles.h2whitecenterbold}>Fill your details</Text>
          </View>
          <View style={styles.welcjustycenter, { marginTop: '3%', marginLeft: '5%', marginRight: '5%', marginBottom: '3%', }}>
            <Text style={TextStyles.ptextcenter}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
          </View>
        </View>

        <ScrollView>
          <View style={styles.dropdownContainer}>
            <Image
              style={styles.mapIcon}
              source={require('../Images/category.png')}
            />

            <Dropdown
              label="Simple dropdown"
              data={categorydata}
              value={valueSS}
              onChange={onChangeSS}
              color={'white'}
              //   enableSearch
              underlineColor={'transparent'}
              removeLabel={true}
              textInputPlaceholder="Category"
              textInputPlaceholderColor='#AD7ACC'
              textInputStyle={{ fontFamily: 'silka-medium-webfont', fontSize: RFValue(18, 812), }}
              itemTextStyle={{ fontFamily: 'silka-medium-webfont', fontSize: RFValue(16, 812), }}

            />
          </View>
          <View style={styles.lastborder} />
          <View style={styles.dropdownContainer}>
            <Image
              style={styles.mapIcon}
              source={require('../Images/vector8.png')}
            />

            <Dropdown
              label="Simple dropdown"
              data={countrydata}
              //   enableSearch
              value={valueMS}
              underlineColor={'transparent'}
              onChange={onChangeMS}
              removeLabel={true}
              textInputPlaceholder="City"
              textInputPlaceholderColor='#AD7ACC'
              textInputStyle={{ fontFamily: 'silka-medium-webfont', fontSize: RFValue(18, 812), }}
              itemTextStyle={{ fontFamily: 'silka-medium-webfont', fontSize: RFValue(16, 812), }}

            />
          </View>
          <View style={styles.lastborder} />
          <View style={styles.dropdownContainer}>
            <Image
              style={styles.mapIcon}
              source={require('../Images/vector8.png')}
            />

            <Dropdown
              label="Simple dropdown"
              data={statedata}
              //   enableSearch
              underlineColor={'transparent'}
              value={valueGS}
              onChange={onChangeGS}
              removeLabel={true}
              textInputPlaceholder="State"
              textInputPlaceholderColor='#AD7ACC'
              textInputStyle={{ fontFamily: 'silka-medium-webfont', fontSize: RFValue(18, 812), }}
              itemTextStyle={{ fontFamily: 'silka-medium-webfont', fontSize: RFValue(16, 812), }}



            />
          </View>
          <View style={styles.lastborder} />
          <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: '10%', padding: '3%' }}>
            <TouchableOpacity style={CssStyles.arrowbutton} onPress={() => props.navigation.navigate("GroupInHome")}>
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
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: '5%', marginRight: '5%',
    marginBottom: '3%',
    alignItems: 'center'
  },
  buttonView: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  container: { flex: 1, width: '100%', height: '100%', alignItems: 'center', },
  backgroundImage: {
    flex: 1,
    width: '100%', height: '100%'
  },
  welcjustycenter: { alignContent: 'center', alignItems: 'center', justifyContent: 'center', },
  textstylewelscrn: { fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont', color: '#D9C9E4', textAlign: 'center', },
  groupimage: { alignContent: 'center', alignItems: 'center', justifyContent: 'center', },
  groupimageview: { alignContent: 'center', alignItems: 'center', justifyContent: 'center', },
  textstyle: { fontSize: RFValue(20, 812), fontFamily: 'silka-bold-webfont', color: '#fff', textAlign: 'center' },
  authtextstyle: { fontSize: RFValue(18, 812), color: '#fff' },
  mapIcon: {
    resizeMode: 'contain', width: wp('5%',812),
    height: hp('5%',812),
    marginLeft: '3%'
  },
  lastborder: { borderBottomColor: '#808080', marginLeft: '5%', marginRight: '5%', borderBottomWidth: 1, },
});

export default DetailsScreen;
