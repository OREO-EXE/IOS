import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CalendarScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Smart Calendar</Text>
      <View style={styles.calendarPlaceholder}>
        <Text style={styles.calendarText}>Calendar View Coming Soon!</Text>
        <Text style={styles.calendarSub}>Syncing with your courses and events...</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1118', padding: 16 },
  header: { fontSize: 28, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 20 },
  calendarPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E2029',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#2D303E',
    marginBottom: 20
  },
  calendarText: { fontSize: 18, color: '#F5F6FA', fontWeight: 'bold', marginBottom: 8 },
  calendarSub: { fontSize: 14, color: '#8F92A1' }
});
