//Wanneer je een toets indrukt veranderd de kleur van de tekst

var tekst = document.querySelector('p');
var tekst2 = document.querySelector('.tekst');

document.addEventListener('keypress',
    function () {
        tekst.classList.toggle('tekstkleur');
        tekst2.classList.toggle('tekstkleur');
    }
)

//Wanneer je op een oog klikt komt de lijn langzaam te voorschijn. Wanneer je hier opnieuw op klikt verdwijnen de lijnen weer.

var oog1 = document.querySelector('#oog1');
var oog2 = document.querySelector('#oog2');
var oog3 = document.querySelector('#oog3');
var oog5 = document.querySelector('#oog5');
var oog6 = document.querySelector('#oog6');

var lijn1 = document.querySelector('.lijn1');
var lijn2 = document.querySelector('.lijn2');
var lijn3 = document.querySelector('.lijn5');
var lijn5 = document.querySelector('.lijn4');
var lijn6 = document.querySelector('.lijn3');

//oog1.addEventListener('click', function () {
//    lijn1.classList.add('lijn-animatie');
//})
oog1.addEventListener('click', function () {
    lijn1.classList.toggle('lijn-animatie');
})
oog2.addEventListener('click', function () {
    lijn2.classList.toggle('lijn-animatie');
})
oog3.addEventListener('click', function () {
    lijn3.classList.toggle('lijn-animatie');
})
oog5.addEventListener('click', function () {
    lijn5.classList.toggle('lijn-animatie');
})
oog6.addEventListener('click', function () {
    lijn6.classList.toggle('lijn-animatie');
})
