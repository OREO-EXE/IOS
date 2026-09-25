import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../../store/AppContext';

export default function EventsFeedScreen() {
  const navigation = useNavigation<any>();
  const { user, events, registerForEvent } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Technology', 'Cultural', 'Sports', 'Hackathons', 'Arts', 'Innovation'];

  const filteredEvents = events.filter(e => {
    const matchesCat = selectedCategory === 'All' || e.category === selectedCategory;
    const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const todayEvents = filteredEvents.filter(e => new Date(e.date).toDateString() === new Date().toDateString());
  const upcomingEvents = filteredEvents.filter(e => new Date(e.date).toDateString() !== new Date().toDateString());

  const renderEventCard = (event: any) => {
    const dateObj = new Date(event.date);
    const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
    const day = dateObj.getDate();
    const isRegistered = user.registeredEvents.includes(event.id);

    return (
      <TouchableOpacity 
        key={event.id} 
        style={styles.eventCard}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('EventDetails', { event })}
      >
        <View style={styles.dateBlock}>
          <Text style={styles.dateMonth}>{month}</Text>
          <Text style={styles.dateDay}>{day}</Text>
        </View>
        <View style={styles.eventInfo}>
          <Text style={styles.eventCategory}>{event.category}</Text>
          <Text style={styles.eventTitle} numberOfLines={1}>{event.title}</Text>
          <View style={styles.metaRow}>
            <Ionicons name="location-outline" size={14} color="#8F92A1" />
            <Text style={styles.metaText} numberOfLines={1}>{event.location}</Text>
          </View>
          <View style={styles.metaRow}>
            <Ionicons name="time-outline" size={14} color="#8F92A1" />
            <Text style={styles.metaText}>{event.time}</Text>
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.attendees}>{event.attendees} attending</Text>
            {isRegistered ? (
              <View style={styles.registeredBtn}>
                <Ionicons name="checkmark" size={16} color="#00B894" />
                <Text style={styles.registeredBtnText}>Registered</Text>
              </View>
            ) : (
              <TouchableOpacity 
                style={styles.registerBtn}
                onPress={() => registerForEvent(event.id)}
              >
                <Text style={styles.registerBtnText}>Register</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Upcoming Events</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#8F92A1" />
        <TextInput 
          style={styles.searchInput}
          placeholder="Search events..."
          placeholderTextColor="#8F92A1"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.categoriesWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesScroll}>
          {categories.map(cat => (
            <TouchableOpacity 
              key={cat} 
              style={[styles.categoryChip, selectedCategory === cat && styles.categoryChipActive]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text style={[styles.categoryChipText, selectedCategory === cat && styles.categoryChipTextActive]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {todayEvents.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Today</Text>
            {todayEvents.map(renderEventCard)}
          </>
        )}

        {upcomingEvents.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Upcoming</Text>
            {upcomingEvents.map(renderEventCard)}
          </>
        )}

        {filteredEvents.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="calendar-clear-outline" size={64} color="#2D303E" />
            <Text style={styles.emptyTitle}>No events found</Text>
            <Text style={styles.emptyDesc}>Try adjusting your filters or search query.</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1118' },
  header: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 16 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#F5F6FA' },
  
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1E2029', marginHorizontal: 20, paddingHorizontal: 16, height: 48, borderRadius: 12, marginBottom: 16, borderWidth: 1, borderColor: '#2D303E' },
  searchInput: { flex: 1, marginLeft: 10, color: '#F5F6FA', fontSize: 16 },
  
  categoriesWrapper: { height: 40, marginBottom: 16 },
  categoriesScroll: { paddingHorizontal: 20, gap: 10 },
  categoryChip: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: '#1E2029', borderWidth: 1, borderColor: '#2D303E', justifyContent: 'center' },
  categoryChipActive: { backgroundColor: '#8B7CFF', borderColor: '#8B7CFF' },
  categoryChipText: { color: '#8F92A1', fontSize: 14, fontWeight: '500' },
  categoryChipTextActive: { color: '#FFFFFF', fontWeight: 'bold' },
  
  scrollContent: { paddingHorizontal: 20, paddingBottom: 40 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 16, marginTop: 8 },
  
  eventCard: { flexDirection: 'row', backgroundColor: '#1E2029', borderRadius: 16, marginBottom: 16, padding: 16, borderWidth: 1, borderColor: '#2D303E' },
  dateBlock: { width: 60, height: 60, backgroundColor: 'rgba(139, 124, 255, 0.1)', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginRight: 16, borderWidth: 1, borderColor: 'rgba(139, 124, 255, 0.3)' },
  dateMonth: { color: '#8B7CFF', fontSize: 12, fontWeight: 'bold' },
  dateDay: { color: '#8B7CFF', fontSize: 24, fontWeight: 'bold' },
  
  eventInfo: { flex: 1 },
  eventCategory: { color: '#3DD9F5', fontSize: 12, fontWeight: '600', marginBottom: 4 },
  eventTitle: { color: '#F5F6FA', fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  metaRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  metaText: { color: '#8F92A1', fontSize: 12, marginLeft: 6 },
  
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, paddingTop: 12, borderTopWidth: 1, borderTopColor: '#2D303E' },
  attendees: { color: '#8F92A1', fontSize: 12 },
  
  registerBtn: { backgroundColor: '#8B7CFF', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8 },
  registerBtnText: { color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' },
  registeredBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0, 184, 148, 0.1)', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, gap: 4 },
  registeredBtnText: { color: '#00B894', fontSize: 12, fontWeight: 'bold' },
  
  emptyState: { alignItems: 'center', marginTop: 60 },
  emptyTitle: { color: '#F5F6FA', fontSize: 18, fontWeight: 'bold', marginTop: 16, marginBottom: 8 },
  emptyDesc: { color: '#8F92A1', fontSize: 14, textAlign: 'center' }
});
