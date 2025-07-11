import { atom } from 'nanostores';

export const isEnglish = atom(false);
export let defaultLang = '';

export function getLangFromUrl(url) {
    const [, lang] = url.pathname.split('/');
    if (lang=="en") return 'en';
    return defaultLang;
  }

export async function getLangBoolean() {
   
    let pivote = isEnglish.value;

    return pivote;
  }

export const selectedCountry = atom(
  typeof window !== 'undefined' && localStorage.getItem('selectedCountry')
    ? localStorage.getItem('selectedCountry')
    : 'mex'
);

selectedCountry.subscribe((value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('selectedCountry', value);
  }
});

// Paleta de colores para Ojo Ciudadano
export const colors = {
  // Primario - Azul institucional
  primary: '#2563EB',
  primaryLight: '#3B82F6',
  primaryDark: '#1D4ED8',
  
  // Secundario - Blanco puro
  secondary: '#FFFFFF',
  
  // Texto - Gris oscuro / casi negro
  textPrimary: '#1F2937',
  textSecondary: '#4B5563',
  textLight: '#6B7280',
  
  // Acento - Verde de acción
  accent: '#22C55E',
  accentLight: '#4ADE80',
  accentDark: '#16A34A',
  
  // Alerta / atención - Amarillo suave
  warning: '#FACC15',
  warningLight: '#FDE047',
  warningDark: '#EAB308',
  
  // Error / crítica - Rojo vibrante
  error: '#EF4444',
  errorLight: '#F87171',
  errorDark: '#DC2626',
  
  // Fondo alternativo / hover - Gris claro
  background: '#F3F4F6',
  backgroundDark: '#E5E7EB',
  backgroundLight: '#F9FAFB',
  
  // Gradientes para elementos especiales
  gradients: {
    primary: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
    accent: 'linear-gradient(135deg, #22C55E 0%, #4ADE80 100%)',
    hero: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 50%, #22C55E 100%)'
  }
};

// Configuración de la app
export const appConfig = {
  name: 'Ojo Ciudadano',
  description: 'Tu voz cuenta, mejora tu ciudad',
  version: '1.0.0',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ojociudadano',
  appStoreUrl: 'https://apps.apple.com/app/ojo-ciudadano/id123456789',
  apkUrl: '/downloads/ojo-ciudadano.apk',
  contactEmail: 'contacto@ojociudadano.com',
  supportEmail: 'soporte@ojociudadano.com',
  phone: '+52 55 1234 5678'
};
