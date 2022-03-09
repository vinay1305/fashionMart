import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import styles from './denimStyle';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';
import Img from '../../../../assets/HomeScreenAssets/CompleteDenim.png';
import MaterialComm from 'react-native-vector-icons/MaterialCommunityIcons';
import Denims from '../../../../conts/categoryList/denims';
import BottomTabs from '../../../../../Navigation/TabDrawer';
import BottomPopup from '../../Bottomtabs/Gender';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//import IonIcons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {BottomSheet} from 'react-native-btr';


export default function DenimProduct({navigation, route}) {
  const data = route.params;

  //bottom navigation
  const BottomTabs = () => {
    const [visible, setVisible] = useState(false);
    const [sortVisible, setSortVisible] = useState(false);

    const toggleBottomNavigationView = () => {
      //Toggling the visibility state of the bottom sheet
      setVisible(!visible);
    };
    const sortToggleBottomNavigationView = () => {
      //Toggling the visibility state of the bottom sheet
      setSortVisible(!visible);
    };

    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            margin: 8,
            marginHorizontal: 25,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <View>
              <FontAwesome5
                name="home"
                size={25}
                color={'#000'}
                style={{
                  marginBottom: '3%',
                  alignSelf: 'center',
                }}
              />
              <Text>Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleBottomNavigationView}>
            <View>
              <FontAwesome5
                name="plus"
                size={25}
                color={'#000'}
                style={{
                  marginBottom: '3%',
                  alignSelf: 'center',
                }}
              />
              <Text>Gender</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
            <View>
              <FontAwesome5
                name="sort-amount-up"
                size={25}
                color={'#000'}
                style={{
                  marginBottom: '3%',
                  alignSelf: 'center',
                }}
              />
              <Text>Filter</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={sortToggleBottomNavigationView}>
            <View>
              <MaterialComm
                name="sort-variant"
                size={25}
                color={'#000'}
                style={{
                  marginBottom: '3%',
                  alignSelf: 'center',
                }}
              />
              <Text>Sort</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <View style={{marginRight: '2%'}}>
              <FontAwesome
                name="user"
                size={25}
                color={'#000'}
                style={{
                  marginBottom: '3%',
                  alignSelf: 'center',
                }}
              />
              <Text>Profile</Text>
            </View>
          </TouchableOpacity>

          <BottomSheet
            visible={visible}
            //setting the visibility state of the bottom shee
            onBackButtonPress={toggleBottomNavigationView}
            //Toggling the visibility state
            onBackdropPress={toggleBottomNavigationView}
            //Toggling the visibility state
          >
            {/*Bottom Sheet inner View*/}

            <View
              style={{
                bottom: 0,
                position: 'absolute',
                width: '100%',
                backgroundColor: 'white',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                // height: Dimensions.get('window').height * 0.4,
                maxHeight: Dimensions.get('window').height * 0.4,
              }}>
              <Text
                style={{
                  //alignSelf: 'center',
                  color: '#A6A6A6',
                  fontSize: 16,
                  fontWeight: '500',
                  marginHorizontal: '10%',
                  marginTop: '3%',
                  fontFamily: 'Poppins',
                  fontWeight: '400',
                }}>
                Gender
              </Text>
              <View style={styles.line} />
              <TouchableOpacity
                onPress={() => navigation.navigate('DenimScreen')}>
                <Text
                  style={{
                    //alignSelf: 'center',
                    color: '#182E44',
                    fontWeight: '700',
                    marginHorizontal: '10%',
                    marginTop: '3%',
                    fontFamily: 'Poppins',
                    fontSize: 20,
                  }}>
                  Male
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    //alignSelf: 'center',
                    color: '#182E44',
                    fontWeight: '700',
                    marginHorizontal: '10%',
                    marginTop: '3%',
                    fontFamily: 'Poppins',
                    fontSize: 20,
                  }}>
                  Female
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    //alignSelf: 'center',
                    color: '#182E44',
                    fontWeight: '700',
                    marginHorizontal: '10%',
                    marginTop: '3%',
                    fontFamily: 'Poppins',
                    fontSize: 20,
                    marginBottom: '2%',
                  }}>
                  Kids
                </Text>
              </TouchableOpacity>
            </View>
          </BottomSheet>

          {/* Sort Bottom Tab */}

          <BottomSheet
            visible={sortVisible}
            //setting the visibility state of the bottom shee
            onBackButtonPress={sortToggleBottomNavigationView}
            //Toggling the visibility state
            onBackdropPress={sortToggleBottomNavigationView}
            //Toggling the visibility state
          >
            <View
              style={{
                bottom: 0,
                position: 'absolute',
                width: '100%',
                backgroundColor: 'white',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                // height: Dimensions.get('window').height * 0.4,
                maxHeight: Dimensions.get('window').height * 0.7,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  fontFamily: 'Poppins',
                  color: '#A6A6A6',
                  marginHorizontal: '10%',
                  marginTop: '5%',
                }}>
                Sort By
              </Text>
              <View style={styles.line} />
              <View style={{marginHorizontal: '10%', marginTop: '2%'}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DenimScreen')}
                  activeOpacity={0.7}>
                  <Text
                    style={{
                      color: '#182E44',
                      fontWeight: '700',
                      //marginHorizontal: '10%',
                      //marginTop: '3%',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 18,
                      marginBottom: '5%',
                    }}>
                    What's New
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('DenimScreen')}
                  activeOpacity={0.7}>
                  <Text
                    style={{
                      color: '#182E44',
                      fontWeight: '700',
                      //marginHorizontal: '10%',
                      //marginTop: '3%',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 18,
                      marginBottom: '5%',
                    }}>
                    Price-High to Low
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DenimScreen')}
                  activeOpacity={0.7}>
                  <Text
                    style={{
                      color: '#182E44',
                      fontWeight: '700',
                      //marginHorizontal: '10%',
                      //marginTop: '3%',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 18,
                      marginBottom: '5%',
                    }}>
                    Popularity
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DenimScreen')}
                  activeOpacity={0.7}>
                  <Text
                    style={{
                      color: '#182E44',
                      fontWeight: '700',
                      //marginHorizontal: '10%',
                      //marginTop: '3%',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 18,
                      marginBottom: '5%',
                    }}>
                    Discount
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DenimScreen')}
                  activeOpacity={0.7}>
                  <Text
                    style={{
                      color: '#182E44',
                      fontWeight: '700',
                      //marginHorizontal: '10%',
                      //marginTop: '3%',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 18,
                      marginBottom: '5%',
                    }}>
                    Price-Low to High
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DenimScreen')}
                  activeOpacity={0.7}>
                  <Text
                    style={{
                      color: '#182E44',
                      fontWeight: '700',
                      //marginHorizontal: '10%',
                      //marginTop: '3%',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 18,
                      marginBottom: '5%',
                    }}>
                    Ratings
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </BottomSheet>

          {/*  Sort Bottom Tab Ends*/}
        </View>
      </SafeAreaView>
    );
  };

  // const Icon = (props) => (

  // );
  //bottom navigation

  // Denim Data
  const DenimData = ({data}) => {
    return (
      // <TouchableOpacity>
      //   <View>
      //     <Text>{data.type}</Text>
      //     <Image source={data.image}/>
      //   </View>
      // </TouchableOpacity>

      <View style={styles.topSellingWrapper}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={data.image} style={styles.topSellingImage} />

          <View style={styles.topSellingAddtoCart}>
            <TouchableOpacity>
              <Material name="favorite-outline" size={20} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View style={styles.topSellingTextContainer}>
          <Text style={styles.topSellingText}>{data.type}</Text>
        </View>
        <View style={styles.topSellingPriceContainer}>
          <Text>{data.price}</Text>
          <View style={styles.topSellingColorContainer}>
            <View style={styles.topSellingColor} />
            <View
              style={[styles.topSellingColor, {backgroundColor: '#BC893C'}]}
            />
            <View
              style={[styles.topSellingColor, {backgroundColor: '#FFFFFF'}]}
            />
            <View
              style={[styles.topSellingColor, {backgroundColor: '#0C4F8D'}]}
            />
            <View
              style={[styles.topSellingColor, {backgroundColor: '#00FFFF'}]}
            />
            <View style={styles.topSellingCartContainer}>
              <TouchableOpacity>
                <IonIcons name="ios-cart-outline" size={15} color={'#000'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  //Denim Data Ends

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
        <Text style={styles.headerText}>Denims</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.midContainer}>
          <ImageBackground source={Img} style={{flex: 1, borderRadius: 20,marginBottom:"5%"}}>
            <View style={styles.midTextContainer}>
              {/* <Text style={styles.midCategoryText}>{data.title}</Text> 
               <Text style={styles.midCategorySubText}>{data.type}</Text> */}
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
      <ScrollView>
        <FlatList
          data={Denims}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          // scrollEnabled={false} //for virtualized list error
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DenimData
              data={item}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                marginBottom: '8%',
              }}
              contentContainerStyle={{
                marginLeft: '3.5%',
                marginRight: '3.5%',
                marginTop: '5%',
              }}
            />
          )}
        />
       
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
}
