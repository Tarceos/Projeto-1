var button1 = document.querySelectorAll('button')[0];
var button2 = document.querySelectorAll('button')[1];
var button3 = document.querySelectorAll('button')[2];

button1.addEventListener('click', curi);
button2.addEventListener('click', horas);
button3.addEventListener('click', botao3);

function curi() {
  //button1.textContent = 'Clicado';
  document.querySelector('p').textContent = 'Lorem ipsum sit amet';
}
function horas() {
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
  console.log(`Hoje é ${diaSem[dataHj[2]]}, dia ${dataHj[3]} de ${meses[dataHj[4]]} de ${dataHj[5], às ${dataHj[0]}:${dataHj[1]}.`);
}
function botao3 () {
  //button3.textContent = 'Clicado';
  document.querySelector('p').textContent = 'Lorem ipsum sit amet';
}
