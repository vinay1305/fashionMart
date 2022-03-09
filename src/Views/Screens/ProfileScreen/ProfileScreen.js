import {View, Text, StatusBar, SafeAreaView, Image} from 'react-native';
import React from 'react';
import styles from './ProfileStyle';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Material from 'react-native-vector-icons/MaterialIcons'
import user from '../../../assets/Profile/userImage.png';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={styles.headerContainer}>
        <IonIcons
          name="chevron-back-outline"
          size={25}
          color={'#000'}
          style={{marginTop: '8%', marginLeft: '5%'}}
          onPress={()=>navigation.goBack()}
        />
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.userContainer}>
        <View style={styles.imgContainer}>
          <Image source={user} />
        </View>
        <View style={styles.userText}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>johndoe@gmailcom</Text>
        </View>
      </View>
      <View style={styles.midContainer}>
        <View style={styles.userInfo}>
            <View style={styles.iconContainer}>
            <Entypo name='user' size={20} color={"#000"}/>
            </View>
            <Text style={styles.personalDetailsText}>Personal Details</Text>
        </View>
        <View style={styles.userInfo}>
            <View style={styles.iconContainer}>
            <Entypo name='shopping-cart' size={20} color={"#000"}/>
            </View>
            <Text style={styles.personalDetailsText}>My Orders</Text>
        </View>

        <View style={styles.userInfo}>
            <View style={styles.iconContainer}>
            <Entypo name='heart' size={20} color={"#000"}/>
            </View>
            <Text style={styles.personalDetailsText}>My WishList</Text>
        </View>
        <View style={styles.userInfo}>
            <View style={styles.iconContainer}>
            <Entypo name='home' size={20} color={"#000"}/>
            </View>
            <Text style={styles.personalDetailsText}>Shipping Address</Text>
        </View>
        <View style={styles.userInfo}>
            <View style={styles.iconContainer}>
            <IonIcons name='card' size={20} color={"#000"}/>
            </View>
            <Text style={styles.personalDetailsText}>My Card</Text>
        </View>
        <View style={styles.userInfo}>
            <View style={styles.iconContainer}>
            <IonIcons name='settings' size={20} color={"#000"}/>
            </View>
            <Text style={styles.personalDetailsText}>Settings</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
      <View style={styles.userInfo}>
            <View style={styles.iconContainer}>
            <FontAwesome name='question-circle' size={20} color={"#000"}/>
            </View>
            <Text style={styles.personalDetailsText}>FAQ'S</Text>
        </View>
        <View style={styles.userInfo}>
            <View style={styles.iconContainer}>
            <Material name='policy' size={20} color={"#000"}/>
            </View>
            <Text style={styles.personalDetailsText}>Privacy Policy</Text>
        </View>
        <View style={styles.userInfo}>
            <View style={styles.iconContainer}>
            <IonIcons name='ios-help-buoy' size={20} color={"#000"}/>
            </View>
            <Text style={styles.personalDetailsText}>Help Center</Text>
        </View>
        <View style={styles.userInfo}>
            <View style={styles.iconContainer}>
            <AntDesign name='logout' size={20} color={"#000"}/>
            </View>
            <Text style={styles.personalDetailsText}>Log Out</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
