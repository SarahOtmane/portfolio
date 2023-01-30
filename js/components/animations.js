/*************** les animations  **************/

/*****************************
 *  05:= animation section 1
*****************************/
//récup la hauteur du scroll de l'utilisateur
const {scrollTop, clientHeight} = document.documentElement,
        timeline =  gsap.timeline({duration : .8});

function animSect1(){
    // recup tous les elements de la section1 pour qu'ils aient une animation
    const tab = [document.querySelector('.title'), document.querySelector('.subtitle'), document.querySelector('.p__section1'), document.querySelector('.button'), document.querySelector('#myCanvas')];

    //recup la distante entre le haut de l'ecran et la position du titre 
    let topElement = tab[0].getBoundingClientRect().top;

    //si le titre est vers le haut de la page les animations seront declenchées
    if(scrollTop > (scrollTop+topElement-200).toFixed() - clientHeight*.2){
        timeline.from(tab[0], {y:-80, opacity:0, ease:'back.out(3)'})
                .from(tab[1], {y:-80, opacity:0, ease:'back.out(3)'})
                .from(tab[2], {y:60, duration:1.5, opacity:0, ease :'elastic.out'})
                .from(tab[3], {duration:1.5, opacity:0, ease:'power1'})
                .from(tab[4], {x:80, opacity:0, ease:'back.out(3)'})
    }

    //changer la couleur de '.strong' au hover
    let anim = document.querySelectorAll('.strong');
    for(let i = 0; i < anim.length; i++){
        anim[i].addEventListener('mouseenter', () => {
            anim[i].classList.add('anima');
        });

        anim[i].addEventListener('mouseleave', () => {
            anim[i].classList.remove('anima');
        })
    }
}


/*****************************
 *  06:= animation section 2 
*****************************/
function animSect2(){
    // recup les barres qui montre les skills
    const progress_bar_exp = document.querySelectorAll('.skills__experi'),
            progress_bar_indep = document.querySelectorAll('.skills__indep'),
            progress_bar_inter = document.querySelectorAll('.skills__inter');

    window.addEventListener('scroll', () =>{
        addClass(progress_bar_exp);
        addClass(progress_bar_indep);
        addClass(progress_bar_inter);
    })
}

//fonction qui permet de declenche l'animation lorsque la section est afficher à l'ecran
function addClass(tab){
    for(let i = 0; i < tab.length; i++){
        let topElement = tab[i].getBoundingClientRect().top;

        if(scrollTop > (scrollTop+topElement-200).toFixed() - clientHeight*.5){
            tab[i].classList.add('active');
        }
    }
}

export function anim(){
    animSect1();
    animSect2();
}