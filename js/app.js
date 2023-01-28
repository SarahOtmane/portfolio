import {tagCanvas} from './components/about.js';
import {portfolioCards} from './components/portfolio.js';
import {showPopUp} from './components/portfolio-popup.js';
import {validateForm} from './components/form.js';
import { movies } from './components/movies.js';



/*************** les animations  **************/
import { animSect1 } from './components/animations.js';


function run(){
    tagCanvas();
    portfolioCards();
    showPopUp();
    validateForm();
    movies();

    /*************** les animations  **************/
    animSect1();
}

run();