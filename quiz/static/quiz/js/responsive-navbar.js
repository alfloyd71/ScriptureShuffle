/**
 * Scripture Shuffle - Navigation & Theme Controller
 * Handles mobile menu toggle and dark/light theme switching
 */

(function() {
  'use strict';

  // DOM Elements
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // ============================================
  // Mobile Menu Toggle
  // ============================================
  
  function initMobileMenu() {
    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', toggleMenu);
    
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      const isClickInsideNav = event.target.closest('nav');
      if (!isClickInsideNav && navMenu.classList.contains('is-open')) {
        closeMenu();
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navMenu.classList.contains('is-open')) {
        closeMenu();
        menuToggle.focus();
      }
    });

    // Handle window resize
    window.addEventListener('resize', handleResize);
    
    // Initial check
    handleResize();
  }

  function toggleMenu() {
    const isOpen = navMenu.classList.contains('is-open');
    
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    navMenu.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    
    // Trap focus within menu
    const firstLink = navMenu.querySelector('.nav-link');
    if (firstLink) {
      firstLink.focus();
    }
    
    // Prevent body scroll on mobile
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navMenu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    
    // Restore body scroll
    document.body.style.overflow = '';
  }

  function handleResize() {
    if (window.innerWidth >= 769) {
      // On desktop, ensure menu is visible and reset aria
      navMenu.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  // ============================================
  // Theme Toggle (Dark/Light Mode)
  // ============================================
  
  function initThemeToggle() {
    if (!themeToggle) return;

    // Set initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);

    // Theme toggle click handler
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Only auto-switch if no saved preference
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0a0a0b' : '#ffffff');
    }
    
    // Update aria-label for accessibility
    if (themeToggle) {
      const label = theme === 'dark' 
        ? 'Switch to light theme' 
        : 'Switch to dark theme';
      themeToggle.setAttribute('aria-label', label);
    }
    
    // Announce theme change to screen readers
    announceThemeChange(theme);
  }

  function announceThemeChange(theme) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = `Theme changed to ${theme} mode`;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => announcement.remove(), 1000);
  }

  // ============================================
  // Keyboard Navigation
  // ============================================
  
  function initKeyboardNav() {
    const navLinks = navMenu?.querySelectorAll('.nav-link');
    if (!navLinks) return;

    navLinks.forEach((link, index) => {
      link.addEventListener('keydown', (event) => {
        let targetIndex;

        switch (event.key) {
          case 'ArrowRight':
          case 'ArrowDown':
            event.preventDefault();
            targetIndex = (index + 1) % navLinks.length;
            navLinks[targetIndex].focus();
            break;
          case 'ArrowLeft':
          case 'ArrowUp':
            event.preventDefault();
            targetIndex = (index - 1 + navLinks.length) % navLinks.length;
            navLinks[targetIndex].focus();
            break;
          case 'Home':
            event.preventDefault();
            navLinks[0].focus();
            break;
          case 'End':
            event.preventDefault();
            navLinks[navLinks.length - 1].focus();
            break;
        }
      });
    });
  }

  // ============================================
  // Initialize
  // ============================================
  
  function init() {
    initMobileMenu();
    initThemeToggle();
    initKeyboardNav();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
