// Navbar toggle
const menu = document.getElementById('menu');
const nav = document.querySelector('.navbar');
menu.onclick = ()=> nav.classList.toggle('active');

// Typing effect
const typingText = document.querySelector('.typing');
const texts = ["Mathematics Student","CASPAM | BZU Multan","Learning Coding & Projects"];
let count = 0, index = 0, currentText = '', letter = '';
(function type(){
    if(count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    typingText.textContent = letter;
    if(letter.length === currentText.length){
        count++; index=0;
        setTimeout(type,1000);
    } else {
        setTimeout(type,150);
    }
}());

// Skills animation
const bars = document.querySelectorAll('.bar');
window.addEventListener('scroll', ()=>{
    const triggerBottom = window.innerHeight/5*4;
    bars.forEach(bar=>{
        const barTop = bar.getBoundingClientRect().top;
        if(barTop < triggerBottom){
            bar.style.width = bar.getAttribute('data-width');
        }
    });
});
