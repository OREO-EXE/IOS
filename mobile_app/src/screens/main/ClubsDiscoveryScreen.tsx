import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { demoClubs } from '../../data/demoData';

export default function ClubsDiscoveryScreen() {
  const [clubs, setClubs] = useState(demoClubs);

  const toggleJoin = (id: string) => {
    setClubs(clubs.map(c => c.id === id ? { ...c, joined: !c.joined } : c));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Discover Clubs</Text>
      <FlatList
        data={clubs}
        numColumns={2}
        keyExtractor={(item: any) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No clubs available yet.</Text>}
        renderItem={({ item }: any) => (
          <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={() => toggleJoin(item.id)}>
            <Image source={{ uri: item.image }} style={styles.clubImage} />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDesc} numberOfLines={2}>{item.description}</Text>
            <View style={[styles.joinBadge, item.joined && styles.joinedBadge]}>
              <Text style={styles.joinText}>{item.joined ? 'Joined' : 'Join'}</Text>
            </View>
          </TouchableOpacity>
        )}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1118', padding: 16 },
  header: { fontSize: 28, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 20 },
  card: {
    backgroundColor: '#1E2029',
    width: '48%',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2D303E'
  },
  clubImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 12,
  },
  joinBadge: {
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#2D303E',
  },
  joinedBadge: {
    backgroundColor: '#0984E3',
  },
  joinText: {
    color: '#F5F6FA',
    fontSize: 12,
    fontWeight: '600'
  },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#F5F6FA', marginBottom: 8, textAlign: 'center' },
  cardDesc: { fontSize: 12, color: '#8F92A1', textAlign: 'center' },
  emptyText: { color: '#8F92A1', textAlign: 'center', marginTop: 40, width: '100%' }
});
