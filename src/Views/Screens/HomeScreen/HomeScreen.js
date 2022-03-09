import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  Dimensions,
  LogBox,
  ImageBackground,
} from 'react-native';
import React, {useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import styles from './HomeStyle';
import Logo from '../../../assets/HomeScreenAssets/image2.png';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import categoryList from '../../../conts/categoryList/categoryList';
import clothes from '../../../conts/clothes';
import midCategory from '../../../conts/categoryList/midCategory';
import topSelling from '../../../conts/categoryList/topSelling';
import footer from '../../../conts/categoryList/footer';
import topPicks from '../../../conts/categoryList/topPicks';
const {width} = Dimensions.get('screen');




  // LogBox.ignoreLogs([
  //   ' VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
  // ]);
// CategoryList

export default function HomeScreen({navigation}) {
const CategoryList = ({data}) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.categoryContainer}>
          <Image source={data.image} style={styles.categoryImage} />
        </View>
        <View style={styles.categoryTextContainer}>
          <Text style={styles.categoryText}>{data.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

//Category List Ends

//Clothes List

const ClothesCategory = ({data}) => {
  return (
    <View style={styles.clothesContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.clothesDiscount}>{data.discount}</Text>
        <Text style={styles.descText}>{data.discription}</Text>
        <Text style={styles.descText}>{data.code}</Text>
        <View style={styles.clothesBtnCont}>
          <TouchableOpacity>
            <Text style={styles.clothesBtnText}>Get Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image source={data.image} style={styles.clothesImg} />
    </View>
  );
};

//Clothes List Ends

//MidCategory Starts

const MidCategory = ({data}) => {
  return (
    <View style={styles.midCategoryContainer}>
      <TouchableOpacity activeOpacity={0.7}
      onPress={()=>navigation.navigate("DenimScreen",data)}>
        <Image source={data.image} style={styles.midCategoryImg} />
        <View style={styles.midTextContainer}>
          <Text style={styles.midCategoryText}>{data.title}</Text>
          <Text style={styles.midCategorySubText}>{data.type}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
//MidCategoryEnds

//Top Selling Container
const TopSelling = ({data}) => {
  const navigateToTopSellingPage=()=>{
    navigation.navigate("TopSellingPageScreen",data)
  }
  return (
    <View style={styles.topSellingWrapper}>
      <TouchableOpacity activeOpacity={0.7}
      onPress={navigateToTopSellingPage}>
        
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
              <IonIcon name="ios-cart-outline" size={15} color={'#000'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

//Top Selling Container

//Footer Data Starts

const FooterData = ({data}) => {
  return (
    <View style={styles.footerDataContainer}>
      <View style={styles.footerLogoContainer}>
        <Image source={data.logo} style={styles.footerLogoImg} />
      </View>
      <View style={styles.footerMainImgContainer}>
        {/* <Image source={require('../../../assets/HomeScreenAssets/footer/rect.png')} style={styles.footerMainImg}/> */}
        <Image
          source={data.image}
          style={{
            position: 'absolute',
            marginLeft: 2,
            height: '100%',
            width: '100%',
            borderRadius: 5,
          }}
        />
        <Text style={styles.footerDataText}>{data.title}</Text>
        <View style={styles.footerDataPriceContainer}>
          <Text style={styles.footerDataPriceText}>{data.originalPrice}</Text>
          <Text style={styles.footerDataDiscountText}>{data.DiscPrice}</Text>
          <Feather
            name="arrow-right"
            size={20}
            color={'#17181A'}
            style={{marginLeft: '18%'}}
          />
        </View>
      </View>
    </View>
  );
};

//Footer Data Ends

//TopPicks Start
const TopPicks = ({data}) => {
  return (
    <TouchableOpacity activeOpacity={0.7}
    onPress={()=>navigation.navigate("TopPicks",data)}
    >
      <View style={styles.topPicksMainContainer}>
        <ImageBackground
          source={data.background}
          style={{flex: 1, borderRadius: 5}}>
          <Image source={data.image} style={styles.topPicksImg} />
          <View style={{marginTop: '5%', marginHorizontal: '8%'}}>
            <Text style={styles.topPickTitle}>{data.title}</Text>
            <Text style={styles.topPickSubTitle}>{data.desc}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

//TopPicks Ends


  
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />

      <View style={styles.headerContainer}>
        <View style={styles.leftHeader}>
          <View style={styles.menuContainer}>
            <Entypo name="menu" size={20} color={'#fff'} onPress={()=>navigation.openDrawer()} />
          </View>
          <Image source={Logo} style={styles.imgHeader} />
        </View>
        <View style={styles.rightHeader}>
          <IonIcon
            name="notifications-outline"
            size={20}
            color={'#000'}
            style={{marginRight: 10}}
          />
          <Material
            name="favorite-outline"
            size={20}
            color={'#000'}
            style={{marginRight: 10}}
          />
          <EvilIcon
            name="cart"
            size={20}
            color={'#000'}
            style={{marginRight: 10}}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search" style={styles.textInput} />
        </View>

        <FlatList
          data={categoryList}
          nestedScrollEnabled={true}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <CategoryList data={item} />}
          contentContainerStyle={{paddingLeft: 20, marginBottom: 20}}
        />

        <View>
          <FlatList
            data={clothes}
            nestedScrollEnabled={true}
            contentContainerStyle={{marginLeft: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <ClothesCategory data={item} />}
          />
          <View style={styles.newArrivalCont}>
            <Text style={styles.newArrText}>New Arrivals</Text>
          </View>

          <FlatList
            data={midCategory}
            nestedScrollEnabled={true}
            snapToInterval={width - 20}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{marginLeft: '5%'}}
            renderItem={({item}) => <MidCategory data={item} />}
          />

          <View style={styles.newArrivalCont}>
            <Text style={styles.newArrText}>Top Selling</Text>
          </View>
          <View>
            <FlatList
              data={topSelling}
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false} //for virtualized list error
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                marginBottom: '8%',
              }}
              contentContainerStyle={{
                marginLeft: '3.5%',
                marginRight: '3.5%',
                marginTop: '5%',
              }}
              renderItem={({item}) => <TopSelling data={item} />}
            />
          </View>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerTitle}>
            Mantastic Unbelievable Deals - 22nd Feb
          </Text>
        </View>
        <FlatList
          data={footer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={false}
          contentContainerStyle={{marginLeft: '2%'}}
          renderItem={({item}) => <FooterData data={item} />}
        />
        <View style={styles.topPicksContainer}>
          <Text style={styles.topPicksTitle}>Top Picks</Text>
          <FlatList
            data={topPicks}
            nestedScrollEnabled={true}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false} //for virtualized list erro
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginBottom: '8%',
            }}
            contentContainerStyle={{
              marginLeft: '1.2%',
              marginRight: '6%',
              marginTop: '5%',
            }}
            renderItem={({item}) => <TopPicks data={item} />}
          />
        </View>
        <View style={styles.lowestDesc}>
          <Text style={styles.lowestDescText}>
          Fashion is the armor to survive the reality of everyfay life. {'\n'}
                   -Bill Cunningham-
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
