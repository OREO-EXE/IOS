import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { demoEvents } from '../../data/demoData';

export default function EventsFeedScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Upcoming Events</Text>
      <FlatList
        data={demoEvents}
        keyExtractor={(item: any) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No upcoming events</Text>}
        renderItem={({ item }: any) => (
          <TouchableOpacity 
            style={styles.card} 
            activeOpacity={0.8}
            onPress={() => navigation.navigate('EventDetails', { event: item })}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc} numberOfLines={2}>{item.description}</Text>
            <Text style={styles.cardMeta}>{new Date(item.date).toDateString()} • {item.location}</Text>
          </TouchableOpacity>
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
    borderLeftWidth: 4,
    borderLeftColor: '#00B894'
  },
  cardTitle: { fontSize: 18, fontWeight: '600', color: '#F5F6FA', marginBottom: 8 },
  cardDesc: { fontSize: 14, color: '#8F92A1', marginBottom: 12 },
  cardMeta: { fontSize: 14, color: '#8F92A1', fontWeight: '500' },
  emptyText: { color: '#8F92A1', textAlign: 'center', marginTop: 40 }
});
