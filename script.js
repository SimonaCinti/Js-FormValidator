/**
 * Const from form
 */

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkPassword = document.getElementById('checkPassword');

// Show Imput
function showError(input, message){
    const formControl = input.parentElement; //the parent of the element
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success

function showSuccess(input){
    const formControl = input.parentElement; //the parent of the element
    formControl.className = 'form-control success';
}

// Check email is valid 

function checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( re.test(email.value.trim())) {
        showSuccess(email);

    }else {
        showError(email, 'Email is not valid');
    }
}

// Check required fields

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if (input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Check input lenght

function checkLength(input, min, max){
    if (input.value.length < min){
        showError (input, `${(getFieldName(input))} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${(getFieldName(input))} must be less than ${max} characters`);
    }
    else {
        showSuccess(input)
    }
}

// Get field name

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check password match

function checkPasswordMatch (input1, input2){
    if (input1.value !== input2.value){
        showError(input2, 'Password do not match')
    }
}

// Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault(); // prevent the default event "submit"
   
    checkRequired([username, email, password, checkPassword]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, checkPassword)
});
