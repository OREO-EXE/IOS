import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from '../screens/auth/SplashScreen';
import { OnboardingScreen } from '../screens/auth/OnboardingScreen';
import VerificationScreen from '../screens/auth/VerificationScreen';
import InterestsScreen from '../screens/auth/InterestsScreen';
import LoginScreen from '../screens/auth/LoginScreen';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Verification: undefined;
  Interests: undefined;
  ProfileSetup: undefined;
  MainApp: undefined;
  OrganizerApp: undefined;
  StudentProfile: undefined;
  EventDetails: { event: any };
  EventPass: { event: any };
  Settings: undefined;
  Login: undefined;
};

export const AuthStack = createStackNavigator<RootStackParamList>();

// We are defining the stack in AppNavigator.tsx instead of here to avoid circular dependencies, 
// or maybe it's already defined somewhere else. Let's look at AppNavigator.tsx
