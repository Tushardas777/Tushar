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
// 5. DARK MODE MEMORY ENGINE
// ==========================================
const themeToggle = document.getElementById('theme-toggle');

// Safety check: Only run this if the button exists on the page
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        // 1. Add the transition class so it fades beautifully
        document.body.classList.add('theme-transition');
        
        // 2. Flip the dark-theme colors on or off
        document.body.classList.toggle('dark-theme');
        
        // 3. Save the current state to the computer's memory
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('portfolio-theme', 'dark');
        } else {
            localStorage.setItem('portfolio-theme', 'light');
        }
    });
}