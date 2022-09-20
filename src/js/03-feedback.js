import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`);
const email = document.querySelector(`.feedback-form input`);
const message = document.querySelector(`.feedback-form textarea`);
const btn = document.querySelector(`.feedback-form button`);

form.addEventListener(`submit`, onFormSubmit)
form.addEventListener(`input`, throttle(onForm, 500));
const formData = {};

const STORAGE_KEY = `feedback-form-state`;

function isActiveBtn() {
  btn.disabled = true;
}
isActiveBtn();

 function onForm(){
   formData.email = email.value;
   formData.message = message.value;
   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
   if (email.value && message.value) {
     btn.disabled = false;
   }
  
}

function onFormSubmit(evt) {
    evt.preventDefault();  
  evt.currentTarget.reset();
  //  if (!email.value || !message.value) {
  //    return alert('please fill in all fields');
  //  }
    localStorage.removeItem(STORAGE_KEY); 
  console.log(formData)
}

 function populateSavedMessage() {
   const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY))
  
     if (savedMessage) {
       const parceMessageEmail = savedMessage.email;
       const parceMessageTextarea = savedMessage.message;
     email.value = parceMessageEmail;
       message.value = parceMessageTextarea;
       
   }
 }
populateSavedMessage();
  
 
