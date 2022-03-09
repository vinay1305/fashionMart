import React,{useState,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../src/Views/Screens/SplashScreen/SplashScreen';
import HomeScreen from '../src/Views/Screens/HomeScreen/HomeScreen';
import LoginScreen from '../src/Views/Screens/LoginScreen/LoginScreen';
import SignupScreen from '../src/Views/Screens/SignupScreen/SignupScreen';
import OnBoardScreen from '../src/Views/Screens/OnBoardScreen/OnBoardScreen';
import Login1 from '../src/Views/Screens/LoginScreen/Login1';
import TopSellingPage from '../src/Views/Screens/ProductsPages/topSellingPage/topSellingPage';
import CartScreen from '../src/Views/Screens/CartScreen/CartScreen';
import CheckoutScreen from '../src/Views/Screens/Checkout/CheckoutScreen';
import DenimProduct from '../src/Views/Screens/ProductsPages/denimPage/DenimProduct';
import OrderPlaced from '../src/Views/Screens/OrderPlaced/OrderPlaced';
import TopPicks from '../src/Views/Screens/ProductsPages/topPicks/TopPicks';
import MyDrawer from './MyDrawer';
import Filter from '../src/Views/Screens/Bottomtabs/Filter';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  const [showSplashScreen,setShowSplashScreen]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setShowSplashScreen(false)
    },4000)
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SplashScreen">
        {/* Splash Screen */}
        {
          showSplashScreen ? (
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
          ) : null
        }
        {/* Splash Screen Ends */}
        <Stack.Screen name='OnBoardScreen' component={OnBoardScreen}/>
        <Stack.Screen name='Login1Screen' component={Login1}/>
        <Stack.Screen name="HomeScreen" component={MyDrawer} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        {/* PRoducts Details Screen */}
        <Stack.Screen name='TopSellingPageScreen' component={TopSellingPage}/>
        <Stack.Screen name='DenimScreen' component={DenimProduct}/>
        <Stack.Screen name='TopPicks' component={TopPicks}/>
        {/* Cart Screen */}
        <Stack.Screen name='CartScreen' component={CartScreen}/>
        {/* Cart Screen */}
        <Stack.Screen name='CheckoutScreen' component={CheckoutScreen}/>
         {/* OrderPlaced */}
         <Stack.Screen name='OrderPlaced' component={OrderPlaced}/>


         {/* Bottom Tabs */}
<Stack.Screen name='Filter' component={Filter}/>
{/* <Stack.Screen name='Gender' component={Gender}/>
<Stack.Screen name='Sort' component={Sort}/> */}

         {/* Bottom Tabs */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
