
const form = document.querySelector("form");
const Username = document.querySelector("#Username");                                            
const Email = document.querySelector("#Email");
const Password = document.querySelector("#Password");
const confirmPassword = document.querySelector("#confirmPassword");

    // show error
const showError = (input, messege) => {
    let parentElement = input.parentElement;
    input.style.border = "1px solid #ec5a36";
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility = "visible";
    successIcon.style.visibility = "hidden";
    small.style.visibility = "visible";
    small.innerText = messege;
}

// show success
const showSuccess = (input) => {
    let parentElement = input.parentElement;
    input.style.border = "1px solid #31ca15";
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility = "hidden";
    successIcon.style.visibility = "visible";
    small.style.visibility = "hidden";
    input.style.border = "1px solid #31ca15";
}
const checkEmpty = (elements) => {
    elements.forEach( (element)  => {
        if (element.value === ''){
            showError(element, "Input Required...");
        }else{
            showSuccess(element);
        }
    } )
}

const checkEmail = (email) => {
    const validatationEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(validatationEmail.test(email.value)){                                                            
        showSuccess(email);
    }else{
        showError(email, "Invalid Email..");
    }
}

const passwordLength = (input,min,max) => {
    if (input.value.length < min){
        showError(input, "Password at Least 8 Characters.");
    }
    else if (input.value.length > max){
        showError(input, "The Maximum Length of Password 20 Characters.");

    }else{
        showSuccess(input)
    }
}

const passwordSimilaraty = (password,confirmPassword) => {
    if (confirmPassword.value === password.value){
        showSuccess(confirmPassword);
    }else{
        showError(confirmPassword, "Your password is not matching.")
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkEmpty([Username,Email,Password,confirmPassword]);
    checkEmail(Email);
    passwordLength(Password,8,20);
    passwordLength(confirmPassword,8,20);
    passwordSimilaraty(Password,confirmPassword);

});




     