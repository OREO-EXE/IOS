import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../../store/AppContext';

export default function EventPassScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { event } = route.params || { event: null };
  const { user } = useAppContext();

  if (!event) return null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="close" size={28} color="#F5F6FA" />
        </TouchableOpacity>
      </View>

      <View style={styles.passWrapper}>
        <View style={styles.passTop}>
          <View style={styles.logoRow}>
            <Ionicons name="planet" size={24} color="#8B7CFF" />
            <Text style={styles.appName}>CampusConnect</Text>
          </View>
          <Text style={styles.passLabel}>EVENT PASS</Text>
        </View>

        <View style={styles.passBody}>
          <Text style={styles.studentName}>{user.name}</Text>
          <Text style={styles.university}>{user.university}</Text>

          <View style={styles.divider} />

          <Text style={styles.eventLabel}>EVENT</Text>
          <Text style={styles.eventTitle}>{event.title}</Text>

          <View style={styles.eventDetailsRow}>
            <View style={styles.detailCol}>
              <Text style={styles.detailLabel}>DATE</Text>
              <Text style={styles.detailValue}>{new Date(event.date).toLocaleDateString()}</Text>
            </View>
            <View style={styles.detailCol}>
              <Text style={styles.detailLabel}>TIME</Text>
              <Text style={styles.detailValue}>{event.time.split('-')[0].trim()}</Text>
            </View>
          </View>
          <View style={styles.detailCol}>
            <Text style={styles.detailLabel}>VENUE</Text>
            <Text style={styles.detailValue}>{event.location}</Text>
          </View>

          <View style={styles.qrContainer}>
            <Ionicons name="qr-code" size={140} color="#0F1118" />
            <View style={styles.scanLine} />
          </View>

          <View style={styles.statusRow}>
            <View>
              <Text style={styles.detailLabel}>PASS ID</Text>
              <Text style={styles.passId}>CC-2026-{Math.floor(1000 + Math.random() * 9000)}</Text>
            </View>
            <View style={styles.verifiedBadge}>
              <Ionicons name="checkmark-circle" size={14} color="#00B894" />
              <Text style={styles.verifiedText}>VERIFIED</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1118', padding: 20 },
  header: { alignItems: 'flex-end', marginBottom: 20 },
  backButton: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#1E2029', justifyContent: 'center', alignItems: 'center' },
  
  passWrapper: { backgroundColor: '#F5F6FA', borderRadius: 24, overflow: 'hidden', shadowColor: '#3DD9F5', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.3, shadowRadius: 20, elevation: 15, marginHorizontal: 10 },
  passTop: { backgroundColor: '#1E2029', padding: 24, alignItems: 'center' },
  logoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  appName: { color: '#F5F6FA', fontSize: 18, fontWeight: 'bold', marginLeft: 8 },
  passLabel: { color: '#8F92A1', fontSize: 12, letterSpacing: 4, fontWeight: 'bold' },
  
  passBody: { padding: 24 },
  studentName: { fontSize: 24, fontWeight: 'bold', color: '#0F1118' },
  university: { fontSize: 14, color: '#8F92A1', marginBottom: 20 },
  
  divider: { height: 1, backgroundColor: '#E2E2E2', borderStyle: 'dashed', borderWidth: 1, borderColor: '#E2E2E2', marginHorizontal: -24, marginBottom: 20 },
  
  eventLabel: { fontSize: 10, color: '#8F92A1', letterSpacing: 1, fontWeight: 'bold', marginBottom: 4 },
  eventTitle: { fontSize: 18, fontWeight: 'bold', color: '#0F1118', marginBottom: 20 },
  
  eventDetailsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  detailCol: { marginBottom: 16 },
  detailLabel: { fontSize: 10, color: '#8F92A1', letterSpacing: 1, fontWeight: 'bold', marginBottom: 4 },
  detailValue: { fontSize: 14, fontWeight: '600', color: '#0F1118' },
  
  qrContainer: { alignSelf: 'center', marginVertical: 20, padding: 16, backgroundColor: '#FFFFFF', borderRadius: 16, borderWidth: 1, borderColor: '#E2E2E2', position: 'relative' },
  scanLine: { position: 'absolute', top: '50%', left: 10, right: 10, height: 2, backgroundColor: '#FF7675', opacity: 0.7 },
  
  statusRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 10 },
  passId: { fontSize: 14, fontFamily: 'monospace', fontWeight: 'bold', color: '#0F1118' },
  verifiedBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0, 184, 148, 0.1)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, gap: 4 },
  verifiedText: { color: '#00B894', fontSize: 12, fontWeight: 'bold', letterSpacing: 1 }
});
