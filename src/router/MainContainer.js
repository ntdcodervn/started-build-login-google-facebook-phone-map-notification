import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  FlashScreen,
  LoginScreen,
  ProfileLoginScreen,
  ChooseStoreScreen,
  NotificationScreen,
  NotificationDetailScreen,
  CartScreen,
  CompleteScreen,
  ConfirmScreen,
  FollowScreen,
  ProfileScreen,
  OrderDScreen,
  HistoryOrderScreen,
  UpdateScreen,
  OrderScreen,
} from './screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabBar from './BottomTabBar'

const AuthStack = createStackNavigator();

const AuthNav = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="FlashScreen" component={FlashScreen} />
    </AuthStack.Navigator>
  );
};

const LoginStack = createStackNavigator();

const LoginNav = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="LoginScreen" component={FlashScreen} />
      <LoginStack.Screen
        name="ProfileLoginScreen"
        component={ProfileLoginScreen}
      />
    </LoginStack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
      <BottomTab.Screen name="HomeTab" component={HomeScreen} />
      <BottomTab.Screen name="CartTab" component={CartScreen} />
      <BottomTab.Screen name="HistoryOrderTab" component={OrderScreen} />
      <BottomTab.Screen name="NotificationTab" component={NotificationScreen} />
      <BottomTab.Screen name="ProfileTab" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

export default function MainContainer() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}
