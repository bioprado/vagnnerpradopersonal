document.addEventListener('DOMContentLoaded', () => {
    
    // 1. FAQ Accordion Logic
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.accordion-item.active');
            
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
                currentlyActive.querySelector('.accordion-content').style.maxHeight = null;
            }

            item.classList.toggle('active');
            const content = item.querySelector('.accordion-content');
            
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // 2. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Carousel logic (Optional duplicate for smooth infinite scroll if needed)
    // The current CSS animation handles the scrolling. 
    // We duplicate the content to make it seamless if the track width isn't long enough.
    const carouselTrack = document.querySelector('.carousel-track');
    if (carouselTrack) {
        // Clone slides to ensure the scrolling is perfectly infinite without empty spaces
        const slides = Array.from(carouselTrack.children);
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            carouselTrack.appendChild(clone);
        });
    }

});
