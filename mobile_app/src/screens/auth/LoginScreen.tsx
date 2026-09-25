import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Local demo authentication flow, navigating directly without backend validation.
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainApp' }],
    });
  };

  const isFormValid = email.length > 0 && password.length > 0;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#F5F6FA" />
            </TouchableOpacity>
          </View>

          <View style={styles.branding}>
            <View style={styles.iconContainer}>
              <Ionicons name="planet" size={48} color="#8B7CFF" />
            </View>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Log in to your campus community</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>STUDENT EMAIL / ID</Text>
              <View style={styles.inputBox}>
                <Ionicons name="mail-outline" size={20} color="#8F92A1" />
                <TextInput 
                  style={styles.input}
                  placeholder="student@campus.edu"
                  placeholderTextColor="#8F92A1"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>PASSWORD</Text>
              <View style={styles.inputBox}>
                <Ionicons name="lock-closed-outline" size={20} color="#8F92A1" />
                <TextInput 
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor="#8F92A1"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                  <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#8F92A1" />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.actions}>
            <TouchableOpacity 
              style={[styles.loginButton, !isFormValid && styles.loginButtonDisabled]} 
              onPress={handleLogin}
              disabled={!isFormValid}
            >
              <Text style={[styles.loginButtonText, !isFormValid && styles.loginButtonTextDisabled]}>Log In</Text>
            </TouchableOpacity>

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity 
              style={styles.demoButton} 
              onPress={handleLogin}
            >
              <Ionicons name="flash-outline" size={20} color="#3DD9F5" />
              <Text style={styles.demoButtonText}>Continue as Demo Student</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F1118' },
  scrollContent: { flexGrow: 1, padding: 24, paddingBottom: 40 },
  header: { marginBottom: 24 },
  backButton: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#1E2029', justifyContent: 'center', alignItems: 'center' },
  
  branding: { marginBottom: 40 },
  iconContainer: { width: 80, height: 80, borderRadius: 24, backgroundColor: 'rgba(139, 124, 255, 0.1)', justifyContent: 'center', alignItems: 'center', marginBottom: 24 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#F5F6FA', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#8F92A1' },
  
  formContainer: { marginBottom: 32 },
  inputGroup: { marginBottom: 24 },
  inputLabel: { fontSize: 12, fontWeight: 'bold', color: '#8F92A1', letterSpacing: 1, marginBottom: 8 },
  inputBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1E2029', paddingHorizontal: 16, height: 56, borderRadius: 12, borderWidth: 1, borderColor: '#2D303E' },
  input: { flex: 1, color: '#F5F6FA', fontSize: 16, marginLeft: 12 },
  eyeIcon: { padding: 8, marginRight: -8 },
  
  forgotPassword: { alignSelf: 'flex-end' },
  forgotPasswordText: { color: '#8B7CFF', fontSize: 14, fontWeight: '600' },
  
  actions: { marginTop: 'auto' },
  loginButton: { height: 56, backgroundColor: '#8B7CFF', borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginBottom: 24 },
  loginButtonDisabled: { backgroundColor: '#1E2029', borderWidth: 1, borderColor: '#2D303E' },
  loginButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  loginButtonTextDisabled: { color: '#8F92A1' },
  
  divider: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  dividerLine: { flex: 1, height: 1, backgroundColor: '#2D303E' },
  dividerText: { color: '#8F92A1', paddingHorizontal: 16, fontSize: 12, fontWeight: 'bold' },
  
  demoButton: { flexDirection: 'row', height: 56, backgroundColor: 'rgba(61, 217, 245, 0.1)', borderRadius: 16, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'rgba(61, 217, 245, 0.3)', gap: 8 },
  demoButtonText: { color: '#3DD9F5', fontSize: 16, fontWeight: 'bold' }
});
