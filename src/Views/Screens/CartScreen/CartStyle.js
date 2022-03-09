import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"#FFFFFF"
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
          flexDirection:"row",
          alignItems:"center"
      },
      imgContainer:{
          marginLeft:"6%",
          marginTop:"5%"
      },
      img:{
          height:200,
          width:160,
          borderRadius:10
      },
      textContainer:{
          alignItems:"flex-start",
         // marginTop:"-10%",
          marginLeft:"5%",
          alignContent:"center"
      },
      text:{
          fontSize:20,
          lineHeight:22,
          fontWeight:"600",
          fontFamily:"Poppins",
          color:"#000",
          
      },
      subText:{
          color:"#A6A6A6",
         // marginLeft:"-58%",
          marginTop:"3%",
          fontFamily:"Poppins",
          //justifyContent:"flex-end"
          
      },
      brand:{
          color:"#000",
         // justifyContent:"flex-start",
          //marginLeft:"20%"
      },
      sizeContainer:{
          height:38,
          width:38,
          borderRadius:38,
          backgroundColor:"#000",
        marginLeft:"3%",
          marginTop:"8%",
          justifyContent:"center",
          alignItems:"center",
          alignContent:"flex-end"
      },
      size:{
          color:"#FFF",
          fontFamily:"Poppins",
          fontSize:16
      },
      priceContainer:{
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",
          //marginTop:"20%",
          marginLeft:"5%",
          marginTop:"10%"
      },
      price:{
          fontSize:20,
          color:"#000",
          fontFamily:"Poppins-Regular",
          fontWeight:"600",
          lineHeight:27,
          

      },
      quantityContainer:{
          flexDirection:"row",
          justifyContent:"space-between",
          height:30,
          width:65,
          backgroundColor: '#DFDFDF',
          marginLeft:"20%",
          borderRadius:10,
          
          
      },
      quantityWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft:"10%"
      },
      line:{
          height:1,
          width:"90%",
          margin:"5%",
          backgroundColor:"#A6A6A6"
      },
      promoCodeContainer:{
          marginTop:"5%",
          marginLeft:"6%"
      },
      promoCode:{
          fontSize:20,
          lineHeight:22,
          fontWeight:"800",
          fontFamily:"Montserrat-Regular",
          color:"#000"

      },
      searchContainer:{
          height:"20%",
          width:"90%",
         // backgroundColor:"#DFDFDF",
          //marginTop:"3%",
          borderRadius:15,
          borderBottomWidth:1,
          marginLeft:"-3.5%"
      },
      textInput:{
          fontSize:20,
          marginLeft:"9%",
          marginBottom:"-3%"
      },
      deliveryContainer:{
          flexDirection:"row",
          justifyContent:"space-between",
          margin:"6%",
          marginTop:"-20%"
      },
      delivery:{
          fontSize:20,
          fontWeight:"800",
          color:"#000",
          fontFamily:"Montserrat"
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