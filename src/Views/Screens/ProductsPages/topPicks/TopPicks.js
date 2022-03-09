import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './topStyle';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Img from '../../../../assets/HomeScreenAssets/topPicks/topShirts.png';
const TopPicks = ({route, navigation}) => {
  const topPicksData = route.params;
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
        <Text style={styles.headerText}>Top Picks</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topPicksMainContainer}>
          <ImageBackground
            source={topPicksData.background}
            style={{flex: 1, borderRadius: 5, marginBottom: '5%'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{alignContent: 'center'}}>
                <Image source={topPicksData.image} style={styles.topPicksImg} />
                <View style={{marginTop: '2%', marginHorizontal: '13%'}}>
                  <Text style={styles.topPickTitle}>{topPicksData.title}</Text>
                  <Text style={styles.topPickSubTitle}>
                    {topPicksData.desc}
                  </Text>
                </View>
              </View>
              <View style={{alignContent: 'center'}}>
                <Image source={Img} style={styles.topPicksImg} />
                <View style={{marginTop: '2%', marginHorizontal: '13%'}}>
                  <Text style={styles.topPickTitle}>Shirts</Text>
                  <Text style={styles.topPickSubTitle}>Under $59</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.midContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: '5%',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                fontFamily: 'Poppins-Regular',
                fontWeight: '600',
              }}>
              Men Jeans
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#A6A6A6',
                fontFamily: 'Poppins-Regular',
                fontWeight: '600',
                marginLeft: '5%',
              }}>
              {' '}
              Men All Weather Comfy Fit
            </Text>
          </View>
          <Text
            style={{
              fontSize: 15,
              color: '#A6A6A6',
              fontFamily: 'Poppins-Regular',
              fontWeight: '600',
              marginLeft: '4%',
              marginTop: '-1%',
            }}>
            {' '}
            Denim Fit
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: '4.4%',
            }}>
            <Text
              style={{
                fontSize: 17,
                color: '#A6A6A6',
                fontFamily: 'Poppins-Regular',
                fontWeight: '600',
                textDecorationLine: 'line-through',
              }}>
              $100
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#000',
                fontFamily: 'Poppins-Regular',
                fontWeight: '600',
                marginLeft: '2%',
              }}>
              $70
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#e07352',
                fontFamily: 'Poppins-Regular',
                fontWeight: '600',
                marginLeft: '2%',
              }}>
              70% OFF
            </Text>
          </View>
          <Text
            style={{
              fontSize: 20,
              color: '#2ba58d',
              fontFamily: 'Poppins-Regular',
              fontWeight: '600',
              marginLeft: '4.4%',
            }}>
            inclusive of all taxes
          </Text>
        </View>
        <View style={styles.midContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginHorizontal: '-12%',
              marginTop: '2%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#000',
                fontFamily: 'Poppins-Regular',
                fontWeight: '600',
              }}>
              You Pay Only{' '}
              <Text
                style={{
                  fontSize: 18,
                  color: '#ea5f32',
                  fontFamily: 'Poppins-Regular',
                  fontWeight: '700',
                }}>
                $59.99
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#1b948e',
                fontFamily: 'Poppins-Regular',
                fontWeight: '700',
              }}>
              Save : $10
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              fontFamily: 'Poppins-Regular',
              fontWeight: '500',
              marginLeft: '3.5%',
            }}>
            Apply the coupon during{' '}
            <Text style={{color: '#f4476f'}}>CHECKOUT</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: '3.5%',
              alignItems: 'center',
              marginTop: '1%',
            }}>
            <View
              style={{
                padding: '2%',
                width: '40%',
                backgroundColor: '#f5a1b8',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontFamily: 'Poppins-Regular',
                  fontWeight: '500',
                }}>
                DealOnAbove$200
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontFamily: 'Poppins-Regular',
                  marginLeft: '10%',
                }}>
                Tap to Copy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.midContainer}>
          <View style={{marginLeft: '3.5%', marginTop: '4%'}}>
            <Text
              style={{
                fontSize: 18,
                color: '#000',
                fontFamily: 'Poppins-Regular',
                fontWeight: '700',
              }}>
              Easy 30 Days return and Exchanges
            </Text>
            <Text
              style={{
                marginTop: '2%',
                lineHeight: 22,
                fontSize: 14,
                color: '#000',
                fontFamily: 'Poppins-Regular',
                fontWeight: '400',
              }}>
              Choose to return or exchange for a different size {'\n'}(if available)
              within 3 working days.
            </Text>
          </View>
        </View>
        <View style={styles.midContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: '1%',
              marginHorizontal: '-20%',
            }}>
            <Text>Select Size</Text>
            <Text>Select Size</Text>
          </View>
        </View>
        <View style={styles.midContainer}></View>
        <View style={styles.midContainer}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TopPicks;
