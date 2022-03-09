import {View, Text, SafeAreaView, StatusBar, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './CheckoutStyle';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import master1 from '../../../assets/Checkout/Ellipse34.png';
import master2 from '../../../assets/Checkout/Ellipse35.png';
const CheckoutScreen = ({route, navigation}) => {
  const checkoutData = route.params;
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
        <Text style={styles.headerText}>Checkout</Text>
      </View>
      <View style={styles.midContainer}>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.addressText}>
          Akshya Nagar 1st Block 1st Cross,{'\n'}Rammurthy nagar, Bangalore{' '}
          {'\n'}- 560016
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.masterContainer}>
        <View style={styles.masterWrapper}>
          <Image source={master1} style={{}} />
          <Image source={master2} style={{}} />
        </View>
        <View style={styles.masterText}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Poppins',
              fontWeight: '400',
              color: '#000',
            }}>
            MasterCard
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins',
              fontWeight: '400',
              color: '#A6A6A6',
            }}>
            555555555555xxxx
          </Text>
        </View>
      </View>
      <View style={[styles.line, {marginTop: '-1%'}]} />
      <View style={styles.checkContainer}>
        <View style={styles.textWrapper}>
          <Text style={styles.typeText}>{checkoutData.type}</Text>
          <Text style={styles.companyText}>{checkoutData.company}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text>1</Text>
          <Text style={styles.checkoutPrice}>${checkoutData.price}</Text>
        </View>
      </View>
      <View style={[styles.line, {marginTop: '2%'}]} />
      <View style={styles.checkContainer}>
        <View style={styles.textWrapper}>
          <Text style={styles.typeText}>Snoopy T-shirt</Text>
          <Text style={styles.companyText}>Levis</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text>1</Text>
          <Text style={styles.checkoutPrice}>$15</Text>
        </View>
      </View>
      <View style={[styles.line, {marginTop: '5%'}]} />
      <View style={styles.promoCodeContainer}>
        <View style={styles.plusContainer}>
          <AntDesign name="plus" size={15} color={'#fff'} />
        </View>
        <Text style={styles.promocodeText}>Add a Promo Code</Text>
      </View>
      <View style={[styles.line, {marginTop: '5%'}]} />
      <Text style={styles.totalPrice}>Total :$27.99</Text>
      <View style={[styles.line, {marginTop: '5%'}]} />
     <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate("OrderPlaced")}>
     <View style={styles.btnContainer}>
        <Text style={styles.btnText}>Place Order</Text>
      </View>
     </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
