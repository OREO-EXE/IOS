import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import { MainTabNavigator } from './MainTabs';
import { OrganizerStack } from './OrganizerStack';

// Placeholder screens for the skeleton
import { View, Text } from 'react-native';
const Placeholder = ({ name }: { name: string }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0F1118' }}>
    <Text style={{ color: '#F5F6FA' }}>{name} Screen</Text>
  </View>
);

export const AppNavigator = () => {
  // In the final app, this will be driven by the Zustand auth store
  const isAuthenticated = false;
  const userRole = 'student'; // 'student' | 'organizer'

  return (
    <NavigationContainer>
      {/*
        Navigation skeleton based on the user flow:
        Splash -> Onboarding -> Verification -> Interests -> Main/Organizer
      */}
      {!isAuthenticated ? (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
          <AuthStack.Screen name="Splash" component={() => <Placeholder name="Splash" />} />
          <AuthStack.Screen name="Onboarding" component={() => <Placeholder name="Onboarding" />} />
          <AuthStack.Screen name="Verification" component={() => <Placeholder name="Verification" />} />
          <AuthStack.Screen name="Interests" component={() => <Placeholder name="Interests" />} />
          <AuthStack.Screen name="StudentProfile" component={() => <Placeholder name="Student Profile" />} />
        </AuthStack.Navigator>
      ) : (
        userRole === 'student' ? (
          <MainTabNavigator.Navigator screenOptions={{ headerShown: false }}>
            <MainTabNavigator.Screen name="Home" component={() => <Placeholder name="Home" />} />
            <MainTabNavigator.Screen name="Events" component={() => <Placeholder name="Events" />} />
            <MainTabNavigator.Screen name="Clubs" component={() => <Placeholder name="Clubs" />} />
            <MainTabNavigator.Screen name="Calendar" component={() => <Placeholder name="Calendar" />} />
            <MainTabNavigator.Screen name="Profile" component={() => <Placeholder name="Profile" />} />
          </MainTabNavigator.Navigator>
        ) : (
          <OrganizerStack.Navigator screenOptions={{ headerShown: false }}>
            <OrganizerStack.Screen name="Dashboard" component={() => <Placeholder name="Dashboard" />} />
            <OrganizerStack.Screen name="EventManagement" component={() => <Placeholder name="EventManagement" />} />
            <OrganizerStack.Screen name="QRScanner" component={() => <Placeholder name="QRScanner" />} />
          </OrganizerStack.Navigator>
        )
      )}
    </NavigationContainer>
  );
};
