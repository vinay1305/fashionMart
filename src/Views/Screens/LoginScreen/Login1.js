import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Login from '../../../assets/LoginAsset/Login.png';

export default function Login1({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar
        translucent
        backgroundColor={'#000'}
        barStyle="light-content"
      />
      <ImageBackground source={Login} style={{flex: 1}}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.headerText}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.midContainer}>
          <Text style={styles.midText}>Ideal Store For Your Shopping </Text>
        </View>
        <View style={styles.midLine} />
        <View style={styles.footerContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={styles.footerText}>Signup With Email</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    // height: '10%',
    // width: '20%',
    //backgroundColor: '#fff',
    position: 'absolute',
    left: '75%',
    top: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '700',
    fontFamily: 'Poppins',
  },
  midContainer: {
    marginTop: '140%',
    width: '60%',
   // height: 84,
    // backgroundColor: '#fff',
    marginLeft: '8%',
    //marginRight: 114,
    position: 'absolute',
  },
  midText: {
    fontSize: 28,
    lineHeight: 42,
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: 'Poppins-Bold',
  },
  midLine: {
    width: '80%',
    height: 1,
    backgroundColor: '#fff',
    marginTop: '166%',
    marginRight: '10%',
    marginLeft: '8%',
    marginBottom:"5%"
  },
  footerContainer: {
    height: '6%',
    width: '82%',
    backgroundColor: '#fff',
    marginTop: '8%',
    marginRight: '10%',
    marginLeft: '8%',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    lineHeight: 27,
    fontFamily: 'Poppins',
    color: '#000000',
  },
});
