import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { demoFeed } from '../../data/demoData';

export default function HomeFeedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>CampusFeed</Text>
      <FlatList
        data={demoFeed}
        keyExtractor={(item: any) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No posts right now!</Text>}
        renderItem={({ item }: any) => (
          <View style={styles.card}>
            <View style={styles.authorContainer}>
              <Image source={{ uri: item.author.avatar }} style={styles.avatar} />
              <View>
                <Text style={styles.authorName}>{item.author.name}</Text>
                <Text style={styles.timestamp}>{item.timestamp}</Text>
              </View>
            </View>
            <Text style={styles.cardDesc}>{item.content}</Text>
            <Text style={styles.cardMeta}>{item.likes} Likes • {item.comments} Comments</Text>
          </View>
        )}
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
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2D303E'
  },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#F5F6FA', marginBottom: 8 },
  cardDesc: { fontSize: 14, color: '#8F92A1', marginBottom: 12 },
  cardMeta: { fontSize: 12, color: '#6C5CE7', fontWeight: '500' },
  emptyText: { color: '#8F92A1', textAlign: 'center', marginTop: 40 },
  authorContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 12 },
  authorName: { color: '#F5F6FA', fontSize: 16, fontWeight: '600' },
  timestamp: { color: '#8F92A1', fontSize: 12, marginTop: 2 }
});
