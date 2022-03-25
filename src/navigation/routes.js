import React from 'react'
import { Text, View,Image } from 'react-native';
import Home from '../Screen/Home';
import Order from '../Screen/Order';
import Store from '../Screen/Store';
import Other from '../Screen/Other';
import Map from '../Screen/Map';
import Login from '../Screen/Login';
import Detail from '../Screen/Detail';
import Cart from '../Screen/Cart';
import ToptabPoint from '../Screen/ToptabPoint';
import ToptabPromissorynote from '../Screen/ToptabPromissorynote';
import ToptabRedeempoints from '../Screen/ToptabRedeempoints'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function LogoTitle() {
  return (
   <View style={{ flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
   <Text style={{fontWeight:'bold',fontSize:20}}>The coffee House</Text>
   <Image 
      style={{width: 40, height: 30,marginLeft:'30%'}}
      source={require('../img/Cart.png')}
    />
   </View>
  );
}
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}} >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Map" component={Map}/>
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Cart" component={Cart} />
   </Stack.Navigator>
  )
}
const PointTab =() =>{
  return (
   <TopTab.Navigator>
      <TopTab.Screen name="ToptabPoint" component={ToptabPoint} options={{ title: 'Tích điểm' }} />
      <TopTab.Screen name="ToptabPromissorynote" component={ToptabPromissorynote} options={{ title: 'Đổi ưu điểm' }}/>
      <TopTab.Screen name="ToptabRedeempoints" component={ToptabRedeempoints} options={{ title: 'Phiếu Ưu Điểm' }}/>
   </TopTab.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'ios-home-outline';
              } else if (route.name === 'Other') {
                iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline';
              } else if (route.name === 'Store') {
                iconName = focused ? 'md-wallet' : 'md-wallet-outline';
              } else if (route.name === 'Point') {
                iconName = focused ? 'ios-person-circle-sharp' : 'ios-person-circle-outline';
              } else if (route.name === 'Order') {
                iconName = focused ? 'cafe-sharp' : 'cafe-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
             headerTitle: props => <LogoTitle {...props} /> 
          })} 
          >
      <Tab.Screen  name="Home" component={HomeStack} options={{ title: 'Trang Chủ' }}/>
       <Tab.Screen name="Order" component={Order} options={{ title: 'Đặt Món' }}/>
       <Tab.Screen name="Store" component={Store} options={{ title: 'Cửa Hàng' }}/>
       <Tab.Screen name="Point" component={PointTab} options={{ title: 'Tích Điểm' }}/>
       <Tab.Screen name="Other" component={Other} options={{ title: 'Khác' }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
