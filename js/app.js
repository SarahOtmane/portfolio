/***********************
 *  01:= tagcanvas
************************/
let canvas = document.querySelector('canvas');
    canvas.setAttribute('width', '300');
    canvas.setAttribute('height', '300');
    canvas.style.marginTop = '10px';

if(window.innerWidth > 800){
    canvas.setAttribute('width', '500');
    canvas.setAttribute('height', '500');
    canvas.style.marginTop = "-35px";
}


$(document).ready(function(){
    if(!$('#myCanvas').tagcanvas({
        textColour: "#fff",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
    }, "tags")){
        $("#myCanvasContainer");
    }
})



/************************
 *  02:= word card
************************/

/*separer les cards selon leur selection*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

    /*quand on est sur une selection*/
const linkWork = document.querySelectorAll('.work__item');

function activeWork(){
    linkWork.forEach(L => L.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach(L => L.addEventListener('click', activeWork));



/*****************************
 *  03:= portfolio popup
*****************************/

document.addEventListener('click', e =>{
    if(e.target.classList.contains('work__button')){
        togglePortfolioPopup();
        porfolioItemDetails(e.target.parentElement);
    }
});

function togglePortfolioPopup(){
    document.querySelector('.portfolio__popup').classList.toggle('open');
}

document.querySelector('.portfolio__popup-close').addEventListener('click', togglePortfolioPopup);

function porfolioItemDetails(portfolioItem){
    document.querySelector('.pp__thumbnail img').src = portfolioItem.querySelector('.work__img').src;
    document.querySelector('.portfolio__popup-subtitle span').innerHTML = portfolioItem.querySelector('.work__title').innerHTML;
    document.querySelector('.portfolio__popup-body').innerHTML = portfolioItem.querySelector('.portfolio__item-details').innerHTML;
}


/*****************************
 *  04:= form
*****************************/
let submit = document.getElementById('submitButton'),
    namee = document.getElementById('name'),
    email = document.getElementById('email'),
    message = document.getElementById('message');

//function which check if the email is valid
function isEmailValid(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat)){
        return true;
    }else{
        return false;
    }
}

//function which check if the field is full and if it was it returns true
function ifFieldFull(field){
    if(field.value === ''){
        field.nextElementSibling.style.display = 'block';
        return false;
    }else{
        return true;
    }
}

function isFormValid(){
    let validForm, fullN, fullE, fullS;

    //check if the three fields are full or not
    fullN = ifFieldFull(namee);
    fullE = ifFieldFull(email);
    fullS = ifFieldFull(message);

    //check if the email is valid only if the email is not empty
    if(ifFieldFull(email) === false){
        if(!isEmailValid()){
            email.nextElementSibling.nextElementSibling.style.display = 'block';
        }
    }

    if((fullE && fullN && fullS && isEmailValid()) === true){
        validForm = true;
    }else{
        validForm = false;
    }

    return validForm;
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let formValid = isFormValid();
    if(formValid){
        // submit the form
    }
})














/*************** les animations  **************/

/*****************************
 *  03:= animation section 1
*****************************/
const timeline =  gsap.timeline({duration : .8});

timeline.from('.title', {y:-80, opacity:0, ease:'back.out(3)'})
        .from('.subtitle', {y:-80, opacity:0, ease:'back.out(3)'})
        .from('.p__section1', {y:60, duration:1.5, opacity:0, ease :'elastic.out'})
        .from('.button', {duration:1.5, opacity:0, ease:'power1'})
        .from('#myCanvas', {x:80, opacity:0, ease:'back.out(3)'})



