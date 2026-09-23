import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Animated,
} from 'react-native';
import { NocturneTheme } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AuthStack';
import { StackNavigationProp } from '@react-navigation/stack';

const { width } = Dimensions.get('window');
type NavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

export const OnboardingScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [activeStep, setActiveStep] = useState(1); // Step 2 of 4 (Clubs & Network)

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida/AEtjO1XsQ8c48-EXDsE0C-Dsgmhts75Z6x0yAvjSLbcCmm1hVsuJ5dQur1ZuCVMMMsBzt9A1MWZf7CNRX6RVHrG0ZzjM1LygEKuo-I3nCRTzJwSlss0Nh0DZh5BfaC89mUYspjBUZKKXArEzRVrjGTCOLOOtFMM-MV9UK4szualw0T_6IiZczhq8-D7asmnWeK3U0lTgtcOKaeHDfBOF0X-caRCk_aExD5lsK5oQN6JkpjGc1Zu5WsGhP6t1GA' }}
            style={styles.headerLogo}
          />
          <Text style={styles.headerTitle}>CampusConnect</Text>
        </View>
        <View style={styles.headerCenter}>
          <Text style={styles.headerSubtitle}>Campus Verification</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.userIcon}>
            <Text style={styles.userIconText}>👤</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Progress Header */}
        <View style={styles.progressSection}>
          <View style={styles.progressContainer}>
            <View style={[styles.progressStep, styles.stepCompleted]} />
            <View style={[styles.progressStep, styles.stepActive]} />
            <View style={[styles.progressStep, styles.stepPending]} />
            <View style={[styles.progressStep, styles.stepPending]} />
          </View>
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.stepLabel}>
          <View style={styles.stepBadge}>
            <View style={styles.pulseDot} />
            <Text style={styles.stepBadgeText}>Step 2 of 4 · Clubs & Network</Text>
          </View>
        </View>

        {/* Floating Dynamic Campus Deck */}
        <View style={styles.deckContainer}>
          {/* Ambient Backdrops */}
          <View style={styles.auraTopLeft} />
          <View style={styles.auraBottomRight} />

          {/* Card Stack */}
          <View style={styles.cardStack}>
            {/* Card 2 (Back) */}
            <View style={styles.cardBack}>
              <View style={styles.cardRow}>
                <View style={styles.cardHeaderLeft}>
                  <View style={styles.cardIconBg}>
                    <Image
                      source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFltwktvz_f9Hz_NR_T-NTJxC9z57GqR4zWD5sV_1khHHtreCe4rSTYWHI_hjmjc0Vw3s85HUR2pr9xHCfI1aAmSWON3lTTzEu4-TS9iqarqYQC5TE6l5hz4OxUckF4HxdhCGgH5NBRC_pg1fulU8AiQ8OFpqs9t8cspnt2BGYeoPNMp-YT1AHBkYVgvwkXbsAsO3fIiKqgPxZJgo8Q5Euo-9BVRxoXzJjOqE6qPFXeQCjAK511dc' }}
                      style={styles.cardIcon}
                    />
                  </View>
                  <View>
                    <Text style={styles.cardTitleSmall}>RoboWars '25 ✓</Text>
                    <Text style={styles.cardSubtitleSmall}>Annual Arena Techfest</Text>
                  </View>
                </View>
                <View style={styles.cardRegBadge}>
                  <Text style={styles.cardRegText}>180 Registered</Text>
                </View>
              </View>
            </View>

            {/* Card 1 (Front) */}
            <View style={styles.cardFront}>
              <View style={styles.cardHeader}>
                <View style={styles.cardHeaderLeft}>
                  <View style={styles.cardIconBgLarge}>
                    <Image
                      source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALE02B10j3Smb4ExHXBSY_g2STBclAIQlWLIKTv1i1gDbwGbsHJTO7d3agZlouQxk8Ds2EeBf2z4NGH0uwYF1OnPMMMqWLD85CRODjdt_xZU_IwaGUhytMErz2VadxBQJT6R9MJkdkcP5Tm-Lmkqvv1PjZWyMiotWwfT13EUf1LCpcZRlIRDwAXgPxmT-5Rs_2wys8P4DizxAPL90Nr9_zumsG_vwdcIt-IT_r9CGGnZnNJOW_y20' }}
                      style={styles.cardIconLarge}
                    />
                  </View>
                  <View>
                    <Text style={styles.cardTitleMain}>Developer Student Club</Text>
                    <Text style={styles.cardSubtitleMain}>Computer Science Council</Text>
                  </View>
                </View>
                <View style={styles.cardLiveBadge}>
                  <Text style={styles.cardLiveText}>⚡ 1.2k</Text>
                </View>
              </View>
              <View style={styles.cardTagsRow}>
                <View style={styles.tagPrimary}>
                  <Text style={styles.tagTextPrimary}>💻 AI Hack Nights</Text>
                </View>
                <View style={styles.tagSecondary}>
                  <Text style={styles.tagTextSecondary}>Thursdays</Text>
                </View>
                <View style={styles.liveIndicator}>
                  <View style={styles.liveDot} />
                  <Text style={styles.liveText}>24 online</Text>
                </View>
              </View>
            </View>

            {/* Avatar Overlap */}
            <View style={styles.avatarOverlap}>
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqHKEQdR6Cz5IEn8FmtKFp1VG-bO1kPaU4hfqB5IsTEZvPqtsvztt_NJscQTARoV1UBx9zv47PN-Ffopb9ZKtLek-jU8-naIzycZefP9yhxqKazBisj8jdcYl5dRTfzs0onNkRwSwHFQrhnd2fDQ53wOFUvnfo3yuEFgEu21k9yw6QOPw1nvURWxzdUuvyc6ipdkH3g89py7PKa97WFAWZ3HfSBJUKIUE9o4NML0Lqw4Zqms0Z-c8' }} style={styles.avatarSmall} />
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBywuqB49e35HPar1kE_xJgyuF_-zaqF4vkW-7RBG82NlbH5IlK57M-NA0DwhQEWy8urv1o3sNd2BH1vSABwMSVAwaPX6lfYer8VRgMdGgeYkUl-mdJggk-fLw4EOM53ZgboVazWmwJGRosC_2Vyg6DiZWpzXjLQH2wLpIyFS_3MBDgbWwMmHM7av5zg__bt2EdPIokWceLrKAQMIkIOyrqDi_Zsq7LjYTrnMDBANnDcs7TpjvtiXc' }} style={styles.avatarSmall} />
              <View style={styles.avatarCount}>
                <Text style={styles.avatarCountText}>+40</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Narrative Content */}
        <View style={styles.narrativeContainer}>
          <Text style={styles.narrativeTitle}>
            Find your people.{"\n"}
            <Text style={styles.narrativeGradient}>Never miss what matters.</Text>
          </Text>
          <Text style={styles.narrativeText}>
            Connect with 80+ student clubs, discover curated tech & cultural fests, and build lifelong project teams in seconds.
          </Text>
        </View>

        {/* Feature Pills */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.pillsContainer}>
          <TouchableOpacity style={styles.featurePill}>
            <Text style={styles.pillEmoji}>🔥</Text>
            <Text style={styles.pillText}>Live Campus Pulse</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featurePill}>
            <Text style={styles.pillEmoji}>🤝</Text>
            <Text style={styles.pillText}>Verified Club Access</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featurePill}>
            <Text style={styles.pillEmoji}>🎟</Text>
            <Text style={styles.pillText}>Digital Fast Pass</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Bottom Pagination & Actions */}
        <View style={styles.footer}>
          <View style={styles.pagination}>
            <View style={styles.dot} />
            <View style={styles.activeDot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Verification')}>
            <Text style={styles.continueText}>Continue to Smart Calendar</Text>
            <Text style={styles.continueIcon}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.skipSignUp}>
            <Text style={styles.skipSignUpText}>
              Already registered? <Text style={styles.skipSignUpLink}>Skip to Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NocturneTheme.colors.background,
  },
  header: {
    height: 64,
    backgroundColor: 'rgba(17, 19, 26, 0.8)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: NocturneTheme.spacing.margin,
    borderBottomWidth: 1,
    borderBottomColor: NocturneTheme.colors.border,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    color: NocturneTheme.colors.textSecondary,
    fontSize: 20,
  },
  headerLogo: {
    height: 32,
    width: 80,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 18,
    color: NocturneTheme.colors.textPrimary,
  },
  headerCenter: {
    position: 'absolute',
    left: '50%',
    marginLeft: -60,
    width: 120,
    alignItems: 'center',
  },
  headerSubtitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: NocturneTheme.colors.textSecondary,
  },
  headerRight: {
    width: 44,
    alignItems: 'flex-end',
  },
  userIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: NocturneTheme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIconText: {
    color: NocturneTheme.colors.background,
    fontSize: 16,
  },
  scrollContent: {
    paddingHorizontal: NocturneTheme.spacing.margin,
    paddingBottom: NocturneTheme.spacing.xl,
  },
  progressSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 16,
  },
  progressContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 6,
    marginRight: 16,
  },
  progressStep: {
    height: 6,
    borderRadius: 3,
  },
  stepCompleted: {
    flex: 1,
    backgroundColor: NocturneTheme.colors.surfaceElevated,
  },
  stepActive: {
    flex: 2,
    backgroundColor: NocturneTheme.colors.primary,
    shadowColor: NocturneTheme.colors.secondary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
  stepPending: {
    flex: 1,
    backgroundColor: NocturneTheme.colors.surfaceElevated,
  },
  skipButton: {
    paddingHorizontal: 12,
    height: 32,
    justifyContent: 'center',
  },
  skipText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: NocturneTheme.colors.textSecondary,
  },
  stepLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  stepBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: NocturneTheme.colors.surfaceElevated,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    gap: 6,
  },
  pulseDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: NocturneTheme.colors.secondary,
  },
  stepBadgeText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: NocturneTheme.colors.secondary,
  },
  deckContainer: {
    width: '100%',
    height: 250,
    borderRadius: 16,
    backgroundColor: '#0c0e15',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 16,
  },
  auraTopLeft: {
    position: 'absolute',
    top: -40,
    left: -40,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: NocturneTheme.colors.primary,
    opacity: 0.1,
    blurRadius: 50,
  },
  auraBottomRight: {
    position: 'absolute',
    bottom: -40,
    right: -40,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: NocturneTheme.colors.secondary,
    opacity: 0.1,
    blurRadius: 50,
  },
  cardStack: {
    width: '90%',
    height: 210,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBack: {
    position: 'absolute',
    width: '90%',
    height: 140,
    backgroundColor: NocturneTheme.colors.surfaceElevated,
    borderRadius: 16,
    padding: 12,
    transform: [{ rotate: '-3deg' }, { translateY: 20 }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 5,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  cardIconBg: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: NocturneTheme.colors.surfaceElevated,
    overflow: 'hidden',
  },
  cardIcon: {
    width: '100%',
    height: '100%',
  },
  cardTitleSmall: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 15,
    color: NocturneTheme.colors.textPrimary,
  },
  cardSubtitleSmall: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: NocturneTheme.colors.textSecondary,
  },
  cardRegBadge: {
    backgroundColor: NocturneTheme.colors.surfaceElevated,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },
  cardRegText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: NocturneTheme.colors.secondary,
  },
  cardFront: {
    position: 'absolute',
    width: '95%',
    height: 160,
    backgroundColor: NocturneTheme.colors.surface,
    borderRadius: 16,
    padding: 16,
    transform: [{ rotate: '1deg' }],
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  cardIconBgLarge: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: NocturneTheme.colors.surfaceElevated,
    overflow: 'hidden',
  },
  cardIconLarge: {
    width: '100%',
    height: '100%',
  },
  cardTitleMain: {
    fontFamily: 'Manrope-SemiBold',
    fontSize: 16,
    color: NocturneTheme.colors.textPrimary,
  },
  cardSubtitleMain: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: NocturneTheme.colors.textSecondary,
  },
  cardLiveBadge: {
    backgroundColor: 'rgba(69, 222, 250, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },
  cardLiveText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: NocturneTheme.colors.secondary,
  },
  cardTagsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  tagPrimary: {
    backgroundColor: 'rgba(142, 127, 255, 0.25)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },
  tagTextPrimary: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: NocturneTheme.colors.primary,
  },
  tagSecondary: {
    backgroundColor: NocturneTheme.colors.surfaceElevated,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
  },
  tagTextSecondary: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: NocturneTheme.colors.textSecondary,
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: NocturneTheme.colors.surfaceElevated,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    gap: 4,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: NocturneTheme.colors.secondary,
  },
  liveText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: NocturneTheme.colors.textSecondary,
  },
  avatarOverlap: {
    position: 'absolute',
    top: -10,
    right: 20,
    flexDirection: 'row',
    zIndex: 3,
  },
  avatarSmall: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: NocturneTheme.colors.background,
    marginLeft: -8,
  },
  avatarCount: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: NocturneTheme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -8,
    borderWidth: 2,
    borderColor: NocturneTheme.colors.background,
  },
  avatarCountText: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#FFF',
  },
  narrativeContainer: {
    marginTop: 24,
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  narrativeTitle: {
    fontFamily: 'Manrope-Bold',
    fontSize: 28,
    color: NocturneTheme.colors.textPrimary,
    fontWeight: '800',
    lineHeight: 34,
  },
  narrativeGradient: {
    color: NocturneTheme.colors.primary,
  },
  narrativeText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: NocturneTheme.colors.textSecondary,
    marginTop: 8,
    lineHeight: 20,
  },
  pillsContainer: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  featurePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: NocturneTheme.colors.surfaceElevated,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    marginRight: 8,
    gap: 6,
  },
  pillEmoji: {
    fontSize: 14,
  },
  pillText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: NocturneTheme.colors.textPrimary,
  },
  footer: {
    marginTop: 'auto',
    alignItems: 'center',
    gap: 12,
  },
  pagination: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 16,
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: NocturneTheme.colors.surfaceElevated,
  },
  activeDot: {
    width: 24,
    height: 6,
    borderRadius: 3,
    backgroundColor: NocturneTheme.colors.primary,
  },
  continueButton: {
    width: '100%',
    height: 48,
    borderRadius: 12,
    backgroundColor: NocturneTheme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    elevation: 8,
    shadowColor: NocturneTheme.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  continueText: {
    fontFamily: 'Manrope-Bold',
    fontSize: 16,
    color: '#FFF',
    fontWeight: '700',
  },
  continueIcon: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },
  skipSignUp: {
    paddingVertical: 12,
  },
  skipSignUpText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: NocturneTheme.colors.textSecondary,
  },
  skipSignUpLink: {
    fontFamily: 'Inter-SemiBold',
    color: NocturneTheme.colors.secondary,
  },
});
