
document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, 
            behavior: 'smooth'
          });
        }
      });
    });
  
    const interactiveElements = document.querySelectorAll('.feature-card, .pricing-card, .hero-image-container');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', function() {
        this.style.transform = element.classList.contains('hero-image-container') ? 'scale(1.02)' : 'translateY(-8px)';
      });
      
      element.addEventListener('mouseleave', function() {
        this.style.transform = 'none';
      });
    });
  
   
    const buttons = document.querySelectorAll('.primary-button, .secondary-button, .cta-button, .pricing-button, .contact-button');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        
        
        const icon = this.querySelector('.chevron-icon, .arrow-icon');
        if (icon) {
          icon.style.transform = 'translateX(4px)';
        }
      });
      
      button.addEventListener('mouseleave', function() {
        this.style.transform = 'none';
        
        
        const icon = this.querySelector('.chevron-icon, .arrow-icon');
        if (icon) {
          icon.style.transform = 'none';
        }
      });
    });
  
    
    window.addEventListener('scroll', function() {
      const nav = document.querySelector('.navigation');
      
      if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      } else {
        nav.style.boxShadow = 'none';
      }
    });
  });