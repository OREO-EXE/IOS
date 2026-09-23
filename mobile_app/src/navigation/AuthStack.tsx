import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Verification: undefined;
  Interests: undefined;
  ProfileSetup: undefined;
  MainApp: undefined;
  OrganizerApp: undefined;
  StudentProfile: undefined;
};

export const AuthStack = createStackNavigator<RootStackParamList>();
