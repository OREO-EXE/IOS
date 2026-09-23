import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NocturneTheme } from '../constants/theme';

export const Card = ({ children, style }: any) => (
  <View style={[styles.card, style]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: NocturneTheme.colors.surface,
    borderRadius: NocturneTheme.radius.md,
    padding: NocturneTheme.spacing.md,
    borderWidth: 1,
    borderColor: NocturneTheme.colors.border,
  },
});
