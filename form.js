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
