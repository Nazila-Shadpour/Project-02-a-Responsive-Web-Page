document.addEventListener('DOMContentLoaded', function() {
    // hamberger menu toggle
    const menuToggle = document.querySelector('.header__menu-toggle');
    const nav = document.querySelector('.header__nav');
    
    menuToggle.addEventListener('click', function() {
      document.body.classList.toggle('menu-open');
      nav.classList.toggle('active');
    });
  
    // dropdown menu toggle
    const dropdownItems = document.querySelectorAll('.header__nav-item--dropdown');
    
    dropdownItems.forEach(item => {
      const link = item.querySelector('.header__nav-link');
      
      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {  // only on mobile
          e.preventDefault();
          item.classList.toggle('active');
        }
      });
    });
  });