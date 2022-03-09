import {View, Text, StyleSheet, SafeAreaView, Image,StatusBar} from 'react-native';
import React from 'react';
import Logo from '../../../assets/OnboardingAssets/logo.png';
export default function SplashScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
        <StatusBar barStyle='dark-content' backgroundColor="#fff"/>
      <Image source={Logo} style={styles.logo} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 218,
    height: 206,
  },
});
