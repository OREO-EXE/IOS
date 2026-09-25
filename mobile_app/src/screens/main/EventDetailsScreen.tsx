import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function EventDetailsScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { event } = route.params || { event: { title: 'Unknown Event', description: 'No details', date: new Date().toISOString(), location: 'TBD' } };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#F5F6FA" />
      </TouchableOpacity>
      
      <View style={styles.imagePlaceholder}>
        <Ionicons name="image-outline" size={48} color="#2D303E" />
      </View>

      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.date}>{new Date(event.date).toDateString()} • {event.location}</Text>
      
      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.description}>{event.description}</Text>
      
      <TouchableOpacity 
        style={styles.registerButton} 
        onPress={() => navigation.navigate('EventPass', { event })}
      >
        <Text style={styles.registerText}>Register & Get Pass</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1118', padding: 16 },
  backButton: { marginBottom: 16 },
  imagePlaceholder: { width: '100%', height: 200, backgroundColor: '#1E2029', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 8 },
  date: { fontSize: 16, color: '#6C5CE7', fontWeight: '600', marginBottom: 24 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 12 },
  description: { fontSize: 16, color: '#8F92A1', lineHeight: 24, marginBottom: 40 },
  registerButton: { backgroundColor: '#00B894', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 'auto', marginBottom: 20 },
  registerText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }
});
