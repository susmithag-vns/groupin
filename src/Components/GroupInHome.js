import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ImageBackground, Image, PixelRatio, Alert, Modal, Pressable, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import CssStyles from '../CssStyles/CssStyles';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TextStyles from '../CssStyles/TextStyles'

const datareference = []


const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }

    return data;
};

const formatrowdata = (data,) => {
    const numberOfFullRows = Math.floor(data.length);

    let numberOfElementsLastRow = data.length - (numberOfFullRows);
    while (numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }

    return data;
};

const numColumns = 3;
export default class GroupInHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customStyleIndex: 0,
            count_val: [, (35)],
            showmenu: false,
            admingrouplist: [{
                tittle: "Group Name 1edddddfggfrgrgrgrgrrgr",
                grnumber: "23",
                click: "true",
                id: "1",
                uri: require("../Images/vector1.png"),
                color: "#C9FFE9",
                time: "3:32pm",
                text: "Ramesh: lorem ipsum is a dummy text lorem ipsum text dummy line ",
                countvalue: true,
                count: 15,
                grouptext: "Loreum ipsum is a dummy text",
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                purplecheck: require('../Images/purplecheck3x.png'),
                admin: true,
                backgroundColorofitem: "#FFE39E",
                backgroundColorcheck: false,

            },
            {
                tittle: "Group Name malo",
                grnumber: "30",
                click: "true",
                id: "2",
                uri: require("../Images/vector2.png"),
                color: "#FFE7C9",
                time: "3:32pm",
                text: "Mahesh:Loreum ipsum is a text",
                countvalue: true,
                count: 15,
                grouptext: "Loreum ipsum is a dummy text",
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                admin: true,
                backgroundColorcheck: false,
                backgroundColorofitem: "#B2BBFF",
            },
            {
                tittle: "Group Name slo",
                grnumber: "13",
                click: "true",
                id: "3",
                uri: require("../Images/vector1.png"),
                color: "#ECC9FF",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                countvalue: true,
                count: 5,
                grouptext: "Loreum ipsum is a dummy text",
                purplecheck: require('../Images/purplecheck3x.png'),
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                admin: true,
                backgroundColorcheck: false,
                backgroundColorofitem: "#A8F4FF",
            },
            {
                tittle: "Group Name tha",
                grnumber: "78",
                click: "true",
                id: "4",
                uri: require("../Images/vector2.png"),
                color: "#FFC9DF",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                purplecheck: require('../Images/purplecheck3x.png'),
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                backgroundColorofitem: "#FF99A3",
                backgroundColorcheck: false,
            },
            {
                tittle: "Group Name world",
                grnumber: "87",
                click: "true",
                id: "5",
                uri: require("../Images/vector1.png"),
                color: "#C9DAFF",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                backgroundColorofitem: "#D9FFA8",
                backgroundColorcheck: false,
            },
            {
                tittle: "Group Name fishe",
                grnumber: "45",
                click: "true",
                id: "6",
                uri: require("../Images/vector2.png"),
                color: "#FFCFC9",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                greycheck: require('../Images/check3x.png'),
                backgroundColorofitem: "#FFE39E",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },
            {
                tittle: "Group Name Init",
                grnumber: "42",
                click: "true",
                id: "7",
                uri: require("../Images/vector1.png"),
                color: "#FBFBFB",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                greycheck: require('../Images/check3x.png'),
                backgroundColorofitem: "#B2BBFF",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },
            {
                tittle: "Group Name",
                grnumber: "33",
                click: "true",
                id: "8",
                uri: require("../Images/vector2.png"),
                color: "#D5FEB4",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                backgroundColorofitem: "#A8F4FF",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },
            {
                tittle: "Group Name",
                grnumber: "34",
                click: "true",
                id: "9",
                uri: require("../Images/vector1.png"),
                color: "#B7FEF3",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                backgroundColorofitem: "#FF99A3",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },
            {
                tittle: "Group Name",
                grnumber: "32",
                click: "true",
                id: "10",
                uri: require("../Images/vector2.png"),
                color: "#FBFBFB",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                backgroundColorofitem: "#D9FFA8",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },
            {
                tittle: "Group Name",
                grnumber: "32",
                click: "true",
                id: "11",
                uri: require("../Images/vector1.png"),
                color: "#FFCFC9",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                backgroundColorofitem: "#FFE39E",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },
            {
                tittle: "Group Name",
                grnumber: "32",
                click: "true",
                id: "21",
                uri: require("../Images/vector2.png"),
                color: "#FFC9DF",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                backgroundColorofitem: "#B2BBFF",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },
            {
                tittle: "Group Name",
                grnumber: "32",
                click: "true",
                id: "22",
                uri: require("../Images/vector1.png"),
                color: "#C9FFE9",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                backgroundColorofitem: "#A8F4FF",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },



            ],
            generalgrouplist: [{
                tittle: "Group Name 1edddddfggfrgrgrgrgrrgr",
                grnumber: "23",
                click: "true",
                id: "1",
                uri: require("../Images/account_circle.png"),
                color: "#C9FFE9",
                time: "3:32pm",
                text: "Ramesh: lorem ipsum is a dummy text lorem ipsum text dummy line ",
                countvalue: true,
                count: 15,
                grouptext: "Loreum ipsum is a dummy text",
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                purplecheck: require('../Images/purplecheck3x.png'),
                admin: true,
                backgroundColorofitem: "#FFE39E",
                backgroundColorcheck: false,

            },
            {
                tittle: "Group Name malo",
                grnumber: "30",
                click: "true",
                id: "2",
                uri: require("../Images/account_circle.png"),
                color: "#FFE7C9",
                time: "3:32pm",
                text: "Mahesh:Loreum ipsum is a text",
                countvalue: true,
                count: 15,
                grouptext: "Loreum ipsum is a dummy text",
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                admin: true,
                backgroundColorcheck: false,
                backgroundColorofitem: "#B2BBFF",
            },
            {
                tittle: "Group Name slo",
                grnumber: "13",
                click: "true",
                id: "3",
                uri: require("../Images/account_circle.png"),
                color: "#ECC9FF",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                countvalue: true,
                count: 5,
                grouptext: "Loreum ipsum is a dummy text",
                purplecheck: require('../Images/purplecheck3x.png'),
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                admin: true,
                backgroundColorcheck: false,
                backgroundColorofitem: "#A8F4FF",
            },
            {
                tittle: "Group Name tha",
                grnumber: "78",
                click: "true",
                id: "4",
                uri: require("../Images/account_circle.png"),
                color: "#FFC9DF",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                purplecheck: require('../Images/purplecheck3x.png'),
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                backgroundColorofitem: "#FF99A3",
                backgroundColorcheck: false,
            },
            {
                tittle: "Group Name world",
                grnumber: "87",
                click: "true",
                id: "5",
                uri: require("../Images/account_circle.png"),
                color: "#C9DAFF",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                backgroundColorofitem: "#D9FFA8",
                backgroundColorcheck: false,
            },
            {
                tittle: "Group Name fishe",
                grnumber: "45",
                click: "true",
                id: "6",
                uri: require("../Images/account_circle.png"),
                color: "#FFCFC9",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                greycheck: require('../Images/check3x.png'),
                backgroundColorofitem: "#FFE39E",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },
            {
                tittle: "Group Name Init",
                grnumber: "42",
                click: "true",
                id: "7",
                uri: require("../Images/account_circle.png"),
                color: "#FBFBFB",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                greycheck: require('../Images/check3x.png'),
                backgroundColorofitem: "#B2BBFF",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },
            {
                tittle: "Group Name",
                grnumber: "33",
                click: "true",
                id: "8",
                uri: require("../Images/account_circle.png"),
                color: "#D5FEB4",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                backgroundColorofitem: "#A8F4FF",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },
            {
                tittle: "Group Name",
                grnumber: "34",
                click: "true",
                id: "9",
                uri: require("../Images/account_circle.png"),
                color: "#B7FEF3",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                backgroundColorofitem: "#FF99A3",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },
            {
                tittle: "Group Name",
                grnumber: "32",
                click: "true",
                id: "10",
                uri: require("../Images/account_circle.png"),
                color: "#FBFBFB",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                backgroundColorofitem: "#D9FFA8",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },
            {
                tittle: "Group Name",
                grnumber: "32",
                click: "true",
                id: "11",
                uri: require("../Images/account_circle.png"),
                color: "#FFCFC9",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                backgroundColorofitem: "#FFE39E",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },
            {
                tittle: "Group Name",
                grnumber: "32",
                click: "true",
                id: "21",
                uri: require("../Images/account_circle.png"),
                color: "#FFC9DF",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                backgroundColorofitem: "#B2BBFF",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },
            {
                tittle: "Group Name",
                grnumber: "32",
                click: "true",
                id: "22",
                uri: require("../Images/account_circle.png"),
                color: "#C9FFE9",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                backgroundColorofitem: "#A8F4FF",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },



            ],

            broadcastgrouplist: [{
                tittle: "Group Name 1edddddfggfrgrgrgrgrrgr",
                grnumber: "23",
                click: "true",
                id: "1",
                uri: require("../Images/broadcast.png"),
                color: "#C9FFE9",
                time: "3:32pm",
                text: "Ramesh: lorem ipsum is a dummy text lorem ipsum text dummy line ",
                countvalue: true,
                count: 15,
                grouptext: "Loreum ipsum is a dummy text",
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                purplecheck: require('../Images/purplecheck3x.png'),
                admin: true,
                backgroundColorofitem: "#FFE39E",
                backgroundColorcheck: false,

            },
            {
                tittle: "Group Name malo",
                grnumber: "30",
                click: "true",
                id: "2",
                uri: require("../Images/Open_Doodles.png"),
                color: "#FFE7C9",
                time: "3:32pm",
                text: "Mahesh:Loreum ipsum is a text",
                countvalue: true,
                count: 15,
                grouptext: "Loreum ipsum is a dummy text",
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                admin: true,
                backgroundColorcheck: false,
                backgroundColorofitem: "#B2BBFF",
            },
            {
                tittle: "Group Name slo",
                grnumber: "13",
                click: "true",
                id: "3",
                uri: require("../Images/broadcast.png"),
                color: "#ECC9FF",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                countvalue: true,
                count: 5,
                grouptext: "Loreum ipsum is a dummy text",
                purplecheck: require('../Images/purplecheck3x.png'),
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                admin: true,
                backgroundColorcheck: false,
                backgroundColorofitem: "#A8F4FF",
            },
            {
                tittle: "Group Name tha",
                grnumber: "78",
                click: "true",
                id: "4",
                uri: require("../Images/Open_Doodles.png"),
                color: "#FFC9DF",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                purplecheck: require('../Images/purplecheck3x.png'),
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                backgroundColorofitem: "#FF99A3",
                backgroundColorcheck: false,
            },
            {
                tittle: "Group Name world",
                grnumber: "87",
                click: "true",
                id: "5",
                uri: require("../Images/broadcast.png"),
                color: "#C9DAFF",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
                backgroundColorofitem: "#D9FFA8",
                backgroundColorcheck: false,
            },
            {
                tittle: "Group Name fishe",
                grnumber: "45",
                click: "true",
                id: "6",
                uri: require("../Images/Open_Doodles.png"),
                color: "#FFCFC9",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                greycheck: require('../Images/check3x.png'),
                backgroundColorofitem: "#FFE39E",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },
            {
                tittle: "Group Name Init",
                grnumber: "42",
                click: "true",
                id: "7",
                uri: require("../Images/broadcast.png"),
                color: "#FBFBFB",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                greycheck: require('../Images/check3x.png'),
                backgroundColorofitem: "#B2BBFF",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },
            {
                tittle: "Group Name fishe",
                grnumber: "45",
                click: "true",
                id: "8",
                uri: require("../Images/Open_Doodles.png"),
                color: "#FFCFC9",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                greycheck: require('../Images/check3x.png'),
                backgroundColorofitem: "#A8F4FF",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },
            {
                tittle: "Group Name Init",
                grnumber: "42",
                click: "true",
                id: "9",
                uri: require("../Images/broadcast.png"),
                color: "#FBFBFB",
                time: "3.32pm",
                text: "Mahesh:Loreum ipsum is a text",
                grouptext: "Loreum ipsum is a dummy text",
                greycheck: require('../Images/check3x.png'),
                backgroundColorofitem: "#FF99A3",
                backgroundColorcheck: false,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            },
            ],


        }
    }
    handleCustomIndexSelect = (index) => {

        this.setState(prevState => ({ ...prevState, customStyleIndex: index }))
    }
    showmenufn(value) {
        this.setState({ showmenu: value })
    }
    showcreategroupfn(value) {
        this.setState({ creategroupmenu: value })
    }
    navigatescreen() {
        this.props.navigation.navigate("Settings"),
            this.showmenufn(false);
    }
    navigatecreategroupscreen() {
        this.props.navigation.navigate("CreateGroup")
        this.showcreategroupfn(false);
    }
    selectItem = (data, itemcolor) => {
        console.log("selectItem before data==id" + "==" + JSON.stringify(data.item.backgroundColorcheck))
        data.item.backgroundColorcheck = !data.item.backgroundColorcheck;
        data.item.backgroundColorofitem = data.item.backgroundColorcheck ? data.item.backgroundColorofitem = itemcolor : data.item.backgroundColorofitem = "#FAF4FF";
        // console.log("dataid=="+data.item.id+"==selectedid"+item.id)
        const index = this.state.admingrouplist.findIndex(
            item => data.item.id === item.id
        );
        this.state.admingrouplist[index] = data.item;
        console.log("selectItem after data==" + JSON.stringify(this.state.admingrouplist))
        this.setState({
            admingrouplist: this.state.admingrouplist,
        });
    };

    renderItem = data => {
        if (data.item.empty === true) {
            return <View style={{ backgroundColor: 'trasparent' }} />;
        }
        // console.log("data" + JSON.stringify(data))
        return (

            <Pressable
                style={({ pressed }) => [{
                    elevation: 10,
                    borderRadius: hp('1%', 812), flexDirection: 'row',
                    justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                    height: hp('10%', 812),
                    backgroundColor: pressed
                        ? '#f2f2f2'
                        : '#fff',
                    marginLeft: '5%', marginRight: '3%', marginBottom: '1%', marginTop: '1%',
                    borderEndColor: data.item.backgroundColorofitem, borderBottomRightRadius: 30,
                    borderEndWidth: 10,

                }]}
                onLongPress={() => this.selectItem(data, "#FFE39E")}
                onPress={() => {
                    this.props.navigation.navigate("AdminChatScreen", {
                        itemId: data.item.id,
                        tittle: data.item.tittle,
                        grouptext: data.item.grouptext,
                        message: data.item.message,
                        otherParam: 'true',
                        uri: data.item.uri,
                        admin: data.item.admin

                    });
                }}>
                <View style={styles.adminfirstcolum}>

                    {/* <View style={{
                        backgroundColor: '#fff', elevation: 5,
                        width: wp('18%', 812), height: hp('8%', 812),
                        justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                        borderRadius: hp('1%', 812),
                        shadowOffset: { width: 10, height: 10 },
                        shadowColor: 'transparent',


                    }}> */}

                        <Image style={{
                            resizeMode: 'contain', width: wp('15%', 812),
                            height: hp('7%', 812),
                        }} source={data.item.uri} />
                    {/* </View> */}

                </View>
                <View style={styles.adminseccolumn}>
                    <View style={{ flex: 0.2 }}></View>
                    <View style={{flex:0.8, flexDirection: 'row', justifyContent: 'center', }}>
                        <View style={{ flex: 0.6, justifyContent: 'center' }}>
                            <Text numberOfLines={1} style={TextStyles.itemText}>{data.item.tittle}</Text>
                        </View>
                        <View style={{
                           flex: 0.4, alignContent: 'flex-end', alignItems: 'flex-end', justifyContent: 'center', padding: '1%'
                        }}>
                            <Text numberOfLines={1} style={TextStyles.admintimetext}>3.35pm</Text>
                        </View>

                    </View>
                    <View style={{ flex:1,flexDirection: 'row',  justifyContent: 'center',}}>
                        <View style={{ flexDirection: 'row', flex: 1,}}>
                            <Image style={{
                                resizeMode: 'contain', width: wp('4%', 812), top: -9,

                            }} source={require('../Images/Vectorgroup.png')} />
                            <Text numberOfLines={1} style={TextStyles.h7lightwhitetext}>
                            {" "}12{" "}Members
                                </Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, marginRight: '2%', justifyContent: 'space-between' }}>
                            <Image style={{
                                resizeMode: 'contain', width: wp('3%', 812), top: -9

                            }} source={require('../Images/star.png')} />
                            <Text numberOfLines={1} style={TextStyles.h7lightwhitetext} >
                            {" "}13{" "}Star{" "}Messaages
                              </Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.2,}}></View>
                    <View style={{flex:1, justifyContent: 'center',flexDirection: 'row', width: '100%', flex: 1, marginTop: '-3%',alignItems:'center',height:'100%',}}>
                        {data.item.purplecheck ?
                           <View style={{ flexDirection: 'row', width: wp('6%', 812) ,alignItems:'center',height:'78%',marginTop:'-2%'}}>
                           <Image style={{
                           resizeMode: 'contain',width: wp('4.5%', 812) ,

                       }} source={data.item.purplecheck} />
                           <Image style={{
                           resizeMode: 'contain',width: wp('4.5%', 812) ,position:'relative',left:-13

                       }} source={data.item.purplecheck} />
                       </View>
                            : null}
                        {data.item.greycheck ?
                              <View style={{ flexDirection: 'row', width: wp('6%', 812) ,alignItems:'center',height:'78%',marginTop:'-2%'}}>
                                <Image style={{
                                resizeMode: 'contain',width: wp('4.5%', 812) ,

                            }} source={data.item.greycheck} />
                                <Image style={{
                                resizeMode: 'contain',width: wp('4.5%', 812) ,position:'relative',left:-13

                            }} source={data.item.greycheck} />
                            </View>
                            : null}
                        <View style={{ flex: 1, }}>
                            <Text numberOfLines={1} style={TextStyles.memitemText}>{data.item.text}</Text>
                        </View>

                    </View>
                </View>


            </Pressable>

        );
    };
    rendergeneralItem = ({ item, index }) => {
        if (item.empty === true) {
            return <View style={{ backgroundColor: 'trasparent' }} />;
        }

        return (
            <Pressable activeOpacity={0.5}
                style={({ pressed }) => [{
                    elevation: 10,
                    backgroundColor: pressed ? '#f2f2f2' : '#fff',
                    flexDirection: 'row', borderRadius: hp('1%', 812),
                    justifyContent: 'center', alignContent: 'center',
                    alignItems: 'center', marginBottom: '1%', marginTop: '1%',
                    marginLeft: '5%', marginRight: '3%', height: hp('10%', 812),
                    borderEndColor: item.backgroundColorofitem, borderBottomRightRadius: 30,
                    borderEndWidth: 10,
                }]}
                // onLongPress={()=>this.setState({onLongPress:true})}
                onPress={() => {
                    this.props.navigation.navigate("GeneralChatScreen", {
                        itemId: item.id,
                        tittle: item.tittle,
                        grouptext: item.grouptext,
                        otherParam: 'true',
                        uri: item.uri,
                        admin: item.admin
                    });
                }}>
                <View style={styles.generalfirstcolum}>

                    <Image style={{
                        resizeMode: 'contain', width: wp('13%', 812),
                        height: hp('10%', 812),
                    }} source={item.uri} />

                </View>
                <View style={styles.generalseccolumn}>
                    <View style={{flex: 0.4, }}></View>
                    <View style={{ flex: 0.6, justifyContent: 'center', paddingTop: '1%' }}>
                            <Text numberOfLines={1} style={TextStyles.itemText}>{item.tittle}</Text>
                        </View>
                        <View style={{ flex: 0.2,}}></View>
                    <View style={{flex:1, justifyContent: 'center',flexDirection: 'row', width: '100%', flex: 1, alignItems:'center',}}>
                        {item.purplecheck ?
                           <View style={{ flexDirection: 'row', width: wp('6%', 812) ,alignItems:'center',height:'78%',marginTop:'-5%'}}>
                           <Image style={{
                           resizeMode: 'contain',width: wp('4.5%', 812) ,

                       }} source={item.purplecheck} />
                           <Image style={{
                           resizeMode: 'contain',width: wp('4.5%', 812) ,position:'relative',left:-13

                       }} source={item.purplecheck} />
                       </View>
                            : null}
                        {item.greycheck ?
                              <View style={{ flexDirection: 'row', width: wp('6%', 812) ,alignItems:'center',height:'78%',marginTop:'-5%'}}>
                                <Image style={{
                                resizeMode: 'contain',width: wp('4.5%', 812) ,

                            }} source={item.greycheck} />
                                <Image style={{
                                resizeMode: 'contain',width: wp('4.5%', 812) ,position:'relative',left:-13

                            }} source={item.greycheck} />
                            </View>
                            : null}
                             <View style={{ flex: 1, }}>
                            <Text numberOfLines={1} style={TextStyles.memitemText}>{item.text}</Text>
                        </View>

                    </View>
                </View>
                <View style={styles.generalthirdcolumn}>
                         <View style={{flex: 0.4, }}></View>
                    <View style={{ flex: 0.3, justifyContent: 'center', }}>
                    <Text style={{ color: item.countvalue ? '#8457BE' : '#767676', fontFamily: 'silka-medium-webfont', textAlign: 'right',
                     fontSize: RFValue(10, 812), }}>{item.time}</Text>
                        </View>
                    <View style={{ flexDirection: 'row', flex: 0.8, paddingTop: '1%'}}>
                    {item.countvalue ?
                        <ImageBackground style={styles.ellipsebackground} resizeMode='contain'
                            source={require('../Images/ellipse667.png')}>
                            <Text style={TextStyles.counttext}>{item.count}</Text>
                        </ImageBackground>
                        : null}
                    </View>
                </View>
            </Pressable>
        )
    }

    renderboradcastitem = data => {
        if (data.item.empty === true) {
            return <View style={{ backgroundColor: 'trasparent' }} />;
        }
        // console.log("data" + JSON.stringify(data))
        return (

            <Pressable
                activeOpacity={0.5}
                style={({ pressed }) => [{
                    elevation: 10,
                    borderRadius: hp('1%', 812), flexDirection: 'row',
                    justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                    height: hp('10%', 812),
                    backgroundColor: pressed
                        ? '#f2f2f2'
                        : '#fff',
                    marginLeft: '5%', marginRight: '3%', marginBottom: '1%', marginTop: '1%',
                    borderEndColor: data.item.backgroundColorofitem, borderBottomRightRadius: 30,
                    borderEndWidth: 10,
                }]}
                // onLongPress={() => this.selectItem(data, "#FFE39E")}
                onPress={() => {
                    this.props.navigation.navigate("BroadcastChatScreen", {
                        itemId: data.item.id,
                        tittle: data.item.tittle,
                        grouptext: data.item.grouptext,
                        message: data.item.message,
                        otherParam: 'true',
                        uri: data.item.uri,
                        admin: data.item.admin

                    });
                    // this.props.navigation.navigate("BroadcastChatScreen")
                }}

            >
                <View style={styles.boradcastfirstcolum}>
                    <View style={{
                        backgroundColor: data.item.backgroundColorofitem, elevation: 5,
                        width: wp('14%', 812), height: hp('7%', 812),
                        justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                        borderRadius: hp('1%', 812),
                       
                    }}>
                        {/* <Text>Hello</Text> */}
                        <Image style={{
                            resizeMode: 'contain', width: wp('8%', 812),
                            height: hp('7%', 812),
                        }} source={data.item.uri} />
                    </View>

                </View>
                <View style={styles.adminseccolumn}>
                    <View style={{ flex: 0.2 }}></View>
                    <View style={{flex:0.8, flexDirection: 'row', justifyContent: 'center', }}>
                        <View style={{ flex: 0.6, justifyContent: 'center' }}>
                            <Text numberOfLines={1} style={TextStyles.itemText}>{data.item.tittle}</Text>
                        </View>
                        <View style={{
                           flex: 0.4, alignContent: 'flex-end', alignItems: 'flex-end', justifyContent: 'center', padding: '1%'
                        }}>
                            <Text numberOfLines={1} style={TextStyles.admintimetext}>3.35pm</Text>
                        </View>

                    </View>
                    <View style={{ flex:1,flexDirection: 'row',  justifyContent: 'center',}}>
                        <View style={{ flexDirection: 'row', flex: 1,}}>
                            <Image style={{
                                resizeMode: 'contain', width: wp('4%', 812), top: -9,

                            }} source={require('../Images/Vectorgroup.png')} />
                            <Text numberOfLines={1} style={TextStyles.h7lightwhitetext}>
                            {" "}12{" "}Members
                                </Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, marginRight: '2%', justifyContent: 'space-between' }}>
                            <Image style={{
                                resizeMode: 'contain', width: wp('3%', 812), top: -9

                            }} source={require('../Images/star.png')} />
                            <Text numberOfLines={1} style={TextStyles.h7lightwhitetext} >
                            {" "}13{" "}Star{" "}Messaages
                              </Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.2,}}></View>
                    <View style={{flex:1, justifyContent: 'center',flexDirection: 'row', width: '100%', flex: 1, marginTop: '-3%',alignItems:'center',height:'100%',}}>
                        {data.item.purplecheck ?
                           <View style={{ flexDirection: 'row', width: wp('6%', 812) ,alignItems:'center',height:'100%',}}>
                           <Image style={{
                           resizeMode: 'contain',width: wp('4.5%', 812) ,

                       }} source={data.item.purplecheck} />
                           <Image style={{
                           resizeMode: 'contain',width: wp('4.5%', 812) ,position:'relative',left:-13

                       }} source={data.item.purplecheck} />
                       </View>
                            : null}
                        {data.item.greycheck ?
                              <View style={{ flexDirection: 'row', width: wp('6%', 812) ,alignItems:'center',height:'100%',}}>
                                <Image style={{
                                resizeMode: 'contain',width: wp('4.5%', 812) ,

                            }} source={data.item.greycheck} />
                                <Image style={{
                                resizeMode: 'contain',width: wp('4.5%', 812) ,position:'relative',left:-13

                            }} source={data.item.greycheck} />
                            </View>
                            : null}
                        <View style={{ flex: 1, }}>
                            <Text numberOfLines={1} style={TextStyles.memitemText}>{data.item.text}</Text>
                        </View>

                    </View>
                </View>

              
            </Pressable>



        );
    };

    render() {
        const { customStyleIndex, count_val } = this.state;
        return (
            <KeyboardAvoidingView style={styles.maincontainer} >
                <View style={{ height: hp('13%', 812), backgroundColor: '#511D73', backgroundGradient:'vertical'}}>
                  
                    <View style={styles.mainfirstview}>
                        <TouchableOpacity style={styles.rounrectview} onPress={() => { Alert.alert("SideBar clicked") }}>
                            {/* <Image style={{resizeMode: 'contain', width: wp('6%', 812), height: hp('6%', 812)}} source={require('../Images/menu.png')} /> */}
                            <Image style={styles.roundrecimagestyles} source={require('../Images/logo.png')} />
                        </TouchableOpacity>
                        <View style={styles.groupinview}>
                            {/* <Image style={styles.roundrecimagestyles} source={require('../Images/logo.png')} /> */}
                        </View>
                        <TouchableOpacity style={styles.searchview} onPress={() => { this.props.navigation.navigate("Search") }}>
                            <Image style={{resizeMode: 'contain', width: wp('6%', 812), height: hp('6%', 812)}} source={require('../Images/search.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.moreview} onPress={() => { this.showmenufn(true) }}>
                            <Image style={{
                                resizeMode: 'contain', width: wp('3%', 812),
                                height: hp('2%', 812),
                            }} source={require('../Images/more3x.png')} />
                        </TouchableOpacity>
                        {/* </View> */}

                    </View>

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
                                        height: 'auto',backgroundColor: '#fff',
                                        elevation: 50, marginLeft: 'auto', padding: '2%',
                                        // borderEndColor: '#69C7FF', 
                                        // borderBottomRightRadius: 30,
                                        // borderEndWidth: 10,
                                        borderStartColor:'#69C7FF',
                                        borderTopStartRadius:30,
                                        borderStartWidth:8,
                                        borderBottomStartRadius:30,
                                        // borderBottomWidth:2,
                                        // borderBottomColor:'#69C7FF',
                                        marginRight:'5%',
                                        width: 231,
                                        top: hp('5%',812),
                                        borderRadius:15,
                                        // height:194,
                                    
                                    }}>
                                        <Pressable
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : 'white',
                                                    borderRadius: 8,
                                                    padding: 6
                                                },

                                            ]}
                                            onPress={() => { Alert.alert("Create group"), this.showmenufn(false) }}>
                                            <Text style={TextStyles.h5purple}>New Group</Text>
                                        </Pressable>
                                        <Pressable
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : 'white',
                                                    borderRadius: 8,
                                                    padding: 6
                                                },

                                            ]}
                                            onPress={() => { Alert.alert("Create Broadcast"), this.showmenufn(false) }}>
                                            <Text style={TextStyles.h5purple}>New Broadcast</Text>
                                        </Pressable>
                                        <Pressable
                                            style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : 'white',
                                                    borderRadius: 8,
                                                    padding: 6
                                                },

                                            ]}
                                            onPress={() => { Alert.alert("Create group"), this.showmenufn(false) }}>
                                            <Text style={TextStyles.h5purple}>Starred messages</Text>
                                        </Pressable>
                                        
                                            <Pressable
                                                style={({ pressed }) => [
                                                    {
                                                        backgroundColor: pressed
                                                            ? 'rgb(210, 230, 255)'
                                                            : 'white',
                                                        borderRadius: 8,
                                                        padding: 6
                                                    },

                                                ]}
                                                onPress={() => { this.navigatescreen() }} >
                                                <Text style={TextStyles.h5purple}>Settings</Text>
                                            </Pressable>
                                        
                                        <View style={{ flexDirection: 'row', marginLeft:'auto'}}>
                                            <Pressable style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? 'rgb(210, 230, 255)'
                                                        : 'white',
                                                    borderRadius: 8,
                                                    padding: 6,
                                                    marginRight:'3%'
                                                },

                                            ]} onPress={() => { this.showmenufn(false) }}>
                                                <Text style={TextStyles.oktextstyle}>OK</Text>
                                            </Pressable>

                                        </View>
                                    </View>
                                </Pressable>
                            </Modal>
                        </View>
                        : null}
                
                    <SegmentedControlTab
                        values={['Admin', 'General', 'Broadcast','AdminT']}
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
                </View>


                <View style={{ flex: 1, borderTopStartRadius: 35, borderTopWidth: 40, borderColor: '#FAF4FF', width: '100%', height: '100%', backgroundColor: '#FAF4FF' }}>
                    {customStyleIndex === 3 && this.state.admingrouplist.length > 0
                        ?
                        <FlatList
                            data={formatrowdata(this.state.admingrouplist)}
                            style={styles.admincontainer}
                            renderItem={(item) => this.renderItem(item)}
                        // numColumns={numColumns}
                        />

                        : null}
                    {/* <ScrollView> */}
                    {customStyleIndex === 0 ?

                        <View style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#FAF4FF',  alignItems: 'center', paddingLeft: '5%', paddingRight: '5%' }}>
                            <Image
                                resizeMode='center'
                                style={{
                                    resizeMode: 'contain', width: wp('100%', 812),
                                    height: hp('30%', 812)
                                }} source={require('../Images/group3x.png')} />
                            <View style={{ marginBottom: '3%' }}>
                                <Text style={TextStyles.h1blackbold}>Create Your Group</Text>
                            </View>
                            <Text style={TextStyles.h4whitegreycenter}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                            <View style={CssStyles.buttonview}>
                                <TouchableOpacity style={CssStyles.button} onPress={() => this.showcreategroupfn(true)}>
                                    <Text style={CssStyles.buttontext}>CREATE GROUP</Text>
                                    {/* <Image source={require('../Images/rightarrow.png')} style={CssStyles.rightarrowstyle} /> */}
                                </TouchableOpacity>
                            </View>

                        </View>

                        : null}
                    {/* </ScrollView> */}
                    {/* </View> */}
                    {customStyleIndex === 1
                        &&

                        <FlatList
                            data={formatrowdata(this.state.generalgrouplist)}
                            style={styles.gencontainer}
                            renderItem={this.rendergeneralItem}

                        />
                    }
                    {customStyleIndex === 2
                        &&

                        <FlatList
                            data={formatrowdata(this.state.broadcastgrouplist)}
                            style={styles.admincontainer}
                            renderItem={(item) => this.renderboradcastitem(item)}
                        // numColumns={numColumns}
                        />

                    }

                    {customStyleIndex === 3 && this.state.admingrouplist.length > 0
                        &&
                        <View style={{
                            flex: 1,
                            position: 'absolute',
                            margin: 16,
                            right: 0,
                            bottom: 0,
                        }}>
                            <TouchableOpacity onPress={() => {  this.showcreategroupfn(true) }}>
                                <Image style={{
                                    resizeMode: 'contain', width: wp('20%', 812),
                                    height: hp('15%', 812)
                                }} source={require('../Images/group25.png')} />
                            </TouchableOpacity>
                        </View>
                    }

                    {customStyleIndex === 2
                        &&
                        <View style={{
                            flex: 1,
                            position: 'absolute',
                            margin: 16,
                            right: 0,
                            bottom: 0,
                        }}>
                            <TouchableOpacity onPress={() => {  this.showcreategroupfn(true) }}>
                                <Image style={{
                                    resizeMode: 'contain', width: wp('15%', 812),
                                    height: hp('15%', 812)
                                }} source={require('../Images/Group69.png')} />
                            </TouchableOpacity>
                        </View>
                    }
                </View>
                {/* Create group Model starts */}
                {this.state.creategroupmenu == true ?
                    <View>
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={this.state.creategroupmenu}
                            onRequestClose={() => {
                                this.showcreategroupfn(false);
                            }}
                        >
                            <Pressable style={{
                                width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5);'

                            }}
                                onPress={() => { this.showcreategroupfn(false) }}
                            >
                                <View style={{
                                    elevation: 50, backgroundColor: '#fff', width: '100%', height: hp('60%', 812),
                                    position: 'absolute', bottom: hp('15%', 812), shadowOffset: { width: 10, height: 10, },
                                    shadowColor: 'black', shadowOpacity: 1.0, marginLeft: '5%', marginRight: '5%', width: '90%',
                                    borderRadius:hp('2%',812),padding:'1.5%'

                                }}>
                                    <ScrollView >
                                        <Pressable style={{ marginLeft: 'auto', width: 'auto', marginRight: '5%' }} onPress={() => { this.showcreategroupfn(false) }}>
                                            <Image style={{
                                                resizeMode: 'contain', width: wp('5%', 812),
                                                height: hp('5%', 812)
                                            }} source={require('../Images/x-circle.png')} />
                                        </Pressable>
                                        <View style={{ width: 'auto', alignItems: 'center', alignContent: 'center', justifyContent: 'center', marginBottom: '2%' }} onPress={() => { Alert.alert('upload') }}>
                                            <ImageBackground resizeMode='contain'
                                                source={require('../Images/ellipse10.png')}
                                                style={{
                                                    width: wp('38%', 812),
                                                    height: hp('18%', 812), alignItems: 'center', alignContent: 'center', justifyContent: 'center',
                                                }}

                                            >
                                                <Image style={{
                                                    resizeMode: 'contain', width: wp('25%', 812),
                                                    height: hp('18%', 812)
                                                }} source={require('../Images/uploaddoc.png')} />
                                            </ImageBackground>
                                        </View>
                                        <Text style={[TextStyles.h4black,{textAlign:'center',color:'#333333'}]}>You can upload the contact list (.csv, .xls, .vvf) of group members </Text>
                                        <View style={CssStyles.whitebuttonview}>
                                            <Pressable style={CssStyles.whitebutton} onPress={() => { Alert.alert('upload') }}>
                                                <Text style={CssStyles.whitebuttontext}>UPLOAD</Text>
                                            </Pressable>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row', justifyContent: 'center',
                                            alignContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Image style={{
                                                resizeMode: 'contain', width: wp('18%', 812),
                                                height: hp('3%', 812)
                                            }} source={require('../Images/line.png')} />
                                            <Text style={TextStyles.h4lightwhitecenter}>{' '}or{' '}</Text>
                                            <Image style={{
                                                resizeMode: 'contain', width: wp('18%', 812),
                                                height: hp('3%', 812)
                                            }} source={require('../Images/line.png')} />
                                        </View>
                                        <View style={CssStyles.darkpurplebuttonview}>
                                            <Pressable style={CssStyles.darkpurplebutton} onPress={() => { this.navigatecreategroupscreen() }}>
                                                <Text style={CssStyles.darkpurplebuttontext}>SELECT FROM THE CONTACT LIST</Text>
                                            </Pressable>
                                        </View>
                                    </ScrollView>
                                </View>
                            </Pressable>
                        </Modal>
                    </View>
                    : null}

                {/* create group model ends */}

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    maincontainer: { flex: 1, backgroundColor: '#511D73', },

    // header styles
    mainfirstview: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%',height:hp('8%',812),},
    rounrectview: { flex:1, width:wp('10%',812),alignItems: 'center', alignContent: 'center', justifyContent: 'center',},
    roundrecimagestyles: { resizeMode: 'contain', width: wp('7%', 812), height: hp('7%', 812),},
    moreview: {   flex:1,width:wp('10%',812), height: hp('100%', 812),alignItems: 'center', justifyContent: 'center', },
    searchview: { flex:1,width:wp('10%',812), alignItems: 'center', justifyContent: 'center',height: hp('100%', 812), },
    groupinview: { width:wp('65%',812),alignItems: 'center', alignContent: 'center', justifyContent: 'center',},

    // Tab styles
    tabsContainerStyle: { backgroundColor: '#511D73', borderColor: '#511D73', height: hp('5%', 812), marginLeft: '6%' },
    tabStyle: { backgroundColor: '#511D73', justifyContent: 'center', alignItems: 'center', borderColor: '#511D73', },
    activeTabStyle: { backgroundColor: '#511D73', borderBottomColor: '#fff', borderBottomWidth: 5, borderTopColor: '#511D73' },
    tabTextStyle: { color: '#A47CC3', fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont', width: 'auto', justifyContent: 'center', alignItems: 'center', },
    activeTabTextStyle: { color: '#fff', width: 'auto', fontSize: RFValue(24, 812), fontFamily: 'silka-bold-webfont', justifyContent: 'center', alignItems: 'center', },


    activeTabBadgeContainerStyle: { backgroundColor: '#fff', borderEndWidth: 3, borderStartWidth: 3, borderEndColor: '#4429B5', borderStartColor: '#4429B5' },
    tabBadgeContainerStyle: { backgroundColor: '#2D1786', borderEndWidth: 3, borderStartWidth: 3, borderEndColor: '#a9a9a9', borderStartColor: '#a9a9a9' },
    activeTabBadgeStyle: { color: '#2D1786', justifyContent: 'center', alignItems: 'center', fontSize: RFValue(18, 812), marginTop: '8%', fontFamily: 'silka-bold-webfont', },
    tabBadgeStyle: { color: '#a9a9a9', fontSize: RFValue(18, 812), paddingRight: 3, justifyContent: 'center', fontFamily: 'silka-bold-webfont', alignItems: 'center', marginTop: '8%', },

    // admin container styles
    admincontainer: { flex: 1, backgroundColor: 'transparent', marginTop: '-6%', paddingBottom: '2%', },
    admingrid: { elevation: 10, borderRadius: 10, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', height: hp('12%', 812), backgroundColor: '#FAF4FF', marginLeft: '3%', marginRight: '3%', marginTop: '3%', marginBottom: '1%', },
    adminfirstcolum: { flex: 1, alignItems: 'center', justifyContent: 'center',  },
    boradcastfirstcolum: { flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%',marginLeft:'1%',marginRight:'1%' },
    adminseccolumn: { flex: 4, justifyContent: 'center',paddingLeft: '1%', alignContent: 'center', alignItems: 'center',width: '100%', height: '100%',
  },
    adminthirdcolumn: { flex: 1,  paddingLeft: '3%' },
    itemText: { flex: 1, fontSize: RFValue(16, 812), color: '#000', fontFamily: 'silka-bold-webfont', paddingBottom: '1%', },
    memitemText: { flex: 1, fontSize: RFValue(16, 812), color: '#333333', fontFamily: 'silka-medium-webfont', marginRight: '2%' },
    lastborder: { borderBottomColor: '#333333', borderBottomWidth: 0.2, marginLeft: '2%', marginRight: '2%' },

    // general container starts
    gencontainer: { flex: 1, backgroundColor: 'transparent', marginTop: '-6%', paddingBottom: '2%', width: '100%', height: '100%', },
    counttext: { fontSize: RFValue(16, 812), color: '#fff', fontFamily: 'silka-bold-webfont', textAlign: 'center', },
    ellipsebackground: { width: wp('8%', 812), height: hp('4%', 812), alignItems: 'center', alignContent: 'center', justifyContent: 'center', },
    // generalgrid: { elevation: 10,  backgroundColor: pressed
    //     ? '#f2f2f2'
    //     :'#fff', flexDirection: 'row', borderRadius: hp('1%', 812), justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: '2%', marginLeft: '3%', marginRight: '3%', height: hp('11%', 812), },
    generalfirstcolum: { flex: 1, alignItems: 'center', marginLeft: '2%', justifyContent: 'center', },
    generalseccolumn: { flex: 3, justifyContent: 'center', width: '100%', height: '100%', paddingLeft: '1%', alignContent: 'flex-end', },
    generalthirdcolumn: { flex: 1, marginRight: '1%', alignItems: 'center', justifyContent: 'center', alignContent: 'center', },
    genitemText: { fontSize: RFValue(16, 812), color: '#000', fontFamily: 'silka-bold-webfont', paddingBottom: '2%' },
    genmemitemText: { fontSize: RFValue(16, 812), color: '#999999', fontFamily: 'silka-medium-webfont', flex: 1, },

});