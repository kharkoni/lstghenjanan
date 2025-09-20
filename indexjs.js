// Enhanced particle creation
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 100;
    const particleTypes = ['small', 'medium', 'large', 'glow'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const randomType = particleTypes[Math.floor(Math.random() * particleTypes.length)];
        particle.classList.add('particle', randomType);
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100vh';
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = delay + 's';
        const drift = (Math.random() - 0.5) * 100;
        particle.style.setProperty('--drift', drift + 'px');
        particlesContainer.appendChild(particle);
    }
}

// Header scroll effect
function handleHeaderScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
}

// Navigation
const homeLink = document.getElementById('home-link');
const membersLink = document.getElementById('members-link');
const homeSection = document.getElementById('home');
const membersSection = document.getElementById('members');

function updateActiveLink() {
    const scrollPosition = window.scrollY;
    const offset = 200;
    if (scrollPosition >= homeSection.offsetTop - offset && scrollPosition < membersSection.offsetTop - offset) {
        homeLink.classList.add('active'); membersLink.classList.remove('active');
    } else if (scrollPosition >= membersSection.offsetTop - offset) {
        membersLink.classList.add('active'); homeLink.classList.remove('active');
    }
}

// Member card animations
function animateOnScroll() {
    const memberCards = document.querySelectorAll('.member-card');
    const triggerBottom = window.innerHeight * 0.8;
    memberCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}
function initMemberCards() {
    const memberCards = document.querySelectorAll('.member-card');
    memberCards.forEach((card, index) => {
        // Immediate visibility for faster loading
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.style.transition = 'all 0.3s ease';
        
        // Add staggered entrance animation
        setTimeout(() => {
            card.style.animation = `slideInUp 0.6s ease forwards`;
        }, index * 50);
    });
}
function setupNavigation() {
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    membersLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: membersSection.offsetTop - 100, behavior: 'smooth' });
    });
}
function handleParallax() { /* disabled */ }
function setupSocialIcons() {
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => { icon.style.boxShadow = '0 0 30px rgba(0, 102, 212, 0.8)'; });
        icon.addEventListener('mouseleave', () => { icon.style.boxShadow = ''; });
    });
}
function regenerateParticles() {
    setInterval(() => {
        const particlesContainer = document.querySelector('.particles');
        const existingParticles = particlesContainer.children.length;
        if (existingParticles < 80) {
            const particle = document.createElement('div');
            const types = ['small', 'medium', 'large', 'glow'];
            const randomType = types[Math.floor(Math.random() * types.length)];
            particle.classList.add('particle', randomType);
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100vh';
            const duration = Math.random() * 10 + 5;
            const delay = Math.random() * 2;
            particle.style.animationDuration = duration + 's';
            particle.style.animationDelay = delay + 's';
            const drift = (Math.random() - 0.5) * 100;
            particle.style.setProperty('--drift', drift + 'px');
            particlesContainer.appendChild(particle);
            setTimeout(() => { if (particle.parentNode) particle.remove(); }, (duration + delay) * 1000);
        }
    }, 2000);
}

// ✅ Typing effect
document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.querySelector(".typing-text span");
  if (!typingElement) return;
  const words = ["Zoor Gooi", "Motalibeen", "Mujaheden", "A Bit Crazy", "Afghans"];
  let wordIndex = 0, charIndex = 0, isDeleting = false;
  const typingSpeed = 120, deletingSpeed = 80, delayBetweenWords = 1500;

  function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        return setTimeout(typeEffect, 500);
      }
      return setTimeout(typeEffect, deletingSpeed);
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex++);
      if (charIndex > currentWord.length) {
        isDeleting = true;
        return setTimeout(typeEffect, delayBetweenWords);
      }
      return setTimeout(typeEffect, typingSpeed);
    }
  }
  typeEffect();
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    initMemberCards();
    setupNavigation();
    setupSocialIcons();
    regenerateParticles();
    
    // Make members section visible immediately
    const membersSection = document.getElementById('members');
    if (membersSection) {
        membersSection.style.display = 'block';
        membersSection.style.visibility = 'visible';
    }
    
    window.addEventListener('scroll', () => {
        handleHeaderScroll();
        updateActiveLink();
        animateOnScroll();
    });
    handleHeaderScroll(); updateActiveLink(); animateOnScroll();
    
    console.log('Website loaded successfully!');
});


// ==== CRYPTO POPUPS ====
function openPopup(id) {
  document.getElementById(id).style.display = 'block';
}
function closePopup(id) {
  document.getElementById(id).style.display = 'none';
}
function copyAddress(addrId) {
  const text = document.getElementById(addrId).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied: " + text);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btc-icon').addEventListener('click', (e) => {
    e.preventDefault();
    openPopup('btc-popup');
  });
  document.getElementById('ltc-icon').addEventListener('click', (e) => {
    e.preventDefault();
    openPopup('ltc-popup');
  });
});


// Member card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const memberCards = document.querySelectorAll('.member-card');
    memberCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03)'; this.style.zIndex = '20';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)'; this.style.zIndex = '1';
        });
    });
});

// Button ripple
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');
    if (btn) {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px'; ripple.style.top = y + 'px';
            ripple.classList.add('ripple'); this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    }
});
// Auto update footer year
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});
// ===== PROFESSIONAL INTRO HANDLER =====
document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  
  // Create intro particles
  createIntroParticles();
  
  // Auto remove after 4s with enhanced exit animation
  setTimeout(() => {
    intro.style.animation = "introFadeOut 0.8s ease forwards";
    setTimeout(() => {
      intro.style.display = "none";
    }, 800);
  }, 3200);
});

// Professional intro particles
function createIntroParticles() {
  const particlesContainer = document.querySelector('.intro-particles');
  if (!particlesContainer) return;
  
  const particleCount = 40;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      background: rgba(0, 170, 255, ${Math.random() * 0.6 + 0.2});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: introParticleFloat ${Math.random() * 8 + 6}s linear infinite;
      animation-delay: ${Math.random() * 3}s;
    `;
    particlesContainer.appendChild(particle);
  }
  
  // Add floating animation styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes introParticleFloat {
      0% { 
        transform: translateY(100vh) translateX(0) rotate(0deg); 
        opacity: 0; 
      }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { 
        transform: translateY(-100px) translateX(${Math.random() * 200 - 100}px) rotate(360deg); 
        opacity: 0; 
      }
    }
  `;
  document.head.appendChild(style);
}