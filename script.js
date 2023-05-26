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

// VALIDATION FORM

const error = document.getElementById('error-message');
const form = document.querySelector('.contact-form');
const userEmail = document.getElementById('user-email');
const errorMessage = 'Please write your email address in lower case';
// CODE
form.addEventListener('submit', (event) => {
  // preventing from submittion
  event.preventDefault();
  const userInput = userEmail.value;
  if (userInput !== userInput.toLowerCase()) {
    error.innerText = errorMessage;
  } else {
    error.innerText = '';
    form.submit();
  }
});
