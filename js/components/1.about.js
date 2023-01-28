/***********************
 *  01:= tagcanvas
************************/
export function tagCanvas(){
    let canvas = document.querySelector('canvas');
        canvas.setAttribute('width', '300');
        canvas.setAttribute('height', '300');
        canvas.style.marginTop = '10px';

    if(window.innerWidth > 800){
        canvas.setAttribute('width', '500');
        canvas.setAttribute('height', '500');
        canvas.style.marginTop = "-35px";
    }

    window.onload = function() {
        try {
            TagCanvas.Start('myCanvas','tags',{
            textColour: '#fff',
            outlineColour: 'transparent',
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05
          });
        } catch(e) {
          // something went wrong, hide the canvas container
          document.getElementById('myCanvasContainer').style.display = 'none';
        }
    };
}