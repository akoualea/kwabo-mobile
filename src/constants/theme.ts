/**
 * Charte graphique BeniLink - Mobile App
 * Reprise fidèle de la maquette v3.0 / BeniLink
 */

export const COLORS = {
  // Bleus de marque BeniLink (nouveau thème officiel)
  primary: '#0B6FB8',
  primaryDark: '#084D82',
  primaryHero: '#0A5C9E',
  primaryMid: '#1593D6',
  primaryPale: '#E6F4FD',

  // Alias pour rétrocompatibilité avec les composants existants
  green: '#0B6FB8',
  greenDark: '#084D82',
  greenHero: '#0A5C9E',
  greenMid: '#1593D6',
  greenPale: '#E6F4FD',

  // Or & Jaune (Identité BeniLink)
  gold: '#E0A410',
  goldLight: '#F7C531',
  goldPale: '#FDF6E0',
  goldText: '#7A5A06',

  // Terracotta & Alertes
  terracotta: '#C9561E',
  terracottaText: '#A8420F',
  terracottaPale: '#FDF0EA',

  // Neutres & Fonds
  cream: '#F5F9FD',
  white: '#FFFFFF',
  text: '#10202E',
  textMid: '#3A4A58',
  muted: '#51606E',
  border: '#D9E7F2',
  neutralPale: '#EAF2F8',
  cardBg: '#FFFFFF',
  
  // Statuses
  statusPendingBg: '#FDF6E0',
  statusPendingText: '#7A5A06',
  statusActiveBg: '#E6F4FD',
  statusActiveText: '#0B6FB8',
  statusDoneBg: '#EAF2F8',
  statusDoneText: '#3A4A58',
  statusUrgentBg: '#FDF0EA',
  statusUrgentText: '#A8420F',
};

export const FONTS = {
  displayBold: 'System',
  bodyRegular: 'System',
  bodyMedium: 'System',
  bodySemiBold: 'System',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const RADIUS = {
  xs: 6,
  sm: 8,
  md: 12,
  card: 20,
  pill: 9999,
};

export const SHADOWS = {
  sm: {
    shadowColor: '#084D82',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  md: {
    shadowColor: '#084D82',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  lg: {
    shadowColor: '#084D82',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 20,
    elevation: 8,
  },
};
