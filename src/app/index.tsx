import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '@/context/AppContext';
import { COLORS } from '@/constants/theme';

export default function IndexScreen() {
  const router = useRouter();
  const { user } = useApp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) {
        router.replace('/(tabs)');
      } else {
        router.replace('/onboarding');
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [user]);

  return (
    <View style={styles.container}>
      {/* LOGO EXACT OFFICIEL BENILINK */}
      <View style={styles.logoCard}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logoImg}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.tagline}>Votre présence de confiance au Bénin</Text>
      <ActivityIndicator color={COLORS.goldLight} style={{ marginTop: 24 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logoCard: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 18,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 8,
    marginBottom: 16,
  },
  logoImg: {
    width: 240,
    height: 74,
  },
  tagline: {
    fontSize: 14,
    color: '#DCEBE2',
    marginTop: 8,
    textAlign: 'center',
    fontWeight: '500',
  },
});

