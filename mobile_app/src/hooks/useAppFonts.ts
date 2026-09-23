import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NocturneTheme } from '../constants/theme';

export const useAppFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        // Using Google Fonts via expo-font for fidelity since binaries are missing in source
        await Font.loadAsync({
          'Manrope-Bold': { uri: 'https://fonts.gstatic.com/s/manrope/v15/Y_S_u_A_Y_H_D_E_C_A_D.ttf' }, // Example URLs
          'Manrope-SemiBold': { uri: 'https://fonts.gstatic.com/s/manrope/v15/Y_S_u_A_Y_H_D_E_C_A_B.ttf' },
          'Inter-Regular': { uri: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK_743L_H5X3H.ttf' },
          'Inter-SemiBold': { uri: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK_743L_H5X3C.ttf' },
        });
      } catch (e) {
        console.error('Font loading error:', e);
      } finally {
        setFontsLoaded(true);
      }
    }
    loadFonts();
  }, []);

  return fontsLoaded;
};

export const FontLoader = ({ children }: { children: React.ReactNode }) => {
  const loaded = useAppFonts();
  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: NocturneTheme.colors.background }}>
        <ActivityIndicator color={NocturneTheme.colors.primary} />
      </View>
    );
  }
  return <>{children}</>;
};
