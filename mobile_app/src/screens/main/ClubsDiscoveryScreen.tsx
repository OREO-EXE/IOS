import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ClubsDiscoveryScreen() {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://10.0.2.2:3000/api/clubs')
      .then(res => res.json())
      .then(data => {
        setClubs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Discover Clubs</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0984E3" style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={clubs}
          numColumns={2}
          keyExtractor={(item: any) => item.id?.toString() || Math.random().toString()}
          ListEmptyComponent={<Text style={styles.emptyText}>No clubs available yet.</Text>}
          renderItem={({ item }: any) => (
            <TouchableOpacity style={styles.card}>
              <View style={styles.iconPlaceholder} />
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardDesc} numberOfLines={2}>{item.description}</Text>
            </TouchableOpacity>
          )}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
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
  iconPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#0984E3',
    marginBottom: 12,
    opacity: 0.8
  },
  cardTitle: { fontSize: 16, fontWeight: '600', color: '#F5F6FA', marginBottom: 8, textAlign: 'center' },
  cardDesc: { fontSize: 12, color: '#8F92A1', textAlign: 'center' },
  emptyText: { color: '#8F92A1', textAlign: 'center', marginTop: 40, width: '100%' }
});
