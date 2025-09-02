// Traducciones para la página de promociones - Alex Taller Mecánico
export const translationsPromociones = {
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      benefits: 'Beneficios',
      promotions: 'Promociones',
      appointments: 'Citas',
      branches: 'Sucursales',
      about: 'Nosotros'
    },
    
    // Hero Section con Timer
    hero: {
      badge: 'Oferta Limitada',
      title: 'Promociones Exclusivas',
      subtitle: 'Ahorra en tus servicios automotrices, solo por tiempo limitado.',
      countdown: {
        prefix: 'Finaliza en:',
        days: 'd',
        hours: 'h',
        minutes: 'm',
        seconds: 's'
      },
      cta: 'Ver Promociones',
      urgency: '¡Solo quedan pocas horas!'
    },
    
    // Promociones Principales (3 cards)
    mainPromos: {
      title: 'Promociones Destacadas',
      subtitle: 'Los mejores descuentos en servicios premium',
      promotions: [
        {
          id: 1,
          title: 'Mantenimiento Completo',
          description: 'Incluye: cambio de aceite, filtros, revisión de frenos, alineación básica y diagnóstico computarizado',
          originalPrice: '$1,600',
          discountPrice: '$899',
          discount: '45% OFF',
          image: 'maintenance.jpg',
          badge: 'Más Popular',
          includes: [
            'Cambio de aceite',
            'Filtros de aire y combustible',
            'Revisión de frenos',
            'Diagnóstico computarizado',
            'Alineación básica'
          ]
        },
        {
          id: 2,
          title: 'Aire Acondicionado',
          description: 'Carga completa de refrigerante, limpieza de filtros y revisión del sistema',
          originalPrice: '$1,200',
          discountPrice: '$650',
          discount: '46% OFF',
          image: 'ac-service.jpg',
          badge: 'Temporada',
          includes: [
            'Carga de refrigerante',
            'Limpieza de filtros',
            'Revisión del compresor',
            'Prueba de funcionamiento'
          ]
        },
        {
          id: 3,
          title: 'Pintura Automotriz',
          description: 'Pintura profesional de cofre o defensa con pintura original y garantía',
          originalPrice: '$3,000',
          discountPrice: '$1,999',
          discount: '33% OFF',
          image: 'paint-service.jpg',
          badge: 'Premium',
          includes: [
            'Preparación de superficie',
            'Pintura original de fábrica',
            'Pulido y encerado',
            'Garantía 6 meses'
          ]
        }
      ],
      cta: 'Agendar Cita',
      warranty: 'Garantía incluida'
    },
    
    // Ofertas Rápidas (carrusel)
    quickOffers: {
      title: 'Ofertas Express',
      subtitle: 'Servicios rápidos con grandes descuentos',
      offers: [
        {
          id: 1,
          icon: '🚗',
          title: 'Alineación y Balanceo',
          originalPrice: '$900',
          discountPrice: '$499',
          discount: '44% OFF',
          duration: '2 horas',
          popular: true
        },
        {
          id: 2,
          icon: '🔋',
          title: 'Cambio de Batería',
          originalPrice: '$450',
          discountPrice: '$250',
          discount: '44% OFF',
          duration: '30 min',
          popular: false
        },
        {
          id: 3,
          icon: '💨',
          title: 'Sanitización con Ozono',
          originalPrice: '$599',
          discountPrice: '$399',
          discount: '33% OFF',
          duration: '1 hora',
          popular: false
        },
        {
          id: 4,
          icon: '🛞',
          title: 'Pastillas de Freno',
          originalPrice: '$1,500',
          discountPrice: '$999',
          discount: '33% OFF',
          duration: '1.5 horas',
          popular: true
        },
        {
          id: 5,
          icon: '🔧',
          title: 'Diagnóstico Completo',
          originalPrice: '$400',
          discountPrice: '$199',
          discount: '50% OFF',
          duration: '45 min',
          popular: false
        },
        {
          id: 6,
          icon: '🛠️',
          title: 'Cambio de Bujías',
          originalPrice: '$800',
          discountPrice: '$499',
          discount: '38% OFF',
          duration: '1 hora',
          popular: false
        }
      ],
      cta: 'Reservar',
      includes: 'Incluye mano de obra'
    },
    
    // CTA Final
    finalCta: {
      title: '¡No dejes pasar estas promociones!',
      subtitle: 'Agenda tu cita ahora y asegura tu descuento. Promociones válidas hasta agotar existencias.',
      features: [
        'Atención inmediata',
        'Sin pagos ocultos',
        'Garantía en todos los servicios',
        'Diagnóstico gratuito'
      ],
      mainCta: 'Aprovechar Promoción',
      secondaryCta: 'Llamar Ahora',
      urgency: 'Solo por tiempo limitado',
      phone: '(664) 123-4567'
    },
    
    // Common
    common: {
      schedule: 'Agendar',
      off: 'DESC',
      save: 'Ahorras',
      currency: 'MXN',
      includes: 'Incluye:',
      duration: 'Duración:',
      warranty: 'Garantía',
      whatsapp: 'WhatsApp',
      call: 'Llamar',
      email: 'Email',
      quote: 'Cotizar',
      book: 'Reservar',
      limited: 'Limitado',
      popular: 'Popular',
      new: 'Nuevo'
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      benefits: 'Benefits',
      promotions: 'Promotions',
      appointments: 'Appointments',
      branches: 'Branches',
      about: 'About Us'
    },
    
    // Hero Section con Timer
    hero: {
      badge: 'Limited Offer',
      title: 'Exclusive Promotions',
      subtitle: 'Save on your automotive services, limited time only.',
      countdown: {
        prefix: 'Ends in:',
        days: 'd',
        hours: 'h',
        minutes: 'm',
        seconds: 's'
      },
      cta: 'View Promotions',
      urgency: 'Only a few hours left!'
    },
    
    // Promociones Principales (3 cards)
    mainPromos: {
      title: 'Featured Promotions',
      subtitle: 'Best discounts on premium services',
      promotions: [
        {
          id: 1,
          title: 'Complete Maintenance',
          description: 'Includes: oil change, filters, brake inspection, basic alignment and computerized diagnostics',
          originalPrice: '$80',
          discountPrice: '$45',
          discount: '45% OFF',
          image: 'maintenance.jpg',
          badge: 'Most Popular',
          includes: [
            'Oil change',
            'Air and fuel filters',
            'Brake inspection',
            'Computerized diagnostics',
            'Basic alignment'
          ]
        },
        {
          id: 2,
          title: 'Air Conditioning',
          description: 'Complete refrigerant charge, filter cleaning and system inspection',
          originalPrice: '$60',
          discountPrice: '$33',
          discount: '46% OFF',
          image: 'ac-service.jpg',
          badge: 'Seasonal',
          includes: [
            'Refrigerant charge',
            'Filter cleaning',
            'Compressor inspection',
            'Performance test'
          ]
        },
        {
          id: 3,
          title: 'Automotive Paint',
          description: 'Professional hood or bumper painting with original paint and warranty',
          originalPrice: '$150',
          discountPrice: '$100',
          discount: '33% OFF',
          image: 'paint-service.jpg',
          badge: 'Premium',
          includes: [
            'Surface preparation',
            'Original factory paint',
            'Polish and wax',
            '6-month warranty'
          ]
        }
      ],
      cta: 'Schedule Appointment',
      warranty: 'Warranty included'
    },
    
    // Ofertas Rápidas (carrusel)
    quickOffers: {
      title: 'Express Offers',
      subtitle: 'Quick services with great discounts',
      offers: [
        {
          id: 1,
          icon: '🚗',
          title: 'Alignment & Balancing',
          originalPrice: '$45',
          discountPrice: '$25',
          discount: '44% OFF',
          duration: '2 hours',
          popular: true
        },
        {
          id: 2,
          icon: '🔋',
          title: 'Battery Replacement',
          originalPrice: '$23',
          discountPrice: '$13',
          discount: '44% OFF',
          duration: '30 min',
          popular: false
        },
        {
          id: 3,
          icon: '💨',
          title: 'Ozone Sanitization',
          originalPrice: '$30',
          discountPrice: '$20',
          discount: '33% OFF',
          duration: '1 hour',
          popular: false
        },
        {
          id: 4,
          icon: '🛞',
          title: 'Brake Pads',
          originalPrice: '$75',
          discountPrice: '$50',
          discount: '33% OFF',
          duration: '1.5 hours',
          popular: true
        },
        {
          id: 5,
          icon: '🔧',
          title: 'Complete Diagnostics',
          originalPrice: '$20',
          discountPrice: '$10',
          discount: '50% OFF',
          duration: '45 min',
          popular: false
        },
        {
          id: 6,
          icon: '🛠️',
          title: 'Spark Plugs Change',
          originalPrice: '$40',
          discountPrice: '$25',
          discount: '38% OFF',
          duration: '1 hour',
          popular: false
        }
      ],
      cta: 'Book Now',
      includes: 'Labor included'
    },
    
    // CTA Final
    finalCta: {
      title: "Don't miss these promotions!",
      subtitle: 'Schedule your appointment now and secure your discount. Promotions valid while supplies last.',
      features: [
        'Immediate attention',
        'No hidden fees',
        'Warranty on all services',
        'Free diagnostics'
      ],
      mainCta: 'Take Advantage',
      secondaryCta: 'Call Now',
      urgency: 'Limited time only',
      phone: '(664) 123-4567'
    },
    
    // Common
    common: {
      schedule: 'Schedule',
      off: 'OFF',
      save: 'Save',
      currency: 'USD',
      includes: 'Includes:',
      duration: 'Duration:',
      warranty: 'Warranty',
      whatsapp: 'WhatsApp',
      call: 'Call',
      email: 'Email',
      quote: 'Quote',
      book: 'Book',
      limited: 'Limited',
      popular: 'Popular',
      new: 'New'
    }
  }
};
