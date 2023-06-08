const form = document.querySelector('.tbtn-form');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname')
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector('.claim_button');

button.addEventListener('click', e=>{
    e.preventDefault();

    validateInputs();

    console.log("helloword");

});

// function errorFunction(request, message){
//     const formControl = request.parentElement;
//     const span = formControl.querySelector('input');
//     input.innerText = message;
//     request.className += 'new-form';
//     span.className += 'error-text';
// }

// function successFunction(request){
//     request.className += 'success';
// }

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


const validateInputs = () => {
    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailAddress = email.value.trim();
    var password_1 = password.value.trim();
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validRegex.test(String(email).toLowerCase());

    if(firstName === ''){
        setError(fname, 'First Name cannot be empty')
    }
    else{
        setSuccess(fname);
    }

    if(lastName === ''){
        setError(lname, 'Last Name cannot be empty')
    }
    else{
        setSuccess(lname);
    }

    if(emailAddress === ''){
        setError(email, 'Email cannot be empty')
    }
    else if(!emailAddress.value.match(validRegex)){
        setError(email, 'Looks like this is not an email')
    }
    else{
        setSuccess(email);
    }

    if(password_1 === ''){
        setError(password, 'Password cannot be empty')
    }
    else if(password_1.length < 8 && password_1.length > 20){
        setError(password, 'Password must be 8 characters or 20 characters max')
    }
    else{
        setSuccess(password);
    }
}




