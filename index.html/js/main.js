// Main JavaScript for Inmobiliaria website

(function () {
    'use strict';

    // Mobile menu toggle
    var menuToggle = document.getElementById('menu-toggle');
    var mobileNav = document.getElementById('mobile-nav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function () {
            mobileNav.classList.toggle('hidden');

            // Animate hamburger to X
            var isOpen = !mobileNav.classList.contains('hidden');
            menuToggle.setAttribute('aria-expanded', isOpen);

            if (isOpen) {
                mobileNav.style.animation = 'slideDown 0.3s ease forwards';
            }
        });

        // Close mobile menu when clicking a link
        mobileNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileNav.classList.add('hidden');
            });
        });
    }

    // Header scroll effect
    var header = document.querySelector('.header');
    var lastScroll = 0;

    window.addEventListener('scroll', function () {
        var currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // Form handling
    document.querySelectorAll('form[data-contact]').forEach(function (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get submit button
            var submitBtn = form.querySelector('button[type="submit"]');
            var originalText = submitBtn.textContent;

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';

            // Simulate form submission (in real app, this would be an API call)
            setTimeout(function () {
                // Hide form and show success message
                form.style.display = 'none';
                var successMsg = form.parentElement.querySelector('[data-sent]');
                if (successMsg) {
                    successMsg.classList.remove('hidden');
                    successMsg.style.animation = 'fadeInUp 0.5s ease forwards';
                }

                // Reset button state
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;

                // Reset form
                form.reset();
            }, 1500);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                var target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add loaded class to body for animations
    document.body.classList.add('loaded');

})();
