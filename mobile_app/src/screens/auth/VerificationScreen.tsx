import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../../store/AppContext';

export default function VerificationScreen() {
  const navigation = useNavigation<any>();
  const { user } = useAppContext();
  
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (otp === '123456') {
      setIsVerifying(true);
      setTimeout(() => {
        setIsVerifying(false);
        setIsVerified(true);
      }, 1500);
    }
  }, [otp]);

  const handleContinue = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainApp' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#F5F6FA" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="shield-checkmark" size={48} color="#8B7CFF" />
        </View>
        <Text style={styles.title}>CampusConnect</Text>
        <Text style={styles.subtitle}>Verify your student identity</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>UNIVERSITY EMAIL</Text>
          <View style={styles.emailBox}>
            <Ionicons name="mail" size={20} color="#8F92A1" />
            <Text style={styles.emailText}>{user.email}</Text>
            {isVerified && <Ionicons name="checkmark-circle" size={20} color="#00B894" style={{ marginLeft: 'auto' }} />}
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>VERIFICATION CODE (Use 123456)</Text>
          <TextInput 
            style={[styles.otpInput, isVerified && styles.otpInputSuccess]}
            placeholder="_ _ _ _ _ _"
            placeholderTextColor="#8F92A1"
            keyboardType="number-pad"
            maxLength={6}
            value={otp}
            onChangeText={setOtp}
            editable={!isVerified && !isVerifying}
          />
        </View>

        {isVerifying && (
          <View style={styles.verifyingState}>
            <ActivityIndicator color="#8B7CFF" size="small" />
            <Text style={styles.verifyingText}>Verifying student credentials...</Text>
          </View>
        )}

        {isVerified && (
          <View style={styles.successState}>
            <View style={styles.successRow}>
              <Ionicons name="checkmark-circle" size={20} color="#00B894" />
              <Text style={styles.successText}>College email verified</Text>
            </View>
            <View style={styles.successRow}>
              <Ionicons name="checkmark-circle" size={20} color="#00B894" />
              <Text style={styles.successText}>Student identity verified</Text>
            </View>
          </View>
        )}

        <View style={styles.footer}>
          <TouchableOpacity 
            style={[styles.continueButton, !isVerified && styles.continueButtonDisabled]} 
            onPress={handleContinue}
            disabled={!isVerified}
          >
            <Text style={[styles.continueText, !isVerified && styles.continueTextDisabled]}>Continue to Campus</Text>
            <Ionicons name="arrow-forward" size={20} color={!isVerified ? '#8F92A1' : '#FFFFFF'} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1118' },
  header: { padding: 24, paddingBottom: 0 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#1E2029', justifyContent: 'center', alignItems: 'center' },
  
  content: { flex: 1, padding: 24, paddingTop: 40 },
  iconContainer: { width: 80, height: 80, borderRadius: 40, backgroundColor: 'rgba(139, 124, 255, 0.1)', justifyContent: 'center', alignItems: 'center', marginBottom: 24 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#8F92A1', marginBottom: 40 },
  
  inputGroup: { marginBottom: 24 },
  inputLabel: { fontSize: 12, fontWeight: 'bold', color: '#8F92A1', letterSpacing: 1, marginBottom: 8 },
  emailBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1E2029', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#2D303E' },
  emailText: { color: '#F5F6FA', fontSize: 16, marginLeft: 12, fontWeight: '500' },
  
  otpInput: { backgroundColor: '#1E2029', color: '#F5F6FA', fontSize: 24, letterSpacing: 8, textAlign: 'center', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#2D303E', fontWeight: 'bold' },
  otpInputSuccess: { borderColor: '#00B894', backgroundColor: 'rgba(0, 184, 148, 0.05)' },
  
  verifyingState: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 10 },
  verifyingText: { color: '#8B7CFF', fontSize: 14, fontWeight: '600' },
  
  successState: { backgroundColor: 'rgba(0, 184, 148, 0.1)', padding: 16, borderRadius: 12, marginTop: 10 },
  successRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 8 },
  successText: { color: '#00B894', fontSize: 14, fontWeight: 'bold' },
  
  footer: { marginTop: 'auto', paddingTop: 20 },
  continueButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#8B7CFF', padding: 16, borderRadius: 16, gap: 8 },
  continueButtonDisabled: { backgroundColor: '#1E2029', borderWidth: 1, borderColor: '#2D303E' },
  continueText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  continueTextDisabled: { color: '#8F92A1' }
});
