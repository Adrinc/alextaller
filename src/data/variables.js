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

// Paleta de colores para Alex Taller Mecánico
export const colors = {
  // Primario - Rosa magenta del logo
  primary: '#e91e63',
  primaryLight: '#f06292',
  primaryDark: '#ad1457',
  
  // Secundario - Blanco puro
  secondary: '#FFFFFF',
  
  // Texto - Gris oscuro / negro
  textPrimary: '#212121',
  textSecondary: '#424242',
  textLight: '#757575',
  
  // Acento - Naranja de acción
  accent: '#ff5722',
  accentLight: '#ff7043',
  accentDark: '#d84315',
  
  // Alerta / atención - Naranja amarillo
  warning: '#ff9800',
  warningLight: '#ffb74d',
  warningDark: '#f57c00',
  
  // Error / crítica - Rojo vibrante
  error: '#f44336',
  errorLight: '#e57373',
  errorDark: '#d32f2f',
  
  // Éxito - Verde
  success: '#4caf50',
  successLight: '#81c784',
  successDark: '#388e3c',
  
  // Fondo alternativo / hover - Gris claro
  background: '#f5f5f5',
  backgroundDark: '#eeeeee',
  backgroundLight: '#fafafa',
  
  // Metálico - Grises metálicos del logo
  metallic: '#9e9e9e',
  metallicDark: '#757575',
  
  // Gradientes para elementos especiales
  gradients: {
    primary: 'linear-gradient(135deg, #e91e63 0%, #f06292 100%)',
    accent: 'linear-gradient(135deg, #ff5722 0%, #ff7043 100%)',
    hero: 'linear-gradient(135deg, #e91e63 0%, #ad1457 50%, #ff5722 100%)',
    metallic: 'linear-gradient(135deg, #9e9e9e 0%, #757575 100%)'
  }
};

// Información del taller
export const tallerInfo = {
  name: 'Alex Taller Mecánico',
  slogan: 'Confianza y experiencia desde 2017',
  phone: '664 630 4093',
  whatsapp: '6646304093',
  address: '4645 Calle Salvador Alvarado, Tijuana, México',
  coordinates: {
    lat: 32.52893895950621,
    lng: -117.07382839374367
  },
  hours: {
    weekdays: 'Lunes - Viernes: 8:00 AM - 6:00 PM',
    saturday: 'Sábados: 8:00 AM - 4:00 PM',
    sunday: 'Domingos: Cerrado'
  },
  email: 'contacto@alextaller.mx',
  founded: 2017,
  services: {
    maintenance: 'Mantenimiento Preventivo',
    repairs: 'Reparaciones Mecánicas',
    diagnostics: 'Diagnósticos Computarizados',
    painting: 'Pintura y Estética Automotriz',
    electrical: 'Sistema Eléctrico',
    airConditioning: 'Aire Acondicionado'
  }
};
