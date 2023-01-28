/*************** les animations  **************/

/*****************************
 *  05:= animation section 1
*****************************/
const timeline =  gsap.timeline({duration : .8});

export function animSect1(){
    timeline.from('.title', {y:-80, opacity:0, ease:'back.out(3)'})
        .from('.subtitle', {y:-80, opacity:0, ease:'back.out(3)'})
        .from('.p__section1', {y:60, duration:1.5, opacity:0, ease :'elastic.out'})
        .from('.button', {duration:1.5, opacity:0, ease:'power1'})
        .from('#myCanvas', {x:80, opacity:0, ease:'back.out(3)'})
}