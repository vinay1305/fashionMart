import {StyleSheet} from 'react-native';
import COLORS from '../../../../conts/color/color';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  footerContainer: {
    flex: .5,
    top: "-7%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: "8%",
    paddingHorizontal: "5%",
    backgroundColor: '#FFFFFF',
  },
  iconContainer: {
    marginTop: '10%',
    marginLeft: '5%',
  },
  headerImgHeart: {
    //padding: 20,
    height: '7%',
    width: '7%',
    borderRadius: 20,
    backgroundColor: '#000000',
    right: '6%',
    position: 'absolute',
    bottom: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   imgDotSlider:{
  //     marginBottom:"5%",
  //     position:"absolute",
  //     bottom:"8%",
  //     flexDirection:"row",
  //     marginHorizontal:"50%",
  //     justifyContent:"space-between"

  //   },
  //   imgDot:{
  //     height:10,
  //     width:10,
  //     borderRadius:10,
  //     backgroundColor:"cyan",
  //     position:"absolute",
  //     marginHorizontal:10

  //   }
  footerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:"-3%"
  },
  footerTextType: {
    fontSize: 25,
    marginLeft: '3%',
    fontFamily: 'Poppins',
    fontWeight: '600',
    color: '#000000',
  },
  footerquantityContainer: {
    height: "40%",
    width: "30%",
    backgroundColor: '#DFDFDF',
    borderRadius: 30,
    marginRight: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop:"-3%"
  },
  quantityWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    marginLeft: '3%',
    marginTop: '1%',
    alignItems: 'center',
    justifyContent:"space-between",
  },
  starWrapper: {
    flexDirection: 'row',
  },
  sizeContainer: {
    marginTop: '1%',
    marginLeft: '3%',
  },
  sizeWrapper: {
    flexDirection: 'row',
    //   justifyContent:"space-between",
    marginTop: '2%',
    alignItems: 'center',
  },
  size: {
    height: "10%",
    width: "10%",
    borderRadius: 38,
    borderWidth: 1,
    borderColor: '#A6A6A6',
    backgroundColor: '#17181A',
    justifyContent: 'center',
    alignItems: 'center',
   marginRight: '12.7%',
    marginLeft:"-10.9%"
  },
  colorContainer: {
    width: "12%",
    height: "40%",
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    marginLeft: '7%',
    alignItems:"center",
    justifyContent:"center"
  },
  color:{
      height:"22%",
      width:"22%",
      borderRadius:50,
      backgroundColor:"#000",
      marginVertical:"12%"
  },
  description:{
    fontFamily:"Poppins-Regular",
    color:"#000000",
    marginTop:"1%",
    lineHeight:27,
    fontSize:25,
    fontWeight:"600",
    marginTop:"-20%",
    marginHorizontal:"5%"
  },
  descText:{
      fontSize:20,
      marginTop:"4%",
      color:"#000",
      lineHeight:21,
      fontFamily:"Poppins",
      marginHorizontal:"5%"
  },
  atcContainer:{
      //marginTop:"5%",
      flexDirection:"row",
      justifyContent:"space-between",
      marginHorizontal:"5%",
      alignItems:"center",
      marginTop:"5%"
  },
  priceText:{
      fontSize:20,
      color:"#000000",
      lineHeight:27,
      fontWeight:"bold",
      fontFamily:"Poppins"
  },
  addToCart:{
     // height:"32%",
      width:"100%",
      padding:"5%",
      backgroundColor:"#17181A",
      borderRadius:30,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
  },
  cartText:{
      color:"#FFFFFF",
      marginHorizontal:"10%",
      fontFamily:"Poppins",
      fontSize:20,
      fontWeight:"600",
      lineHeight:27
  },
  lowestDesc:{
    marginLeft:"5%",
    marginBottom:"5%",
    marginTop:"5%"
},
lowestDescText:{
    fontFamily:"Rancho-Regular",
    fontSize:24,
    lineHeight:22,
    textAlign:"center",
    fontWeight:"400",
    color:"#000000",
    marginLeft:"-5%"
},
  //Size Container Style

  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginRight:"50%",
    marginLeft:"-15%",
  },
  categoriesItemBtn: {
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    //padding: 10,
    //borderRadius: 7,
    alignItems: 'center',
    justifyContent:"center",
    marginRight:"7%",
    height: 38,
    width: 38,
    borderRadius: 38,
    marginRight:"5%",
    borderWidth: 1,
    borderColor: '#A6A6A6',
  },
  categoryText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.primary,
    //marginLeft: 5,
  },
  //Size Container Style Ends
});
export default styles;
