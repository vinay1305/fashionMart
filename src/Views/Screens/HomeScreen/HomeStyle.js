import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    height: "8%",
    width: '100%',
    marginTop: "3%",
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 15,
  },
  menuContainer: {
    height: 25,
    width: 25,
    borderRadius: 25,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "8%",
    marginLeft: "-4%",
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgHeader: {
    height: 30,
    width: "40%",
    marginLeft: "8%",
    resizeMode: 'contain',
    marginTop: "8%",
  },
  rightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: "3%",
    marginRight: "6%",
  },
  searchContainer: {
    marginTop: "4%",
    marginLeft: "8%",
    marginRight: "10%",
    marginHorizontal: "10%",
    height: "2.1%",
    width: "80%",
    backgroundColor: '#F4F4F6',
    borderRadius: 50,
  },
  textInput: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
    alignContent: 'center',
  },
  categoryImage: {
    height: 45,
    width: 45,
    borderRadius: 45,
    marginRight: 20,
  },
  categoryTextContainer: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 15,
  },
  categoryText: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 15,
  },
  clothesContainer: {
    height: 146,
    width: width - 100,
    backgroundColor: '#DBDBDB',
    borderRadius: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    // marginVertical: 20,
    marginRight: 30,
  },
  leftContainer: {
    marginTop: "7%",
    marginLeft: "10%",
  },
  clothesImg: {
    height: '100%',
    resizeMode: 'stretch',
    width: "45%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  clothesDiscount: {
    fontFamily: 'Poppins-Bold',
    color: '#17181A',
    fontSize: 18,
    lineHeight: 24,
    //textAlign:"center"
  },
  descText: {
    fontFamily: 'Poppins',
    lineHeight: 27,
    fontWeight: '400',
    fontSize: 14,
  },
  clothesBtnCont: {
    width: "70%",
    height: "22%",
    backgroundColor: '#17181A',
    borderRadius: 30,
    marginTop: "8%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  clothesBtnText: {
    fontFamily: 'Poppins',
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '400',
  },
  newArrivalCont: {
    marginTop: "5%",
    marginLeft: "7%",
  },
  newArrText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
    lineHeight: 22,
  },
  midCategoryContainer: {
    height: 226,
    width: width - 40,
    flex: 1,

    marginRight: 20,
    marginTop: 10,
  },
  midCategoryImg: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  midTextContainer: {
    position: 'absolute',
    marginTop:"33%",
    marginLeft: "10%",
  },
  midCategoryText: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 40,
  },
  midCategorySubText: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    fontWeight: '500',
  },
  topSellingWrapper: {
    height: "16%",
    width: "50%",
    borderRadius: 10,
    //backgroundColor:"#dfdfdf",
  },
  topSellingImage: {
    height: 170,
    width: '100%',
    // borderRadius:10,
    resizeMode: 'contain',
  },
  topSellingTextContainer: {
    marginLeft: "5%",
    marginTop: "3%",
  },
  topSellingText: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    color: '#000000',
  },
  topSellingAddtoCart: {
    height: "15%",
    width: "11%",
    borderRadius: 50,
    backgroundColor: '#000',
    top: '5%',
    position: 'absolute',
    right: '5%',
    marginRight: "5%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSellingPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  topSellingColorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topSellingColor: {
    height: 5,
    width: 5,
    borderRadius: 5,
    backgroundColor: '#000',
    marginLeft: '2.5%',
  },
  topSellingCartContainer: {
    height: "70%",
    width: "20%",
    backgroundColor: '#FFFFFF',
    marginHorizontal: '5%',
    marginLeft: '10%',
    borderRadius: 3,
    borderWidth: 1.5,
    borderColor: '#17181A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    marginTop: '5%',
    marginHorizontal: '5%',
  },
  footerTitle: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 17,
    color: '#000000',
  },
  footerDataContainer: {
    height: "13%",
    width: width - 230,
    // backgroundColor:"#000",
    marginTop: '5%',
    //flex:1,
    marginRight: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: '10%',
  },
  footerLogoContainer: {
    height: 40,
    width: '100%',
    backgroundColor: '#fff',
    //flex:1
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerLogoImg: {
    height: '100%',
    width: '80%',
    resizeMode: 'contain',
  },
  footerMainImgContainer: {
    height: 152,
    width: '100%',
    marginTop: '24.8%',
  },
  footerMainImg: {
    height: '95%',
    width: width - 230,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  footerDataText: {
    bottom: "18.5%",
    position: 'absolute',
    marginLeft: '15%',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
    color: '#17181A',
  },
  footerDataPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center",
    marginTop: "3%",
    position: 'absolute',
    bottom: "3%",
    marginLeft: "16%",
  },
  footerDataPriceText:{
      fontFamily:"Montserrat-Regular",
      fontSize:20,
      fontWeight:"bold",
      textDecorationLine:"line-through",
      textDecorationStyle:"solid"
  },
  footerDataDiscountText:{
    fontFamily:"Montserrat",
    fontSize:25,
    fontWeight:"bold",
    color:"#17181A",
    marginLeft:'3%'
  },
  topPicksContainer:{
      marginTop:"5%",
      marginLeft:"5%"
  },
  topPicksTitle:{
      color:"#000000",
      fontSize:20,
      lineHeight:22,
      fontFamily:"Montserrat",
      fontWeight:"600"
  },
  topPicksMainContainer:{
      height:"46%",
      width:"90%",
      //borderRadius:20
     // backgroundColor:"#000"

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
    marginTop:"2%"
  },
  lowestDesc:{
      marginLeft:"5%",
      marginBottom:"5%",
      marginTop:"1%"
  },
  lowestDescText:{
      fontFamily:"Rancho-Regular",
      fontSize:24,
      lineHeight:22,
      textAlign:"center",
      fontWeight:"400",
      color:"#000000",
      marginLeft:"-5%"
  }
});
export default styles;
