import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NocturneTheme } from '../constants/theme';

export const Button = ({ onPress, title, variant = 'primary', style }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.base,
      variant === 'primary' ? styles.primary : styles.secondary,
      style
    ]}
  >
    <Text style={[styles.text, variant === 'primary' ? styles.textPrimary : styles.textSecondary]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  base: {
    height: 48,
    borderRadius: NocturneTheme.radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  primary: {
    backgroundColor: NocturneTheme.colors.primary,
  },
  secondary: {
    backgroundColor: NocturneTheme.colors.surface,
    borderWidth: 1,
    borderColor: NocturneTheme.colors.border,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  textPrimary: {
    color: '#FFFFFF',
  },
  textSecondary: {
    color: NocturneTheme.colors.textPrimary,
  },
});
