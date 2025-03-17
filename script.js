var button1 = document.querySelectorAll('button')[0];
var button2 = document.querySelectorAll('button')[1];
var button3 = document.querySelectorAll('button')[2];

button1.addEventListener('click', botao1);
button2.addEventListener('click', botao2);
button3.addEventListener('click', botao3);

function botao1 () {
  button1.textContent = 'Clicado';
}
function botao2 () {
  button2.textContent = 'Clicado';
}
function botao3 () {
  button3.textContent = 'Clicado';
}
