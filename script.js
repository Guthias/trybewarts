const emailLoginInput = document.getElementById('login-email');
const passwordLoginInput = document.getElementById('login-password');
const buttonLogin = document.getElementById('login-button');
const agreeCheckbox = document.getElementById('agreement');
const buttonSubmit = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const charCounter = document.getElementById('counter');

function checkLogin(event) {
  event.preventDefault();
  const email = emailLoginInput.value;
  const password = passwordLoginInput.value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function changeSubmitState() {
  buttonSubmit.disabled = !buttonSubmit.disabled;
}

buttonLogin.addEventListener('click', checkLogin);
agreeCheckbox.addEventListener('change', changeSubmitState);
textarea.addEventListener('keyup', () => {
  const numberOfChars = textarea.value.length;
  charCounter.innerText = 500 - numberOfChars;
});
