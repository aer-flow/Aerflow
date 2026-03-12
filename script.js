const translations = {
  en: {
    nav_solutions: "Solutions",
    nav_philosophy: "Philosophy",
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

  // Hero Animation: Infinite Grid & Mouse Spotlight
  const hero = document.getElementById('hero');
  const gridBase = document.getElementById('grid-base');
  const gridSpotlight = document.getElementById('grid-spotlight');
  
  if (hero && gridBase && gridSpotlight) {
    let mouseX = 0;
    let mouseY = 0;
    let gridX = 0;
    let gridY = 0;
    const speed = 0.5;

    // Track mouse for spotlight
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      hero.style.setProperty('--mouse-x', `${x}px`);
      hero.style.setProperty('--mouse-y', `${y}px`);
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

  // Glowing Effect Logic (Vanilla JS adaptation)
  const initGlowingEffects = () => {
    const cards = document.querySelectorAll('.glow-card');
    const mousePos = { x: -1000, y: -1000 }; // Start far away to avoid initial activation
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    const state = new Map(); // Store per-card state (current angle, active state)

    cards.forEach(card => {
      // Inject the required DOM structure for the effect
      const glowContainer = document.createElement('div');
      glowContainer.className = 'glow-container';
      glowContainer.innerHTML = '<div class="glow-content"></div>';
      card.prepend(glowContainer);

      state.set(card, {
        currentAngle: 0,
        targetAngle: 0,
        isActive: false,
        element: glowContainer.querySelector('.glow-content')
      });
    });

    const updateGlow = () => {
      cards.forEach(card => {
        const s = state.get(card);
        const rect = card.getBoundingClientRect();
        const { left, top, width, height } = rect;
        const proximity = 100; // Hardcoded from React default or proximity prop
        const inactiveZone = 0.7; // Hardcoded
        
        const centerX = left + width * 0.5;
        const centerY = top + height * 0.5;
        
        const mouseX = mousePos.x;
        const mouseY = mousePos.y;

        const distFromCenter = Math.hypot(mouseX - centerX, mouseY - centerY);
        const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

        // Inactive zone check
        if (distFromCenter < inactiveRadius) {
          s.isActive = false;
        } else {
          // Proximity check
          s.isActive = (
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity
          );
        }

        s.element.style.setProperty('--active', s.isActive ? '1' : '0');

        if (s.isActive) {
          // On touch devices, we might want a static or no angle calculation 
          // to prevent the "spinning cone" effect during scrolling.
          if (isTouchDevice) {
            // Option: set a static angle or just don't update if not actively touching
            // For now, let's keep it static on mobile to focus on the edge highlight
            s.currentAngle = 0; 
          } else {
            // Angle calculation for hover-capable devices
            const target = (180 * Math.atan2(mouseY - centerY, mouseX - centerX)) / Math.PI + 90;
            
            // Smooth interpolation (Lerp)
            const diff = ((target - s.currentAngle + 180) % 360) - 180;
            s.currentAngle += diff * 0.15; // Speed factor (adjust as needed)
          }
          
          s.element.style.setProperty('--start', String(s.currentAngle));
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


});
