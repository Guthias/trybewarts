const emailLoginInput = document.getElementById('login-email');
const passwordLoginInput = document.getElementById('login-password');
const buttonLogin = document.getElementById('login-button');
const agreeCheckbox = document.getElementById('agreement');
const buttonSubmit = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const charCounter = document.getElementById('counter');
const firstNameInput = document.getElementById('input-name');
const lastNameInput = document.getElementById('input-lastname');
const emailInput = document.getElementById('input-email');
const houseSelect = document.getElementById('house');

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

function getSelectedRadio(name) {
  const selected = document.querySelector(`input[name=${name}]:checked`);
  if (!selected) {
    return;
  }
  return selected.value;
}

function getSelectedCheckboxes(name) {
  const checkboxes = document.querySelector(`input[name=${name}]:checked`);
  const values = [];

  if (!checkboxes) {
    return;
  }
  for (let i = 0; i < checkboxes.length; i += 1) {
    values.push(checkboxes[i].value);
  }

  return values;
}

function getFormData() {
  return {
    name: `${firstNameInput.value} + ${lastNameInput.value}`,
    email: emailInput.value,
    family: houseSelect.value,
    house: getSelectedRadio('family'),
    subjects: getSelectedCheckboxes('subject'),
    rate: getSelectedRadio('rate'),
    obs: textarea.value };
}

buttonLogin.addEventListener('click', checkLogin);
agreeCheckbox.addEventListener('change', changeSubmitState);
textarea.addEventListener('keyup', () => {
  const numberOfChars = textarea.value.length;
  charCounter.innerText = 500 - numberOfChars;
});
