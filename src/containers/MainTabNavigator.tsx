import TabBarIcon from '@eqeq/app/components/TabBarIcon';
import HomeScreen from '@eqeq/app/views/HomeScreen';
import LinksScreen from '@eqeq/app/views/LinksScreen';
import SettingsScreen from '@eqeq/app/views/SettingsScreen';
import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}
    />
  )
};

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'} />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'} />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});