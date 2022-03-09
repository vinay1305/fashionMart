import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
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
  userContainer: {
    height: '7%',
    width: '90%',
    backgroundColor: '#fff',
    margin: '5%',
    elevation: 10,
    borderRadius: 20,
    //borderWidth:1,
    // borderColor:"#A6A6A6",
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgContainer: {
    marginLeft: '3%',
  },
  userText: {
    marginHorizontal: '4%',
  },
  name: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  email:{
    fontSize: 14,
    lineHeight: 21,
    color: 'gray',
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  midContainer:{
      height:"39%",
      width:"90%",
      backgroundColor:"#FFF",
      margin:"5%",
      elevation:2,
  },
  userInfo:{
      flexDirection:"row",
      marginLeft:"3%",
      marginTop:"5%",
      alignItems:"center"
  },
  iconContainer:{
      height:35,
      width:35,
      backgroundColor:"#EDEDED",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:5
  },
  personalDetailsText:{
      marginLeft:"5%",
      color:"#000",
      fontFamily:"Poppins",
      fontWeight:"800",
      lineHeight:24,
      fontSize:16
  },
  footerContainer:{
      height:"28%",
      width:"90%",
      margin:"5%",
      marginTop:"3%",
      backgroundColor:"#fff",
      elevation:5
  }
});
export default styles;
