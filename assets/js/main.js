// 1. Grab the custom cursor
const cursor = document.querySelector('.custom-cursor');

// 2. Make the circle follow the mouse
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 3. Find ALL clickable things (links and buttons)
const allClickables = document.querySelectorAll('a, button'); 

// 4. Make the cursor grow when it touches any clickable item
allClickables.forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering'); 
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering'); 
    });
});

// ==========================================
// 5. DARK MODE MEMORY ENGINE (Dark by Default)
// ==========================================
const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
    // 1. Check memory immediately to ensure the icons match the theme on load
    if (localStorage.getItem('portfolio-theme') === 'light') {
        document.body.classList.remove('dark-theme');
    }

    themeToggle.addEventListener('click', () => {
        // Add smooth fading class
        document.body.classList.add('theme-transition');
        
        // Flip the colors
        document.body.classList.toggle('dark-theme');
        
        // Save the new state to memory
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('portfolio-theme', 'dark');
        } else {
            localStorage.setItem('portfolio-theme', 'light');
        }
    });
}
// ==========================================
// 6. ULTIMATE GLITCH & FUSION PRELOADER
// ==========================================
const preloader = document.getElementById('preloader');
const preloaderText = document.querySelector('.preloader-text');
const siteLogo = document.querySelector('.logo'); 

// A curated sequence of high-contrast fonts and languages
const ultimateFrenzyFrames = [
    // --- Phase 1: Heavy European Brutalism (Eng/Spa) ---
    { text: "TUSHAR DAS", font: "'Unbounded', sans-serif" },      // Brutalist Wide
    { text: "Tushar Das™", font: "'Syne', sans-serif" },          // Modern Spanish Design
    { text: "TUSHAR", font: "'Anton', sans-serif" },             // Ultra Heavy Compact

    // --- Phase 2: Authentic Asian Glitch ---
    { text: "トゥシャル・ダス", font: "'Noto Sans JP', sans-serif" },  // Japanese (Bold)
    { text: "Tushar Das", font: "'Noto Sans JP', sans-serif" },  // English in Japanese Font

    // --- Phase 3: Luxury Italian/Roman ---
    { text: "Tushar Das", font: "'Bodoni Moda', serif" },        // High-Fashion Milan
    { text: "TUSHAR DAS", font: "'Cinzel', serif" },             // Classic Roman
    { text: "トゥシャル", font: "'Noto Sans JP', sans-serif" },    // Japanese (Short)

    // --- Phase 4: Modern Technical/Space ---
    { text: "투샤르 다스", font: "'Noto Sans KR', sans-serif" },        // Korean Hangul
    { text: "Tus.har Das", font: "'Space Grotesk', sans-serif" },  // Tech/Monospace style
    { text: "TUSHAR", font: "'Bebas Neue', sans-serif" },        // Tall/Condensed Eng

    // --- Phase 5: International Mix ---
    { text: "トゥシャル・ダス", font: "'Noto Sans JP', sans-serif" },  // Japanese (Full)
    { text: "투샤르 다스", font: "'Noto Sans KR', sans-serif" },        // Korean (Full)
    { text: "Tushar Das™", font: "'Unbounded', sans-serif" },      // Back to Wide
    { text: "투샤르", font: "'Noto Sans KR', sans-serif" },         // Korean (Short)
    { text: "Tus.har", font: "'Space Grotesk', sans-serif" },     // Tech (Short)

    // --- Phase 6: Approaching Resolution ---
    { text: "Tushar Das", font: "'Bodoni Moda', serif" },
    { text: "TUSHAR", font: "'Syne', sans-serif" },
    { text: "Tushar Das™", font: "'Anton', sans-serif" },
    { text: "투샤르", font: "'Noto Sans KR', sans-serif" },

    // The very last frame *before* logic kicks in should be close to base
    { text: "Tushar Das™", font: "'Inter', sans-serif" }
];

if (preloader && preloaderText && siteLogo) {
    const navInfo = performance.getEntriesByType("navigation")[0];
    const isRefresh = navInfo && navInfo.type === "reload";

    if (isRefresh || !sessionStorage.getItem('intro-played')) {
        preloader.style.display = 'flex';
        
        // TIMELINE:

        // A. Gray Slide-Down Entrance (CSS handles this, JS waits 800ms)
        setTimeout(() => {
            // B. Trigger White Cursor Wipe
            preloaderText.classList.add('run-wipe');
            
            // C. Wait 1000ms for Wipe to finish, then start Glitch
            setTimeout(() => {
                // Prep for rapid character/font changes
                preloaderText.classList.add('hide-cursor', 'start-frenzy');
                
                let flashes = 0;
                // D. Run rapid loop every 100ms (2 seconds total)
                const frenzyTimer = setInterval(() => {
                    // Pick a random frame from our master list
                    const frame = ultimateFrenzyFrames[Math.floor(Math.random() * ultimateFrenzyFrames.length)];
                    preloaderText.style.fontFamily = frame.font;
                    preloaderText.textContent = frame.text; // Swaps actual characters
                    flashes++;
                    
                    // E. End Glitch and Start Fusion
                    if (flashes >= 20) {
                        clearInterval(frenzyTimer);
                        
                        // F. CRITICAL: Force reset to original English text & font for math
                        preloaderText.style.fontFamily = "'Inter', sans-serif";
                        preloaderText.textContent = "Tushar Das™";
                        
                        // Strip CSS centering for coordinate calculation
                        const textRect = preloaderText.getBoundingClientRect();
                        preloaderText.style.left = textRect.left + 'px';
                        preloaderText.style.top = textRect.top + 'px';
                        preloaderText.style.transform = 'none';
                        preloaderText.style.animation = 'none'; 
                        preloaderText.style.transformOrigin = 'top left';
                        
                        // Force recalculation of English dimensions
                        preloaderText.getBoundingClientRect(); 
                        
                        // Palmer Math (Calculate flight path)
                        const logoRect = siteLogo.getBoundingClientRect();
                        const moveX = logoRect.left - textRect.left;
                        const moveY = logoRect.top - textRect.top;
                        const scale = logoRect.height / textRect.height;
                        
                        // G. Launch Fusion Flight (CSS applies flight path/fading)
                        preloader.classList.add('fuse-bg');
                        preloaderText.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
                        preloaderText.classList.add('fuse-text');
                        
                        // H. Hide Preloader completely
                        setTimeout(() => {
                            preloader.classList.add('preloader-hidden');
                            sessionStorage.setItem('intro-played', 'true');
                        }, 1200);
                    }
                }, 100); 
                
            }, 1000); // Wipe wait
            
        }, 800); // Entrance wait

    } else {
        preloader.style.display = 'none';
    }
}