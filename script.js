const emailLoginInput = document.getElementById('login-email');
const passwordLoginInput = document.getElementById('login-password');
const buttonLogin = document.getElementById('login-button');

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

buttonLogin.addEventListener('click', checkLogin);

const clickCheckbox = document.getElementById('label-infos');
const buttonSend = document.getElementById('submit-btn');

function click() {
  rbjgjrkjgbrbr
}