// Animations JavaScript for Inmobiliaria website
(function () {
    'use strict';

    var observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

    var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                if (entry.target.classList.contains('reveal-stagger')) {
                    Array.from(entry.target.children).forEach(function (child, i) {
                        setTimeout(function () { child.classList.add('stagger-revealed'); }, i * 100);
                    });
                }
                if (entry.target.querySelector('.counter')) animateCounters(entry.target);
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-stagger, .stats-grid').forEach(function (el) {
        revealObserver.observe(el);
    });

    function animateCounters(container) {
        container.querySelectorAll('.counter').forEach(function (counter) {
            var target = parseInt(counter.getAttribute('data-target'));
            var duration = 2000, step = target / (duration / 16), current = 0;
            var update = function () {
                current += step;
                if (current < target) { counter.textContent = Math.ceil(current); requestAnimationFrame(update); }
                else { counter.textContent = target; }
            };
            update();
        });
    }

    var heroHome = document.querySelector('.hero-home');
    if (heroHome) {
        window.addEventListener('scroll', function () {
            var scrolled = window.pageYOffset, heroHeight = heroHome.offsetHeight;
            if (scrolled < heroHeight) {
                var bg = heroHome.querySelector('.hero-home-bg');
                if (bg) bg.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
                heroHome.style.opacity = 1 - (scrolled / heroHeight) * 0.5;
            }
        });
    }

    document.querySelectorAll('.service-card').forEach(function (card) {
        card.addEventListener('mousemove', function (e) {
            var rect = this.getBoundingClientRect();
            var rotateX = (e.clientY - rect.top - rect.height / 2) / 20;
            var rotateY = (rect.width / 2 - (e.clientX - rect.left)) / 20;
            this.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-8px)';
        });
        card.addEventListener('mouseleave', function () { this.style.transform = 'none'; });
    });

    var whatsappBtn = document.querySelector('.whatsapp-float'), hasAnimated = false;
    if (whatsappBtn) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300 && !hasAnimated) {
                whatsappBtn.classList.add('pulse-attention');
                hasAnimated = true;
                setTimeout(function () { whatsappBtn.classList.remove('pulse-attention'); }, 2000);
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.body.classList.add('page-loaded');
        document.querySelectorAll('.fade-in-up').forEach(function (el, i) {
            setTimeout(function () { el.classList.add('animated'); }, 100 + i * 150);
        });
    });
})();
