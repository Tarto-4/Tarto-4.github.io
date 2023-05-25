// Mobile Menu appears on clicking the hamburger menu and dissapers on clicking the close button

const btnNavigationElement = document.querySelector('.btn-mobile-nav');
const headerElement = document.querySelector('.header');

btnNavigationElement.addEventListener('click', () => {
  headerElement.classList.toggle('nav-open');
});

// Mobile Menu dissapear on clicking any of the mobile options
const navLinks = document.querySelectorAll('.main-nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    headerElement.classList.remove('nav-open');
  });
});

// Form Validation
const form = document.getElementById('form_contact');
const emailInput = form.elements.email; // Get email element by name

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value;

  if (email.toLowerCase() === email) {
    // Submit the form
    form.submit();
  } else {
    // Show error message
    const errorMessage = 'Email must be in lowercase';
    const errorElement = emailInput.parentNode.querySelector('small');
    errorElement.innerText = errorMessage;

    // Style the Error message
    errorElement.style.color = '#ff0000';
    errorElement.style.width = '100%';
  }
});
