import React, { useState, useEffect } from 'react';
import styles from './css/ServiciosSeccion6.module.css';

const ServiciosSeccion6 = ({ ingles = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const serviciosRapidos = [
    {
      icon: '🚗',
      name: ingles ? "Collision Repair" : "Reparación de Colisión",
      time: ingles ? "3-7 days" : "3-7 días",
      price: ingles ? "From $800" : "Desde $800"
    },
    {
      icon: '🔧',
      name: ingles ? "Engine Diagnostics" : "Diagnóstico de Motor",
      time: ingles ? "Same day" : "Mismo día",
      price: ingles ? "From $150" : "Desde $150"
    },
    {
      icon: '🎨',
      name: ingles ? "Complete Paint" : "Pintura Completa",
      time: ingles ? "5-10 days" : "5-10 días",
      price: ingles ? "From $1,200" : "Desde $1,200"
    },
    {
      icon: '⚡',
      name: ingles ? "Electrical System" : "Sistema Eléctrico",
      time: ingles ? "1-3 days" : "1-3 días",
      price: ingles ? "From $300" : "Desde $300"
    },
    {
      icon: '✨',
      name: ingles ? "Detailing" : "Detallado",
      time: ingles ? "1-2 days" : "1-2 días",
      price: ingles ? "From $200" : "Desde $200"
    },
    {
      icon: '🛠️',
      name: ingles ? "Suspension" : "Suspensión",
      time: ingles ? "2-4 days" : "2-4 días",
      price: ingles ? "From $500" : "Desde $500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector(`.${styles.section}`);
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveService((prev) => (prev + 1) % serviciosRapidos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [serviciosRapidos.length]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    alert(ingles ? 'Thank you! We will contact you soon.' : '¡Gracias! Te contactaremos pronto.');
  };

  const handleWhatsApp = () => {
    const message = `Hola, me interesa obtener más información sobre sus servicios automotrices. Mi nombre es ${formData.name || '[Nombre]'}`;
    const phoneNumber = '526461234567'; // Reemplazar con el número real
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className={`${styles.section} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.backgroundEffect}></div>
      <div className={styles.particles}></div>
      
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            {ingles ? "Ready to Get Started?" : "¿Listo para Comenzar?"}
          </h2>
          <p className={styles.subtitle}>
            {ingles 
              ? "Transform your vehicle today with expert service and unmatched quality"
              : "Transforma tu vehículo hoy con servicio experto y calidad inigualable"
            }
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={styles.mainGrid}>
          
          {/* Services Quick Access */}
          <div className={styles.servicesQuick}>
            <h3 className={styles.sectionTitle}>
              {ingles ? "Popular Services" : "Servicios Populares"}
            </h3>
            <div className={styles.servicesList}>
              {serviciosRapidos.map((service, index) => (
                <div 
                  key={index} 
                  className={`${styles.serviceQuickCard} ${index === activeService ? styles.active : ''}`}
                  onClick={() => setActiveService(index)}
                >
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <div className={styles.serviceInfo}>
                    <h4 className={styles.serviceName}>{service.name}</h4>
                    <div className={styles.serviceDetails}>
                      <span className={styles.serviceTime}>⏰ {service.time}</span>
                      <span className={styles.servicePrice}>💰 {service.price}</span>
                    </div>
                  </div>
                  <div className={styles.serviceGlow}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.contactForm}>
            <h3 className={styles.sectionTitle}>
              {ingles ? "Get Free Quote" : "Cotización Gratuita"}
            </h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder={ingles ? "Full Name *" : "Nombre Completo *"}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                />
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={ingles ? "Phone *" : "Teléfono *"}
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder={ingles ? "Email" : "Correo"}
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className={styles.formSelect}
                >
                  <option value="">
                    {ingles ? "Select Service *" : "Seleccionar Servicio *"}
                  </option>
                  {serviciosRapidos.map((service, index) => (
                    <option key={index} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder={ingles ? "Describe your needs..." : "Describe tus necesidades..."}
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className={styles.formTextarea}
                ></textarea>
              </div>

              <div className={styles.formButtons}>
                <button type="submit" className={styles.submitButton}>
                  <span>{ingles ? "Get Quote" : "Obtener Cotización"}</span>
                  <div className={styles.buttonGlow}></div>
                </button>
                <button type="button" onClick={handleWhatsApp} className={styles.whatsappButton}>
                  <span>📱 WhatsApp</span>
                  <div className={styles.buttonGlow}></div>
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Guarantees Section */}
        <div className={styles.guarantees}>
          <h3 className={styles.guaranteesTitle}>
            {ingles ? "Our Commitment" : "Nuestro Compromiso"}
          </h3>
          <div className={styles.guaranteesGrid}>
            <div className={styles.guaranteeCard}>
              <div className={styles.guaranteeIcon}>🛡️</div>
              <h4 className={styles.guaranteeName}>
                {ingles ? "Quality Guarantee" : "Garantía de Calidad"}
              </h4>
              <p className={styles.guaranteeDesc}>
                {ingles 
                  ? "All work backed by comprehensive warranty"
                  : "Todo el trabajo respaldado por garantía integral"
                }
              </p>
            </div>
            <div className={styles.guaranteeCard}>
              <div className={styles.guaranteeIcon}>⏰</div>
              <h4 className={styles.guaranteeName}>
                {ingles ? "On-Time Delivery" : "Entrega a Tiempo"}
              </h4>
              <p className={styles.guaranteeDesc}>
                {ingles 
                  ? "Your vehicle ready when promised"
                  : "Tu vehículo listo cuando prometemos"
                }
              </p>
            </div>
            <div className={styles.guaranteeCard}>
              <div className={styles.guaranteeIcon}>💰</div>
              <h4 className={styles.guaranteeName}>
                {ingles ? "Fair Pricing" : "Precios Justos"}
              </h4>
              <p className={styles.guaranteeDesc}>
                {ingles 
                  ? "Transparent pricing with no hidden fees"
                  : "Precios transparentes sin costos ocultos"
                }
              </p>
            </div>
            <div className={styles.guaranteeCard}>
              <div className={styles.guaranteeIcon}>🏆</div>
              <h4 className={styles.guaranteeName}>
                {ingles ? "Expert Service" : "Servicio Experto"}
              </h4>
              <p className={styles.guaranteeDesc}>
                {ingles 
                  ? "Certified technicians with 15+ years experience"
                  : "Técnicos certificados con más de 15 años de experiencia"
                }
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📍</div>
              <h4 className={styles.contactTitle}>
                {ingles ? "Visit Us" : "Visítanos"}
              </h4>
              <p className={styles.contactText}>
                Av. Reforma #123<br/>
                Zona Centro, Ensenada<br/>
                Baja California, México
              </p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📞</div>
              <h4 className={styles.contactTitle}>
                {ingles ? "Call Us" : "Llámanos"}
              </h4>
              <p className={styles.contactText}>
                📱 +52 646 123 4567<br/>
                ☎️ (646) 123-4567<br/>
                {ingles ? "Mon-Sat 8AM-6PM" : "Lun-Sáb 8AM-6PM"}
              </p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>⏰</div>
              <h4 className={styles.contactTitle}>
                {ingles ? "Schedule" : "Horarios"}
              </h4>
              <p className={styles.contactText}>
                {ingles ? "Monday - Friday" : "Lunes - Viernes"}: 8:00 AM - 6:00 PM<br/>
                {ingles ? "Saturday" : "Sábado"}: 8:00 AM - 4:00 PM<br/>
                {ingles ? "Sunday" : "Domingo"}: {ingles ? "Closed" : "Cerrado"}
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className={styles.finalCta}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              {ingles ? "Don't Wait Any Longer" : "No Esperes Más"}
            </h3>
            <p className={styles.ctaDescription}>
              {ingles 
                ? "Your vehicle deserves the best care. Contact us today for expert service."
                : "Tu vehículo merece el mejor cuidado. Contáctanos hoy para servicio experto."
              }
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.emergencyButton}>
                <span>🚨 {ingles ? "Emergency Service" : "Servicio de Emergencia"}</span>
                <div className={styles.buttonGlow}></div>
              </button>
              <button className={styles.appointmentButton}>
                <span>📅 {ingles ? "Schedule Appointment" : "Agendar Cita"}</span>
                <div className={styles.buttonGlow}></div>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiciosSeccion6;
