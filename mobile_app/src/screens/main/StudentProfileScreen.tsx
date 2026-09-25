import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { demoUser } from '../../data/demoData';

import { Ionicons } from '@expo/vector-icons';

export default function StudentProfileScreen() {
  const navigation = useNavigation<any>();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={28} color="#F5F6FA" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileCard}>
        <Image source={{ uri: demoUser.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{demoUser.name}</Text>
        <Text style={styles.campus}>{demoUser.university}</Text>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Events</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>5</Text>
          <Text style={styles.statLabel}>Clubs</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>3</Text>
          <Text style={styles.statLabel}>Badges</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Splash' }] })}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1118', padding: 16 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  header: { fontSize: 28, fontWeight: 'bold', color: '#F5F6FA' },
  profileCard: { alignItems: 'center', marginBottom: 30 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 16 },
  name: { fontSize: 24, fontWeight: 'bold', color: '#F5F6FA' },
  campus: { fontSize: 16, color: '#8F92A1', marginTop: 4 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 },
  statBox: { backgroundColor: '#1E2029', padding: 20, borderRadius: 12, alignItems: 'center', width: '30%', borderWidth: 1, borderColor: '#2D303E' },
  statValue: { fontSize: 24, fontWeight: 'bold', color: '#00B894', marginBottom: 8 },
  statLabel: { fontSize: 14, color: '#8F92A1' },
  logoutButton: { backgroundColor: '#FF7675', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 'auto', marginBottom: 20 },
  logoutText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }
});
