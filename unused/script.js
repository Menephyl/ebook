// Variáveis globais
let currentBibleVerse = 0;
let currentTestimonial = 0;
let bibleVerseInterval;
const totalBibleVerses = 6;
const totalTestimonials = 3;

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    initializeBibleCarousel();
    initializeTestimonialCarousel();
});

// Carrossel de versículos bíblicos
function initializeBibleCarousel() {
    // Auto-rotação dos versículos a cada 5 segundos
    bibleVerseInterval = setInterval(nextBibleVerse, 5000);
    
    // Adicionar event listeners aos indicadores
    const indicators = document.querySelectorAll('.verse-indicators .indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showBibleVerse(index);
            resetBibleInterval();
        });
    });
}

function showBibleVerse(index) {
    // Esconder todos os versículos
    const verses = document.querySelectorAll('.bible-verse');
    const indicators = document.querySelectorAll('.verse-indicators .indicator');
    
    verses.forEach(verse => {
        verse.classList.remove('active');
    });
    
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Mostrar o versículo atual
    verses[index].classList.add('active');
    indicators[index].classList.add('active');
    
    currentBibleVerse = index;
}

function nextBibleVerse() {
    currentBibleVerse = (currentBibleVerse + 1) % totalBibleVerses;
    showBibleVerse(currentBibleVerse);
}

function resetBibleInterval() {
    clearInterval(bibleVerseInterval);
    bibleVerseInterval = setInterval(nextBibleVerse, 5000);
}

// Carrossel de depoimentos
function initializeTestimonialCarousel() {
    // Adicionar event listeners aos indicadores
    const indicators = document.querySelectorAll('.testimonial-indicators .indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
}

function showTestimonial(index) {
    // Esconder todos os depoimentos
    const testimonials = document.querySelectorAll('.testimonial-card');
    const indicators = document.querySelectorAll('.testimonial-indicators .indicator');
    
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    
    // Mostrar o depoimento atual
    testimonials[index].classList.add('active');
    indicators[index].classList.add('active');
    
    currentTestimonial = index;
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentTestimonial);
}

// Modal
function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fechar modal clicando fora dele
document.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Fechar modal com a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de entrada dos elementos quando entram na viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('.benefit-card, .problem-item, .learn-item, .testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Inicializar animações quando a página carrega
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Efeito de parallax suave no hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Contador regressivo para a oferta (opcional)
function startCountdown() {
    // Definir data de expiração (24 horas a partir de agora)
    const now = new Date().getTime();
    const countdownDate = now + (24 * 60 * 60 * 1000);
    
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Atualizar o texto da oferta se existir um elemento para isso
        const offerText = document.querySelector('.offer-text');
        if (offerText && distance > 0) {
            offerText.textContent = `Oferta expira em ${hours}h ${minutes}m ${seconds}s`;
        }
        
        // Se o countdown acabar
        if (distance < 0) {
            clearInterval(timer);
            if (offerText) {
                offerText.textContent = "Oferta por tempo limitado";
            }
        }
    }, 1000);
}

// Inicializar countdown (descomente se quiser usar)
// document.addEventListener('DOMContentLoaded', startCountdown);

// Tracking de eventos (para analytics - opcional)
function trackEvent(eventName, eventData = {}) {
    // Aqui você pode integrar com Google Analytics, Facebook Pixel, etc.
    console.log('Event tracked:', eventName, eventData);
    
    // Exemplo para Google Analytics (se estiver configurado)
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
}

// Rastrear cliques nos botões CTA
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-primary') || 
        event.target.classList.contains('btn-cta')) {
        trackEvent('cta_click', {
            button_text: event.target.textContent,
            page_location: window.location.href
        });
    }
});

// Rastrear tempo na página
let startTime = Date.now();
window.addEventListener('beforeunload', function() {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    trackEvent('time_on_page', {
        seconds: timeSpent
    });
});

// Detectar se o usuário está saindo da página (exit intent)
document.addEventListener('mouseleave', function(event) {
    if (event.clientY <= 0) {
        // Usuário moveu o mouse para fora da janela (possível saída)
        // Aqui você pode mostrar um popup de última chance ou oferta especial
        console.log('Exit intent detected');
        trackEvent('exit_intent');
    }
});

// Lazy loading para imagens (se necessário)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Inicializar lazy loading se necessário
document.addEventListener('DOMContentLoaded', lazyLoadImages);
