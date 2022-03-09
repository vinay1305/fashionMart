import {View, Text, ImageBackground, Image, StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign'
import IonIcons from 'react-native-vector-icons/Ionicons'
const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#F4F4F6'}}>
        {/* <ImageBackground
          source={require("../src/assets/DrawerNav/drawerbackground.jpg")} style={{position:"absolute"}}
          >
              
          </ImageBackground> */}
        <View style={styles.userContainer}>
          <Image
            source={require('../src/assets/DrawerNav/user-profile.jpg')}
            style={styles.userImg}
          />
         <View >
         <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
         <Text style={styles.userText}>John Doe</Text>
         <AntDesign name='right' size={20} color={"#000"} style={{marginRight:"5%"}}/>
         </View>
          <Text style={styles.userBounty}>Allegiance Bounty:<Text style={{fontSize:20}}>66</Text></Text>
         </View>
        </View>
      <View style={styles.drawerContainer}>
      <DrawerItemList {...props} />
      </View>
      </DrawerContentScrollView>
      <View style={{padding:"8%",borderTopWidth:1,borderTopColor:"#ccc"}}>
        <TouchableOpacity onPress={()=>{}} style={{paddingVertical:"10%"}}  activeOpacity={0.7}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
            <IonIcons name='share-social-outline' size={22} color={"#000"} style={{marginRight:"4%",marginLeft:"-3%"}}/>
        <Text style={{fontFamily:"Poppins",color:"#000",fontSize:15}}>Tell a Friend</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}} style={{paddingVertical:"10%"}} activeOpacity={0.7}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
            <IonIcons name='exit-outline' size={22} color={"#000"} style={{marginRight:"4%",marginLeft:"-3%"}}/>
        <Text style={{fontFamily:"Poppins",color:"#000",fontSize:15}}>Sign Out</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  userContainer: {
    margin: '5%',
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row"
  },
  userImg: {
    height: 80,
    width: 80,
    borderRadius: 40,
    paddingBottom: 20,
  },
  userText: {
    fontFamily: 'Poppins-Regular',
    marginTop: '2%',
    marginLeft: '4%',
    fontSize: 19,
    color: '#000',
    fontWeight: '600',
  },
  userBounty:{
    fontFamily: 'Poppins-Regular',
    marginTop: '-1%',
    marginLeft: '4%',
    fontSize: 13,
    color: '#000',
    fontWeight: '600',
  },
  drawerContainer:{
      backgroundColor:"#fff",
      paddingTop:"4%"
  }
});
