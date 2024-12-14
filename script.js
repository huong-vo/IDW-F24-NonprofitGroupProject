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

    // \d matches any digit from 0 to 9 and can be replaced with [0-9]; {4} determines the exact number of digits 
    if (creditCard.value === '' || creditCard.value === null || !(/^(\d{4})(\d{4})(\d{4})(\d{4})$/.test(creditCard.value))) {
        creditCardError.textContent = "A proper card number is required.";
        isValid = false;
    }

    // check if expiration is filled in with a correct format MM/YY using the regex concept and the test function
    // 0[1-9]|1[0-2] the first digit is 0 and the second is from 1 to 9 or the first is 1 and the second is from 0 to 2, so range is 01-12 for month
    if (expiration.value === '' || expiration.value === null || !(/^(0[0-9]|1[0-2])\/(\d{2})$/.test(expiration.value))) {
        expirationError.textContent = "A proper expiration date is required.";
        isValid = false;
    }

    if (securityCode.value === '' || securityCode.value === null || !(/^\d{3}$/.test(securityCode.value))) {
        securityCodeError.textContent = "A proper security code is required.";
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


// form validation for contact page

const contactFullName = document.getElementById('contact-full-name');
const contactEmail = document.getElementById('contact-email');
const contactMessage = document.getElementById('contact-message');

const contactButton = document.getElementById('contact-button');

const contactError = document.getElementById('contact-error');

contactButton.addEventListener('click', (e) => {
    // a variable to accummulate the messages
    let errorMessage = [];
    
    if (contactFullName.value === '' || contactFullName.value === null) {
        errorMessage.push("name");
    }

    // \s matches a white space and + matches one or more occurences
    if (contactEmail.value === '' || contactEmail.value === null || !(/^([^\s]+)@([^\s]+)\.([^\s]+)$/.test(contactEmail.value))) {
        errorMessage.push("email address");
    }

    if (contactMessage.value === '' || contactMessage.value === null) {
        errorMessage.push("message");
    }

    // check if any of the validations is not fulfilled
    if (errorMessage.length > 0) {
        e.preventDefault();

        // display the message with correct grammar
        switch (errorMessage.length) {
            case 1:
                contactError.innerText = `Please enter your ${errorMessage[0]} properly before sending the message.`;
                break;

            case 2:
                contactError.innerText = `Please enter your ${errorMessage.join(" and ")} properly before sending the message.`;
                break;
            
            case 3:
                // join all the errorMessage elements with a comma among them
                // replace the last comma with ", and " 
                contactError.innerText = `Please enter your ${errorMessage.join(", ").replace(/, ([^,]*)$/, ", and $1")} properly before sending the message.`;
                break;
            
            // default is a must-have for switch to work properly
            default:
                contactError.innerText = "The form validation is not working.";
        }
        
    }
})