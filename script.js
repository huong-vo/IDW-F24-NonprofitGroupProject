// form validation for donate page

// grab all the elements that need validation
const donateFirstName = document.getElementById('donate-first-name');
const donateLastName = document.getElementById('donate-last-name');
const creditCard = document.getElementById('credit-card');
const expiration = document.getElementById('expiration');
const securityCode = document.getElementById('security-code');
const donateAmount = document.getElementById('donate-amount');

// grab the form that is needed to perform validation on
// querySelectorAll grabs all the elements with a class named 'donate-form'
// querySelectorAll returns a node list (!!! need to learn more about what this is and what it does)
const donateForms = document.querySelectorAll('.donate-form');

// grab all the elements that display the error messages
const donateFirstNameError = document.getElementById('donate-first-name-error');
const donateLastNameError = document.getElementById('donate-last-name-error');
const creditCardError = document.getElementById('credit-card-error');
const expirationError = document.getElementById('expiration-error');
const securityCodeError = document.getElementById('security-code-error');
const donateAmountError = document.getElementById('donate-amount-error');

// run through each item in the node list and perform an action on it
donateForms.forEach((donateForm) => {
    // when the action 'submit' is performed, the function eventFunction will doing its job
    donateForm.addEventListener('submit', eventFunction)
});

// define the function eventFunction
// check if an user fills out the form properly 
// if not, they will be notified by error messages
function eventFunction(donateEvent){
    // check if any of the validations is not fulfilled 
    // start with all the required inputs are correctly filled - change to 'false' whenever a required blank is not filled
    // used for preventDefault() later 
    let isValid = true;

    if (donateFirstName.value === '' || donateFirstName.value === null) {
        donateFirstNameError.textContent = "Please enter your first name.";
        isValid = false;
    }

    if (donateLastName.value === '' || donateLastName.value === null) {
        donateLastNameError.textContent = "Please enter your last name.";
        isValid = false;
    }

    if (creditCard.value === '' || creditCard.value === null) {
        creditCardError.textContent = "A credit card number is required.";
        isValid = false;
    }

    if (expiration.value === '' || expiration.value === null) {
        expirationError.textContent = "The expiration date is required.";
        isValid = false;
    }

    if (securityCode.value === '' || securityCode.value === null) {
        securityCodeError.textContent = "The security code is required.";
        isValid = false;
    }

    if (donateAmount.value === '' || donateAmount.value === null) {
        donateAmountError.textContent = "Please enter your donation (in dollars).";
        isValid = false;
    }

    if (!isValid) {
        // without this, the action 'submit' may take an user back to the index.html (!!! need to learn more about this)
        donateEvent.preventDefault();
    }
}


