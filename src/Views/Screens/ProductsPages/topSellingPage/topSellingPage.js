import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import topSelling from '../../../../conts/categoryList/topSelling';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Material from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './topSellingStyle';
import COLORS from '../../../../conts/color/color';

function ButtonIncrement(props) {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <AntDesign
        name="plus"
        size={18}
        color={'#000'}
        onPress={props.onClickFunc}
        style={{marginHorizontal:"2%"}}
      />
    </TouchableOpacity>
  );
}
function ButtonDecrement(props) {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <AntDesign
        name="minus"
        size={18}
        color={'#000'}
        onPress={props.onClickFunc}
        style={{marginHorizontal:"2%",marginLeft:"2%"}}
      />
    </TouchableOpacity>
  );
}
function Display(props) {
  return (
    <Text
      style={{
        marginHorizontal: '10%',
        color: '#000000',
        fontFamily: 'Popppins',
        fontSize: 16,
        marginRight:"15%"
      }}>
      {props.message}
    </Text>
  );
}

export default function TopSellingPage({route, navigation}) {
  const topSellingData = route.params;
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 0) {
    decrementCounter = () => setCounter(0);
  }

  //SizeContainer
  const sizeCategory = [
    {name: 'S', },
    {name: 'M',},
    {name: 'L',},
    {name: 'XL', },
    {name: 'XXL', },
  ];
  const SizeCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    return (
<View style={{flexDirection:"row",justifyContent:"space-between",flex:1}}>
<View style={styles.categoriesContainer}>
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
    );
  };
 
  //SizeContainer Ends
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={'#FFFFFF'} />
      <ImageBackground style={{flex: 0.55}} source={topSellingData.image}>
        <View style={styles.iconContainer}>
          <IonIcon
            name="chevron-back-outline"
            size={25}
            color={'#000000'}
            onPress={navigation.goBack}
          />
        </View>
        <View style={styles.headerImgHeart}>
          <Material name="favorite-outline" size={20} color={'#fff'} />
        </View>
      </ImageBackground>
      <View style={styles.footerContainer}>
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerTextType}>{topSellingData.type}</Text>
          <View style={styles.footerquantityContainer}>
            <View style={styles.quantityWrapper}>
              <ButtonIncrement onClickFunc={incrementCounter} />
              {/* <Text
               > */}
              <Display message={counter} />
              {/* </Text> */}
              <ButtonDecrement onClickFunc={decrementCounter} />
            </View>
          </View>
        </View>
        <View style={styles.starContainer}>
          <View style={styles.starWrapper}>
            <FontAwesome
              name="star"
              size={15}
              color={'#F6A62E'}
              style={{marginRight: '3%'}}
            />
            <FontAwesome
              name="star"
              size={15}
              color={'#F6A62E'}
              style={{marginRight: '3%'}}
            />
            <FontAwesome
              name="star"
              size={15}
              color={'#F6A62E'}
              style={{marginRight: '3%'}}
            />
            <FontAwesome
              name="star"
              size={15}
              color={'#F6A62E'}
              style={{marginRight: '3%'}}
            />
            <FontAwesome name="star-half-full" size={15} color={'#F6A62E'} />
          </View>
          <Text
            style={{
              marginLeft: '-5%',
              fontSize: 18,
              fontWeight: '400',
              fontFamily: 'Poppins',
            }}>
            {topSellingData.reviews}
          </Text>
        </View>

        <View style={styles.sizeContainer}>
          <View style={styles.sizeWrapper}>
            <Text
              style={{
                marginTop: '-25%',
                fontFamily: 'Poppins',
                color: '#000',
                fontSize: 25,
              }}>
              Size
            </Text>
           
             <SizeCategories/>
            <View style={styles.colorContainer}>
              <View style={styles.color} />
              <View style={[styles.color, {backgroundColor: '#BC893C'}]} />
              <View style={[styles.color, {backgroundColor: '#0C4F8D'}]} />
              <View style={[styles.color, {backgroundColor: '#F6A62E'}]} />
              <View style={[styles.color, {backgroundColor: '#D24B4B'}]} />
            </View>
          </View>
         
        </View>
        <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit amet,consectetur {'\n'}
            adipiscing elit.Risus at auctor at ornare {'\n'}
            vel.
          </Text>
        <View style={styles.atcContainer}>
          <Text style={styles.priceText}>${topSellingData.price}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('CartScreen', topSellingData)}>
            <View style={[styles.addToCart,{marginRight:"-25%"}]}>
              <AntDesign name="shoppingcart" size={25} color={'#FFFFFF'} />
              <Text style={[styles.cartText,]}>Add To Cart</Text>
            </View>
          </TouchableOpacity>
        </View>
      
      </View>
      
    </SafeAreaView>
  );
}
