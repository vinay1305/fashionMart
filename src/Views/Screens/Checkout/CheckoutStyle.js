
import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"#fff"
    },
    headerContainer: {
        height: '10%',
        width: '100%',
        backgroundColor: '#fff',
        elevation: 15,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
      },
      headerText: {
        marginTop: '7%',
        marginLeft: '3%',
        fontSize: 22,
        color: '#17181A',
        fontFamily: 'Poppins',
        fontWeight: '600',
      },
      midContainer:{
          marginTop:"5%",
          marginLeft:"7%"
      },
      userName:{
          fontSize:22,
          lineHeight:22,
          color:"#000",
          fontFamily:"Montserrat-Regular",
          fontWeight:"700"
      },
      addressText:{
          fontFamily:"Poppins",
          fontSize:16,
          color:"#A6A6A6",
          marginTop:"1%",
          lineHeight:24
      },
      line:{
        height:0.5,
        width:"90%",
        margin:"5%",
        backgroundColor:"#A6A6A6"
    },
    masterContainer:{
        flexDirection:"row",
        margin:"5%",
        marginTop:"-1%",
        alignItems:"center",
        //justifyContent:"space-between"

    },
    masterWrapper:{
        flexDirection:"row",
       // justifyContent:"flex-start",
        alignItems:"center"

    },
    masterText:{
        marginLeft:"10%"
    },
    checkContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:"5%"
    },
    textWrapper:{

    },
    typeText:{
        fontSize:18,
        fontFamily:"Montserrat-Regular",
        color:"#000",
        fontWeight:"600",
        lineHeight:22
    },
    companyText:{
        fontSize:14,
        color:"#A6A6A6",
        fontFamily:"Poppins",
        lineHeight:22
    },
    priceContainer:{
        alignItems:"center",
        marginRight:"10%"
    },
    checkoutPrice:{
        fontSize:18,
        fontFamily:"Montserrat-Regular",
        color:"#000",
        fontWeight:"800",
        lineHeight:22
    },
    promoCodeContainer:{
        flexDirection:"row",
        justifyContent:"flex-start",
        margin:"5%",
        alignItems:"center"
    },
    promocodeText:{
        fontSize:20,
        fontWeight:"800",
        color:"#000",
        fontFamily:"Montserrat"
    },
    plusContainer:{
        height:20,
        width:20,
        backgroundColor:"#000",
        borderRadius:20,
        marginRight:"4%",
        justifyContent:"center",
        alignItems:"center"
    },
    totalPrice:{
        fontSize:20,
        fontWeight:"800",
        color:"#000",
        fontFamily:"Montserrat",
        marginTop:"3%" ,
        marginLeft:"5%"
    },
    btnContainer:{
        height:"25%",
        width:"90%",
        margin:"5%",
        backgroundColor:"#17181A",
        marginTop:"2%",
        borderRadius:40,
        justifyContent:"center",
        alignItems:"center"
    },
    btnText:{
        fontSize:18,
        fontWeight:"400",
        fontFamily:"Montserrat",
        color:"#FFF"
    }
})
export default styles