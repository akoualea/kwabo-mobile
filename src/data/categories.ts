export interface ServiceCategory {
  id: 'immobilier' | 'famille' | 'demarches' | 'logistique';
  name: string;
  short: string;
  icon: string;
  blurb: string;
  badgeColor?: string;
}

export const CATEGORIES: ServiceCategory[] = [
  {
    id: 'immobilier',
    name: 'Immobilier & Foncier',
    short: 'Immobilier',
    icon: 'home',
    blurb: 'Construire, investir et sécuriser vos terrains.',
  },
  {
    id: 'famille',
    name: 'Famille & Santé',
    short: 'Famille',
    icon: 'people',
    blurb: 'Être présent pour vos proches, même à distance.',
  },
  {
    id: 'demarches',
    name: 'Démarches & Administratif',
    short: 'Démarches',
    icon: 'document-text',
    blurb: 'Vos papiers et vos dossiers, sans vous déplacer.',
  },
  {
    id: 'logistique',
    name: 'Logistique & Transferts',
    short: 'Logistique',
    icon: 'car',
    blurb: "Envoyer de l'argent, des colis et des cadeaux.",
  },
];

export const CITIES = [
  'Cotonou',
  'Abomey-Calavi',
  'Porto-Novo',
  'Ouidah',
  'Parakou',
  'Abomey',
  'Bohicon',
  'Autre ville',
];

export interface CountryInfo {
  name: string;
  currency: string;
  rate: number;
  dial: string;
}

export const WORLD_COUNTRIES: CountryInfo[] = [
  { name: 'France', currency: 'EUR', rate: 1, dial: '+33' },
  { name: 'Bénin', currency: 'XOF', rate: 655.96, dial: '+229' },
  { name: 'Belgique', currency: 'EUR', rate: 1, dial: '+32' },
  { name: 'Canada', currency: 'CAD', rate: 1.49, dial: '+1' },
  { name: 'États-Unis', currency: 'USD', rate: 1.08, dial: '+1' },
  { name: 'Royaume-Uni', currency: 'GBP', rate: 0.86, dial: '+44' },
  { name: 'Suisse', currency: 'CHF', rate: 0.94, dial: '+41' },
  { name: 'Allemagne', currency: 'EUR', rate: 1, dial: '+49' },
  { name: 'Italie', currency: 'EUR', rate: 1, dial: '+39' },
  { name: 'Espagne', currency: 'EUR', rate: 1, dial: '+34' },
  { name: 'Côte d\'Ivoire', currency: 'XOF', rate: 655.96, dial: '+225' },
  { name: 'Sénégal', currency: 'XOF', rate: 655.96, dial: '+221' },
  { name: 'Togo', currency: 'XOF', rate: 655.96, dial: '+228' },
  { name: 'Gabon', currency: 'XAF', rate: 655.96, dial: '+241' },
  { name: 'Cameroun', currency: 'XAF', rate: 655.96, dial: '+237' },
  { name: 'Congo', currency: 'XAF', rate: 655.96, dial: '+242' },
  { name: 'Burkina Faso', currency: 'XOF', rate: 655.96, dial: '+226' },
  { name: 'Mali', currency: 'XOF', rate: 655.96, dial: '+223' },
  { name: 'Niger', currency: 'XOF', rate: 655.96, dial: '+227' },
  { name: 'Guinée', currency: 'GNF', rate: 9300, dial: '+224' },
  { name: 'RD Congo', currency: 'CDF', rate: 3050, dial: '+243' },
  { name: 'Nigeria', currency: 'NGN', rate: 1650, dial: '+234' },
  { name: 'Ghana', currency: 'GHS', rate: 16.5, dial: '+233' },
  { name: 'Maroc', currency: 'MAD', rate: 10.8, dial: '+212' },
  { name: 'Algérie', currency: 'DZD', rate: 145, dial: '+213' },
  { name: 'Tunisie', currency: 'TND', rate: 3.35, dial: '+216' },
  { name: 'Émirats arabes unis', currency: 'AED', rate: 3.97, dial: '+971' },
  { name: 'Chine', currency: 'CNY', rate: 7.8, dial: '+86' },
  { name: 'Autre pays', currency: 'USD', rate: 1.08, dial: '+1' },
];

export const COUNTRIES = WORLD_COUNTRIES.map((c) => c.name);

export const DIAL_CODES = [
  '+33',
  '+229',
  '+32',
  '+1',
  '+44',
  '+41',
  '+49',
  '+39',
  '+34',
  '+225',
  '+221',
  '+228',
  '+241',
  '+237',
  '+242',
  '+226',
  '+223',
  '+227',
  '+224',
  '+243',
  '+234',
  '+233',
  '+212',
  '+213',
  '+216',
  '+971',
  '+86',
];

export const WHATSAPP_CONTACT = '+229 01 66 73 02 74';
