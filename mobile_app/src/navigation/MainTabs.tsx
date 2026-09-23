import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type MainTabParamList = {
  Home: undefined;
  Events: undefined;
  Clubs: undefined;
  Calendar: undefined;
  Profile: undefined;
};

export const MainTabNavigator = createBottomTabNavigator<MainTabParamList>();
