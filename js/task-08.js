const form = document.querySelector ('.login-form');

const input = document.querySelector ('input');

form.addEventListener ('submit', onFormSubmit);

function onFormSubmit (event) {
event.preventDefault();

const formElements = event.currentTarget.elements;

const email = formElements.email.value;
const password = formElements.password.value;

if (event.currentTarget.elements[0].value === "" || event.currentTarget.elements[1].value === "") {
    alert ('Заполните все поля формы!');
}

else {
    const formData = {
        email,
        password
    }
    
    console.log(formData);
    
    form.reset();

}




}
