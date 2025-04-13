var result = document.querySelector('#item1')

var button1 = document.querySelectorAll('button')[0];
var cont = 1; //contagem de cliques

var button2 = document.querySelectorAll('button')[1];
var button3 = document.querySelectorAll('button')[2];

button1.addEventListener('click', curi);
button2.addEventListener('click', horas);
button3.addEventListener('click', botao3);

function curi() {
  result.innerHTML = '<h2>Clique nos botões ao lado</h2><p>Lorem Ipsum sit amet dolor</p>'
  switch (cont) {
    case 1:
        document.querySelector('p').textContent = 'O cérebro humano possui 2,5 petabytes de armazenamento (O que equivale a 1 milhão de gigabytes).';
        break
    case 2:
        document.querySelector('p').textContent = 'Ursos polares são praticamente invisíveis para câmeras de calor.';
        break
    case 3:
        document.querySelector('p').textContent = 'O Brasil possui quatro fusos horários.';
        break
    default:
  }
  cont ++;
  if (cont == 4) {
    cont = 1;
  }
}
function horas() {
  result.innerHTML = '<h2>Clique nos botões ao lado</h2><p>Lorem Ipsum sit amet dolor</p>'
  let img = document.createElement('img');
  //img.innerHTML = '';
  let meses = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
  let diaSem = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  let data = new Date();
  let dataHj = [
  //horas
  data.getHours(),
  data.getMinutes(),
  //data
  data.getDay(),
  data.getDate(),
  data.getMonth(),
  data.getFullYear()
  ];
  if (dataHj[0] < 10 ) {
    dataHj[0] = `0${dataHj[0]}`
  }
  if (dataHj[1] < 10 ) {
    dataHj[1] = `0${dataHj[1]}`
  }
  //resultado
  document.querySelector('p').textContent = `Hoje é ${diaSem[dataHj[2]]}, dia ${dataHj[3]} de ${meses[dataHj[4]]} de ${dataHj[5]}, às ${dataHj[0]}:${dataHj[1]}.`;
  console.log(`Hoje é ${diaSem[dataHj[2]]}, dia ${dataHj[3]} de ${meses[dataHj[4]]} de ${dataHj[5]}, às ${dataHj[0]}:${dataHj[1]}.`);
  //imagens
  if (dataHj[0] < 12) {
    img.setAttribute('src', ' ');
    img.setAttribute('src', 'fotomanha.png');
    
  } else if (dataHj[0] < 18) {
    img.setAttribute('src', 'fototarde.png');
  } else {
    img.setAttribute('src', 'fotonoite.png');
  }
  result.appendChild(img);
  img.style.width = '25%';
  img.style.height = 'auto';
}
function botao3 () {
  //button3.textContent = 'Clicado';
  document.querySelector('p').textContent = 'Lorem ipsum sit amet';
}
