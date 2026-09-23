import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { NocturneTheme } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AuthStack';
import { StackNavigationProp } from '@react-navigation/stack';

const { width, height } = Dimensions.get('window');

type NavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

export const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Background Elements */}
      <View style={styles.backgroundContainer}>
        {/* Ambient Glow Orbs */}
        <View style={[styles.glowOrb, styles.orbTop]} />
        <View style={[styles.glowOrb, styles.orbRight]} />
        <View style={[styles.glowOrb, styles.orbLeft]} />

        {/* Constellation Network - Simplified for RN using SVG or absolute positioned elements */}
        {/* For high fidelity, I would use react-native-svg, but starting with structural elements */}
        <View style={styles.constellationLayer} />
      </View>

      <View style={styles.content}>
        {/* Top Campus Badge */}
        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeIcon}>⚡</Text>
            <Text style={styles.badgeText}>Official Stanford Campus Ecosystem</Text>
          </View>
        </View>

        {/* Center Hero */}
        <View style={styles.heroSection}>
          <View style={styles.auraContainer}>
            <View style={styles.outerAura} />
            <View style={styles.shieldRing}>
              <View style={styles.shieldInner}>
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida/AEtjO1XsQ8c48-EXDsE0C-Dsgmhts75Z6x0yAvjSLbcCmm1hVsuJ5dQur1ZuCVMMMsBzt9A1MWZf7CNRX6RVHrG0ZzjM1LygEKuo-I3nCRTzJwSlss0Nh0DZh5BfaC89mUYspjBUZKKXArEzRVrjGTCOLOOtFMM-MV9UK4szualw0T_6IiZczhq8-D7asmnWeK3U0lTgtcOKaeHDfBOF0X-caRCk_aExD5lsK5oQN6JkpjGc1Zu5WsGhP6t1GA' }}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>
              {/* Micro Node Orbit */}
              <View style={styles.nodeOrbit}>
                <View style={styles.nodeDot} />
                <Text style={styles.nodeText}>Live Hub</Text>
              </View>
            </View>
          </View>

          {/* Typography Block */}
          <View style={styles.textBlock}>
            <Text style={styles.title}>
              Campus<Text style={{ color: NocturneTheme.colors.primary }}>Connect</Text>
            </Text>
            <Text style={styles.subtitle}>Your campus. Your community.</Text>
          </View>

          {/* Active Campus Metric Micro-Card */}
          <View style={styles.metricCard}>
            <View style={styles.metricLeft}>
              <View style={styles.metricIconContainer}>
                <Text style={styles.metricIcon}>👥</Text>
              </View>
              <View style={styles.metricTextContainer}>
                <Text style={styles.metricTitle}>50+ Verified Clubs</Text>
                <Text style={styles.metricSubtext}>Active study rooms & events</Text>
              </View>
            </View>
            <View style={styles.metricRight}>
              <View style={[styles.avatarSmall, { backgroundColor: NocturneTheme.colors.surfaceVariant }]}>
                <Text style={styles.avatarText}>CS</Text>
              </View>
              <View style={[styles.avatarSmall, { backgroundColor: NocturneTheme.colors.surfaceBright || '#373941' }]}>
                <Text style={[styles.avatarText, { color: NocturneTheme.colors.primary }]}>AI</Text>
              </View>
              <View style={[styles.avatarSmall, { backgroundColor: NocturneTheme.colors.tertiaryContainer || '#9084e5' }]}>
                <Text style={styles.avatarText}>🎨</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Bottom CTA Zone */}
        <View style={styles.ctaZone}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Onboarding')}
          >
            <Text style={styles.primaryButtonText}>Get Started</Text>
            <Text style={styles.primaryButtonIcon}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => {}}
          >
            <Text style={styles.secondaryButtonText}>I already have an account · Log in</Text>
          </TouchableOpacity>

          <View style={styles.securityFootnote}>
            <Text style={styles.securityIcon}>🛡️</Text>
            <Text style={styles.securityText}>Verified .edu email login required</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NocturneTheme.colors.background,
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
  },
  glowOrb: {
    position: 'absolute',
    borderRadius: 999,
    opacity: 0.2,
  },
  orbTop: {
    top: -50,
    left: '25%',
    width: 200,
    height: 200,
    backgroundColor: NocturneTheme.colors.primary,
  },
  orbRight: {
    top: '30%',
    right: -50,
    width: 150,
    height: 150,
    backgroundColor: NocturneTheme.colors.secondary,
  },
  orbLeft: {
    bottom: '20%',
    left: -50,
    width: 180,
    height: 180,
    backgroundColor: NocturneTheme.colors.primary,
  },
  constellationLayer: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.3,
  },
  content: {
    flex: 1,
    paddingHorizontal: NocturneTheme.spacing.margin,
    paddingBottom: NocturneTheme.spacing.xl,
  },
  badgeContainer: {
    alignItems: 'center',
    marginTop: NocturneTheme.spacing.md,
    marginBottom: NocturneTheme.spacing.lg,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: NocturneTheme.colors.surfaceElevated,
    gap: 6,
  },
  badgeIcon: {
    color: NocturneTheme.colors.secondary,
    fontSize: 14,
  },
  badgeText: {
    color: NocturneTheme.colors.primaryBright,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  heroSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  auraContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerAura: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: NocturneTheme.colors.primary,
    opacity: 0.15,
  },
  shieldRing: {
    width: 144,
    height: 144,
    borderRadius: 72,
    backgroundColor: NocturneTheme.colors.surface,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  shieldInner: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
    backgroundColor: NocturneTheme.colors.surfaceElevated,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logo: {
    width: 96,
    height: 96,
  },
  nodeOrbit: {
    position: 'absolute',
    top: -5,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: NocturneTheme.colors.surfaceElevated,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  nodeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: NocturneTheme.colors.secondary,
  },
  nodeText: {
    color: NocturneTheme.colors.textSecondary,
    fontSize: 10,
    fontWeight: '600',
  },
  textBlock: {
    alignItems: 'center',
    marginTop: NocturneTheme.spacing.lg,
    width: '100%',
    maxWidth: 300,
  },
  title: {
    fontFamily: 'Manrope-Bold',
    fontSize: 36,
    fontWeight: '800',
    color: NocturneTheme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: NocturneTheme.colors.textSecondary,
    textAlign: 'center',
    fontWeight: '500',
  },
  metricCard: {
    marginTop: NocturneTheme.spacing.lg,
    width: '100%',
    maxWidth: 300,
    backgroundColor: NocturneTheme.colors.surface,
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  metricLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  metricIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: NocturneTheme.colors.surfaceElevated,
    justifyContent: 'center',
    alignItems: 'center',
  },
  metricIcon: {
    color: NocturneTheme.colors.primary,
    fontSize: 18,
  },
  metricTextContainer: {
    flexDirection: 'column',
  },
  metricTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: NocturneTheme.colors.textPrimary,
    fontWeight: '600',
  },
  metricSubtext: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: NocturneTheme.colors.textSecondary,
  },
  metricRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  avatarSmall: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -4,
    borderWidth: 1,
    borderColor: NocturneTheme.colors.background,
  },
  avatarText: {
    fontSize: 9,
    fontWeight: '700',
    color: NocturneTheme.colors.textPrimary,
  },
  ctaZone: {
    width: '100%',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: NocturneTheme.spacing.lg,
    gap: 12,
  },
  primaryButton: {
    width: '100%',
    height: 48,
    borderRadius: 16,
    backgroundColor: NocturneTheme.colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    elevation: 8,
    shadowColor: NocturneTheme.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  primaryButtonText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  primaryButtonIcon: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  secondaryButton: {
    width: '100%',
    height: 44,
    borderRadius: 16,
    backgroundColor: NocturneTheme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: NocturneTheme.colors.border,
  },
  secondaryButtonText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: NocturneTheme.colors.textPrimary,
  },
  securityFootnote: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingTop: 4,
  },
  securityIcon: {
    fontSize: 14,
  },
  securityText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: NocturneTheme.colors.textMuted,
  },
});
