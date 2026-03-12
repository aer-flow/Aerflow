const translations = {
  en: {
    nav_solutions: "Solutions",
    nav_philosophy: "Philosophy",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    nav_get_started: "Get Started",
    hero_badge: "Next Generation AI Integration",
    hero_title_1: "AI-Driven",
    hero_title_2: "Evolution",
    hero_desc: "AI Automation, premium web platforms, and impactful media. Concrete solutions for real results.",
    hero_cta_primary: "Initiate Consultation",
    hero_cta_secondary: "View Capabilities",
    services_badge: "Core Ecosystem",
    services_title: "Strategic AI Solutions.",
    service_1_title: "AI Automation",
    service_1_desc: "Enhancing operational efficiency.",
    service_2_title: "Modern Web Solutions",
    service_2_desc: "Performance and user experience.",
    service_3_title: "Digital Content Creation",
    service_3_desc: "Professional video and motion design.",
    explore_more: "Explore solutions",
    explore_more2: "Explore solutions",
    explore_more3: "Explore solutions",
    method_badge: "Methodology",
    method_title: "Our Process.",
    method_1_title: "Consult",
    method_1_desc: "Deep-dive into operational architecture and identifying AI bottlenecks.",
    method_2_title: "Design",
    method_2_desc: "Architecting custom neural frameworks and scalable data pipelines.",
    method_3_title: "Integrate",
    method_3_desc: "Seamless deployment into existing tech stacks with zero downtime.",
    method_4_title: "Evolve",
    method_4_desc: "Continuous model fine-tuning and autonomous optimization loops.",
    port_badge: "Portfolio",
    port_title: "Featured Projects.",
    port_browse: "Browse Index",
    proj_1_title: "Synthetix Engine",
    proj_1_desc: "Autonomous Media Generation",
    proj_2_title: "Cortex-Nodes",
    proj_2_desc: "Enterprise LLM Infrastructure",
    tech_badge: "Technical Excellence",
    tech_title: "A Partner for Your Digital Growth",
    tech_1_title: "Unmatched Reliability",
    tech_1_desc: "Dependable systems and consistent performance.",
    tech_2_title: "Premium Quality",
    tech_2_desc: "High-standard development with attention to detail.",
    tech_3_title: "Proven Results",
    tech_3_desc: "Measurable impact that helps your business grow.",
    footer_title_1: "Let's build the",
    footer_title_2: "Aerflow.",
    footer_desc: "Ready to integrate superior intelligence into your business workflow? Reach out to our engineering team.",
    footer_email_label: "Email",
    footer_loc_label: "Location",
    footer_loc_val: "Digital Presence / Global",
    form_name: "Identity",
    form_email: "Communication Point (Email)",
    form_msg: "Project Parameters",
    form_submit: "Send Transmission"
  },
  ro: {
    nav_solutions: "Servicii",
    nav_philosophy: "Metodologie",
    nav_portfolio: "Portofoliu",
    nav_contact: "Contact",
    nav_get_started: "Începe Acum",
    hero_badge: "Viitorul Dezvoltării Web",
    hero_title_1: "Evoluție prin",
    hero_title_2: "Inteligență Digitală",
    hero_desc: "Automatizări AI, platforme web premium și media de impact. Soluții concrete pentru rezultate reale.",
    hero_cta_primary: "Începe Proiectul",
    hero_cta_secondary: "Vezi Serviciile",
    services_badge: "Expertiză în Ecosistemul AI",
    services_title: "Soluții Avansate.",
    service_1_title: "Automatizare AI",
    service_1_desc: "Eliminăm sarcinile repetitive și optimizăm operațiunile folosind agenți AI personalizați.",
    service_2_title: "Dezvoltare Web Modernă",
    service_2_desc: "Construim site-uri ultra-rapide și experiențe digitale premium, optimizate pentru conversie.",
    service_3_title: "Conținut Digital Premium",
    service_3_desc: "Creăm video-uri profesionale și design vizual care captează atenția și vând produsul tău.",
    explore_more: "Explorează soluțiile",
    explore_more2: "Explorează soluțiile",
    explore_more3: "Explorează soluțiile",
    method_badge: "Metodologie",
    method_title: "Procesul Nostru.",
    method_1_title: "Consultare",
    method_1_desc: "Analiză profundă a arhitecturii operațională și identificarea blocajelor AI.",
    method_2_title: "Proiectare",
    method_2_desc: "Arhitecturarea cadrelor neurale personalizate și a conductelor de date scalabile.",
    method_3_title: "Integrare",
    method_3_desc: "Implementare fără probleme în ecosistemele tehnologice existente, fără întreruperi.",
    method_4_title: "Evoluție",
    method_4_desc: "Ajustarea continuă a modelelor și bucle de optimizare autonomă.",
    port_badge: "Portofoliu",
    port_title: "Proceicte Reprezentative.",
    port_browse: "Răsfoiește Indexul",
    proj_1_title: "Platformă Generativă Media",
    proj_1_desc: "Generare Automată de Conținut",
    proj_2_title: "Infrastructură Date Inteligente",
    proj_2_desc: "Infrastructură Enterprise pentru Date Masive",
    tech_badge: "Excelență Tehnică",
    tech_title: "Partenerul Tău pentru Creștere Digitală.",
    tech_1_title: "Design Modern și Intuitiv",
    tech_1_desc: "Sisteme de design care prioritizează claritatea, experiența utilizatorului și o identitate vizuală premium, adaptată brandului tău.",
    tech_2_title: "Excelență Tehnică",
    tech_2_desc: "Codul nostru este optimizat pentru viteză, securitate și scalabilitate, asigurând performanță constantă pentru aplicații complexe.",
    tech_3_title: "Inteligență Scalabilă",
    tech_3_desc: "Sisteme construite să evolueze. Integrăm soluții AI care se adaptează logicii afacerii tale și se scalează odată cu succesul tău.",
    footer_title_1: "Să construim",
    footer_title_2: "Aerflow.",
    footer_desc: "Sunteți gata să integrați inteligența superioară în fluxul de lucru al afacerii dumneavoastră? Contactați echipa noastră de inginerie.",
    footer_email_label: "Email",
    footer_loc_label: "Locație",
    footer_loc_val: "Prezență Digitală / Global",
    form_name: "Identitate",
    form_email: "Punct de Comunicare (Email)",
    form_msg: "Parametrii Proiectului",
    form_submit: "Trimite Transmisia",
    footer_rights: "© 2024 Aerflow. Toate drepturile rezervate."
  }
}





