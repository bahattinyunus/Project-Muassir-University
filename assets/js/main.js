/* 
    Muassir University - Futuristic Interactions
    Includes: Scroll Reveal, Parallax Hero, Smooth Scroll
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Intersection Observer for Scroll Reveal
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Animate progress bars if the entry contains them
                const progressBars = entry.target.querySelectorAll('.progress-bar');
                progressBars.forEach(bar => {
                    const targetWidth = bar.getAttribute('data-progress');
                    bar.style.width = targetWidth + '%';
                });

                observer.unobserve(entry.target); 
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 2. Simple Parallax Effect for Hero Title
    const heroTitle = document.querySelector('.hero-title');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (heroTitle && scrolled < 600) {
            heroTitle.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroTitle.style.opacity = 1 - (scrolled / 500);
        }
    });

    // 3. Smooth Scroll for Navigation
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

    console.log('Muassir OS: Neural Interface Initialized.');
});
