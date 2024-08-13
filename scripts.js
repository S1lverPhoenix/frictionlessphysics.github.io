document.addEventListener('DOMContentLoaded', function () {
    const signInBtn = document.getElementById('sign-in-btn');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const sections = document.querySelectorAll('section');

    signInBtn.addEventListener('click', () => popup.style.display = 'flex');
    closePopup.addEventListener('click', () => popup.style.display = 'none');

    // Animate sections on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    // Contact Us button 
    const contactUsBtn = document.getElementById('contact-btn');
    //contactUsBtn.addEventListener('click', () => popup.style.display = 'flex'); --> replace with link to gmail with our email (google how to do this)
});
