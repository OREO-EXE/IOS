import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import { MainTabNavigator } from './MainTabs';
import { OrganizerStack } from './OrganizerStack';

import { SplashScreen } from '../screens/auth/SplashScreen';
import { OnboardingScreen } from '../screens/auth/OnboardingScreen';
import VerificationScreen from '../screens/auth/VerificationScreen';
import InterestsScreen from '../screens/auth/InterestsScreen';

import HomeFeedScreen from '../screens/main/HomeFeedScreen';
import EventsFeedScreen from '../screens/main/EventsFeedScreen';
import ClubsDiscoveryScreen from '../screens/main/ClubsDiscoveryScreen';
import CalendarScreen from '../screens/main/CalendarScreen';
import StudentProfileScreen from '../screens/main/StudentProfileScreen';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <AuthStack.Screen name="Splash" component={SplashScreen} />
        <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AuthStack.Screen name="Verification" component={VerificationScreen} />
        <AuthStack.Screen name="Interests" component={InterestsScreen} />
        <AuthStack.Screen name="MainApp" component={MainAppTabs} />
        <AuthStack.Screen name="StudentProfile" component={StudentProfileScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

const MainAppTabs = () => (
  <MainTabNavigator.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#1E2029', borderTopColor: '#2D303E' }, tabBarActiveTintColor: '#6C5CE7', tabBarInactiveTintColor: '#8F92A1' }}>
    <MainTabNavigator.Screen name="Home" component={HomeFeedScreen} />
    <MainTabNavigator.Screen name="Events" component={EventsFeedScreen} />
    <MainTabNavigator.Screen name="Clubs" component={ClubsDiscoveryScreen} />
    <MainTabNavigator.Screen name="Calendar" component={CalendarScreen} />
    <MainTabNavigator.Screen name="Profile" component={StudentProfileScreen} />
  </MainTabNavigator.Navigator>
);
