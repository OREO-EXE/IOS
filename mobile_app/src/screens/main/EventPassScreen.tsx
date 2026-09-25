import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function EventPassScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { event } = route.params || { event: { title: 'Event' } };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#F5F6FA" />
      </TouchableOpacity>

      <Text style={styles.header}>Digital Pass</Text>
      
      <View style={styles.passCard}>
        <Text style={styles.eventTitle}>{event.title}</Text>
        <Text style={styles.statusText}>Registered</Text>
        
        <View style={styles.qrPlaceholder}>
          <Ionicons name="qr-code" size={120} color="#0F1118" />
        </View>
        
        <Text style={styles.instruction}>Scan at the entrance</Text>
      </View>
      
      <TouchableOpacity style={styles.doneButton} onPress={() => navigation.navigate('MainApp')}>
        <Text style={styles.doneText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1118', padding: 16 },
  backButton: { marginBottom: 16 },
  header: { fontSize: 28, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 40, textAlign: 'center' },
  passCard: { backgroundColor: '#F5F6FA', padding: 32, borderRadius: 24, alignItems: 'center', alignSelf: 'center', width: '85%' },
  eventTitle: { fontSize: 20, fontWeight: 'bold', color: '#0F1118', textAlign: 'center', marginBottom: 8 },
  statusText: { fontSize: 16, color: '#00B894', fontWeight: 'bold', marginBottom: 32 },
  qrPlaceholder: { width: 160, height: 160, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', borderRadius: 16, marginBottom: 32, borderWidth: 2, borderColor: '#0F1118' },
  instruction: { fontSize: 14, color: '#8F92A1' },
  doneButton: { backgroundColor: '#1E2029', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 'auto', marginBottom: 20, borderWidth: 1, borderColor: '#2D303E' },
  doneText: { color: '#F5F6FA', fontSize: 16, fontWeight: 'bold' }
});
