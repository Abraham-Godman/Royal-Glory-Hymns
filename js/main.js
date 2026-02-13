// --- SCRIPTURE SWITCHER LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('#scripture-display');
    const hymns = document.querySelectorAll('article[id^="hymn-"]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Pulls the text from the 'data-scripture' attribute in your HTML
                const text = entry.target.getAttribute('data-scripture');
                if (text && display) {
                      display.innerHTML = `<p class="fs-5 fst-italic">${text}</p>`;
                }
            }
        });
    }, { 
        rootMargin: '-100px 0px -70% 0px' // Triggers when the hymn hits the top area
    });

    hymns.forEach(hymn => observer.observe(hymn));
});




// Force scroll for mobile offcanvas links
document.querySelectorAll('#offcanvasIndex .hymn-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        // 1. Get the ID from the href (e.g., #hymn-2)
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // 2. Wait a split second for the Offcanvas to close
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 300); 
        }
    });
});



