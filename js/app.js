import {tagCanvas} from './components/1.about.js';
import {portfolioCards} from './components/2.portfolio.js';
import {showPopUp} from './components/3.portfolio-popup.js';
import {validateForm} from './components/4.form.js';



/*************** les animations  **************/
import { animSect1 } from './components/animations.js';


function run(){
    tagCanvas();
    portfolioCards();
    showPopUp();
    validateForm();

    /*************** les animations  **************/
    animSect1();
}

run();