// ========================================
// RANCHO PARAÍSO - JAVASCRIPT OPTIMIZADO
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  
  // ========================================
  // CARRUSEL DE HOSPEDAJE
  // ========================================
  
  const hospedajeCarousel = document.querySelector('.hospedaje-carousel');
  const hospedajeSlides = document.querySelectorAll('.hospedaje-slide');
  const hospedajePrevBtn = document.querySelector('.hospedaje-btn-prev');
  const hospedajeNextBtn = document.querySelector('.hospedaje-btn-next');
  const hospedajeDots = document.querySelectorAll('.hospedaje-dot');
  
  let currentHospedajeSlide = 0;
  let hospedajeAutoplayInterval;
  const hospedajeAutoplayDelay = 4000;
  
  function showHospedajeSlide(index) {
    if (index >= hospedajeSlides.length) {
      currentHospedajeSlide = 0;
    } else if (index < 0) {
      currentHospedajeSlide = hospedajeSlides.length - 1;
    } else {
      currentHospedajeSlide = index;
    }
    
    hospedajeSlides.forEach(slide => slide.classList.remove('active'));
    hospedajeDots.forEach(dot => dot.classList.remove('active'));
    
    hospedajeSlides[currentHospedajeSlide].classList.add('active');
    hospedajeDots[currentHospedajeSlide].classList.add('active');
  }
  
  function nextHospedajeSlide() {
    showHospedajeSlide(currentHospedajeSlide + 1);
  }
  
  function prevHospedajeSlide() {
    showHospedajeSlide(currentHospedajeSlide - 1);
  }
  
  if (hospedajeNextBtn) {
    hospedajeNextBtn.addEventListener('click', function() {
      nextHospedajeSlide();
      resetHospedajeAutoplay();
    });
  }
  
  if (hospedajePrevBtn) {
    hospedajePrevBtn.addEventListener('click', function() {
      prevHospedajeSlide();
      resetHospedajeAutoplay();
    });
  }
  
  hospedajeDots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      showHospedajeSlide(index);
      resetHospedajeAutoplay();
    });
  });
  
  function startHospedajeAutoplay() {
    hospedajeAutoplayInterval = setInterval(nextHospedajeSlide, hospedajeAutoplayDelay);
  }
  
  function stopHospedajeAutoplay() {
    clearInterval(hospedajeAutoplayInterval);
  }
  
  function resetHospedajeAutoplay() {
    stopHospedajeAutoplay();
    startHospedajeAutoplay();
  }
  
  if (hospedajeCarousel) {
    hospedajeCarousel.addEventListener('mouseenter', stopHospedajeAutoplay);
    hospedajeCarousel.addEventListener('mouseleave', startHospedajeAutoplay);
    startHospedajeAutoplay();
  }
  
  let hospedajeTouchStartX = 0;
  let hospedajeTouchEndX = 0;
  
  if (hospedajeCarousel) {
    hospedajeCarousel.addEventListener('touchstart', function(e) {
      hospedajeTouchStartX = e.changedTouches[0].screenX;
    });
    
    hospedajeCarousel.addEventListener('touchend', function(e) {
      hospedajeTouchEndX = e.changedTouches[0].screenX;
      handleHospedajeSwipe();
    });
  }
  
  function handleHospedajeSwipe() {
    const swipeThreshold = 50;
    if (hospedajeTouchEndX < hospedajeTouchStartX - swipeThreshold) {
      nextHospedajeSlide();
      resetHospedajeAutoplay();
    }
    if (hospedajeTouchEndX > hospedajeTouchStartX + swipeThreshold) {
      prevHospedajeSlide();
      resetHospedajeAutoplay();
    }
  }
  
  // ========================================
  // CARRUSEL DE VISTAS
  // ========================================
  
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-btn-prev');
  const nextBtn = document.querySelector('.carousel-btn-next');
  const dots = document.querySelectorAll('.carousel-dot');
  
  let currentSlide = 0;
  let autoplayInterval;
  const autoplayDelay = 5000;
  
  function showSlide(index) {
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }
  
  function nextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function prevSlide() {
    showSlide(currentSlide - 1);
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      nextSlide();
      resetAutoplay();
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      prevSlide();
      resetAutoplay();
    });
  }
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      showSlide(index);
      resetAutoplay();
    });
  });
  
  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, autoplayDelay);
  }
  
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }
  
  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }
  
  if (carousel) {
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    startAutoplay();
  }
  
  let touchStartX = 0;
  let touchEndX = 0;
  
  if (carousel) {
    carousel.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    });
    
    carousel.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
  }
  
  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide();
      resetAutoplay();
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide();
      resetAutoplay();
    }
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
      resetAutoplay();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      resetAutoplay();
    }
  });
  
  slides.forEach(slide => {
    const img = slide.querySelector('img');
    if (img) {
      img.addEventListener('click', function() {
        if (this.requestFullscreen) {
          this.requestFullscreen();
        } else if (this.webkitRequestFullscreen) {
          this.webkitRequestFullscreen();
        } else if (this.msRequestFullscreen) {
          this.msRequestFullscreen();
        }
      });
    }
  });
  
  // ========================================
  // WHATSAPP FLOTANTE
  // ========================================
  
  const whatsappToggle = document.getElementById('whatsapp-toggle');
  const whatsappMenu = document.getElementById('whatsapp-menu');
  const waClose = document.getElementById('wa-close');
  
  if (whatsappToggle) {
    whatsappToggle.addEventListener('click', function() {
      whatsappMenu.classList.toggle('show');
      const isShown = whatsappMenu.classList.contains('show');
      whatsappMenu.setAttribute('aria-hidden', !isShown);
    });
  }
  
  if (waClose) {
    waClose.addEventListener('click', function() {
      whatsappMenu.classList.remove('show');
      whatsappMenu.setAttribute('aria-hidden', 'true');
    });
  }
  
  document.addEventListener('click', function(event) {
    const whatsappFloating = document.getElementById('whatsapp-floating');
    if (whatsappFloating && !whatsappFloating.contains(event.target)) {
      whatsappMenu.classList.remove('show');
      whatsappMenu.setAttribute('aria-hidden', 'true');
    }
  });
  
  // ========================================
  // FORMULARIO DE RESERVAS
  // ========================================
  
  const reservationForm = document.getElementById('reservationForm');
  
  if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nombre = document.getElementById('res-name').value.trim();
      const telefono = document.getElementById('res-phone').value.trim();
      const fechaLlegada = document.getElementById('res-date').value;
      const fechaSalida = document.getElementById('res-date-depart').value;
      const personas = document.getElementById('res-guests').value;
      const mensaje = document.getElementById('res-message').value.trim();
      
      if (!nombre || !fechaLlegada || !fechaSalida || !personas) {
        alert('Por favor completa todos los campos obligatorios.');
        return;
      }
      
      if (new Date(fechaSalida) <= new Date(fechaLlegada)) {
        alert('La fecha de salida debe ser posterior a la fecha de entrada.');
        return;
      }
      
      const fechaLlegadaFormateada = formatearFecha(fechaLlegada);
      const fechaSalidaFormateada = formatearFecha(fechaSalida);
      
      let mensajeWhatsApp = `Hola, quiero reservar la finca Rancho Paraíso (completa).%0A%0A`;
      mensajeWhatsApp += `👤 Nombre: ${encodeURIComponent(nombre)}%0A`;
      
      if (telefono) {
        mensajeWhatsApp += `📱 Teléfono: ${encodeURIComponent(telefono)}%0A`;
      }
      
      mensajeWhatsApp += `📅 Fecha de entrada: ${encodeURIComponent(fechaLlegadaFormateada)}%0A`;
      mensajeWhatsApp += `📅 Fecha de salida: ${encodeURIComponent(fechaSalidaFormateada)}%0A`;
      mensajeWhatsApp += `👥 Número de personas: ${personas}%0A`;
      
      if (mensaje) {
        mensajeWhatsApp += `%0A💬 Información adicional:%0A${encodeURIComponent(mensaje)}`;
      }
      
      const numeroWhatsApp = '573206069705';
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`;
      window.open(urlWhatsApp, '_blank');
    });
  }
  
  // ========================================
  // SMOOTH SCROLL
  // ========================================
  
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // ========================================
  // ANIMACIONES AL SCROLL
  // ========================================
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);
  
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // ========================================
  // HEADER STICKY
  // ========================================
  
  const header = document.querySelector('.site-header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });
  
  // ========================================
  // LIGHTBOX GALERÍA
  // ========================================
  
  const galleryBtn = document.getElementById('openGallery');
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const lightboxCounter = document.querySelector('.lightbox-counter');
  
  // Array con todas las fotos del rancho
  const galleryImages = [
    { src: 'assets/Paisajes/Quienes Somos(2).jfif'},
    { src: 'assets/Paisajes/Paisaje1.jpeg'},
    { src: 'assets/Paisajes/Paisaje5.jpeg'},
    { src: 'assets/Paisajes/Paisaje3.jpeg'},
    { src: 'assets/Paisajes/Paisaje4.jpeg'},
    { src: 'assets/Paisajes/Quienes Somos.jfif'},
    { src: 'assets/Paisajes/Atardecer.jpg'},
    { src: 'assets/Paisajes/Paisaje2.jpeg'},
    { src: 'assets/Piscina/Piscina1.jpg'},
    { src: 'assets/Piscina/Piscina4.jpeg'},
    { src: 'assets/Piscina/Piscina5.jpeg'},
    { src: 'assets/Piscina/Piscina6.jpeg'},
    { src: 'assets/Entrada/Entrada1.jpeg'},
    { src: 'assets/Casa/Afuera casa/Afuera1.jpeg'},
    { src: 'assets/Casa/Afuera casa/Afuera4.jpeg'},
    { src: 'assets/Casa/Afuera casa/Afuera5.jpeg'},
    { src: 'assets/Casa/Comedor Comedor/Comedor.jfif', caption: 'Comedor' },
    { src: 'assets/Casa/Comedor Comedor/Cocina.jfif', caption: 'Cocina' },
    { src: 'assets/Casa/Sala/Sala1.jfif', caption: 'Sala' },
    { src: 'assets/Casa/Habitación 1/Habitación 1.3.jpeg', caption: 'Habitación con camarotes' },
    { src: 'assets/Casa/Habitación 1/Habitación1.5.jpeg', caption: 'Habitación 1' },
    { src: 'assets/Casa/Habitación 2/Habitación2.jpeg', caption: 'Habitación 2' },
    { src: 'assets/Casa/Baño social/Baño Social.jpg', caption: 'Baño social' },
    { src: 'assets/Casa/Habitación 3/Habitación3.2.jpeg', caption: 'Habitación 3' },
    { src: 'assets/Casa/Habitación 3/Baño habitación3.jfif', caption: 'Baño privado de la habitación 3' }
  ];
  
  let currentLightboxIndex = 0;
  
  function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  
  function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  
  function updateLightboxImage() {
    const image = galleryImages[currentLightboxIndex];
    lightboxImg.src = image.src;
    lightboxImg.alt = image.caption;
    lightboxCaption.textContent = image.caption;
    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${galleryImages.length}`;
  }
  
  function nextLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
    updateLightboxImage();
  }
  
  function prevLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
  }
  
  if (galleryBtn) {
    galleryBtn.addEventListener('click', function() {
      openLightbox(0);
    });
  }
  
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  
  if (lightboxNext) {
    lightboxNext.addEventListener('click', nextLightboxImage);
  }
  
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', prevLightboxImage);
  }
  
  // Cerrar con click en el fondo
  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }
  
  // Navegación con teclado
  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      nextLightboxImage();
    } else if (e.key === 'ArrowLeft') {
      prevLightboxImage();
    }
  });
  
});

// ========================================
// FUNCIONES AUXILIARES
// ========================================

function formatearFecha(fecha) {
  const meses = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];
  
  const [año, mes, dia] = fecha.split('-');
  const mesNombre = meses[parseInt(mes) - 1];
  
  return `${parseInt(dia)} de ${mesNombre} de ${año}`;
}