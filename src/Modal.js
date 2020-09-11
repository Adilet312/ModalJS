
import './styles.css';


document.querySelector('.cancel').addEventListener('click',closeLayout,false);
document.querySelector('.modal').addEventListener('click',openLayout,false);
function openLayout(){
  let layout = document.querySelector('.container-overlay');
  layout.style.visibility ="visible";
}
function closeLayout(){
  let layout = document.querySelector('.container-overlay');
  layout.style.visibility ="hidden";
}

/*
let div = document.createElement('div');
div.setAttribute('class','overlay');
div.style.position = "absolute";
div.style.top = window.pageYOffset + "px";
div.style.left =  window.pageXOffset + "px";
div.style.background = 'rgba(0,0,0,0.7)';
div.style.width = window.innerWidth + "px";
div.style.height = window.innerHeight + "px";
*/
