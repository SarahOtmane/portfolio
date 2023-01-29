/*************** les animations  **************/

/*****************************
 *  05:= animation section 1
*****************************/
const {scrollTop, clientHeight} = document.documentElement,
        timeline =  gsap.timeline({duration : .8});

function animSect1(){
    const tab = [document.querySelector('.title'), document.querySelector('.subtitle'), document.querySelector('.p__section1'), document.querySelector('.button'), document.querySelector('#myCanvas')];

    let topElement = tab[0].getBoundingClientRect().top;

    if(scrollTop > (scrollTop+topElement-200).toFixed() - clientHeight*.2){
        timeline.from(tab[0], {y:-80, opacity:0, ease:'back.out(3)'})
                .from(tab[1], {y:-80, opacity:0, ease:'back.out(3)'})
                .from(tab[2], {y:60, duration:1.5, opacity:0, ease :'elastic.out'})
                .from(tab[3], {duration:1.5, opacity:0, ease:'power1'})
                .from(tab[4], {x:80, opacity:0, ease:'back.out(3)'})
    }
}


/*****************************
 *  06:= animation section 2 
*****************************/
function animSect2(){
    const progress_bar_exp = document.querySelectorAll('.skills__experi'),
            progress_bar_indep = document.querySelectorAll('.skills__indep'),
            progress_bar_inter = document.querySelectorAll('.skills__inter');

    window.addEventListener('scroll', () =>{
        addClass(progress_bar_exp);
        addClass(progress_bar_indep);
        addClass(progress_bar_inter);
    })
}

function addClass(tab){
    for(let i = 0; i < tab.length; i++){
        let topElement = tab[i].getBoundingClientRect().top;

        if(scrollTop > (scrollTop+topElement-200).toFixed() - clientHeight*.5){
            tab[i].classList.add('active');
        }
    }
}


/*****************************
 *  07:= animation section 3
*****************************/
function animSect3(){
    window.addEventListener('scroll', () =>{
        let topElement = document.querySelector('.qualification__icon').nextElementSibling.getBoundingClientRect().top;
        if(scrollTop > (scrollTop+topElement-200).toFixed() - clientHeight*.6){
            timeline.from('.gauche', {x:-50, opacity:0, stagger:.6, ease:'bounce'})
                    .from('.droite', {x:50, opacity:0, stagger:.6, delay:-1, ease:'bounce'})
                    .from('.qualification__rounder', {opacity:0, stagger:.6, ease:'Elastic'})
                    .from('.qualification__line', {})
        }
    })
}




export function anim(){
    animSect1();
    animSect2();
    animSect3();
}