/* 
    Muassir University - Futuristic Interactions
    Includes: Scroll Reveal, Parallax Hero, Smooth Scroll
*/

document.addEventListener('DOMContentLoaded', () => {
    
    const skillTrees = {
        'AI Engineering': ['Neural Networks', 'RAG Systems', 'LLM Fine-tuning'],
        'Quantum Systems': ['Qubit Stability', 'Quantum ML', 'Error Correction'],
        'Siber-Biology': ['DNA Synthesis', 'Protein Folding', 'Bio-Logic Gates']
    };

    function renderSkillTrees() {
        const container = document.getElementById('skill-tree-container');
        if (!container) return;
        container.innerHTML = '';
        Object.entries(skillTrees).forEach(([category, skills]) => {
            const div = document.createElement('div');
            div.className = 'skill-tree-category';
            div.innerHTML = `<h4>${category}</h4>` + skills.map(s => `<span class="badge">${s}</span>`).join('');
            container.appendChild(div);
        });
    }
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

    // 4. Dashboard Interactive Chat
    const chatContainer = document.getElementById('chat-container');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    const mentorResponses = [
        "İlginç bir yaklaşım. Ancak CPoW metriklerine göre kodun daha fazla 'Maintainability' puanına ihtiyacı var.",
        "Bunu yapabilirsin! Ancak önce 'Neural Kinematics' modülünü tamamlaman gerekiyor.",
        "Harika! Bu değişikliği Akademik DAO'ya oylamaya sunuyorum.",
        "Algoritman %98 verimlilikle çalışıyor. Nöral senkronizasyonu başlatıyorum...",
        "Bellek yönetimi konusunda Rust dokümantasyonuna yönlendiriyorum seni. Akademik dürüstlük için dikkatli ol."
    ];

    function addMessage(text, isUser = false) {
        const msg = document.createElement('div');
        msg.className = 'mentor-log';
        msg.style.background = isUser ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 150, 255, 0.1)';
        msg.style.alignSelf = isUser ? 'flex-end' : 'flex-start';
        msg.style.maxWidth = '85%';
        msg.innerText = isUser ? `Siz: ${text}` : `Mentor: ${text}`;
        chatContainer.appendChild(msg);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    if (sendBtn) {
        sendBtn.addEventListener('click', () => {
            const text = chatInput.value.trim();
            if (text) {
                addMessage(text, true);
                chatInput.value = '';
                setTimeout(() => {
                    const randomResp = mentorResponses[Math.floor(Math.random() * mentorResponses.length)];
                    addMessage(randomResp);
                }, 800);
            }
        });

        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendBtn.click();
        });
    }

    console.log('Muassir OS: Neural Interface Initialized.');
});
