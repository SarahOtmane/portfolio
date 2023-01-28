
/*****************************
 *  03:= portfolio popup
*****************************/
function togglePortfolioPopup(){
    document.querySelector('.portfolio__popup').classList.toggle('open');
}

function porfolioItemDetails(portfolioItem){
    document.querySelector('.pp__thumbnail img').src = portfolioItem.querySelector('.work__img').src;
    document.querySelector('.portfolio__popup-subtitle span').innerHTML = portfolioItem.querySelector('.work__title').innerHTML;
    document.querySelector('.portfolio__popup-body').innerHTML = portfolioItem.querySelector('.portfolio__item-details').innerHTML;
}

export function showPopUp(){
    document.addEventListener('click', e =>{
        if(e.target.classList.contains('work__button')){
            togglePortfolioPopup();
            porfolioItemDetails(e.target.parentElement);
        }
    });

    document.querySelector('.portfolio__popup-close').addEventListener('click', togglePortfolioPopup);
}