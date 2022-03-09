// //import { View, Text } from 'react-native'
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import DenimProduct from '../src/Views/Screens/ProductsPages/denimPage/DenimProduct';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import Gender from '../src/Views/Screens/Bottomtabs/Gender';
// import Filter from '../src/Views/Screens/Bottomtabs/Filter';
// import MaterialComm from 'react-native-vector-icons/MaterialCommunityIcons'
// import Sort from '../src/Views/Screens/Bottomtabs/Sort';
// const Tab = createBottomTabNavigator();
// export default function TabDrawer({navigation}) {
//   return (
//     <Tab.Navigator screenOptions={{headerShown: false,
//     tabBarActiveBackgroundColor:"#DBDBDB",
//     tabActiveTintColor:"#000",
//     tabInactiveTintColor:"#333",
//     tabLabelStyle: {marginLeft: '-15%',
// fontFamily:"Poppins",
// fontSize:15},
// color:"#000"}}
//     >
//       <Tab.Screen name='Denim' component={DenimProduct}
//        options={{
//        // tabBarLabel: "Home",
//         tabBarIcon: ({color}) => (
//             <Ionicons name="home-outline" size={22} color={"#000"} />
//           ),
//       }}/>
//       <Tab.Screen name="Gender" component={Gender}
//         />
//       <Tab.Screen name="Sort" component={Sort}
//       options={{
//         // tabBarLabel: "Home",
//          tabBarIcon: ({color}) => (
//              <MaterialComm name="sort-descending" size={22} color={"#000"} />
//            ),
//        }}  />
//       <Tab.Screen name="Filter" component={Filter} 
//        options={{
//         // tabBarLabel: "Home",
//          tabBarIcon: ({color}) => (
//              <MaterialComm name="sort-variant" size={22} color={"#000"} />
//            ),
//        }}
//        listeners={{
//         tabPress: e => {
//           // Prevent default action
//           e.preventDefault({navigation});
    
//           //Any custom code here
//           //alert(123);
//           navigation.navigate("Filter")
//         },
//       }}
//     />
//     </Tab.Navigator>
//   );
// }



import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
    
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 8,
        marginHorizontal: 25,
        justifyContent: "space-between",
      }}
    >
       <TouchableOpacity>
    <View>
      <FontAwesome5
        name="home"
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>Home</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name="search"
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>Search</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name="shopping-bag"
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>Categories</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name="sort-amount-up"
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>Sort</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity
  onPress={()=>navigation("HomeScreen")}>
    <View>
      <FontAwesome5
        name="sort-up"
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: "center",
        }}
      />
      <Text>Filter</Text>
    </View>
  </TouchableOpacity>
  
      {/* <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="sort-amount-up" text="Sort" />
      <Icon icon="sort-up" text="Filter" onPress={()=>navigation.navigate("Filter")} /> */}
    </View>
  );
}

// const Icon = (props) => (
 
// );