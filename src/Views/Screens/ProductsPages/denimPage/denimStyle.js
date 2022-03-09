import {StyleSheet, Dimensions} from 'react-native';
const {width,height} = Dimensions.get('screen');
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
    // marginBottom:"10%"
  },
  headerText: {
    marginTop: '7%',
    marginLeft: '3%',
    fontSize: 22,
    color: '#17181A',
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  midContainer: {
     flex:1,
    height: height-750,
    width: width-50,
    marginLeft:25,
    marginTop:"5%",
    marginBottom:"15%",
    //borderRadius:20,
   // margin: '5%',
    backgroundColor: '#FFF',
    elevation:5
  },
  midCategoryImg: {
    height: '100%',
    width: width-40,
    borderRadius: 10,
    // flex:1,
    resizeMode: 'contain',
  },
  midTextContainer: {
    position: 'absolute',
    marginTop: "15%",
    marginLeft: 35,
  },
  midCategoryText: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 30,
  },
  midCategorySubText: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    fontWeight: '500',
  },
  //

  topSellingWrapper: {
    //height: height-600,
    width: width-60,
    borderRadius: 10,
    marginTop:"5%",
    //backgroundColor:"#dfdfdf",
  },
  topSellingImage: {
    height: 170,
    width: '100%',
    // borderRadius:10,
    resizeMode: 'contain',
  },
  topSellingTextContainer: {
    marginLeft: 10,
    marginTop: 5,
  },
  topSellingText: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    color: '#000000',
  },
  topSellingAddtoCart: {
    height: 25,
    width: 25,
    borderRadius: 25,
    backgroundColor: '#000',
    top: '5%',
    position: 'absolute',
    right: '5%',
    marginRight: 10,
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
    height: 20,
    width: 20,
    backgroundColor: '#FFFFFF',
    marginHorizontal: '5%',
    marginLeft: '10%',
    borderRadius: 3,
    borderWidth: 1.5,
    borderColor: '#17181A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //

  container: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line:{
    height:.5,
    width:"75%",
    marginTop:"2%",
    marginHorizontal:"10%",
    backgroundColor:"#A6A6A6"
},

  // Flat list Style
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
  // Flatlist style ends
});
export default styles;
