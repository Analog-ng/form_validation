// variables
const sendBtn = document.querySelector('#sendBtn'),
      userName = document.querySelector('#name'),
      email = document.querySelector('#email'),
      phoneNumber = document.querySelector('#phone'),
      address = document.querySelector('#address'),
      bio =document.querySelector('#bio'),
      resetBtn = document.querySelector('#resetBtn'),
      sendForm = document.querySelector('#formValidation');







// event listeners
eventListeners();

function eventListeners() {
    // App initiation
    document.addEventListener('DOMContentLoaded', appInit);

    // validate all fields
    userName.addEventListener('blur', validateField);
    email.addEventListener('blur', validateField);
    phoneNumber.addEventListener('blur', validateField);
    address.addEventListener('blur', validateField);
    bio.addEventListener('blur', validateField);

    // send email and then resent email
    resetBtn.addEventListener('click', resetForm)

    // send completed
    sendForm.addEventListener('submit', sentForm)

}



// function
function appInit() {
    sendBtn.disabled = true;
}

function sentForm(e) {
    e.preventDefault();

    // show spinner
    const spinner =document.querySelector('#spinner');
    console.log(spinner);
    spinner.style.display = 'block';

    // create sent image
    const sentImg = document.createElement('img');
          sentImg.src = 'img/mail.gif';
          sentImg.style.display = 'block'

    // hide spinner to show message sent
    setTimeout(() => {
        spinner.style.display = 'none'

        // show sent image
        document.querySelector('#loaders').appendChild(sentImg);

        setTimeout(() => {
            sendForm.reset();
            sentImg.remove();
			sendBtn.disabled = true;
			
            
        }, 5000);

    }, 3000);


}

function validateField() {
    let errors;

    // validate all field length
    validateLength(this);

    // validate all name field
    if (this.id === 'name') {
        validateName(this);
    }

    // validate all email field
    if (this.type === 'email') {
        validateEmail(this);
    }

    // validate all phone field
    if (this.id === 'phone') {
        validatePhone(this);
    }

    // checking for any error class b4 enabling btn
    errors = document.querySelectorAll('.error');
    

    // enable btn
    if (userName.value !== '' && email.value !== '' && phoneNumber.value !== '' && address.value !== '' && bio.value !== '') {
        
        if (errors.length === 0) {
            // enable btn
            sendBtn.disabled = false;
        }
    }

}

function validateLength(field) {
    if(field.value.length > 0) {
        field.style.borderBottomColor = '#00ff00';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = '#ff0000';
        field.classList.add('error');
    }
}

function validateName(field) {
    const regexUserName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let nameText = field.value;

    if (nameText.match(regexUserName)) {
        field.style.borderBottomColor = '#00ff00';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = '#ff0000';
        field.classList.add('error');
    }
    
}

function validateEmail(field) {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailText = field.value;

    if (emailText.match(regexEmail)) {
        field.style.borderBottomColor = '#00ff00';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = '#ff0000';
        field.classList.add('error');
    }
    
}

function validatePhone(field) {
    const regexPhoneNumber = /^[0-9]{11}$/; 
    let phoneNumberText = field.value;

    if (phoneNumberText.match(regexPhoneNumber)) {
        field.style.borderBottomColor = '#00ff00';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = '#ff0000';
        field.classList.add('error');
    }
    
}

function  resetForm(field) {
    sendForm.reset();
    // field.style.borderBottomColor = 'grey';
}