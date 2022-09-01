const textarea = document.querySelector(`.feedback-form textarea`);
const input = document.querySelector(`.feedback-form label input`);
console.log(textarea)
console.log(input)
textarea.addEventListener(`input`, OnFormInput)
input.addEventListener(`input`, OnFormInput);
function OnFormInput(evt) {
    const message = evt.currentTarget.value;
    localStorage.setItem(`feedback - form - state`, message);
    console.log(message)
}
