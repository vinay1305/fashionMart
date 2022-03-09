import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './onBoardStyle';
import AppIntroSlider from 'react-native-app-intro-slider';
import AntIcon from 'react-native-vector-icons/AntDesign';

const slides = [
  {
    id: '1',
    image: require('../../../assets/OnboardingAssets/OnBoard1.png'),
    title: '20% discount on New arrival products',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    image: require('../../../assets/OnboardingAssets/OnBoard2.png'),
    title: 'Take Advantage of the Offer Shopping',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    image: require('../../../assets/OnboardingAssets/OnBoard3.png'),
    title: 'All types of Apparel & deals you can find',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export default function OnBoardScreen({navigation}) {
  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.imgContainer}>
          <Image source={item.image} style={styles.img} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>{item.subtitle}</Text>
        </View>
      </View>
    );
  };
  const keyExtractor = item => item.id;

  // RenderNextButton
  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <AntIcon name="arrowright" size={20} color={'#fff'} />
      </View>
    );
  };
  //rrenderPRevButton
  // const renderPrevButton = () => {
  //   return (
  //     <View style={styles.leftTextWrapper}>
  //       <AntIcon name="arrowleft" size={20} color={'#fff'} />
  //     </View>
  //   );
  // };
  //renderDoneButton
  const renderDoneButton = () => {
    return (
      <TouchableOpacity
      onPress={()=>navigation.navigate("Login1Screen")}>
        <View style={styles.rightTextWrapper}>
          <Text style={{fontSize:16,color:"#FFF",fontFamily:"Poppins"}}>Done</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <AppIntroSlider
        data={slides}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        //renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      />
    </SafeAreaView>
  );
}