document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for reveal animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Services Animation: Infinite Grid & Mouse Spotlight
  const services = document.getElementById('services');
  const gridBase = document.getElementById('grid-base');
  const gridSpotlight = document.getElementById('grid-spotlight');
  
  if (services && gridBase && gridSpotlight) {
    let mouseX = 0;
    let mouseY = 0;
    let gridX = 0;
    let gridY = 0;
    const speed = 0.5;

    // Track mouse for spotlight
    services.addEventListener('mousemove', (e) => {
      const rect = services.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      services.style.setProperty('--mouse-x', `${x}px`);
      services.style.setProperty('--mouse-y', `${y}px`);
    });

    // Animation Loop
    function animateGrid() {
      gridX = (gridX + speed) % 40;
      gridY = (gridY + speed) % 40;

      gridBase.setAttribute('x', gridX);
      gridBase.setAttribute('y', gridY);
      gridSpotlight.setAttribute('x', gridX);
      gridSpotlight.setAttribute('y', gridY);

      requestAnimationFrame(animateGrid);
    }
    
    requestAnimationFrame(animateGrid);
  }

  // Metal Button Interactions - Unified Logic
  function initPremiumButtons() {
    const metalWrappers = document.querySelectorAll('.metal-wrapper');
    metalWrappers.forEach(wrapper => {
      const btn = wrapper.querySelector('.btn-metal');
      if (!btn) return;
      
      const setPressed = (val) => {
        if (val) {
          wrapper.classList.add('is-pressed');
          btn.classList.add('is-pressed');
        } else {
          wrapper.classList.remove('is-pressed');
          btn.classList.remove('is-pressed');
        }
      };

      btn.addEventListener('mousedown', () => setPressed(true));
      window.addEventListener('mouseup', () => setPressed(false));
      btn.addEventListener('touchstart', (e) => {
        setPressed(true);
      }, { passive: true });
      btn.addEventListener('touchend', () => setPressed(false));
      btn.addEventListener('touchcancel', () => setPressed(false));
    });
  }
  
  initPremiumButtons();

  // Lamp Animation Observer (Scroll Position Based Progress)
  const initLampObserver = () => {
    const lampContainer = document.querySelector('.lamp-container');
    const lampSection = document.getElementById('philosophy');
    if (!lampContainer || !lampSection) return;

    const handleScroll = () => {
      const rect = lampSection.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      
      // Target the visual lamp center
      const lampVisualCenter = rect.top + 150; 
      
      let progress = 0;
      if (lampVisualCenter <= viewportCenter) {
        // Sticky state: If the lamp is at or above the center, stay 100% open
        progress = 1.0;
      } else {
        // Opening state: Progressive opening as it approaches color
        const distanceFromCenter = Math.abs(lampVisualCenter - viewportCenter);
        const falloff = window.innerHeight * 0.3; 
        progress = Math.max(0, 1 - (distanceFromCenter / falloff));
      }
      
      lampContainer.style.setProperty('--lamp-progress', progress.toFixed(3));
      
      if (progress > 0.01) {
        lampContainer.classList.add('is-active');
      } else {
        lampContainer.classList.remove('is-active');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
  };

  initLampObserver();

  // Universal Glowing Effect Logic (SVG-based for 100% reliability)
  const initGlowingEffects = () => {
    const cards = document.querySelectorAll('.glow-card');
    const mousePos = { x: -1000, y: -1000 };
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    const state = new Map();

    cards.forEach(card => {
      const glowContainer = document.createElement('div');
      glowContainer.className = 'glow-container';
      
      glowContainer.innerHTML = `
        <svg class="glow-svg" preserveAspectRatio="none">
          <rect x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="12" 
                fill="none" stroke="url(#glow-poly-grad)" stroke-width="2.5" pathLength="100"
                style="filter: drop-shadow(0 0 3px rgba(221, 123, 187, 0.4));">
          </rect>
        </svg>`;
      
      if (!document.getElementById('glow-poly-grad')) {
        const svgDefs = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgDefs.style.position = 'absolute';
        svgDefs.style.width = '0';
        svgDefs.style.height = '0';
        svgDefs.innerHTML = `
          <defs>
            <linearGradient id="glow-poly-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#dd7bbb" />
              <stop offset="25%" stop-color="#d79f1e" />
              <stop offset="50%" stop-color="#5a922c" />
              <stop offset="75%" stop-color="#4c7894" />
              <stop offset="100%" stop-color="#dd7bbb" />
            </linearGradient>
          </defs>`;
        document.body.appendChild(svgDefs);
      }

      card.prepend(glowContainer);

      state.set(card, {
        currentAngle: 0,
        container: glowContainer.querySelector('.glow-svg')
      });
    });

    const updateGlow = () => {
      const viewportCenterY = window.innerHeight / 2;
      let closestCard = null;
      let minDist = Infinity;

      if (isTouchDevice) {
        cards.forEach(card => {
          const rect = card.getBoundingClientRect();
          const cardCenterY = rect.top + rect.height / 2;
          const distFromCenter = Math.abs(cardCenterY - viewportCenterY);
          if (distFromCenter < minDist) {
            minDist = distFromCenter;
            closestCard = card;
          }
        });
      }

      cards.forEach(card => {
        const s = state.get(card);
        const rect = card.getBoundingClientRect();
        
        // Use spread=20 for a nice balance of length and fade
        s.container.style.setProperty('--spread', '20');

        if (isTouchDevice) {
          const isBasicallyInView = rect.top < window.innerHeight && rect.bottom > 0;
          const isActive = (card === closestCard) && isBasicallyInView && (minDist < window.innerHeight * 0.4);
          
          if (isActive) {
            const cardCenterY = rect.top + rect.height / 2;
            const diffY = cardCenterY - viewportCenterY;
            // Map scroll to angle (0 to 360)
            const angle = (diffY / 400) * 360;
            s.container.style.setProperty('--start', String(angle));
            s.container.style.setProperty('--active', '1');
          } else {
            s.container.style.setProperty('--active', '0');
          }
        } else {
          const proximity = 64;
          const inactiveZone = 0.01;
          const mouseX = mousePos.x;
          const mouseY = mousePos.y;

          const center = [rect.left + rect.width * 0.5, rect.top + rect.height * 0.5];
          const distFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1]);
          const inactiveRadius = 0.5 * Math.min(rect.width, rect.height) * inactiveZone;

          let isActive = false;
          if (distFromCenter > inactiveRadius) {
            isActive = (
              mouseX > rect.left - proximity &&
              mouseX < rect.right + proximity &&
              mouseY > rect.top - proximity &&
              mouseY < rect.bottom + proximity
            );
          }

          if (isActive) {
            const targetAngle = (Math.atan2(mouseY - center[1], mouseX - center[0]) * (180 / Math.PI) + 450) % 360;
            const angleDiff = ((targetAngle - s.currentAngle + 180) % 360) - 180;
            s.currentAngle += angleDiff * 0.15;

            s.container.style.setProperty('--start', String(s.currentAngle));
            s.container.style.setProperty('--active', '1');
          } else {
            s.container.style.setProperty('--active', '0');
          }
        }
      });
      requestAnimationFrame(updateGlow);
    };

    document.addEventListener('pointermove', (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    }, { passive: true });

    requestAnimationFrame(updateGlow);
  };

  initGlowingEffects();

  // Language Switcher Logic
  const langEnBtn = document.getElementById('lang-en');
  const langRoBtn = document.getElementById('lang-ro');
  let currentLang = localStorage.getItem('aerflow_lang') || 'en';
  
  function updateLanguage(lang) {
    currentLang = lang;
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!translations[lang][key]) return;

      // Special case: Hero title pieces are handled by initHeroTextAnimation
      if (key.startsWith('hero_title_')) return;

      // If it's a badge with a dot, preserve the dot span
      const dot = el.querySelector('.w-2.h-2, .w-3.h-3');
      if (dot) {
        // Find text node to update or clear and append
        let textNode = Array.from(el.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0);
        if (textNode) {
          textNode.textContent = ' ' + translations[lang][key];
        } else {
          el.innerHTML = '';
          el.appendChild(dot);
          el.appendChild(document.createTextNode(' ' + translations[lang][key]));
        }
      } else {
        el.textContent = translations[lang][key];
      }
    });

    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Update button states
    if (lang === 'en') {
      langEnBtn.classList.add('bg-brand-accent', 'text-brand-black', 'active-lang');
      langEnBtn.classList.remove('hover:bg-white/5', 'text-gray-400');
      langRoBtn.classList.remove('bg-brand-accent', 'text-brand-black', 'active-lang');
      langRoBtn.classList.add('hover:bg-white/5', 'text-gray-400');
      document.documentElement.setAttribute('lang', 'en');
    } else {
      langRoBtn.classList.add('bg-brand-accent', 'text-brand-black', 'active-lang');
      langRoBtn.classList.remove('hover:bg-white/5', 'text-gray-400');
      langEnBtn.classList.remove('bg-brand-accent', 'text-brand-black', 'active-lang');
      langEnBtn.classList.add('hover:bg-white/5', 'text-gray-400');
      document.documentElement.setAttribute('lang', 'ro');
    }

    // Update dynamic subpage links based on language
    const aiLink = document.getElementById('ai-automation-link');
    const subnavAiLink = document.getElementById('subnav-ai-link');
    if (aiLink) {
      const href = lang === 'ro' ? 'code ai.html' : 'code en.html';
      aiLink.href = href;
      if (subnavAiLink) subnavAiLink.href = href;
    }

    const webLink = document.getElementById('web-solutions-link');
    const subnavWebLink = document.getElementById('subnav-web-link');
    if (webLink) {
      const href = lang === 'ro' ? 'code web ro.html' : 'code web.html';
      webLink.href = href;
      if (subnavWebLink) subnavWebLink.href = href;
    }

    // Persist to localStorage
    localStorage.setItem('aerflow_lang', lang);

    // Re-trigger hero animation on language change
    setTimeout(initHeroTextAnimation, 50);
  }

  const initHeroTextAnimation = () => {
    const heroTitle = document.querySelector('section#hero h1');
    if (!heroTitle) return;

    // Get clean text from translations directly to avoid DOM contamination
    const t1 = (translations[currentLang] && translations[currentLang]['hero_title_1']) || "AI-Driven";
    const t2 = (translations[currentLang] && translations[currentLang]['hero_title_2']) || "Evolution";
    const fullText = `${t1} ${t2}.`;
    
    // Clear and prepare container
    heroTitle.innerHTML = '';
    heroTitle.className = 'text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8 hero-text-container';
    heroTitle.style.display = 'flex';
    heroTitle.style.flexWrap = 'wrap';
    heroTitle.style.justifyContent = 'flex-start';

    const characters1 = t1.split("");
    const characters2 = t2.split("");
    const charactersDot = ".".split("");

    const renderWord = (word, isGradient, globalOffsetStart) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'word-wrapper';
      wordSpan.style.whiteSpace = 'nowrap';
      wordSpan.style.display = 'inline-flex';

      const wordChars = word.split("");
      const totalCharsInWord = wordChars.length;

      wordChars.forEach((char, i) => {
        const charWrapper = document.createElement('span');
        charWrapper.className = 'char-wrapper';

        const globalIndex = globalOffsetStart + i;
        const delay = globalIndex * 0.04;

        // Main Layer
        const main = document.createElement('span');
        main.textContent = char;
        main.style.animationDelay = `${delay + 0.3}s`;
        main.classList.add('animate-main', 'char-main');

        if (isGradient && char !== ".") {
          main.classList.add('gradient-text');
          const gradientPos = (i / (totalCharsInWord - 1)) * 100;
          main.style.backgroundSize = `${totalCharsInWord * 100}% 100%`;
          main.style.backgroundPosition = `${gradientPos}% 0%`;
        } else {
          main.style.color = '#ffffff';
        }

        // Slices logic
        const createSlice = (typeClass, sDelay) => {
          const slice = document.createElement('span');
          slice.className = `char-slice ${typeClass}`;
          slice.textContent = char;
          slice.style.animationDelay = `${delay + sDelay}s`;
          slice.classList.add(`animate-${typeClass}`);
          return slice;
        };

        charWrapper.appendChild(main);
        charWrapper.appendChild(createSlice('slice-top', 0));
        charWrapper.appendChild(createSlice('slice-middle', 0.1));
        charWrapper.appendChild(createSlice('slice-bottom', 0.2));
        wordSpan.appendChild(charWrapper);
      });
      return wordSpan;
    };

    // Render Part 1 (Splitting by space for multi-word t1)
    const t1Words = t1.split(" ");
    let t1CharOffset = 0;
    t1Words.forEach((w, i) => {
      heroTitle.appendChild(renderWord(w, false, t1CharOffset));
      t1CharOffset += w.length;
      if (i < t1Words.length - 1) {
        const space = document.createElement('span');
        space.innerHTML = '&nbsp;';
        space.className = 'char-wrapper';
        heroTitle.appendChild(space);
        t1CharOffset++;
      }
    });

    // Add Space between t1 and t2
    const midSpace = document.createElement('span');
    midSpace.innerHTML = '&nbsp;';
    midSpace.className = 'char-wrapper';
    heroTitle.appendChild(midSpace);
    const globalT2Start = t1CharOffset + 1;

    // Render Part 2 (Splitting by space for multi-word t2)
    const t2Words = t2.split(" ");
    const totalCharsInT2 = t2.length + 1; // +1 for the period
    let currentT2CharPos = 0;
    let t2CharOffset = globalT2Start;

    t2Words.forEach((w, i) => {
      const isLastWord = (i === t2Words.length - 1);
      const wordWithPeriod = isLastWord ? (w + ".") : w;
      
      const wordSpan = document.createElement('span');
      wordSpan.className = 'word-wrapper';
      wordSpan.style.whiteSpace = 'nowrap';
      wordSpan.style.display = 'inline-flex';

      const wordChars = wordWithPeriod.split("");
      wordChars.forEach((char, charIdx) => {
        const charWrapper = document.createElement('span');
        charWrapper.className = 'char-wrapper';

        const delay = (t2CharOffset + charIdx) * 0.04;

        const main = document.createElement('span');
        main.textContent = char;
        main.style.animationDelay = `${delay + 0.3}s`;
        main.classList.add('animate-main', 'char-main');

        if (char !== " ") { 
          main.classList.add('gradient-text');
          // Global gradient position for T2
          const pos = (currentT2CharPos / (totalCharsInT2 - 1)) * 100;
          main.style.backgroundSize = `${totalCharsInT2 * 100}% 100%`;
          main.style.backgroundPosition = `${pos}% 0%`;
        }

        const createSlice = (typeClass, sDelay) => {
          const slice = document.createElement('span');
          slice.className = `char-slice ${typeClass}`;
          slice.textContent = char;
          slice.style.animationDelay = `${delay + sDelay}s`;
          slice.classList.add(`animate-${typeClass}`);
          return slice;
        };

        charWrapper.appendChild(main);
        charWrapper.appendChild(createSlice('slice-top', 0));
        charWrapper.appendChild(createSlice('slice-middle', 0.1));
        charWrapper.appendChild(createSlice('slice-bottom', 0.2));
        wordSpan.appendChild(charWrapper);
        currentT2CharPos++;
      });

      heroTitle.appendChild(wordSpan);
      t2CharOffset += wordChars.length;

      if (i < t2Words.length - 1) {
        const space = document.createElement('span');
        space.innerHTML = '&nbsp;';
        space.className = 'char-wrapper';
        heroTitle.appendChild(space);
        t2CharOffset++;
        currentT2CharPos++;
      }
    });
  };


  langEnBtn.addEventListener('click', () => updateLanguage('en'));
  langRoBtn.addEventListener('click', () => updateLanguage('ro'));

  // Initialize from localStorage or default to English
  const savedLang = localStorage.getItem('aerflow_lang') || 'en';
  updateLanguage(savedLang);
  
  initPremiumButtons();

  // Mobile Menu Logic
  const initMobileMenu = () => {
    const hamburger = document.getElementById('hamburger-btn');
    const menuOverlay = document.getElementById('mobile-menu-overlay');
    const menuLinks = document.querySelectorAll('.mobile-nav-link, .mobile-menu-cta');

    if (!hamburger || !menuOverlay) return;

    const toggleMenu = () => {
      const isOpen = menuOverlay.classList.toggle('is-open');
      hamburger.classList.toggle('is-active');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    hamburger.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (menuOverlay.classList.contains('is-open')) {
          toggleMenu();
        }
      });
    });
  };

  initMobileMenu();

});
