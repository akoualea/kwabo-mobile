import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, RADIUS, SPACING } from '@/constants/theme';
import { Button } from '@/components/common/Button';
import { WORLD_COUNTRIES, DIAL_CODES, CountryInfo } from '@/data/categories';
import { useApp } from '@/context/AppContext';
import { PHOTOS } from '@/constants/photos';

export default function RegisterScreen() {
  const router = useRouter();
  const { loginDemo, notify } = useApp();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dialCode, setDialCode] = useState('+33');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('France');
  const [password, setPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');

  // Modales de sélection
  const [showCountryModal, setShowCountryModal] = useState(false);
  const [showDialModal, setShowDialModal] = useState(false);
  const [searchCountryText, setSearchCountryText] = useState('');
  const [searchDialText, setSearchDialText] = useState('');

  const filteredCountries = WORLD_COUNTRIES.filter((c) =>
    c.name.toLowerCase().includes(searchCountryText.toLowerCase())
  );

  const filteredDials = WORLD_COUNTRIES.filter((c) =>
    c.name.toLowerCase().includes(searchDialText.toLowerCase()) ||
    c.dial.includes(searchDialText)
  );

  const handleSelectCountry = (item: CountryInfo) => {
    setCountry(item.name);
    if (item.dial) {
      setDialCode(item.dial);
    }
    setShowCountryModal(false);
    setSearchCountryText('');
  };

  const handleSelectDial = (dial: string) => {
    setDialCode(dial);
    setShowDialModal(false);
    setSearchDialText('');
  };

  const handleRegister = () => {
    loginDemo();
    notify(
      'Bienvenue sur BeniLink !',
      'Votre compte a été créé avec succès. Découvrez nos services au Bénin.',
      'success'
    );
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* HAUT AVEC PHOTO DU BÉNIN CLAIRE ET LISIBLE */}
          <View style={styles.topHeader}>
            <Image
              source={PHOTOS['ouidah-porte']}
              style={styles.headerBgPhoto}
              resizeMode="cover"
            />
            <View style={styles.headerBgOverlay} />

            <SafeAreaView edges={['top']} style={styles.headerSafeContent}>
              <TouchableOpacity
                onPress={() => router.back()}
                style={styles.backBtn}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Créer un compte</Text>
              <Text style={styles.headerSubtitle}>
                Rejoignez les membres de la diaspora qui font confiance à BeniLink.
              </Text>
            </SafeAreaView>
          </View>

          {/* FORMULAIRE REPRENANT STRICTEMENT LA MAQUETTE */}
          <View style={styles.card}>
            {/* PRÉNOM & NOM */}
            <View style={styles.row}>
              <View style={[styles.formGroup, { flex: 1 }]}>
                <Text style={styles.label}>Prénom *</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ex: Aïcha"
                  placeholderTextColor={COLORS.muted}
                  value={firstName}
                  onChangeText={setFirstName}
                />
              </View>
              <View style={[styles.formGroup, { flex: 1 }]}>
                <Text style={styles.label}>Nom *</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ex: Sossa"
                  placeholderTextColor={COLORS.muted}
                  value={lastName}
                  onChangeText={setLastName}
                />
              </View>
            </View>

            {/* E-MAIL */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>E-mail *</Text>
              <TextInput
                style={styles.input}
                placeholder="vous@exemple.com"
                placeholderTextColor={COLORS.muted}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* INDICATIF ET TÉLÉPHONE (2 COLONNES EXACTEMENT COMME LA MAQUETTE) */}
            <View style={styles.row}>
              <View style={[styles.formGroup, { width: 105 }]}>
                <Text style={styles.label}>Indicatif *</Text>
                <TouchableOpacity
                  style={styles.selectBtn}
                  onPress={() => setShowDialModal(true)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.selectBtnText}>{dialCode}</Text>
                  <Ionicons name="chevron-down" size={16} color={COLORS.textMid} />
                </TouchableOpacity>
              </View>

              <View style={[styles.formGroup, { flex: 1 }]}>
                <Text style={styles.label}>Téléphone *</Text>
                <TextInput
                  style={styles.input}
                  placeholder="6 12 34 56 78"
                  placeholderTextColor={COLORS.muted}
                  value={phone}
                  onChangeText={(val) => setPhone(val.replace(/[^0-9\s]/g, ''))}
                  keyboardType="phone-pad"
                />
              </View>
            </View>

            {/* PAYS DE RÉSIDENCE (SELECTEUR EXACT MAQUETTE) */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Pays de résidence *</Text>
              <TouchableOpacity
                style={styles.selectBtnFull}
                onPress={() => setShowCountryModal(true)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.selectBtnFullText,
                    !country && { color: COLORS.muted },
                  ]}
                >
                  {country || 'Sélectionnez...'}
                </Text>
                <Ionicons name="chevron-down" size={18} color={COLORS.textMid} />
              </TouchableOpacity>
            </View>

            {/* BANDEAU NOTE DEVISE (AVEC ICÔNE BILLETS EXACTEMENT COMME LA MAQUETTE) */}
            <View style={styles.currencyNote}>
              <Ionicons name="cash-outline" size={18} color={COLORS.primary} style={styles.currencyIcon} />
              <Text style={styles.currencyNoteText}>
                Choisissez votre pays : la devise de vos devis s'adaptera automatiquement.
              </Text>
            </View>

            {/* MOT DE PASSE */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Mot de passe (8 car. min) *</Text>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor={COLORS.muted}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            {/* CODE DE PARRAINAGE */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Code de parrainage (facultatif)</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: BL-AICH01 (30 € offerts)"
                placeholderTextColor={COLORS.muted}
                value={referralCode}
                onChangeText={setReferralCode}
                autoCapitalize="characters"
              />
            </View>

            <Button
              title="Créer mon compte BeniLink"
              onPress={handleRegister}
              variant="primary"
              size="lg"
              fullWidth
              style={{ marginTop: 14 }}
            />

            <View style={styles.footerRow}>
              <Text style={styles.footerText}>Déjà inscrit ? </Text>
              <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
                <Text style={styles.loginLink}>Se connecter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* MODALE DE SÉLECTION DU PAYS DE RÉSIDENCE */}
      <Modal
        visible={showCountryModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowCountryModal(false)}
      >
        <SafeAreaView style={styles.modalOverlay} edges={['top', 'bottom']}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Pays de résidence</Text>
              <TouchableOpacity
                onPress={() => setShowCountryModal(false)}
                style={styles.modalCloseBtn}
              >
                <Ionicons name="close" size={24} color={COLORS.text} />
              </TouchableOpacity>
            </View>

            <View style={styles.searchBox}>
              <Ionicons name="search" size={18} color={COLORS.muted} />
              <TextInput
                style={styles.searchInput}
                placeholder="Rechercher un pays..."
                placeholderTextColor={COLORS.muted}
                value={searchCountryText}
                onChangeText={setSearchCountryText}
                autoFocus={false}
              />
            </View>

            <FlatList
              data={filteredCountries}
              keyExtractor={(item) => item.name}
              keyboardShouldPersistTaps="handled"
              renderItem={({ item }) => {
                const isSelected = country === item.name;
                return (
                  <TouchableOpacity
                    style={[
                      styles.countryItem,
                      isSelected && styles.countryItemSelected,
                    ]}
                    onPress={() => handleSelectCountry(item)}
                  >
                    <View style={styles.countryInfoCol}>
                      <Text
                        style={[
                          styles.countryName,
                          isSelected && styles.countryNameSelected,
                        ]}
                      >
                        {item.name}
                      </Text>
                      <Text style={styles.countrySub}>
                        Devise : {item.currency} · Indicatif : {item.dial}
                      </Text>
                    </View>
                    {isSelected && (
                      <Ionicons
                        name="checkmark-circle"
                        size={20}
                        color={COLORS.primary}
                      />
                    )}
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </SafeAreaView>
      </Modal>

      {/* MODALE DE SÉLECTION DE L'INDICATIF TÉLÉPHONIQUE */}
      <Modal
        visible={showDialModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowDialModal(false)}
      >
        <SafeAreaView style={styles.modalOverlay} edges={['top', 'bottom']}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Indicatif téléphonique</Text>
              <TouchableOpacity
                onPress={() => setShowDialModal(false)}
                style={styles.modalCloseBtn}
              >
                <Ionicons name="close" size={24} color={COLORS.text} />
              </TouchableOpacity>
            </View>

            <View style={styles.searchBox}>
              <Ionicons name="search" size={18} color={COLORS.muted} />
              <TextInput
                style={styles.searchInput}
                placeholder="Rechercher indicatif (+33, Bénin...)"
                placeholderTextColor={COLORS.muted}
                value={searchDialText}
                onChangeText={setSearchDialText}
              />
            </View>

            <FlatList
              data={filteredDials}
              keyExtractor={(item) => item.name + item.dial}
              keyboardShouldPersistTaps="handled"
              renderItem={({ item }) => {
                const isSelected = dialCode === item.dial;
                return (
                  <TouchableOpacity
                    style={[
                      styles.countryItem,
                      isSelected && styles.countryItemSelected,
                    ]}
                    onPress={() => handleSelectDial(item.dial)}
                  >
                    <View style={styles.countryInfoCol}>
                      <Text
                        style={[
                          styles.countryName,
                          isSelected && styles.countryNameSelected,
                        ]}
                      >
                        {item.name}
                      </Text>
                    </View>
                    <View style={styles.dialBadge}>
                      <Text style={styles.dialBadgeText}>{item.dial}</Text>
                    </View>
                    {isSelected && (
                      <Ionicons
                        name="checkmark-circle"
                        size={20}
                        color={COLORS.primary}
                        style={{ marginLeft: 8 }}
                      />
                    )}
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryDark,
  },
  scrollContent: {
    flexGrow: 1,
  },
  topHeader: {
    minHeight: 160,
    backgroundColor: COLORS.primaryDark,
    position: 'relative',
    overflow: 'hidden',
  },
  headerBgPhoto: {
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
    opacity: 1,
  },
  headerBgOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(8, 77, 130, 0.22)',
  },
  headerSafeContent: {
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.lg,
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.sm,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#DCEBE2',
    marginTop: 4,
  },
  card: {
    flex: 1,
    backgroundColor: COLORS.cream,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.xl,
    paddingBottom: 40,
    marginTop: -12,
  },
  row: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  formGroup: {
    marginBottom: SPACING.md,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === 'ios' ? 12 : 10,
    fontSize: 15,
    color: COLORS.text,
  },
  selectBtn: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 12 : 11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
  },
  selectBtnFull: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === 'ios' ? 13 : 11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectBtnFullText: {
    fontSize: 15,
    color: COLORS.text,
    fontWeight: '500',
  },
  currencyNote: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBF5FC',
    borderRadius: RADIUS.md,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#D4E9F7',
    gap: 8,
  },
  currencyIcon: {
    marginRight: 2,
  },
  currencyNoteText: {
    flex: 1,
    fontSize: 12,
    color: '#1565C0',
    lineHeight: 17,
    fontWeight: '500',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SPACING.lg,
  },
  footerText: {
    fontSize: 14,
    color: COLORS.muted,
  },
  loginLink: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
  },

  /* STYLES MODALES */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '82%',
    paddingBottom: 24,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  modalCloseBtn: {
    padding: 4,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.neutralPale,
    borderRadius: RADIUS.md,
    marginHorizontal: SPACING.lg,
    marginVertical: SPACING.md,
    paddingHorizontal: 12,
    height: 42,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: COLORS.text,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: SPACING.xl,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4F8',
  },
  countryItemSelected: {
    backgroundColor: '#F0F8FF',
  },
  countryInfoCol: {
    flex: 1,
  },
  countryName: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text,
  },
  countryNameSelected: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  countrySub: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 2,
  },
  dialBadge: {
    backgroundColor: '#E8F3FB',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: RADIUS.pill,
  },
  dialBadgeText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.primaryDark,
  },
});
