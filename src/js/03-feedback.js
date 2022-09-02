import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`);
console.log(form) 

const textarea = document.querySelector(`.feedback-form textarea`)
console.log(textarea)

form.addEventListener(`submit`, onFormSubmit)
textarea.addEventListener(`input`, throttle(onTextareaInput,500));

const STORAGE_KEY=`feedback-form-state`;

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();  
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    
}
 function onTextareaInput(evt) {
     const message = evt.target.value;
     localStorage.setItem(STORAGE_KEY, message);
 }

function populateTextarea(){
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        console.log(savedMessage);
        textarea.value = savedMessage;
    }
 }
