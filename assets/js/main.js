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
// 6. THE SMOOTH MULTI-LANGUAGE FUSION PRELOADER
// ==========================================
const preloader = document.getElementById('preloader');
const preloaderText = document.querySelector('.preloader-text');
const siteLogo = document.querySelector('.logo'); 

// The International Array
const ultimateFrenzyFrames = [
    { text: "TUSHAR DAS", font: "'Unbounded', sans-serif" },      
    { text: "Tushar Das™", font: "'Syne', sans-serif" },          
    { text: "TUSHAR", font: "'Anton', sans-serif" },             
    { text: "トゥシャル・ダス", font: "'Noto Sans JP', sans-serif" },  
    { text: "Tushar Das", font: "'Noto Sans JP', sans-serif" },  
    { text: "Tushar Das", font: "'Bodoni Moda', serif" },        
    { text: "TUSHAR DAS", font: "'Cinzel', serif" },             
    { text: "トゥシャル", font: "'Noto Sans JP', sans-serif" },    
    { text: "투샤르 다스", font: "'Noto Sans KR', sans-serif" },        
    { text: "Tus.har Das", font: "'Space Grotesk', sans-serif" },  
    { text: "TUSHAR", font: "'Bebas Neue', sans-serif" },        
    { text: "トゥシャル・ダス", font: "'Noto Sans JP', sans-serif" },  
    { text: "투샤르 다스", font: "'Noto Sans KR', sans-serif" },        
    { text: "Tushar Das™", font: "'Unbounded', sans-serif" },      
    { text: "투샤르", font: "'Noto Sans KR', sans-serif" },         
    { text: "Tus.har", font: "'Space Grotesk', sans-serif" },     
    { text: "Tushar Das", font: "'Bodoni Moda', serif" },
    { text: "TUSHAR", font: "'Syne', sans-serif" },
    { text: "Tushar Das™", font: "'Anton', sans-serif" },
    { text: "투샤르", font: "'Noto Sans KR', sans-serif" },
    { text: "Tushar Das™", font: "'Inter', sans-serif" }
];

if (preloader && preloaderText && siteLogo) {
    const navInfo = performance.getEntriesByType("navigation")[0];
    const isRefresh = navInfo && navInfo.type === "reload";

    if (isRefresh || !sessionStorage.getItem('intro-played')) {
        preloader.style.display = 'flex';
        
        // 1. Entrance Wait
        setTimeout(() => {
            preloaderText.classList.add('run-wipe');
            
            // 2. Wipe Wait
            setTimeout(() => {
                preloaderText.classList.add('hide-cursor', 'start-frenzy');
                
                let flashes = 0;
                
                // 3. Smooth Frenzy Loop
                const frenzyTimer = setInterval(() => {
                    const frame = ultimateFrenzyFrames[Math.floor(Math.random() * ultimateFrenzyFrames.length)];
                    preloaderText.style.fontFamily = frame.font;
                    preloaderText.textContent = frame.text; 
                    flashes++;
                    
                    // 4. End Glitch and Fly
                    if (flashes >= 13) {
                        clearInterval(frenzyTimer);
                        
                        // Strip the smooth transition BEFORE math so it doesn't break coordinates
                        preloaderText.classList.remove('start-frenzy'); 
                        preloaderText.style.transition = 'none'; 
                        
                        // Reset to original English text
                        preloaderText.style.fontFamily = "'Inter', sans-serif";
                        preloaderText.textContent = "Tushar Das™";
                        
                        // Prep for math
                        const textRect = preloaderText.getBoundingClientRect();
                        preloaderText.style.left = textRect.left + 'px';
                        preloaderText.style.top = textRect.top + 'px';
                        preloaderText.style.transform = 'none';
                        preloaderText.style.animation = 'none'; 
                        preloaderText.style.transformOrigin = 'top left';
                        
                        preloaderText.getBoundingClientRect(); 
                        
                        // Do the Math
                        const logoRect = siteLogo.getBoundingClientRect();
                        const moveX = logoRect.left - textRect.left;
                        const moveY = logoRect.top - textRect.top;
                        const scale = logoRect.height / textRect.height;
                        
                        // Fly to logo
                        preloader.classList.add('fuse-bg');
                        preloaderText.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
                        preloaderText.classList.add('fuse-text');
                        
                        // Hide completely
                        setTimeout(() => {
                            preloader.classList.add('preloader-hidden');
                            sessionStorage.setItem('intro-played', 'true');
                        }, 1200);
                    }
                }, 160); 
                
            }, 1000); 
            
        }, 800); 

    } else {
        preloader.style.display = 'none';
    }
}