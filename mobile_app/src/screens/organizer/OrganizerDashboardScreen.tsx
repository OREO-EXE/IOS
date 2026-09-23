import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OrganizerDashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Organizer Dashboard</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Events</Text>
        <Text style={styles.cardValue}>14</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Attendees</Text>
        <Text style={styles.cardValue}>342</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1118', padding: 16 },
  header: { fontSize: 28, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 20 },
  card: {
    backgroundColor: '#1E2029',
    padding: 24,
    borderRadius: 12,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#FDCB6E'
  },
  cardTitle: { fontSize: 16, color: '#8F92A1', marginBottom: 8 },
  cardValue: { fontSize: 32, fontWeight: 'bold', color: '#F5F6FA' }
});
