const throttle = require('lodash.throttle');

const input = document.querySelector('input');
const textareaInput = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');

input.addEventListener('input', throttle(onInput, 500));
textareaInput.addEventListener('input', throttle(onTextarea, 500));
form.addEventListener('submit', onSubmit);

const object = {};

function onSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onInput(evt) {
  object.email = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(object));
}

function onTextarea(evt) {
  object.textarea = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(object));
}

console.log(object);

// console.log(object);
