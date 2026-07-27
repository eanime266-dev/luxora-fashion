/* ==========================================================================
   LUXORA FASHION - Client Side Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Navigation Blur Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // 2. Form Submission Handling (Contact Page)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! Your message has been sent to LUXORA Concierge.');
            contactForm.reset();
        });
    }

    // 3. Simple Cart Counter Feature
    const buyButtons = document.querySelectorAll('.product-card .btn');
    const cartIcon = document.querySelector('.nav-icons span:last-child');
    let cartCount = 0;

    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            cartCount++;
            if (cartIcon) {
                cartIcon.textContent = `🛍️ (${cartCount})`;
            }
            alert('Item added to your shopping cart!');
        });
    });
});