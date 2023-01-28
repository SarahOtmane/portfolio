let movies_section = document.getElementById('movies__content'),
    nb;

function fetchh(nb){
    fetch(`https://api.themoviedb.org/3/movie/${nb}?api_key=49905de87860cd24809574eec8de9a69`)
    .then(resp => resp.json())
    .then(result => {
        if(result.success === false){
            //il y'a des nombre qui ne corespondent a aucun film
            //donc si c le cas il y'aura un mess d'erreur mais ca n'interromp pas la prog
            //si c le cas on refais appel a la fct fetchh

            nb = Math.floor(Math.random()*8000 + 1);
            fetchh(nb);
        }else if(result.poster_path === null ){
            //il y'a des films qui n'ont pas de photos
            //donc si c le cas il y'aura un mess d'erreur mais ca n'interromp pas la prog
            //si c le cas on refais appel a la fct fetchh
            
            nb = Math.floor(Math.random()*8000 + 1);
            fetchh(nb);
        }else{
            let src = result.poster_path;
            movies_section.innerHTML += `<article class='column'> 
                                            <h4 class='movies__title'>${result.title}</h4>
                                            <img src='https://image.tmdb.org/t/p/w500/${src}'>
                                            <p class='movies__overview'>${result.overview}</p>
                                        </article>`
        }  
    })
}

export function movies(){
    for(let i = 0; i < 3; i++){
        nb = Math.floor(Math.random()*8000 + 1);
        fetchh(nb);
    }
}   
