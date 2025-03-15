let fala1 = document.querySelector("button#1");
fala1.addEventListener('click', clicar1);

function clicar1 () {
   
}

let fala2 = document.querySelector('2#button');
fala2.addEventListener('click', clicar2);

function clicar2 () {
    if ( fala2.innerText == 'botão' ) {
        fala2.innerText = 'clicado';
    } else {
        fala2.innerText = 'botão';
    }
}

let fala3 = document.querySelectorAll('button#3');
fala3.addEventListener('click', clicar3);

function clicar3 () {
    if ( fala3.innerText == 'botão' ) {
        fala3.innerText = 'clicado';
    } else {
        fala3.innerText = 'botão';
    }
}
