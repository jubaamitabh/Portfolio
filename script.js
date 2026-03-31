// Wait for DOM load
document.addEventListener('DOMContentLoaded', function() {
    // Typed.js initialization - typewriter effect
    const typed = new Typed('#typed-text', {
        strings: [
            'Web Enthusiast',
            'High School Developer',
            'UI/UX Explorer',
            'Frontend Coder',
            'React Learner'
        ],
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1500,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        cursorChar: '|'
    });

    // Particles.js config - interactive purple particles
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#c084fc' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#c084fc',
                opacity: 0.3,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                grab: { distance: 200, line_linked: { opacity: 0.5 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });

// Navigation function
    window.navigateTo = function(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll('.page-section');
        sections.forEach(s => s.style.display = 'none');

        // Show target section
        document.getElementById(sectionId).style.display = 'block';

        // Update active nav
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        event.target.closest('a').classList.add('active');

        // Close mobile menu if open
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.querySelector('.nav-links');
        if (hamburger && navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }

        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Mobile menu toggle
    window.toggleMobileMenu = function() {
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Prevent body scroll when menu open
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    };

    // Scroll animations using IntersectionObserver
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe elements for fade-in
    document.querySelectorAll('.skill-card, .project-card, .section-title, .intro-section, .about-header').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Project card click handler
    window.openProject = function(id) {
        if (id === 1) {
            window.open('Project1.html', '_blank');
        } else {
            alert(`Project ${id} coming soon!`);
        }
    };

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Wave hand hover effect
    const wave = document.querySelector('.wave');
    wave.addEventListener('mouseenter', () => {
        wave.style.animation = 'wave 0.5s infinite';
    });
});

