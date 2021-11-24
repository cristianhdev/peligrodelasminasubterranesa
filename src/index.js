
let elementoMove;
let elementosDomSvg;
let partesMapa;

let audios_sond = ['puma', 'borrego', 'coyote', 'liebre', 'serpiente', 'correcaminos', 'buitre', 'perropradera']
let audio;
let audio2;
let path_sound = './assets/audios/'
let colorOriginal;


// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

function init() {


 /*  audio = new Audio(`${path_sound}/Audio1.mp3`);
  audio.play();
  audio.loop = true */



}




function InicioActividad() {
  /* audio.muted = true; */

  document.querySelector('.contenedor-bienvenida').style.display = 'none'
  document.querySelector('.contenedor-imagen-actividad').style.display = 'flex'
  document.querySelector('.contenedor-imagen-actividad').style.visibility = 'visible'


  let elementosSvgMapaBienvenida = document.querySelector('#mapa-bienvenida')
  let documentoMapaBienvenida = elementosSvgMapaBienvenida.getSVGDocument()
  let elementosDomSvgMapaBienvenida = documentoMapaBienvenida.querySelectorAll('svg g')
  let sabana= documentoMapaBienvenida.querySelector('#Sabana')
  let selva= documentoMapaBienvenida.querySelector('#Selva')
  let tundra= documentoMapaBienvenida.querySelector('#Tundra')
  let taiga= documentoMapaBienvenida.querySelector('#Taiga')
  let pradera= documentoMapaBienvenida.querySelector('#Pradera')
  let desierto= documentoMapaBienvenida.querySelector('#Desierto')

   partesMapa= [
    sabana,
    selva,
    tundra,
    taiga,
    pradera,
    desierto
  ]

 

partesMapa.forEach(parte => {
    /* parte.addEventListener('click', mostrarFigura, false) */
    parte.addEventListener('mouseover', mostrarFigura, false)
    parte.addEventListener('mouseout', ocultarFigura, false)
    parte.addEventListener('touchleave', mostrarFigura, false)
    parte.addEventListener('touchend', ocultarFigura, false) 
    parte.style.cursor = 'pointer'
  });
}


/* function overMapaInicio(e) {
  colorOriginal= e.target.style.fill
  e.path[2].style.filter= 'drop-shadow(2px 4px 3px black) brightness(1.2)';
}

function outMapaInicio(e) {
  e.target.style.fill = colorOriginal
  e.path[2].style.filter='none'
} */


function overAnimalDrag() {
  audio2 = new Audio(`${path_sound}/overDrag.mp3`);
  audio2.muted = false;
  audio2.play();
}

function outAnimalDrag() {
  audio2.muted = true;
}

function reinciar() {
  window.location.reload()
}

function mostrarFigura(e) {
  colorOriginal= e.target.style.fill
  e.path[2].style.filter= 'drop-shadow(2px 4px 3px black) brightness(1.2)';
  document.querySelector(`#${e.path[2].id}-completo`).style.display='flex'
}

function ocultarFigura(e){
  e.target.style.fill = colorOriginal
  e.path[2].style.filter='none'
  document.querySelector(`#${e.path[2].id}-completo`).style.display='none'
}

function hidennDiv(e) {
  elementoMove.style.display = 'none'

}


/* span.addEventListener('click', ocultarModal); */
window.addEventListener('click', ocultarModalVentana)

function ocultarModal() {
  modal.style.display = "none";
  audio.muted = true;
}

// When the user clicks anywhere outside of the modal, close it
function ocultarModalVentana(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    audio.muted = true;
  }
}

function cargarAudio(animal) {


  /* 
    if (audios_sond[posicion] != null || audios_sond[posicion] != undefined) {
      audio = new Audio(`${path_sound}${audios_sond[posicion]}.mp3`);
      audio.muted=false;
      audio.play();
    } */

}

/* element.addEventListener("touchmove", (e) => {
  if (this.isTouchEventWithElement(e)) return;
  // PERFORM MOUSEOUT ACTION
 });
 
 
 element.addEventListener("touchend", (e) => {
  if (this.isTouchEventWithElement(e)) return;
  // PERFORM MOUSEOUT ACTION
 }); */


function isTouchEventWithElement(TouchEvent) {
  const element = this.getElement();
  const item = e.changedTouches.item(0);
  if (element === null || item === null) return false;
  return element.getBoundingClientRect().right > item.clientX &&
    element.getBoundingClientRect().left < item.clientX &&
    element.getBoundingClientRect().top < item.clientY &&
    element.getBoundingClientRect().bottom > item.clientY;
}

