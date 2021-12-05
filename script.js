const form = document.getElementById('evaluation-form');
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
    name: ['Nome:', `${firstNameInput.value} ${lastNameInput.value}`],
    email: ['Email', emailInput.value],
    family: ['Casa', houseSelect.value],
    house: ['Famiília', getSelectedRadio('family')],
    subjects: ['Matérias', getSelectedCheckboxes('subject')],
    rate: ['Avaliação', getSelectedRadio('rate')],
    obs: ['Observações', textarea.value] };
}

function clearForm() {
  const elements = document.querySelectorAll('#evaluation-form > *');
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].remove();
  }
}

function createDataList(data) {
  const dataItem = document.createElement('li');
  dataItem.innerText = `${data[0]}: ${data[1]}`;

  return dataItem;
}

function renderData(data) {
  const dataKeys = Object.keys(data);
  const dataList = document.createElement('ul');

  for (let i = 0; i < dataKeys.length; i += 1) {
    dataList.appendChild(createDataList(data[dataKeys[i]]));
  }
  form.appendChild(dataList);
}

function submitForm(event) {
  event.preventDefault();
  const data = getFormData();
  clearForm();
  renderData(data);
}

buttonLogin.addEventListener('click', checkLogin);
agreeCheckbox.addEventListener('change', changeSubmitState);
textarea.addEventListener('keyup', () => {
  const numberOfChars = textarea.value.length;
  charCounter.innerText = 500 - numberOfChars;
});
buttonSubmit.addEventListener('click', submitForm);
