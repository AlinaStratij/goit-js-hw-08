import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`);
const email = document.querySelector(`.feedback-form input`);
const message = document.querySelector(`.feedback-form textarea`);

form.addEventListener(`submit`, onFormSubmit)
form.addEventListener(`input`, throttle(onForm, 500));
const formData = {};

const STORAGE_KEY = `feedback-form-state`;


 function onForm(e){
    formData[e.target.name] = e.target.value;
     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();  
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY); 
  console.log(formData)
  console.log(`hello`)
    
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

