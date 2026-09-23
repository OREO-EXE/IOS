import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const INTERESTS = [
  'Computer Science', 'Art & Design', 'Music', 'Sports', 'Photography',
  'Gaming', 'Startups', 'Volunteering', 'Science', 'Literature',
  'Dancing', 'Finance', 'Engineering', 'Politics', 'Theatre'
];

export default function InterestsScreen() {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<string[]>([]);

  const toggleInterest = (interest: string) => {
    if (selected.includes(interest)) {
      setSelected(selected.filter(i => i !== interest));
    } else {
      setSelected([...selected, interest]);
    }
  };

  const handleContinue = () => {
    navigation.navigate('MainApp');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What are your interests?</Text>
      <Text style={styles.subtitle}>Select at least 3 interests to personalize your feed.</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.pillContainer}>
          {INTERESTS.map(interest => (
            <TouchableOpacity
              key={interest}
              style={[styles.pill, selected.includes(interest) && styles.pillSelected]}
              onPress={() => toggleInterest(interest)}
            >
              <Text style={[styles.pillText, selected.includes(interest) && styles.pillTextSelected]}>
                {interest}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity 
        style={[styles.button, selected.length < 3 && styles.buttonDisabled]} 
        onPress={handleContinue} 
        disabled={selected.length < 3}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1118',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F5F6FA',
    marginTop: 20,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#8F92A1',
    marginBottom: 30,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  pillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  pill: {
    backgroundColor: '#1E2029',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#2D303E',
  },
  pillSelected: {
    backgroundColor: 'rgba(108, 92, 231, 0.2)',
    borderColor: '#6C5CE7',
  },
  pillText: {
    color: '#8F92A1',
    fontSize: 14,
    fontWeight: '500',
  },
  pillTextSelected: {
    color: '#6C5CE7',
  },
  button: {
    backgroundColor: '#6C5CE7',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  buttonDisabled: {
    backgroundColor: '#2D303E',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
