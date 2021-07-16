// Selecionando pelos id
const calcular = document.getElementById('calcular')

//Lógica  IMC
function imc() {
  const nome = document.getElementById('nome').value
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('resultado')
  //Validação de dados
  if (nome !== '' && altura !== '' && peso !== '') {
    const resultadoIMC = (peso / (altura * altura)).toFixed(2)
    let classificacao = ''
    let grau = ''

    if (resultadoIMC < 18.5) {
      classificacao = 'Magreza'
      grau = 0
    } else if (resultadoIMC < 24.9) {
      classificacao = 'Normal'
      grau = 0
    } else if (resultadoIMC < 29.9) {
      classificacao = 'Sobrepeso'
      grau = 1
    } else if (resultadoIMC < 39.9) {
      classificacao = 'Obesidade'
      grau = 2
    } else {
      classificacao = 'Obesidade Grave'
      grau = 3
    }

    //Mensagem que aparece na Div
    resultado.textContent = `${nome}, o seu IMC é ${resultadoIMC},você está com a classificação ${classificacao} de grau ${grau}  `
  } else {
    resultado.textContent = 'Preencha todos os campos !!! '
  }
}

//Evento de click
calcular.addEventListener('click', imc)

/*
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
 
}


const nome = document.querySelector('#nome')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')


// button calcular
document.querySelector('#calcular')

//resultado
document.querySelector('#resultado')

resultado = `Olá ${nome}, o seu IMC tem o resultado de ${imc}, a sua  é classificação  de ${classificacao} e grau ${grau}`
*/
