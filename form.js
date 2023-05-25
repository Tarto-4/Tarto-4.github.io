//  Lower case E-mail validation

const error = document.getElementById('error-message');
const form = document.querySelector('.contact-form padding-left-right');
const email = document.getElementById('user_email');
const errorMessage = 'Please write your email address in lower case';

function showError() {
  if (email.value.trim() !== email.value.trim().toLowerCase()) {
    errorMessage.textContent = 'Email should be in lower case. Your form is not sent.';
  }
}

form.addEventListener('submit', (event) => {
  if (email.value.trim() !== email.value.trim().toLowerCase()) {
    showError();
    event.preventDefault();
  }
});
