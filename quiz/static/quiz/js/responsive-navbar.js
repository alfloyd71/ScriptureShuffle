
// Get references to the button and menu
const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');
console.log('outside click')

// Toggle menu visibility
menuButton.addEventListener('click', () => {
   console.log('has been clicked')
   const isMenuOpen = menu.style.display === 'flex';

   // Toggle display property
   menu.style.display = isMenuOpen ? 'none' : 'flex';

   // Update aria-expanded for accessibility
   menuButton.setAttribute('aria-expanded', !isMenuOpen);
});

// Ensure the menu is always shown on wider screens
window.addEventListener('resize', () => {
   if (window.innerWidth >= 600) {
       menu.style.display = 'flex';
       menuButton.setAttribute('aria-expanded', true);
   } else {
       menu.style.display = 'none';
       menuButton.setAttribute('aria-expanded', false);
   }
});

