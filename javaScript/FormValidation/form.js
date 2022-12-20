const email = document.getElementById('.mail');

email.addEventListener('input',(event) =>{
    if (email.validity.typeMismatch){
        email.setCustomValidity("I  am expecing an email address!");
        email.reportValidity();
    }
    else{
        email.reportValidity("");
    }
} )