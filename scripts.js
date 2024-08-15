document.addEventListener('DOMContentLoaded', function () {
    // Get references to the sign-in button, popup, and close button
    const signInBtn = document.getElementById('sign-in-btn');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const loginForm = document.getElementById('login-form');
    const sections = document.querySelectorAll('section');

    // Show the popup when the sign-in button is clicked
    signInBtn.addEventListener('click', () => {
        popup.style.display = 'flex'; // Show the popup
    });

    // Hide the popup when the close button is clicked
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none'; // Hide the popup
    });

    // Handle the login form submission
    // loginForm.addEventListener('submit', function(event) {
    //     event.preventDefault(); // Prevent the form from submitting normally

        // Get the values from the username and password fields
        // const username = document.getElementById('username').value;
        // const password = document.getElementById('password').value;
    //});

    // Animate sections on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'visible' class when the section is in view
                entry.target.classList.add('visible');
                // Stop observing this section once it's been animated
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); // Trigger the observer when 20% of the section is visible

    // Observe each section for intersection events
    sections.forEach(section => observer.observe(section));
});
