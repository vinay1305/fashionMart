import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './OrderStyle';
import Material from 'react-native-vector-icons/MaterialIcons'
const OrderPlaced = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={'#FFF'} />
      <View style={{alignItems: 'center'}}>
        <View style={styles.circleContainer}>
          <View style={styles.smallCircleContainer}>
              <Material name='card-giftcard' size={60} color={"#FFF"}/>
          </View>
        </View>
        <View style={styles.orderPlacedContainer}>
          <Text style={styles.orderText}>Order Placed!</Text>
        </View>
        <View style={styles.descTextContainer}>
          <Text style={styles.descText}>
            Your order has been placed successfully.{'\n'}
            {'\t '}To view more details go to my orders.
          </Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>My Order</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate("HomeScreen")}>
        <View style={styles.secondBtnContainer}>
          <Text style={styles.secondBtnText}>Continue Shopping</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OrderPlaced;
