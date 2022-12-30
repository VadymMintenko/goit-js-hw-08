const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

const object = {};

function onSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onInput(evt) {
  object[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(object));
}

console.log(object);
