import React from 'react';
import { Ionicons } from '@expo/vector-icons';
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
import EventDetailsScreen from '../screens/main/EventDetailsScreen';
import EventPassScreen from '../screens/main/EventPassScreen';
import SettingsScreen from '../screens/main/SettingsScreen';

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
        <AuthStack.Screen name="EventDetails" component={EventDetailsScreen} />
        <AuthStack.Screen name="EventPass" component={EventPassScreen} />
        <AuthStack.Screen name="Settings" component={SettingsScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

const MainAppTabs = () => (
  <MainTabNavigator.Navigator 
    screenOptions={({ route }) => ({ 
      headerShown: false, 
      tabBarStyle: { backgroundColor: '#1E2029', borderTopColor: '#2D303E' }, 
      tabBarActiveTintColor: '#6C5CE7', 
      tabBarInactiveTintColor: '#8F92A1',
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: any = 'home';
        if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
        else if (route.name === 'Events') iconName = focused ? 'calendar' : 'calendar-outline';
        else if (route.name === 'Clubs') iconName = focused ? 'people' : 'people-outline';
        else if (route.name === 'Calendar') iconName = focused ? 'time' : 'time-outline';
        else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}
  >
    <MainTabNavigator.Screen name="Home" component={HomeFeedScreen} />
    <MainTabNavigator.Screen name="Events" component={EventsFeedScreen} />
    <MainTabNavigator.Screen name="Clubs" component={ClubsDiscoveryScreen} />
    <MainTabNavigator.Screen name="Calendar" component={CalendarScreen} />
    <MainTabNavigator.Screen name="Profile" component={StudentProfileScreen} />
  </MainTabNavigator.Navigator>
);
