import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', function () {

    // const paragraphs = document.getElementsByTagName('p');
    const items = document.querySelectorAll('main > *:not(.volver)');
    [].forEach.call(items, (item) => { item.setAttribute('data-aos','fade-in') })

    setTimeout(() => {
        AOS.init({
            duration: 500,
            once: true
        });
    }, 300);
    

}, false);


// jaula

let jaula = document.getElementById('cage');
let titulo = document.getElementById('title');

function updateDisplay(e) {
    titulo.style.left = `${e.pageX - jaula.offsetLeft - titulo.offsetWidth/2 }px`;
    titulo.style.top = `${e.pageY - jaula.offsetTop - titulo.offsetHeight/2}px`;
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
