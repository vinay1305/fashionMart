import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
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
    // height: "32%",
    // width: "47%",
    // marginLeft: "-47%",
    // backgroundColor:"#fff",
   // justifyContent: 'center',
    //alignItems: 'center',
    marginBottom:"8%",
    marginHorizontal:"10%"
  },
  headerText: {
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 42,
    color: '#fff',
  },
  midWrapper: {
   // marginTop: "5%",
    //marginLeft: "10%",
    //flex: 0.1,
   // position: 'relative',
  },

  inputContainer: {
    flexDirection: 'row',
    marginTop: "10%",
    marginLeft: "10.5%",
   // flex:1
  },
  inputIcon: {
    marginTop: "4.5%",
   // position:   'absolute',
  },
  textInput: {
    color: '#000',
    marginLeft: "4%",
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
    marginTop: "-2%",
  },
  midContainer: {
    marginTop: "10%",
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    marginLeft: "12%",
    backgroundColor: '#17181A',
  },
  rememberText: {
    marginLeft: "2%",
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
  btnContainer:{
      // marginRight:"10%",
      // marginLeft:"11%",
      marginHorizontal:"10%",
      marginTop:"10%",
      backgroundColor:"#17181A",
      height:"10%",
      width:"80%",
      borderRadius:40,
      justifyContent:"center",
      alignItems:"center"
  },
  signupText:{
      color:"#FFFFFF",
      fontSize:18,
      fontFamily:"Poppins",
      lineHeight:27
  }
});
export default styles;
