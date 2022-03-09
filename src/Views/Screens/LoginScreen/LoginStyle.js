import {StyleSheet,Dimensions} from 'react-native'
const {width,height}=Dimensions.get("window")
const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"#fff"
    },
    headerContainer: {
        flex: 0.25,
    
        backgroundColor: '#2C313A',
      },
      iconContainer: {
        flexDirection: 'row',
        marginTop: "15%",
        marginLeft: "8%",
        //justifyContent:"center",
        alignItems: 'center',
      },
      iconText: {
        fontFamily: 'Poppins',
        color: '#fff',
        marginLeft: "2%",
        fontWeight: '400',
        fontSize: 18,
      },
      headerTextContainer: {
        marginTop: "5%",
        // height: "33%",
        // width:"49%",
        marginLeft: "9.5%",
        // backgroundColor:"#fff",
       justifyContent: 'center',
        //alignItems: 'center',
        marginBottom:"5%"
      },
      headerText: {
        fontFamily: 'Poppins',
        fontSize: 28,
        fontWeight: '700',
        lineHeight: 42,
        color: '#fff',
      },
      inputContainer: {
        flexDirection: 'row',
        marginTop: "10%",
        marginLeft: "11%",
      },
      inputIcon: {
        marginTop: "4.8%",
        position:   'absolute',
      },
      textInput: {
        color: '#000',
       // paddingLeft: "8%",
       marginLeft:"8%",
        fontFamily: 'Poppins',
        fontWeight: '500',
        //flex: 1,
        fontSize: 18,
      },
      textInputLine: {
        width: "75%",
        height: 1,
        backgroundColor: '#17181A',
        marginLeft: "10%",
        marginTop: "-1%",
      },
      midContainer: {
        marginTop: "10%",
        flexDirection: 'row',
        alignItems: 'center',
      },
      // checkBox: {
      //   marginLeft: 40,
      //   backgroundColor: '#17181A',
      // },
      // rememberText: {
      //   marginLeft: 10,
      //   fontFamily: 'Poppins',
      //   fontWeight: '400',
      //   fontSize: 16,
      //   lineHeight: 24,
      // },
      btnContainer:{
        // flex:1,
        // marginRight:"10%",
        // marginLeft:"11%",
         marginHorizontal:"10.5%",
        bottom:"-30%",
        backgroundColor:"#17181A",
        height:"10%",
         width:"75%",
       
        borderRadius:40,
        justifyContent:"center",
        alignItems:"center"
          
      },
      btnText:{
        color:"#FFFFFF",
        fontSize:18,
        fontFamily:"Poppins",
        lineHeight:27
      },
      error:{
        fontSize:20,
        fontWeight:"400",
        color:'red',
        fontFamily:"Poppins-Regular",
        marginLeft:"15%"
    }
   
})
export default styles;