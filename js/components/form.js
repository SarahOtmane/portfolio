/*****************************
 *  04:= form
*****************************/

let submit = document.getElementById('submitButton'),
    namee = document.getElementById('name'),
    email = document.getElementById('email'),
    message = document.getElementById('message');

[namee, email, message].forEach((field) =>{
    field.addEventListener('change', (e) =>{
        field.nextElementSibling.style.display = 'none';
    })
})


//function which check if the email is valid
function isEmailValid(){
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log('coucou');
    if(!(email.value.match(mailformat))){
        email.nextElementSibling.nextElementSibling.style.display = 'block';
    }
}

//function which check if the name is valid
function isNameValid(){
    if( /[0-9]/.test(namee.value) || /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(namee.value)){
        namee.nextElementSibling.nextElementSibling.style.display = 'block';
    }
}

//function which check if the field is full and if it was it returns true
function isFieldFull(field){
    console.log('hi');
    if(field.value === ''){
        field.nextElementSibling.style.display = 'block';
        return false;
    }else{
        return true;
    }
}

export function validateForm(){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
    
        //it checks if the three fields are full
        let fullN = isFieldFull(namee),
            fullE =isFieldFull(email);
        isFieldFull(message);
    
        console.log(fullE, fullN);
        
        //it checks if the name is valid only if the input is full
        if(fullN === true) isNameValid();
    
        //it checks if the email is valid only if the input is full
        if(fullE === true) isEmailValid();
    })
}
