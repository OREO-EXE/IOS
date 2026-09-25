import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../../store/AppContext';

export default function StudentProfileScreen() {
  const navigation = useNavigation<any>();
  const { user, achievements, recentActivity, clubs } = useAppContext();
  
  const myClubs = clubs.filter(c => user.joinedClubs.includes(c.id));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.settingsBtn}>
          <Ionicons name="settings-outline" size={24} color="#F5F6FA" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <View style={styles.verifiedBadge}>
              <Ionicons name="checkmark-circle" size={20} color="#3DD9F5" />
            </View>
          </View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.major}>{user.major} • {user.university}</Text>
          <View style={styles.verifiedTag}>
            <Ionicons name="shield-checkmark" size={14} color="#00B894" />
            <Text style={styles.verifiedTagText}>Verified Student</Text>
          </View>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{user.stats.eventsAttended}</Text>
            <Text style={styles.statLabel}>Events</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{user.stats.clubsJoined}</Text>
            <Text style={styles.statLabel}>Clubs</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{user.stats.badgesEarned}</Text>
            <Text style={styles.statLabel}>Badges</Text>
          </View>
        </View>

        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Campus Engagement</Text>
            <Text style={styles.progressPercent}>{user.stats.engagementScore}%</Text>
          </View>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: `${user.stats.engagementScore}%` }]} />
          </View>
          <Text style={styles.progressSubtext}>Top 15% of students this semester</Text>
        </View>

        <Text style={styles.sectionTitle}>Achievements</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {achievements.map(badge => (
            <View key={badge.id} style={styles.badgeCard}>
              <View style={[styles.badgeIconBg, { backgroundColor: `${badge.color}20` }]}>
                <Ionicons name={badge.icon as any} size={28} color={badge.color} />
              </View>
              <Text style={styles.badgeName}>{badge.name}</Text>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>My Clubs</Text>
        {myClubs.length > 0 ? (
          myClubs.map(club => (
            <TouchableOpacity key={club.id} style={styles.myClubCard} onPress={() => navigation.navigate('Clubs')}>
              <Image source={{ uri: club.image }} style={styles.myClubImage} />
              <View style={styles.myClubInfo}>
                <Text style={styles.myClubName}>{club.name}</Text>
                <Text style={styles.myClubCategory}>{club.category}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#8F92A1" />
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.emptyText}>You haven't joined any clubs yet.</Text>
        )}

        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityContainer}>
          {recentActivity.map((act, index) => (
            <View key={act.id} style={styles.activityRow}>
              <View style={styles.activityIcon}>
                <Ionicons name={act.icon as any} size={16} color="#8F92A1" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityText}>{act.text}</Text>
                <Text style={styles.activityTime}>{act.time}</Text>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Splash' }] })}
        >
          <Ionicons name="log-out-outline" size={20} color="#FF7675" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1118' },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10, paddingBottom: 16 },
  header: { fontSize: 28, fontWeight: 'bold', color: '#F5F6FA' },
  settingsBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#1E2029', justifyContent: 'center', alignItems: 'center' },
  
  scrollContent: { paddingHorizontal: 20, paddingBottom: 40 },
  
  profileCard: { alignItems: 'center', marginBottom: 24, paddingVertical: 10 },
  avatarContainer: { position: 'relative', marginBottom: 16 },
  avatar: { width: 110, height: 110, borderRadius: 55, borderWidth: 3, borderColor: '#1E2029' },
  verifiedBadge: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#0F1118', borderRadius: 12, padding: 2 },
  name: { fontSize: 24, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 4 },
  major: { fontSize: 14, color: '#8F92A1', marginBottom: 12 },
  verifiedTag: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0, 184, 148, 0.1)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, gap: 6 },
  verifiedTagText: { color: '#00B894', fontSize: 12, fontWeight: 'bold' },
  
  statsContainer: { flexDirection: 'row', backgroundColor: '#1E2029', borderRadius: 16, paddingVertical: 16, marginBottom: 24, borderWidth: 1, borderColor: '#2D303E' },
  statBox: { flex: 1, alignItems: 'center' },
  divider: { width: 1, backgroundColor: '#2D303E' },
  statValue: { fontSize: 20, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 4 },
  statLabel: { fontSize: 12, color: '#8F92A1' },
  
  progressCard: { backgroundColor: '#1E2029', padding: 20, borderRadius: 16, marginBottom: 30, borderWidth: 1, borderColor: '#2D303E' },
  progressHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  progressTitle: { color: '#F5F6FA', fontSize: 14, fontWeight: '600' },
  progressPercent: { color: '#3DD9F5', fontSize: 14, fontWeight: 'bold' },
  progressBarBg: { height: 8, backgroundColor: '#0F1118', borderRadius: 4, marginBottom: 12 },
  progressBarFill: { height: 8, backgroundColor: '#3DD9F5', borderRadius: 4 },
  progressSubtext: { color: '#8F92A1', fontSize: 12 },
  
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 16 },
  
  horizontalScroll: { marginHorizontal: -20, paddingHorizontal: 20, marginBottom: 30 },
  badgeCard: { backgroundColor: '#1E2029', padding: 16, borderRadius: 16, width: 140, alignItems: 'center', marginRight: 16, borderWidth: 1, borderColor: '#2D303E' },
  badgeIconBg: { width: 56, height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  badgeName: { color: '#F5F6FA', fontSize: 13, fontWeight: '600', textAlign: 'center' },
  
  myClubCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1E2029', padding: 12, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: '#2D303E' },
  myClubImage: { width: 48, height: 48, borderRadius: 12, marginRight: 16, backgroundColor: '#2D303E' },
  myClubInfo: { flex: 1 },
  myClubName: { color: '#F5F6FA', fontSize: 15, fontWeight: 'bold', marginBottom: 4 },
  myClubCategory: { color: '#8F92A1', fontSize: 12 },
  
  activityContainer: { backgroundColor: '#1E2029', borderRadius: 16, padding: 16, marginBottom: 30, borderWidth: 1, borderColor: '#2D303E' },
  activityRow: { flexDirection: 'row', marginBottom: 16 },
  activityIcon: { width: 32, height: 32, borderRadius: 16, backgroundColor: '#2D303E', justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  activityContent: { flex: 1, borderBottomWidth: 1, borderBottomColor: '#2D303E', paddingBottom: 16 },
  activityText: { color: '#F5F6FA', fontSize: 14, marginBottom: 4 },
  activityTime: { color: '#8F92A1', fontSize: 12 },
  
  logoutButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255, 118, 117, 0.1)', padding: 16, borderRadius: 12, gap: 8, borderWidth: 1, borderColor: 'rgba(255, 118, 117, 0.3)' },
  logoutText: { color: '#FF7675', fontSize: 16, fontWeight: 'bold' },
  
  emptyText: { color: '#8F92A1', fontSize: 14, marginBottom: 24, fontStyle: 'italic' }
});
