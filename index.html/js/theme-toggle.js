/**
 * Theme Toggle - Dark/Light Mode
 * Handles theme switching with smooth animations and localStorage persistence
 * Integrated into the header navbar
 */

(function () {
    'use strict';

    // Configuration
    const STORAGE_KEY = 'inmobiliaria-theme';
    const DARK_THEME = 'dark';
    const LIGHT_THEME = 'light';

    // DOM Elements
    let toggleBtn = null;
    let mobileToggleBtn = null;
    let sunIcon = null;
    let moonIcon = null;

    /**
     * Get the current theme from localStorage or system preference
     */
    function getStoredTheme() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) return stored;

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return DARK_THEME;
        }
        return LIGHT_THEME;
    }

    /**
     * Apply theme to document
     */
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        updateAllToggleIcons(theme);
        localStorage.setItem(STORAGE_KEY, theme);
    }

    /**
     * Update all toggle button icons with animation
     */
    function updateAllToggleIcons(theme) {
        const toggles = document.querySelectorAll('.theme-toggle');
        toggles.forEach(toggle => {
            const sun = toggle.querySelector('.sun-icon');
            const moon = toggle.querySelector('.moon-icon');

            if (sun && moon) {
                if (theme === DARK_THEME) {
                    sun.classList.remove('active');
                    moon.classList.add('active');
                } else {
                    moon.classList.remove('active');
                    sun.classList.add('active');
                }
            }
        });
    }

    /**
     * Toggle between themes
     */
    function toggleTheme(e) {
        const currentTheme = document.documentElement.getAttribute('data-theme') || LIGHT_THEME;
        const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;

        // Add animation class to clicked button
        const btn = e.currentTarget;
        if (btn) {
            btn.classList.add('rotating');
            setTimeout(() => btn.classList.remove('rotating'), 250);
        }

        applyTheme(newTheme);
    }

    /**
     * Create the theme toggle button HTML
     */
    function createToggleButton() {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'theme-toggle';
        btn.setAttribute('aria-label', 'Cambiar tema');
        btn.setAttribute('title', 'Cambiar tema claro/oscuro');

        btn.innerHTML = `
      <svg class="theme-icon sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      <svg class="theme-icon moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;

        return btn;
    }

    /**
     * Initialize theme toggle
     */
    function init() {
        // Apply stored theme immediately (before DOM ready to prevent flash)
        const theme = getStoredTheme();
        document.documentElement.setAttribute('data-theme', theme);

        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setupToggle);
        } else {
            setupToggle();
        }
    }

    /**
     * Set up toggle button in DOM
     */
    function setupToggle() {
        const headerInner = document.querySelector('.header-inner');
        const mobileNav = document.getElementById('mobile-nav');

        if (!headerInner) return;

        // Find or create header-actions container
        let headerActions = headerInner.querySelector('.header-actions');

        if (!headerActions) {
            // Create header-actions wrapper
            headerActions = document.createElement('div');
            headerActions.className = 'header-actions';

            // Move existing CTA button and menu toggle into header-actions
            const ctaBtn = headerInner.querySelector('.btn-cta');
            const menuToggle = headerInner.querySelector('.menu-toggle');

            if (ctaBtn) {
                headerActions.appendChild(ctaBtn);
            }

            // Create and add theme toggle
            toggleBtn = createToggleButton();
            toggleBtn.id = 'theme-toggle';
            headerActions.appendChild(toggleBtn);

            if (menuToggle) {
                headerActions.appendChild(menuToggle);
            }

            headerInner.appendChild(headerActions);
        } else {
            // Header actions already exists, just add toggle before menu button
            toggleBtn = createToggleButton();
            toggleBtn.id = 'theme-toggle';
            const menuToggle = headerActions.querySelector('.menu-toggle');
            if (menuToggle) {
                headerActions.insertBefore(toggleBtn, menuToggle);
            } else {
                headerActions.appendChild(toggleBtn);
            }
        }

        // Add toggle to mobile nav as well
        if (mobileNav) {
            mobileToggleBtn = createToggleButton();
            mobileToggleBtn.id = 'theme-toggle-mobile';
            mobileNav.appendChild(mobileToggleBtn);
            mobileToggleBtn.addEventListener('click', toggleTheme);
        }

        // Set initial icon state
        const currentTheme = document.documentElement.getAttribute('data-theme') || LIGHT_THEME;
        updateAllToggleIcons(currentTheme);

        // Add click event
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleTheme);
        }

        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
                // Only apply if user hasn't set a preference
                if (!localStorage.getItem(STORAGE_KEY)) {
                    applyTheme(e.matches ? DARK_THEME : LIGHT_THEME);
                }
            });
        }
    }

    // Initialize immediately
    init();

})();
