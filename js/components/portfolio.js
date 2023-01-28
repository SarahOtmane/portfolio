/************************
 *  02:= word card
************************/

export function portfolioCards(){
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
}