import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#F5F6FA" />
      </TouchableOpacity>
      
      <Text style={styles.header}>Settings</Text>
      
      <View style={styles.section}>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Account Details</Text>
          <Ionicons name="chevron-forward" size={20} color="#8F92A1" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Notifications</Text>
          <Ionicons name="chevron-forward" size={20} color="#8F92A1" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Privacy & Security</Text>
          <Ionicons name="chevron-forward" size={20} color="#8F92A1" />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1118', padding: 16 },
  backButton: { marginBottom: 16 },
  header: { fontSize: 28, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 30 },
  section: { backgroundColor: '#1E2029', borderRadius: 12, overflow: 'hidden', borderWidth: 1, borderColor: '#2D303E' },
  row: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1, borderBottomColor: '#2D303E' },
  rowText: { color: '#F5F6FA', fontSize: 16 }
});
