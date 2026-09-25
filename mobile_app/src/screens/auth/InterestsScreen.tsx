import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../../store/AppContext';

export default function InterestsScreen() {
  const navigation = useNavigation<any>();
  const { updateInterests } = useAppContext();
  
  const allInterests = [
    'Computer Science', 'AI & Robotics', 'Cybersecurity', 'Startups', 
    'Gaming', 'Photography', 'Sports', 'Music', 'Art & Design', 
    'Finance', 'Engineering', 'Science', 'Literature', 'Volunteering', 'Entrepreneurship'
  ];

  const [selected, setSelected] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    if (selected.includes(interest)) {
      setSelected(selected.filter(i => i !== interest));
    } else {
      setSelected([...selected, interest]);
    }
  };

  const handleContinue = () => {
    if (selected.length >= 3) {
      updateInterests(selected);
      navigation.navigate('Verification');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#F5F6FA" />
        </TouchableOpacity>
        <Text style={styles.title}>What are your interests?</Text>
        <Text style={styles.subtitle}>Choose at least 3 to personalize your campus experience.</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.chipsContainer}>
          {allInterests.map((interest) => {
            const isSelected = selected.includes(interest);
            return (
              <TouchableOpacity
                key={interest}
                style={[styles.chip, isSelected && styles.chipSelected]}
                onPress={() => toggleInterest(interest)}
                activeOpacity={0.8}
              >
                {isSelected && <Ionicons name="checkmark" size={16} color="#0F1118" style={{ marginRight: 6 }} />}
                <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                  {interest}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.selectedCount}>{selected.length} selected</Text>
        <TouchableOpacity 
          style={[styles.continueButton, selected.length < 3 && styles.continueButtonDisabled]} 
          onPress={handleContinue}
          disabled={selected.length < 3}
        >
          <Text style={[styles.continueText, selected.length < 3 && styles.continueTextDisabled]}>Continue</Text>
          <Ionicons name="arrow-forward" size={20} color={selected.length < 3 ? '#8F92A1' : '#0F1118'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1118' },
  header: { padding: 24, paddingBottom: 16 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#1E2029', justifyContent: 'center', alignItems: 'center', marginBottom: 24 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 12 },
  subtitle: { fontSize: 16, color: '#8F92A1', lineHeight: 24 },
  
  scrollContent: { paddingHorizontal: 24, paddingBottom: 40, paddingTop: 10 },
  chipsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  
  chip: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1E2029', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 24, borderWidth: 1, borderColor: '#2D303E' },
  chipSelected: { backgroundColor: '#3DD9F5', borderColor: '#3DD9F5' },
  chipText: { color: '#F5F6FA', fontSize: 16, fontWeight: '500' },
  chipTextSelected: { color: '#0F1118', fontWeight: 'bold' },
  
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 24, borderTopWidth: 1, borderTopColor: '#2D303E', backgroundColor: '#0F1118' },
  selectedCount: { color: '#8F92A1', fontSize: 16, fontWeight: '500' },
  
  continueButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#3DD9F5', paddingHorizontal: 24, paddingVertical: 14, borderRadius: 16, gap: 8 },
  continueButtonDisabled: { backgroundColor: '#1E2029', borderWidth: 1, borderColor: '#2D303E' },
  continueText: { color: '#0F1118', fontSize: 16, fontWeight: 'bold' },
  continueTextDisabled: { color: '#8F92A1' }
});
