// Calculo imc

var nome = prompt('Qual o seu nome ? ')
var peso = parseFloat(prompt('Qual o seu peso ? '))
var altura = parseFloat(prompt('Qual a sua altura ?'))
var alturaFinal = altura * 2
var imc = peso / alturaFinal

if (imc < 18.5) {
  console.log('Magreza')
} else if (imc <= 24.9) {
  console.log('Normal')
} else if (imc <= 29.9) {
  console.log('Sobrepeso')
} else if (imc <= 39.9) {
  console.log('Obesidade')
} else {
  console.log('Obesidade grave')
}
