import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../../../conts/color/color';
import IonIcons from 'react-native-vector-icons/Ionicons';
const {height, width} = Dimensions.get('screen');
import Slider from '@react-native-community/slider';
import Entypo from 'react-native-vector-icons/Entypo'
export default function Filter({navigation}) {
  const Category = [
    {name: 'Dresses'},
    {name: 'Jackets'},
    {name: 'Shirts'},
    {name: 'Jeans'},
    // {name: 'Shorts', },
    // {name: 'T-shirts', },
  ];

  const Categories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    return (
      <View>
        <View style={styles.categoryTextContainer}>
          <Text style={styles.categoryText}>Categories</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            //flex: 1,
            marginTop: '2%',
          }}>
          <View style={styles.categoriesFilterContainer}>
            {Category.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => setSelectedCategoryIndex(index)}>
                <View
                  style={[
                    styles.categoriesFilterItemButton,
                    {
                      backgroundColor:
                        selectedCategoryIndex === index
                          ? COLORS.primary
                          : COLORS.light,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.categoryText,
                      {
                        color:
                          selectedCategoryIndex === index
                            ? COLORS.white
                            : COLORS.primary,
                      },
                    ]}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  };

  // Size Categories

  const sizeCategory = [
    {name: 'S'},
    {name: 'S'},
    {name: 'M'},
    {name: 'L'},
    {name: 'XL'},
    {name: 'XXL'},
  ];
  const SizeCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    return (
      <View>
        <View style={styles.sizeContainer}>
          <View style={styles.sizeWrapper}>
            <Text
              style={{
                //marginTop: '-25%',
                fontFamily: 'Poppins',
                color: '#000',
                fontSize: 25,
              }}>
              Size
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View style={styles.categoriesSizeContainer}>
            {sizeCategory.map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => setSelectedCategoryIndex(index)}>
                <View
                  style={[
                    styles.categoriesItemBtn,
                    {
                      backgroundColor:
                        selectedCategoryIndex === index
                          ? COLORS.primary
                          : COLORS.light,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.categoryText,
                      {
                        color:
                          selectedCategoryIndex === index
                            ? COLORS.white
                            : COLORS.primary,
                      },
                    ]}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  };

  // Size Categories End

  const [range, setRange] = useState('15$');
  const [sliding, setSliding] = useState('Inactive');
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={styles.headerContainer}>
        <IonIcons
          name="chevron-back-outline"
          size={25}
          color={'#000'}
          style={{marginTop: '8%', marginLeft: '5%'}}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>Filter</Text>
      </View>

      <Categories />
      {/* <PriceTracker/> */}
      <View style={styles.priceContainer}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Poppins',
            fontWeight: '700',
            color: '#000',
          }}>
          Price Range
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Poppins',
            fontWeight: '700',
            color: '#000',
            alignSelf: 'center',
            marginTop:"2%",
            marginRight:"12%"
          }}>
          {range}
        </Text>
        <Slider
          style={{height: '10%', width: '90%', marginTop: '2%'}}
          minimumValue={1}
          maximumValue={1000}
          minimumTrackTintColor="tomato"
          maximumTrackTintColor="#000"
          thumbTintColor="#000"
          value={15}
          onValueChange={value => setRange(parseInt(value) + '$')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: '9%',
         // bottom: '98%',
         marginTop:"-15%"
        }}>
        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            color: '#A6A6A6',
            fontSize: 18,
          }}>
          0$
        </Text>
        <Text
          style={{
            marginLeft: '5%',
            fontFamily: 'Montserrat-Regular',
            color: '#A6A6A6',
            fontSize: 18,
          }}>
          500$
        </Text>
        <Text
          style={{
            marginRight: '10%',
            fontFamily: 'Montserrat-Regular',
            color: '#A6A6A6',
            fontSize: 18,
          }}>
          1000$
        </Text>
      </View>

      <SizeCategories />
      <Text style={styles.ratingText}>Rating</Text>
      <TouchableOpacity>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"5%",alignItems:"center"}}>
          <View style={styles.leftRating}>
            <Entypo name="star-outlined" size={25} color={"#F6A62E"} style={{marginRight:"5%"}}/>
            <Entypo name="star-outlined" size={25} color={"#F6A62E"} style={{marginRight:"5%"}}/>
            <Entypo name="star-outlined" size={25} color={"#F6A62E"} style={{marginRight:"5%"}}/>
            <Entypo name="star-outlined" size={25} color={"#F6A62E"} style={{marginRight:"5%"}}/>
            <Entypo name="star-outlined" size={25} color={"#F6A62E"} />
          </View>
          <View style={styles.rightRating}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"5%",alignItems:"center"}}>
          <View style={styles.leftRating}>
            <Entypo name="star-outlined" size={25} color={"#F6A62E"} style={{marginRight:"5%"}}/>
            <Entypo name="star-outlined" size={25} color={"#F6A62E"} style={{marginRight:"5%"}}/>
            <Entypo name="star-outlined" size={25} color={"#F6A62E"} style={{marginRight:"5%"}}/>
            
            <Entypo name="star-outlined" size={25} color={"#F6A62E"} />
          </View>
          <View style={styles.rightRating}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"5%",alignItems:"center"}}>
          <View style={styles.leftRating}>
            <Entypo name="star-outlined" size={25} color={"#F6A62E"} style={{marginRight:"5%"}}/>
            <Entypo name="star-outlined" size={25} color={"#F6A62E"} style={{marginRight:"5%"}}/>
            
            <Entypo name="star-outlined" size={25} color={"#F6A62E"} />
          </View>
          <View style={styles.rightRating}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"5%",alignItems:"center"}}>
          <View style={styles.leftRating}>
            <Entypo name="star-outlined" size={25} color={"#F6A62E"} style={{marginRight:"5%"}}/>
            
            <Entypo name="star-outlined" size={25} color={"#F6A62E"} />
          </View>
          <View style={styles.rightRating}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"5%",alignItems:"center"}}>
          <View style={styles.leftRating}>
         
            <Entypo name="star-outlined" size={25} color={"#F6A62E"} />
          </View>
          <View style={styles.rightRating}/>
        </View>
      </TouchableOpacity>
      
      <View style={styles.btnContainer}>
      <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            activeOpacity={0.7}>
            <Text style={styles.btnText}>Apply</Text>
            </TouchableOpacity>
        </View>
        
    </SafeAreaView>
  );
}
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
  categoryTextContainer: {
    marginHorizontal: '6%',
    marginTop: '5%',
    marginBottom: '2%',
  },
  categoryText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  categoriesFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginRight:"50%",
    marginLeft: '5%',
    // marginRight:"-20%"
  },
  categoriesFilterItemButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    padding: 10,
    //borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '2%',
    height: height - 900,
    width: width - 315,
    borderRadius: 38,
    //marginRight:"3%",
    borderWidth: 1,
    borderColor: '#A6A6A6',
  },

  priceContainer: {
    //marginTop:"-10%",
   // bottom: '37%',
    marginHorizontal: '5%',
     marginTop:"5%"
  },
  sizeContainer: {
   // bottom: '40%',
    marginLeft: '4%',
    marginBottom:"5%"
  },
  sizeWrapper: {
    flexDirection: 'row',
    //   justifyContent:"space-between",
    marginTop: '2%',
    alignItems: 'center',
  },
  size: {
    height: '12%',
    width: '12%',
    borderRadius: 38,
    borderWidth: 1,
    borderColor: '#A6A6A6',
    backgroundColor: '#17181A',
    justifyContent: 'center',
    alignItems: 'center',
    //marginRight: '12.7%',
    //marginLeft:"-10.9%"
  },
  categoriesSizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginRight:"50%",
    marginLeft: '-11%',
  },
  categoriesItemBtn: {
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    //padding: 10,
    //borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '7%',
    height: 38,
    width: 38,
    borderRadius: 38,
    marginRight: '5%',
    borderWidth: 1,
    borderColor: '#A6A6A6',
  },
  categoryText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.primary,
    //marginLeft: 5,
  },
  ratingText:{
    marginTop:"15%",
    marginHorizontal:"5%",
    color:"#000",
    fontFamily:"Poppins",
    fontSize:20,
    fontWeight:"600"
  },
  leftRating:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:"3%",
   
  },
  rightRating:{
    height:20,
  width:20,
borderRadius:20,
backgroundColor:"#C4C4C4" ,
marginRight:"5%",
alignItems:"center",
marginTop:"3%"
 },
 btnContainer:{
  // marginRight:"10%",
  // marginLeft:"11%",
  marginHorizontal:"10%",
  marginTop:"10%",
  backgroundColor:"#17181A",
  height:"8%",
  width:"80%",
  borderRadius:40,
  justifyContent:"center",
  alignItems:"center"
},
btnText:{
  color:"#FFFFFF",
  fontSize:18,
  fontFamily:"Poppins",
  lineHeight:27
}

});
