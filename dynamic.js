const form = document.querySelector('.tbtn-form');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname')
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', e=>{
    e.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailAddress = email.value.trim();
    var password_1 = password.value.trim();
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(firstName === ''){
        errorFunction(firstName, 'First Name cannot be empty');
    }
    else{
        successFunction(firstName);
    }
    
    if(lastName === ''){
        errorFunction(lastName, 'Last Name cannot be empty');
    }
    else{
        successFunction(lastName);
    }

    if(emailAddress === ''){
        errorFunction(emailAddress, 'Email address cannot be empty');
    }
    else if(!emailAddress.value.match(validRegex)){
        errorFunction(emailAddress, 'Please enter a valid email address');
    }
    else{
        successFunction(emailAddress);
    }

});

function errorFunction(request, message){
    const formControl = request.parentElement;
    const span = formControl.querySelector('input');
    input.innerText = message;
    request.className += 'new-form';
    span.className += 'error-text';
}

function successFunction(request){
    request.className += 'success';
}

