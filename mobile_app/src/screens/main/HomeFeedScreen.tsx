import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../../store/AppContext';

export default function HomeFeedScreen() {
  const navigation = useNavigation<any>();
  const { user, events, clubs, announcements } = useAppContext();

  const todayEvents = events.filter(e => new Date(e.date).toDateString() === new Date().toDateString()).slice(0, 2);
  const trendingEvents = events.slice(2, 5);
  const recommendedClubs = clubs.filter(c => user.interests.includes(c.category)).slice(0, 3);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning, {user.name.split(' ')[0]} 👋</Text>
            <Text style={styles.university}>{user.university}</Text>
          </View>
          <TouchableOpacity style={styles.bellIcon}>
            <Ionicons name="notifications-outline" size={24} color="#F5F6FA" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{user.stats.eventsAttended}</Text>
            <Text style={styles.statLabel}>Events</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{user.stats.clubsJoined}</Text>
            <Text style={styles.statLabel}>Clubs</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{user.stats.badgesEarned}</Text>
            <Text style={styles.statLabel}>Badges</Text>
          </View>
          <View style={[styles.statBox, { borderColor: '#3DD9F5' }]}>
            <Text style={[styles.statValue, { color: '#3DD9F5' }]}>{user.stats.engagementScore}%</Text>
            <Text style={styles.statLabel}>Activity</Text>
          </View>
        </View>

        {/* What's happening today */}
        <Text style={styles.sectionTitle}>What's happening today?</Text>
        {todayEvents.map(event => (
          <TouchableOpacity 
            key={event.id} 
            style={styles.eventCard} 
            activeOpacity={0.8}
            onPress={() => navigation.navigate('EventDetails', { event })}
          >
            <Image source={{ uri: event.image }} style={styles.eventImage} />
            <View style={styles.eventInfo}>
              <View style={styles.eventCategoryContainer}>
                <Text style={styles.eventCategory}>{event.category}</Text>
                {user.registeredEvents.includes(event.id) && (
                  <View style={styles.registeredBadge}>
                    <Text style={styles.registeredText}>Attending</Text>
                  </View>
                )}
              </View>
              <Text style={styles.eventTitle} numberOfLines={1}>{event.title}</Text>
              <View style={styles.eventMetaRow}>
                <Ionicons name="time-outline" size={14} color="#8F92A1" />
                <Text style={styles.eventMetaText}>{event.time}</Text>
              </View>
              <View style={styles.eventMetaRow}>
                <Ionicons name="location-outline" size={14} color="#8F92A1" />
                <Text style={styles.eventMetaText} numberOfLines={1}>{event.location}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.navigate('Events')}>
            <View style={[styles.iconWrapper, { backgroundColor: 'rgba(139, 124, 255, 0.2)' }]}>
              <Ionicons name="calendar-outline" size={24} color="#8B7CFF" />
            </View>
            <Text style={styles.actionText}>Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.navigate('Clubs')}>
            <View style={[styles.iconWrapper, { backgroundColor: 'rgba(61, 217, 245, 0.2)' }]}>
              <Ionicons name="people-outline" size={24} color="#3DD9F5" />
            </View>
            <Text style={styles.actionText}>Clubs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.navigate('Calendar')}>
            <View style={[styles.iconWrapper, { backgroundColor: 'rgba(0, 184, 148, 0.2)' }]}>
              <Ionicons name="grid-outline" size={24} color="#00B894" />
            </View>
            <Text style={styles.actionText}>Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} onPress={() => {
            if (user.registeredEvents.length > 0) {
              const ev = events.find(e => e.id === user.registeredEvents[0]);
              navigation.navigate('EventPass', { event: ev });
            }
          }}>
            <View style={[styles.iconWrapper, { backgroundColor: 'rgba(253, 203, 110, 0.2)' }]}>
              <Ionicons name="qr-code-outline" size={24} color="#FDCB6E" />
            </View>
            <Text style={styles.actionText}>Digital Pass</Text>
          </TouchableOpacity>
        </View>

        {/* Campus Pulse (Trending) */}
        <View style={styles.pulseHeader}>
          <Text style={styles.sectionTitle}>Campus Pulse</Text>
          <Ionicons name="flame" size={20} color="#FF7675" />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {trendingEvents.map(event => (
            <TouchableOpacity 
              key={event.id} 
              style={styles.trendingCard}
              onPress={() => navigation.navigate('EventDetails', { event })}
            >
              <Image source={{ uri: event.image }} style={styles.trendingImage} />
              <View style={styles.trendingOverlay}>
                <Text style={styles.trendingTitle} numberOfLines={2}>{event.title}</Text>
                <Text style={styles.trendingAttendees}>👥 {event.attendees} attending</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Your Progress */}
        <Text style={styles.sectionTitle}>Your Progress</Text>
        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Campus Engagement</Text>
            <Text style={styles.progressPercent}>{user.stats.engagementScore}%</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: `${user.stats.engagementScore}%` }]} />
          </View>
          <Text style={styles.progressSubtext}>3 more events to unlock <Text style={{ color: '#3DD9F5' }}>Campus Explorer</Text> badge</Text>
        </View>

        {/* Announcements */}
        <Text style={styles.sectionTitle}>Announcements</Text>
        {announcements.map(ann => (
          <View key={ann.id} style={styles.announcementCard}>
            <View style={styles.announcementIcon}>
              <Ionicons name="megaphone" size={20} color="#FDCB6E" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.announcementTitle}>{ann.title}</Text>
              <Text style={styles.announcementDate}>{ann.date}</Text>
            </View>
          </View>
        ))}

        {/* Recommended For You */}
        <Text style={styles.sectionTitle}>Recommended For You</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {recommendedClubs.map(club => (
            <TouchableOpacity 
              key={club.id} 
              style={styles.clubCard}
              onPress={() => navigation.navigate('Clubs')}
            >
              <Image source={{ uri: club.image }} style={styles.clubImage} />
              <Text style={styles.clubName} numberOfLines={1}>{club.name}</Text>
              <Text style={styles.clubCategory}>{club.category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1118' },
  scrollContent: { padding: 20, paddingBottom: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
  greeting: { fontSize: 24, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 4 },
  university: { fontSize: 14, color: '#8F92A1' },
  bellIcon: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#1E2029', justifyContent: 'center', alignItems: 'center' },
  notificationDot: { position: 'absolute', top: 12, right: 12, width: 8, height: 8, borderRadius: 4, backgroundColor: '#FF7675' },
  
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  statBox: { backgroundColor: '#1E2029', borderRadius: 12, padding: 12, width: '23%', alignItems: 'center', borderWidth: 1, borderColor: '#2D303E' },
  statValue: { fontSize: 18, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 4 },
  statLabel: { fontSize: 11, color: '#8F92A1', fontWeight: '500' },
  
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 16, marginTop: 10 },
  
  eventCard: { flexDirection: 'row', backgroundColor: '#1E2029', borderRadius: 16, marginBottom: 16, overflow: 'hidden', borderWidth: 1, borderColor: '#2D303E' },
  eventImage: { width: 100, height: '100%' },
  eventInfo: { flex: 1, padding: 16 },
  eventCategoryContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  eventCategory: { fontSize: 12, color: '#8B7CFF', fontWeight: '600' },
  registeredBadge: { backgroundColor: 'rgba(0, 184, 148, 0.2)', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  registeredText: { color: '#00B894', fontSize: 10, fontWeight: 'bold' },
  eventTitle: { fontSize: 16, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 8 },
  eventMetaRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  eventMetaText: { fontSize: 12, color: '#8F92A1', marginLeft: 6 },
  
  quickActions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30, marginTop: 10 },
  actionBtn: { alignItems: 'center', width: '22%' },
  iconWrapper: { width: 56, height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  actionText: { fontSize: 12, color: '#F5F6FA', fontWeight: '500' },
  
  pulseHeader: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  horizontalScroll: { marginHorizontal: -20, paddingHorizontal: 20, marginBottom: 30 },
  trendingCard: { width: 220, height: 140, borderRadius: 16, overflow: 'hidden', marginRight: 16 },
  trendingImage: { width: '100%', height: '100%' },
  trendingOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 12, backgroundColor: 'rgba(15, 17, 24, 0.8)' },
  trendingTitle: { color: '#F5F6FA', fontSize: 14, fontWeight: 'bold', marginBottom: 4 },
  trendingAttendees: { color: '#3DD9F5', fontSize: 12, fontWeight: '600' },
  
  progressCard: { backgroundColor: '#1E2029', padding: 20, borderRadius: 16, marginBottom: 30, borderWidth: 1, borderColor: '#2D303E' },
  progressHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  progressTitle: { color: '#F5F6FA', fontSize: 14, fontWeight: '600' },
  progressPercent: { color: '#8B7CFF', fontSize: 14, fontWeight: 'bold' },
  progressBarBg: { height: 8, backgroundColor: '#0F1118', borderRadius: 4, marginBottom: 12 },
  progressBarFill: { height: 8, backgroundColor: '#8B7CFF', borderRadius: 4 },
  progressSubtext: { color: '#8F92A1', fontSize: 12 },
  
  announcementCard: { flexDirection: 'row', backgroundColor: 'rgba(253, 203, 110, 0.1)', padding: 16, borderRadius: 12, marginBottom: 12, alignItems: 'center' },
  announcementIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(253, 203, 110, 0.2)', justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  announcementTitle: { color: '#F5F6FA', fontSize: 14, fontWeight: '600', marginBottom: 4 },
  announcementDate: { color: '#8F92A1', fontSize: 12 },
  
  clubCard: { width: 140, backgroundColor: '#1E2029', borderRadius: 16, padding: 16, marginRight: 16, alignItems: 'center', borderWidth: 1, borderColor: '#2D303E' },
  clubImage: { width: 64, height: 64, borderRadius: 32, marginBottom: 12 },
  clubName: { color: '#F5F6FA', fontSize: 14, fontWeight: '600', marginBottom: 4, textAlign: 'center' },
  clubCategory: { color: '#8F92A1', fontSize: 12 }
});
