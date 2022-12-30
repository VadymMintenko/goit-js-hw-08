import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const object = {};
saveValue();

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput(evt) {
  object[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(object));
}

function onSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(object);
}

function saveValue() {
  const savedText = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedText) {
    Object.entries(savedText).forEach(([key, value]) => {
      form[key].value = value;
      object[key] = value;
    });
  }
}
