// Selecionando pelos id
const nome = document.getElementById('nome')
const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const calcular = document.getElementById('calcular')
const resultado = document.getElementById('resultado')

//Evento de click
calcular.addEventListener('click', imc)

//Lógica  IMC
function resultado() {
  const imc = peso / (altura * 2)
  let classificacao = ''
  let grau = ''
  if (imc < 18.5) {
    classificacao = 'Magreza'
    grau = 0
  } else if (imc <= 24.9) {
    classificacao = 'Normal'
    grau = 0
  } else if (imc <= 29.9) {
    classificacao = 'Sobrepeso'
    grau = 1
  } else if (imc <= 39.9) {
    classificacao = 'Obesidade'
    grau = 2
  } else {
    classificacao = 'Obesidade Grave'
    grau = 3
  }
  // return resultado()
  resultado.textContent = `Olá ${nome}, o seu IMC tem o resultado de ${imc}, a sua  é classificação  de ${classificacao} e grau ${grau}`
}

/*
const nome = document.querySelector('#nome')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')


// button calcular
document.querySelector('#calcular')

//resultado
document.querySelector('#resultado')

resultado = `Olá ${nome}, o seu IMC tem o resultado de ${imc}, a sua  é classificação  de ${classificacao} e grau ${grau}`
*/
