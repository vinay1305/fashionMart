import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"#FFF"
    },
    circleContainer:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:"30%",
       // marginLeft:"30%",
        // height:160,
        padding:"2%",
        width:160,
        borderRadius:160,
        backgroundColor:"#FFF",
        //alignContent:"center",
        elevation:20
    },
    smallCircleContainer:{
        alignItems:"center",
        justifyContent:"center",
        // marginTop:"30%",
        // marginLeft:"30%",
        height:140,
        width:140,
        borderRadius:140,
        backgroundColor:"#000",
        alignContent:"center",
    },
    orderPlacedContainer:{
        marginTop:"6%",
        alignItems:"center"
    },
    orderText:{
        fontFamily:"Montserrat-Regular",
        color:"#000",
        fontSize:25,
        lineHeight:25,
        fontWeight:"700"
    },
    descTextContainer:{
        marginTop:"8%"
    },
    descText:{
        fontFamily:"Montserrat-Regular",
        fontWeight:"400",
        color:"#A6A6A6",
        fontSize:20,
        marginBottom:"60%"

    },
    btnContainer:{
        
        // height:"25%",
        padding:"5%",
        width:"90%",
        marginLeft:"5%",
        backgroundColor:"#FFF",
        marginTop:"2%",
        borderRadius:40,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:"#17181A"
    },
    btnText:{
        fontSize:18,
        fontWeight:"400",
        fontFamily:"Montserrat",
        color:"#000"
    },
    secondBtnContainer:{
        // height:"35%",
        width:"90%",
        padding:"5%",
        marginTop:"-35%",
        marginLeft:"5%",
        borderRadius:40,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#000",
    },
    secondBtnText:{
        fontSize:18,
        fontWeight:"400",
        fontFamily:"Montserrat",
        color:"#FFF"
    }
})
export default styles