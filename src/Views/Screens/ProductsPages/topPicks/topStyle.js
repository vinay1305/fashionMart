import { StyleSheet,Dimensions } from "react-native";
const {height,width}=Dimensions.get("screen")
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"#fff",
    },
    headerContainer: {
        height: '10%',
        width: '100%',
        backgroundColor: '#fff',
        elevation: 15,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom:"5%"
      },
      headerText: {
        marginTop: '7%',
        marginLeft: '3%',
        fontSize: 22,
        color: '#17181A',
        fontFamily: 'Poppins',
        fontWeight: '600',
      },
      topPicksContainer:{
        marginTop:"5%",
        
    },
    topPicksTitle:{
        color:"#000000",
        fontSize:20,
        lineHeight:22,
        fontFamily:"Montserrat",
        fontWeight:"600"
    },
    topPicksMainContainer:{
        height:"25%",
        width:"90%",
        marginHorizontal:"5%",
        
       //flex:0.35
        
  
    },
    topPicksImg:{
        marginTop:"10%",
        marginHorizontal:"8%"
    },
    topPickTitle:{
        fontSize:20,
        fontWeight:"600",
        lineHeight:22,
        color:"#000000",
        fontFamily:"Montserrat-SemiBold"
    },
    topPickSubTitle:{
      fontSize:22,
      fontWeight:"600",
      lineHeight:22,
      color:"#000000",
      fontFamily:"Montserrat-SemiBold",
      marginTop:"2%",
      marginBottom:"5%"
    },
    midContainer:{
        height:height-750,
        width:"90%",
        backgroundColor:"#fff",
        marginHorizontal:"5%",
        marginTop:"2%",
        elevation:10,
        flex:0.65
        //marginBottom:"5%"
    }
})
export default styles;