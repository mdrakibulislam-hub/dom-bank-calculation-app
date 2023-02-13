document.getElementById('login-button').addEventListener('click', function(){
    const emailID = document.getElementById('email-field');
    const emailIDValue = emailID.value;
    const passwordInput = document.getElementById('password-field');
    const passwordInputValue = passwordInput.value;
    let expectedEmailValue = 'user@email.com';
    let expectedPasswordValue = 'secret';

    if(emailIDValue === expectedEmailValue && passwordInputValue === expectedPasswordValue){
        window.location.href = "accounts.html";
    }
    else{
        alert('Please enter the credentials as mentioned in the footer section.');
    }
    
});


//functions for calculation


function getInputValueByID(inputID){
    const inputElement = document.getElementById(inputID);
    const inputElementValueString = inputElement.value;
    const inputElementValue = parseFloat(inputElementValueString);
    return inputElementValue;
};


function getElementValueByID(elementID){
    const element = document.getElementById(elementID);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
};

function setTextElementValueByID(elementID, newValue){
    const textElement = document.getElementById(elementID);
    textElement.innerText = newValue;
}