import AOS from 'aos';
import 'aos/dist/aos.css';


// jaula animation
// ---------------

let jaula = document.getElementById('cage');
let titulo = document.getElementById('title');

function updateDisplay(e) {
    titulo.style.left = `${e.pageX - jaula.offsetLeft - 25}px`;
    titulo.style.top = `${e.pageY - jaula.offsetTop }px`;
}

function centerBox(event) {
    titulo.style.left = '50%';
    titulo.style.top ='50%';
}

if (jaula) {
    jaula.addEventListener( 'mousemove', (e) => { updateDisplay(e) } );
    jaula.addEventListener( 'mouseenter', (e) => { updateDisplay(e) } );
    jaula.addEventListener( 'mouseleave', (e) => { centerBox(e) } ); 
}


// on document ready
// -----------------

document.addEventListener('DOMContentLoaded', function () {

    // AOS prepare

    // childs of main that are not secitons / articles
    const items = document.querySelectorAll('main > *:not(section):not(article):not(.volver)');
    [].forEach.call(items, (item) => { item.setAttribute('data-aos','fade-in') })

    // childs of sections 
    const items2 = document.querySelectorAll('section > *:not(.volver)');
    [].forEach.call(items2, (item) => { item.setAttribute('data-aos','fade-in') })
  
    // childs of articles 
    const items3 = document.querySelectorAll('article > *:not(.volver)');
    [].forEach.call(items3, (item) => { item.setAttribute('data-aos','fade-in') })
      
}, false);


// on window ready
// -----------------

window.onload = (event) => {

    // unhide on window load
    document.querySelector('main').classList.remove('hideonload');
    document.querySelector('footer').classList.remove('hideonload');
    
    // AOS load
    setTimeout(() => {
        AOS.init({
            duration: 500,
            // once: true
        });
    }, 10);

};
