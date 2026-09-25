import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../../store/AppContext';

export default function ClubsDiscoveryScreen() {
  const { user, clubs, joinClub } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Technology', 'Arts', 'Sports', 'Innovation', 'Community'];

  const filteredClubs = clubs.filter(c => {
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const popularClubs = [...clubs].sort((a, b) => b.members - a.members).slice(0, 4);

  const renderClubCard = (club: any, isHorizontal: boolean = false) => {
    const isJoined = user.joinedClubs.includes(club.id);

    return (
      <TouchableOpacity 
        key={club.id} 
        style={isHorizontal ? styles.clubCardHorizontal : styles.clubCard}
        activeOpacity={0.9}
      >
        <Image source={{ uri: club.image }} style={styles.clubImage} />
        <View style={styles.clubInfo}>
          <Text style={styles.clubCategory}>{club.category}</Text>
          <Text style={styles.clubName} numberOfLines={1}>{club.name}</Text>
          {!isHorizontal && <Text style={styles.clubDesc} numberOfLines={2}>{club.description}</Text>}
          
          <View style={styles.clubFooter}>
            <View style={styles.memberRow}>
              <Ionicons name="people" size={14} color="#8F92A1" />
              <Text style={styles.memberText}>{club.members} members</Text>
            </View>
            
            {isJoined ? (
              <View style={styles.joinedBtn}>
                <Ionicons name="checkmark" size={14} color="#00B894" />
                <Text style={styles.joinedBtnText}>Joined</Text>
              </View>
            ) : (
              <TouchableOpacity 
                style={styles.joinBtn}
                onPress={() => joinClub(club.id)}
              >
                <Text style={styles.joinBtnText}>Join</Text>
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
        <Text style={styles.headerTitle}>Discover Clubs</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#8F92A1" />
        <TextInput 
          style={styles.searchInput}
          placeholder="Search clubs..."
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
        {searchQuery === '' && selectedCategory === 'All' && (
          <>
            <Text style={styles.sectionTitle}>Popular on Campus</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.popularScroll}>
              {popularClubs.map(c => renderClubCard(c, true))}
            </ScrollView>
          </>
        )}

        <Text style={styles.sectionTitle}>{selectedCategory === 'All' && searchQuery === '' ? 'All Clubs' : 'Results'}</Text>
        {filteredClubs.length > 0 ? (
          filteredClubs.map(c => renderClubCard(c, false))
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="search-outline" size={64} color="#2D303E" />
            <Text style={styles.emptyTitle}>No clubs found</Text>
            <Text style={styles.emptyDesc}>Try a different search term or category.</Text>
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
  categoryChipActive: { backgroundColor: '#3DD9F5', borderColor: '#3DD9F5' },
  categoryChipText: { color: '#8F92A1', fontSize: 14, fontWeight: '500' },
  categoryChipTextActive: { color: '#0F1118', fontWeight: 'bold' },
  
  scrollContent: { paddingHorizontal: 20, paddingBottom: 40 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 16, marginTop: 8 },
  
  popularScroll: { marginHorizontal: -20, paddingHorizontal: 20, marginBottom: 24 },
  
  clubCardHorizontal: { width: 260, backgroundColor: '#1E2029', borderRadius: 16, marginRight: 16, padding: 16, borderWidth: 1, borderColor: '#2D303E', flexDirection: 'row', alignItems: 'center' },
  clubCard: { backgroundColor: '#1E2029', borderRadius: 16, marginBottom: 16, padding: 16, borderWidth: 1, borderColor: '#2D303E', flexDirection: 'row' },
  
  clubImage: { width: 64, height: 64, borderRadius: 16, marginRight: 16, backgroundColor: '#2D303E' },
  clubInfo: { flex: 1, justifyContent: 'center' },
  
  clubCategory: { color: '#8B7CFF', fontSize: 12, fontWeight: '600', marginBottom: 4 },
  clubName: { color: '#F5F6FA', fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  clubDesc: { color: '#8F92A1', fontSize: 13, marginBottom: 12, lineHeight: 18 },
  
  clubFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 },
  memberRow: { flexDirection: 'row', alignItems: 'center' },
  memberText: { color: '#8F92A1', fontSize: 12, marginLeft: 6 },
  
  joinBtn: { backgroundColor: '#3DD9F5', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 8 },
  joinBtnText: { color: '#0F1118', fontSize: 12, fontWeight: 'bold' },
  joinedBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0, 184, 148, 0.1)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, gap: 4 },
  joinedBtnText: { color: '#00B894', fontSize: 12, fontWeight: 'bold' },
  
  emptyState: { alignItems: 'center', marginTop: 40 },
  emptyTitle: { color: '#F5F6FA', fontSize: 18, fontWeight: 'bold', marginTop: 16, marginBottom: 8 },
  emptyDesc: { color: '#8F92A1', fontSize: 14, textAlign: 'center' }
});
