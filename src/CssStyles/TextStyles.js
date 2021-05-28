import { StyleSheet, PixelRatio, Platform } from 'react-native';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const TextStyles = StyleSheet.create({

    h1whitecenterbold:{ fontSize: RFValue(30, 812), fontFamily: 'silka-bold-webfont', color: '#fff',textAlign:'center', },
    h1blackbold:{ fontSize: RFValue(30, 812), fontFamily: 'silka-bold-webfont', textAlign: 'center',color:'#000' }, 
    h2whitecenter:{fontSize: RFValue(20, 812), fontFamily: 'silka-medium-webfont', color: '#fff', textAlign: 'center',},
   h2whitecenterbold:{ fontSize: RFValue(20, 812), fontFamily: 'silka-bold-webfont', color: '#fff', textAlign: 'center' },
   h2blackbold:{ fontSize: RFValue(20, 812), fontFamily: 'silka-bold-webfont', textAlign: 'center',color:'#000' }, 

   h3whitecenter:{ fontSize: RFValue(18, 812), fontFamily: 'silka-medium-webfont', color: '#fff', textAlign: 'center', },
    h3white:{ color: '#fff', fontSize: RFValue(18, 812), fontFamily: 'silka-medium-webfont' },
    h3blackcenter:{ fontSize: RFValue(18, 812), fontFamily: 'silka-medium-webfont', textAlign: 'center',color:'#000' },
    h3whitebold:{ fontSize: RFValue(18, 812), color: '#fff', fontFamily: 'silka-bold-webfont' },
    h3blackbold:{ fontSize: RFValue(18, 812), fontFamily: 'silka-bold-webfont', textAlign: 'center',color:'#000' }, 
    

    h4whitecenter:{ fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont', color: '#fff', textAlign: 'center', },
    h4purpletext:{ fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont', color: '#792BA9' },
    h4purpletextcenter:{ fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont', textAlign: 'center', color: '#792BA9' },
    h4white:{ flex: 1, fontSize: RFValue(16, 812), color: '#fff', fontFamily: 'silka-medium-webfont' },
    h4whitewof:{ fontSize: RFValue(16, 812), color: '#fff', fontFamily: 'silka-medium-webfont' },
    h4lightwhite:{fontSize: RFValue(16, 812),color: '#808080',fontFamily: 'silka-medium-webfont',},
    h4blackcenter:{ fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont', color: '#000', textAlign: 'center', },
    h4lightwhitecenter:{ fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont', textAlign: 'center', color: '#999999' },
    h4whitegreycenter:{ fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont', textAlign: 'center', color: '#333333' },
    h4black:{ fontSize: RFValue(16, 812), color: '#000', fontFamily: 'silka-medium-webfont' },
    
    h5blackbold: { fontSize: RFValue(14, 812), color: '#000', fontFamily: 'silka-bold-webfont', },
    h5semiblack:{ fontSize: RFValue(14, 812), fontFamily: 'silka-medium-webfont', color:'#333333'},
    h5black:{ fontSize: RFValue(14, 812), fontFamily: 'silka-medium-webfont', color:'#333333'},

    h5lightpurple:{ fontSize: RFValue(14, 812), fontFamily: 'silka-medium-webfont', color:'#792BA9'},
    h5lightpurplebold:{ fontSize: RFValue(16, 812), fontFamily: 'silka-bold-webfont', color:'#792BA9'},
    h5purple:{ fontSize: RFValue(14, 812), fontFamily: 'silka-medium-webfont', color:'#560A86'},
    h5purplebold:{ fontSize: RFValue(15, 812), fontFamily: 'silka-bold-webfont', color:'#560A86'},
    h5blackcenter:{ fontSize: RFValue(14, 812), fontFamily: 'silka-medium-webfont', color:'#000',textAlign:'center'},
    h5white:{ flex: 1, fontSize: RFValue(14, 812), color: '#fff', fontFamily: 'silka-medium-webfont', },
    h5whitebold:{ flex: 1, fontSize: RFValue(14, 812), color: '#fff', fontFamily: 'silka-bold-webfont', },

    h6white:{ flex: 1, fontSize: RFValue(14, 812), color: '#fff', fontFamily: 'silka-medium-webfont', },
    h6lightblack:{ fontSize: RFValue(14, 812), fontFamily: 'silka-medium-webfont', color:'#333333'},
    h6semiblack:{ fontSize: RFValue(14, 812), fontFamily: 'silka-medium-webfont', color:'#333333'},
    h7purplelightpurple:{ fontSize: RFValue(12, 812), fontFamily: 'silka-bold-webfont', color:'#560A86'},
    h7purplecont:{color: '#A47CC3', fontSize: RFValue(11, 812), fontFamily: 'silka-medium-webfont',},
    h7lightwhitetext:{ flex: 1, fontSize: RFValue(10, 812), color: '#7E8793', fontFamily: 'silka-medium-webfont',   },
    ptextcenter:{fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont', color: '#D9C9E4', textAlign: 'center', },
    h7lightblack:{ fontSize: RFValue(9, 812), fontFamily: 'silka-medium-webfont', color:'#999999'},

    inputtextstyle:{ fontSize: RFValue(18, 812), fontFamily: 'silka-medium-webfont', color: '#fff', marginLeft: '2%' },
    phoneinputtextstyle:{ fontSize: RFValue(18, 812), fontFamily: 'silka-medium-webfont', color: '#fff',  },

    itemText: { flex: 1, fontSize: RFValue(14, 812), color: '#560A86', fontFamily: 'silka-medium-webfont', paddingBottom: '1%', },
    memitemText: { flex: 1, fontSize: RFValue(12, 812), color: '#7E8793', fontFamily: 'silka-medium-webfont',  marginRight: '2%' },
    admintimetext:{ color: '#767676', fontFamily: 'silka-medium-webfont', fontSize: RFValue(10, 812), marginRight: '3%', },
    genitemText: {  flex: 1, fontSize: RFValue(14, 812), color: '#560A86', fontFamily: 'silka-medium-webfont',},
    genmemitemText: { fontSize: RFValue(12, 812), color: '#7E8793', fontFamily: 'silka-medium-webfont', flex: 1, },
    counttext: { fontSize: RFValue(10, 812), color: '#fff', fontFamily: 'silka-medium-webfont', textAlign: 'center', },

    tabTextStyle: { color: '#A47CC3', fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont', width: 'auto', justifyContent: 'center', alignItems: 'center', },
    activeTabTextStyle: { color: '#fff', width: 'auto', fontSize: RFValue(24, 812), fontFamily: 'silka-bold-webfont', justifyContent: 'center', alignItems: 'center', },

    oktextstyle:{
        color: '#69C7FF',
        fontFamily: 'silka-medium-webfont',
        fontSize: RFValue(14, 812)
    },

    brocastext:{ fontSize: RFValue(12, 812), fontFamily: 'silka-medium-webfont', color:'#800080',textAlign:'center',}


})
export default TextStyles;