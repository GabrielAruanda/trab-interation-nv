const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = ''

    if (imc < 18.5) {
      classification = 'Tá no pó!'
    } else if (imc < 25) {
      classification = 'Ta sereno cpx'
    } else if (imc < 30) {
      classification = 'Cuidado hein'
    } else if (imc < 35) {
      classification = 'Deu de ifood!'
    } else if (imc < 41) {
      classification = 'Vai para a academia com josé'
    } else {
      classification = 'Só a bariatrica salva'
    }
    
    resultado.innerHTML = `IMC: ${imc} (${classification})`
  } else {
    resultado.innerHTML = 'Preencha os campos'
  }
}