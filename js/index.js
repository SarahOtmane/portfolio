/***********************
 *  01:= tagcanvas
************************/
let canvas = document.querySelector('canvas');
    canvas.setAttribute('width', '300');
    canvas.setAttribute('height', '300');

if(window.innerWidth > 768){
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