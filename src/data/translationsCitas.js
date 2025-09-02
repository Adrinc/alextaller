// Traducciones para la página de citas - Alex Taller Mecánico
export const translationsCitas = {
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
    
    // Hero Section
    hero: {
      title: 'Agenda tu cita en minutos',
      subtitle: 'Selecciona tu servicio, elige fecha y hora, y confirma tus datos. ¡Así de fácil!',
      button: 'Comenzar ahora',
      backgroundAlt: 'Cliente entregando llaves a mecánico profesional'
    },
    
    // Stepper Steps
    stepper: {
      steps: [
        {
          id: 1,
          icon: '🔧',
          title: 'Servicios',
          description: 'Selecciona los servicios que necesitas'
        },
        {
          id: 2,
          icon: '📅',
          title: 'Fecha & Hora',
          description: 'Elige el día y horario que prefieras'
        },
        {
          id: 3,
          icon: '👤',
          title: 'Tus Datos',
          description: 'Completa información personal y del vehículo'
        },
        {
          id: 4,
          icon: '✅',
          title: 'Confirmación',
          description: 'Revisa y confirma tu cita'
        }
      ]
    },
    
    // Step 1: Services
    services: {
      title: 'Selecciona los servicios que necesitas',
      subtitle: 'Puedes elegir uno o más servicios para tu vehículo',
      categories: [
        {
          id: 'maintenance',
          title: 'Mantenimiento',
          services: [
            {
              id: 'full_maintenance',
              name: 'Mantenimiento completo',
              description: 'Cambio de aceite, filtros, revisión general',
              duration: '2-3 horas',
              price: 'Desde $899',
              popular: true
            },
            {
              id: 'oil_change',
              name: 'Cambio de aceite',
              description: 'Aceite sintético premium + filtro',
              duration: '30 min',
              price: 'Desde $349'
            },
            {
              id: 'brake_service',
              name: 'Servicio de frenos',
              description: 'Revisión y cambio de balatas/pastillas',
              duration: '1-2 horas',
              price: 'Desde $599'
            }
          ]
        },
        {
          id: 'diagnostics',
          title: 'Diagnóstico',
          services: [
            {
              id: 'computer_diagnosis',
              name: 'Diagnóstico computarizado',
              description: 'Escaneo completo de sistemas electrónicos',
              duration: '45 min',
              price: 'Desde $299',
              popular: true
            },
            {
              id: 'engine_diagnosis',
              name: 'Diagnóstico de motor',
              description: 'Análisis profundo del motor y componentes',
              duration: '1 hora',
              price: 'Desde $399'
            },
            {
              id: 'electrical_diagnosis',
              name: 'Diagnóstico eléctrico',
              description: 'Revisión sistema eléctrico completo',
              duration: '1-2 horas',
              price: 'Desde $499'
            }
          ]
        },
        {
          id: 'repairs',
          title: 'Reparaciones',
          services: [
            {
              id: 'engine_repair',
              name: 'Reparación de motor',
              description: 'Reparación mayor de motor y componentes',
              duration: '1-3 días',
              price: 'Cotización'
            },
            {
              id: 'transmission_repair',
              name: 'Reparación de transmisión',
              description: 'Servicio y reparación de transmisión',
              duration: '1-2 días',
              price: 'Cotización'
            },
            {
              id: 'suspension_repair',
              name: 'Reparación de suspensión',
              description: 'Amortiguadores, resortes y componentes',
              duration: '2-4 horas',
              price: 'Desde $1,299'
            }
          ]
        },
        {
          id: 'bodywork',
          title: 'Hojalatería',
          services: [
            {
              id: 'bumper_paint',
              name: 'Pintura de defensa',
              description: 'Reparación y pintura de defensas',
              duration: '1-2 días',
              price: 'Desde $1,899'
            },
            {
              id: 'scratch_repair',
              name: 'Reparación de rayones',
              description: 'Eliminación de rayones y retoque',
              duration: '2-4 horas',
              price: 'Desde $599'
            },
            {
              id: 'dent_repair',
              name: 'Reparación de abolladuras',
              description: 'Enderezado sin pintura cuando es posible',
              duration: '1-3 horas',
              price: 'Desde $399'
            }
          ]
        }
      ],
      selectedCount: 'servicios seleccionados',
      noSelection: 'Selecciona al menos un servicio para continuar'
    },
    
    // Step 2: Date & Time
    datetime: {
      title: 'Selecciona fecha y hora',
      subtitle: 'Elige el día que mejor te convenga y el horario disponible',
      calendar: {
        months: [
          'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
          'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ],
        days: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        today: 'Hoy',
        unavailable: 'No disponible',
        selected: 'Seleccionado'
      },
      timeSlots: {
        morning: 'Mañana',
        afternoon: 'Tarde',
        available: 'Disponible',
        occupied: 'Ocupado',
        noSlots: 'No hay horarios disponibles para esta fecha'
      }
    },
    
    // Step 3: User Data
    userData: {
      title: 'Completa tus datos',
      subtitle: 'Información necesaria para confirmar tu cita',
      personal: {
        title: 'Datos personales',
        fields: {
          fullName: {
            label: 'Nombre completo',
            placeholder: 'Ej: Juan Pérez García'
          },
          email: {
            label: 'Correo electrónico',
            placeholder: 'Ej: juan@email.com'
          },
          phone: {
            label: 'Teléfono',
            placeholder: 'Ej: 555-123-4567'
          }
        }
      },
      vehicle: {
        title: 'Datos del vehículo',
        fields: {
          brand: {
            label: 'Marca',
            placeholder: 'Ej: Toyota, Ford, Nissan'
          },
          model: {
            label: 'Modelo',
            placeholder: 'Ej: Corolla, Focus, Sentra'
          },
          year: {
            label: 'Año',
            placeholder: 'Ej: 2018'
          },
          plates: {
            label: 'Placas (opcional)',
            placeholder: 'Ej: ABC-123-DE'
          },
          vin: {
            label: 'VIN (opcional)',
            placeholder: 'Número de serie del vehículo'
          },
          color: {
            label: 'Color',
            placeholder: 'Ej: Blanco, Negro, Rojo'
          }
        }
      },
      validation: {
        required: 'Este campo es obligatorio',
        email: 'Ingresa un correo válido',
        phone: 'Ingresa un teléfono válido'
      }
    },
    
    // Step 4: Confirmation
    confirmation: {
      title: 'Confirma tu cita',
      subtitle: 'Revisa que toda la información sea correcta antes de confirmar',
      summary: {
        services: 'Servicios seleccionados',
        datetime: 'Fecha y hora',
        personal: 'Datos personales',
        vehicle: 'Vehículo',
        estimatedTime: 'Tiempo estimado',
        estimatedCost: 'Costo estimado'
      },
      buttons: {
        edit: 'Editar',
        confirm: 'Confirmar cita',
        back: 'Regresar'
      },
      terms: {
        text: 'Al confirmar acepto los',
        link: 'términos y condiciones',
        and: 'y la',
        privacy: 'política de privacidad'
      }
    },
    
    // Success Message
    success: {
      title: '¡Cita confirmada exitosamente!',
      subtitle: 'Hemos enviado los detalles a tu correo electrónico',
      details: {
        confirmation: 'Número de confirmación',
        nextSteps: 'Próximos pasos',
        reminder: 'Te enviaremos un recordatorio 24 horas antes',
        whatsapp: 'También recibirás confirmación por WhatsApp',
        questions: '¿Tienes preguntas? Contáctanos'
      },
      buttons: {
        newAppointment: 'Agendar otra cita',
        home: 'Ir al inicio',
        services: 'Ver servicios'
      }
    },
    
    // Benefits Section
    benefits: {
      title: 'Agendar nunca fue tan fácil',
      subtitle: 'Disfruta de todas las ventajas de nuestro sistema de citas',
      list: [
        {
          icon: '✅',
          title: 'Confirmación inmediata',
          description: 'Recibe confirmación por correo y WhatsApp al instante'
        },
        {
          icon: '⏰',
          title: 'Recordatorio automático',
          description: 'Te avisamos 24 horas antes de tu cita'
        },
        {
          icon: '🔄',
          title: 'Reagenda sin costo',
          description: 'Cambia tu cita hasta 4 horas antes sin penalización'
        },
        {
          icon: '💬',
          title: 'Soporte 24/7',
          description: 'Contacta con nosotros en cualquier momento'
        }
      ]
    },
    
    // Final CTA
    finalCta: {
      title: 'Confía tu auto a los expertos',
      subtitle: 'Más de 30 años de experiencia nos respaldan. Tu vehículo estará en las mejores manos.',
      button: 'Agendar mi cita ahora',
      stats: {
        experience: '30+ años de experiencia',
        clients: '12,500+ autos atendidos',
        satisfaction: '4.9/5 satisfacción'
      }
    },
    
    // Common
    common: {
      next: 'Siguiente',
      back: 'Anterior',
      continue: 'Continuar',
      cancel: 'Cancelar',
      edit: 'Editar',
      save: 'Guardar',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      optional: 'Opcional',
      required: 'Obligatorio',
      select: 'Seleccionar',
      selected: 'Seleccionado',
      available: 'Disponible',
      unavailable: 'No disponible',
      from: 'Desde',
      duration: 'Duración',
      price: 'Precio',
      total: 'Total',
      subtotal: 'Subtotal',
      whatsapp: 'WhatsApp',
      call: 'Llamar',
      email: 'Email'
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
    
    // Hero Section
    hero: {
      title: 'Schedule your appointment in minutes',
      subtitle: 'Select your service, choose date and time, and confirm your details. It\'s that easy!',
      button: 'Start now',
      backgroundAlt: 'Customer handing keys to professional mechanic'
    },
    
    // Stepper Steps
    stepper: {
      steps: [
        {
          id: 1,
          icon: '🔧',
          title: 'Services',
          description: 'Select the services you need'
        },
        {
          id: 2,
          icon: '📅',
          title: 'Date & Time',
          description: 'Choose your preferred day and time'
        },
        {
          id: 3,
          icon: '👤',
          title: 'Your Info',
          description: 'Complete personal and vehicle information'
        },
        {
          id: 4,
          icon: '✅',
          title: 'Confirmation',
          description: 'Review and confirm your appointment'
        }
      ]
    },
    
    // Step 1: Services
    services: {
      title: 'Select the services you need',
      subtitle: 'You can choose one or more services for your vehicle',
      categories: [
        {
          id: 'maintenance',
          title: 'Maintenance',
          services: [
            {
              id: 'full_maintenance',
              name: 'Complete maintenance',
              description: 'Oil change, filters, general inspection',
              duration: '2-3 hours',
              price: 'From $899',
              popular: true
            },
            {
              id: 'oil_change',
              name: 'Oil change',
              description: 'Premium synthetic oil + filter',
              duration: '30 min',
              price: 'From $349'
            },
            {
              id: 'brake_service',
              name: 'Brake service',
              description: 'Inspection and brake pad replacement',
              duration: '1-2 hours',
              price: 'From $599'
            }
          ]
        },
        {
          id: 'diagnostics',
          title: 'Diagnostics',
          services: [
            {
              id: 'computer_diagnosis',
              name: 'Computer diagnostics',
              description: 'Complete electronic systems scan',
              duration: '45 min',
              price: 'From $299',
              popular: true
            },
            {
              id: 'engine_diagnosis',
              name: 'Engine diagnostics',
              description: 'Deep engine and components analysis',
              duration: '1 hour',
              price: 'From $399'
            },
            {
              id: 'electrical_diagnosis',
              name: 'Electrical diagnostics',
              description: 'Complete electrical system inspection',
              duration: '1-2 hours',
              price: 'From $499'
            }
          ]
        },
        {
          id: 'repairs',
          title: 'Repairs',
          services: [
            {
              id: 'engine_repair',
              name: 'Engine repair',
              description: 'Major engine and components repair',
              duration: '1-3 days',
              price: 'Quote'
            },
            {
              id: 'transmission_repair',
              name: 'Transmission repair',
              description: 'Transmission service and repair',
              duration: '1-2 days',
              price: 'Quote'
            },
            {
              id: 'suspension_repair',
              name: 'Suspension repair',
              description: 'Shocks, springs and components',
              duration: '2-4 hours',
              price: 'From $1,299'
            }
          ]
        },
        {
          id: 'bodywork',
          title: 'Bodywork',
          services: [
            {
              id: 'bumper_paint',
              name: 'Bumper painting',
              description: 'Bumper repair and painting',
              duration: '1-2 days',
              price: 'From $1,899'
            },
            {
              id: 'scratch_repair',
              name: 'Scratch repair',
              description: 'Scratch removal and touch-up',
              duration: '2-4 hours',
              price: 'From $599'
            },
            {
              id: 'dent_repair',
              name: 'Dent repair',
              description: 'Paintless dent repair when possible',
              duration: '1-3 hours',
              price: 'From $399'
            }
          ]
        }
      ],
      selectedCount: 'selected services',
      noSelection: 'Select at least one service to continue'
    },
    
    // Step 2: Date & Time
    datetime: {
      title: 'Select date and time',
      subtitle: 'Choose the day that works best for you and available time',
      calendar: {
        months: [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ],
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        today: 'Today',
        unavailable: 'Unavailable',
        selected: 'Selected'
      },
      timeSlots: {
        morning: 'Morning',
        afternoon: 'Afternoon',
        available: 'Available',
        occupied: 'Occupied',
        noSlots: 'No time slots available for this date'
      }
    },
    
    // Step 3: User Data
    userData: {
      title: 'Complete your information',
      subtitle: 'Information needed to confirm your appointment',
      personal: {
        title: 'Personal information',
        fields: {
          fullName: {
            label: 'Full name',
            placeholder: 'Ex: John Smith'
          },
          email: {
            label: 'Email address',
            placeholder: 'Ex: john@email.com'
          },
          phone: {
            label: 'Phone',
            placeholder: 'Ex: 555-123-4567'
          }
        }
      },
      vehicle: {
        title: 'Vehicle information',
        fields: {
          brand: {
            label: 'Brand',
            placeholder: 'Ex: Toyota, Ford, Nissan'
          },
          model: {
            label: 'Model',
            placeholder: 'Ex: Corolla, Focus, Sentra'
          },
          year: {
            label: 'Year',
            placeholder: 'Ex: 2018'
          },
          plates: {
            label: 'License plates (optional)',
            placeholder: 'Ex: ABC-123-DE'
          },
          vin: {
            label: 'VIN (optional)',
            placeholder: 'Vehicle identification number'
          },
          color: {
            label: 'Color',
            placeholder: 'Ex: White, Black, Red'
          }
        }
      },
      validation: {
        required: 'This field is required',
        email: 'Please enter a valid email',
        phone: 'Please enter a valid phone number'
      }
    },
    
    // Step 4: Confirmation
    confirmation: {
      title: 'Confirm your appointment',
      subtitle: 'Review that all information is correct before confirming',
      summary: {
        services: 'Selected services',
        datetime: 'Date and time',
        personal: 'Personal information',
        vehicle: 'Vehicle',
        estimatedTime: 'Estimated time',
        estimatedCost: 'Estimated cost'
      },
      buttons: {
        edit: 'Edit',
        confirm: 'Confirm appointment',
        back: 'Go back'
      },
      terms: {
        text: 'By confirming I accept the',
        link: 'terms and conditions',
        and: 'and the',
        privacy: 'privacy policy'
      }
    },
    
    // Success Message
    success: {
      title: 'Appointment confirmed successfully!',
      subtitle: 'We have sent the details to your email',
      details: {
        confirmation: 'Confirmation number',
        nextSteps: 'Next steps',
        reminder: 'We\'ll send you a reminder 24 hours before',
        whatsapp: 'You\'ll also receive WhatsApp confirmation',
        questions: 'Have questions? Contact us'
      },
      buttons: {
        newAppointment: 'Schedule another appointment',
        home: 'Go to home',
        services: 'View services'
      }
    },
    
    // Benefits Section
    benefits: {
      title: 'Scheduling has never been easier',
      subtitle: 'Enjoy all the advantages of our appointment system',
      list: [
        {
          icon: '✅',
          title: 'Instant confirmation',
          description: 'Receive confirmation by email and WhatsApp instantly'
        },
        {
          icon: '⏰',
          title: 'Automatic reminder',
          description: 'We\'ll notify you 24 hours before your appointment'
        },
        {
          icon: '🔄',
          title: 'Free rescheduling',
          description: 'Change your appointment up to 4 hours before without penalty'
        },
        {
          icon: '💬',
          title: '24/7 support',
          description: 'Contact us anytime'
        }
      ]
    },
    
    // Final CTA
    finalCta: {
      title: 'Trust your car to the experts',
      subtitle: 'Over 30 years of experience back us up. Your vehicle will be in the best hands.',
      button: 'Schedule my appointment now',
      stats: {
        experience: '30+ years of experience',
        clients: '12,500+ cars serviced',
        satisfaction: '4.9/5 satisfaction'
      }
    },
    
    // Common
    common: {
      next: 'Next',
      back: 'Previous',
      continue: 'Continue',
      cancel: 'Cancel',
      edit: 'Edit',
      save: 'Save',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      optional: 'Optional',
      required: 'Required',
      select: 'Select',
      selected: 'Selected',
      available: 'Available',
      unavailable: 'Unavailable',
      from: 'From',
      duration: 'Duration',
      price: 'Price',
      total: 'Total',
      subtotal: 'Subtotal',
      whatsapp: 'WhatsApp',
      call: 'Call',
      email: 'Email'
    }
  }
};
