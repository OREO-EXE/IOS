import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../../store/AppContext';

export default function EventDetailsScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { event } = route.params || { event: null };
  const { user, registerForEvent } = useAppContext();

  if (!event) return null;

  const isRegistered = user.registeredEvents.includes(event.id);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: event.image }} style={styles.image} />
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#F5F6FA" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{event.category}</Text>
          </View>
          
          <Text style={styles.title}>{event.title}</Text>
          
          <View style={styles.metaBox}>
            <View style={styles.metaRow}>
              <View style={styles.iconBox}>
                <Ionicons name="calendar" size={20} color="#8B7CFF" />
              </View>
              <View>
                <Text style={styles.metaValue}>{new Date(event.date).toDateString()}</Text>
                <Text style={styles.metaLabel}>{event.time}</Text>
              </View>
            </View>
            <View style={styles.metaRow}>
              <View style={styles.iconBox}>
                <Ionicons name="location" size={20} color="#3DD9F5" />
              </View>
              <View>
                <Text style={styles.metaValue}>{event.location}</Text>
                <Text style={styles.metaLabel}>Campus University</Text>
              </View>
            </View>
          </View>

          <View style={styles.organizerRow}>
            <View style={styles.organizerAvatar}>
              <Ionicons name="people" size={20} color="#F5F6FA" />
            </View>
            <View>
              <Text style={styles.organizerName}>{event.organizer}</Text>
              <Text style={styles.organizerLabel}>Organizer</Text>
            </View>
            <View style={styles.attendeesBox}>
              <Ionicons name="person" size={12} color="#00B894" />
              <Text style={styles.attendeesText}>{event.attendees} attending</Text>
            </View>
          </View>
          
          <Text style={styles.sectionTitle}>About this event</Text>
          <Text style={styles.description}>{event.description}</Text>

          {event.highlights && (
            <>
              <Text style={styles.sectionTitle}>Highlights</Text>
              {event.highlights.map((item: string, index: number) => (
                <View key={index} style={styles.highlightRow}>
                  <Ionicons name="checkmark-circle" size={20} color="#00B894" />
                  <Text style={styles.highlightText}>{item}</Text>
                </View>
              ))}
            </>
          )}
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        {isRegistered ? (
          <View style={styles.registeredActions}>
            <View style={styles.registeredStatus}>
              <Ionicons name="checkmark-circle" size={24} color="#00B894" />
              <Text style={styles.registeredStatusText}>Registered</Text>
            </View>
            <TouchableOpacity 
              style={styles.viewPassBtn} 
              onPress={() => navigation.navigate('EventPass', { event })}
            >
              <Text style={styles.viewPassText}>View Pass</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity 
            style={styles.registerButton} 
            onPress={() => registerForEvent(event.id)}
          >
            <Text style={styles.registerText}>Register Now</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1118' },
  imageContainer: { width: '100%', height: 300, position: 'relative' },
  image: { width: '100%', height: '100%' },
  backButton: { position: 'absolute', top: 50, left: 20, width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(15, 17, 24, 0.6)', justifyContent: 'center', alignItems: 'center' },
  
  content: { padding: 20, marginTop: -30, backgroundColor: '#0F1118', borderTopLeftRadius: 30, borderTopRightRadius: 30 },
  categoryBadge: { alignSelf: 'flex-start', backgroundColor: 'rgba(139, 124, 255, 0.2)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12, marginBottom: 16 },
  categoryText: { color: '#8B7CFF', fontSize: 12, fontWeight: 'bold' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 24 },
  
  metaBox: { backgroundColor: '#1E2029', borderRadius: 16, padding: 16, marginBottom: 24, borderWidth: 1, borderColor: '#2D303E' },
  metaRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 8 },
  iconBox: { width: 40, height: 40, borderRadius: 12, backgroundColor: 'rgba(245, 246, 250, 0.05)', justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  metaValue: { color: '#F5F6FA', fontSize: 16, fontWeight: '600' },
  metaLabel: { color: '#8F92A1', fontSize: 13, marginTop: 2 },
  
  organizerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 32 },
  organizerAvatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#2D303E', justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  organizerName: { color: '#F5F6FA', fontSize: 16, fontWeight: 'bold' },
  organizerLabel: { color: '#8F92A1', fontSize: 13 },
  attendeesBox: { marginLeft: 'auto', flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0, 184, 148, 0.1)', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 12 },
  attendeesText: { color: '#00B894', fontSize: 12, fontWeight: 'bold', marginLeft: 6 },
  
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 12, marginTop: 16 },
  description: { fontSize: 15, color: '#8F92A1', lineHeight: 24, marginBottom: 16 },
  highlightRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  highlightText: { color: '#F5F6FA', fontSize: 15, marginLeft: 12 },
  
  bottomBar: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, backgroundColor: '#0F1118', borderTopWidth: 1, borderTopColor: '#2D303E', paddingBottom: 30 },
  registerButton: { backgroundColor: '#8B7CFF', padding: 16, borderRadius: 16, alignItems: 'center' },
  registerText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  
  registeredActions: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  registeredStatus: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  registeredStatusText: { color: '#00B894', fontSize: 18, fontWeight: 'bold' },
  viewPassBtn: { backgroundColor: '#1E2029', paddingHorizontal: 24, paddingVertical: 14, borderRadius: 12, borderWidth: 1, borderColor: '#2D303E' },
  viewPassText: { color: '#F5F6FA', fontSize: 16, fontWeight: '600' }
});
