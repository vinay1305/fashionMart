import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import styles from './CartStyle';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import imgSec from '../../../assets/HomeScreenAssets/TopSelling/topSelling3.png';
const CartScreen = ({route, navigation}) => {
  const cartData = route.params;
  function sum(){
      var n2=cartData.price
        var sumData=n2+49
    return(sumData)
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={'#FFF'} />
      <View style={styles.headerContainer}>
        <IonIcons
          name="chevron-back-outline"
          size={25}
          color={'#000'}
          style={{marginTop: '8%', marginLeft: '5%'}}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>Cart</Text>
      </View>

      <View style={styles.midContainer}>
        <View style={styles.imgContainer}>
          <Image source={cartData.image} style={styles.img} />
        </View>
        <View style={{alignItems: 'flex-start', marginLeft: '3%'}}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{cartData.type}</Text>
            <View style={{alignItems: 'flex-start'}}>
              <Text style={styles.subText}>
                <Text style={styles.brand}>Brand:</Text>
                {cartData.company}
              </Text>
            </View>
          </View>

          <View style={styles.sizeContainer}>
            <Text style={styles.size}>S</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{cartData.price}</Text>
            <View style={styles.quantityContainer}>
              <View style={styles.quantityWrapper}>
                <AntDesign name="plus" size={15} color={'#000'} />
                <Text
                  style={{
                    marginHorizontal: '10%',
                    color: '#000000',
                    fontFamily: 'Popppins',
                  }}>
                  1
                </Text>
                <AntDesign name="minus" size={15} color={'#000'} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.line} />
      {/* Second Cart Item */}
      <View style={styles.midContainer}>
        <View style={styles.imgContainer}>
          <Image source={imgSec} style={styles.img} />
        </View>
        <View style={{alignItems: 'flex-start', marginLeft: '3%'}}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Ramones T-shirt</Text>
            <View style={{alignItems: 'flex-start'}}>
              <Text style={styles.subText}>
                <Text style={styles.brand}>Brand:</Text>
                {cartData.company}
              </Text>
            </View>
          </View>

          <View style={styles.sizeContainer}>
            <Text style={styles.size}>S</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>$49.99</Text>
            <View style={styles.quantityContainer}>
              <View style={styles.quantityWrapper}>
                <AntDesign name="plus" size={15} color={'#000'} />
                <Text
                  style={{
                    marginHorizontal: '10%',
                    color: '#000000',
                    fontFamily: 'Popppins',
                  }}>
                  1
                </Text>
                <AntDesign name="minus" size={15} color={'#000'} />
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* Second Cart Item Ends */}
      <View style={styles.promoCodeContainer}>
        <Text style={styles.promoCode}>Do you have a promo code?</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Enter Promocode Here"
            style={styles.textInput}
          />
        </View>
      
     
      <View style={styles.deliveryContainer}>
          <Text style={styles.delivery}>Delivery</Text>
          <Text style={[styles.delivery,{fontWeight:"500"}]}>Standard-Free</Text>
      </View>
      {/* <View style={[styles.line,{height:0.5,marginTop:"-2%"}]} /> */}
    
    <TouchableOpacity activeOpacity={0.7}
    onPress={()=>navigation.navigate("CheckoutScreen",cartData)}>
     <View style={styles.btnContainer}>
          <Text style={styles.btnText}>Total Bill: $62.00</Text>
      </View>
     </TouchableOpacity>
    
    </SafeAreaView>
  );
};

export default CartScreen;
