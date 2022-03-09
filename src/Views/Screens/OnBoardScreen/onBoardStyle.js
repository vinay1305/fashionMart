import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgContainer: {
    marginTop: '20%',
    marginRight: '10%',
    marginLeft: '10%',
  },
  img: {},
  textContainer: {
    marginTop: '5%',
    marginRight: '30%',
    marginLeft: '10%',
    // height:"11%",
    // width:"60%"
  },
  title: {
    fontSize: 25,
    lineHeight: 33,
    color: '#17181A',
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
  },
  subtitleContainer: {
    // width:width-1000,
    // height:"10%",
    marginRight: '30%',
    marginLeft: '10%',
    marginTop: '2%',
  },
  subtitleText: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: '600',
    fontFamily: 'Poppins-BoldItalic',
    color: '#A6A6A6',
  },
  rightTextWrapper: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#000',
    bottom: "10%",
    marginRight: "5%",
    justifyContent: 'center',
    alignItems: 'center',
  },


  dotStyle: {
    backgroundColor: '#A6A6A6',
  },
  activeDotStyle: {
    backgroundColor: '#17181A',
  },
});
export default styles;
