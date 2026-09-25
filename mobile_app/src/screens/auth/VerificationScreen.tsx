import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function VerificationScreen() {
  const navigation = useNavigation<any>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [campus, setCampus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !password || !campus) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Interests');
    }, 500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Campus Verification</Text>
      <Text style={styles.subtitle}>Join your college community</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#8F92A1"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="University / Campus"
          placeholderTextColor="#8F92A1"
          value={campus}
          onChangeText={setCampus}
        />
        <TextInput
          style={styles.input}
          placeholder="Student Email (.edu)"
          placeholderTextColor="#8F92A1"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#8F92A1"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Verify & Continue</Text>}
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
    marginTop: 40,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#8F92A1',
    marginBottom: 40,
  },
  inputContainer: {
    gap: 16,
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#1E2029',
    borderRadius: 12,
    padding: 16,
    color: '#F5F6FA',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#2D303E',
  },
  button: {
    backgroundColor: '#6C5CE7',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
