import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeFeedScreen() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://10.0.2.2:3000/api/events')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>CampusFeed</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#6C5CE7" style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={events}
          keyExtractor={(item: any) => item.id?.toString() || Math.random().toString()}
          ListEmptyComponent={<Text style={styles.emptyText}>No events right now!</Text>}
          renderItem={({ item }: any) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.title || 'Untitled Event'}</Text>
              <Text style={styles.cardDesc}>{item.description || 'No description'}</Text>
              <Text style={styles.cardMeta}>{item.date} • {item.location}</Text>
            </View>
          )}
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
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2D303E'
  },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#F5F6FA', marginBottom: 8 },
  cardDesc: { fontSize: 14, color: '#8F92A1', marginBottom: 12 },
  cardMeta: { fontSize: 12, color: '#6C5CE7', fontWeight: '500' },
  emptyText: { color: '#8F92A1', textAlign: 'center', marginTop: 40 }
});
