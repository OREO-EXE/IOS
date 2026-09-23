import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

export type OrganizerStackParamList = {
  Dashboard: undefined;
  EventManagement: undefined;
  QRScanner: undefined;
};

export const OrganizerStack = createStackNavigator<OrganizerStackParamList>();
