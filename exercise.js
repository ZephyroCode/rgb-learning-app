const rootStyles = document.documentElement.style
const redInput = document.getElementById('redInput')
const greenInput = document.getElementById('greenInput')
const blueInput = document.getElementById('blueInput')
const resultText = document.getElementById('resultText')
const generatorButton = document.getElementById('generatorButton')
const exerciseForm = document.getElementById('exerciseForm')
let redValue
let greenValue
let blueValue
let randomColor

const generateRandomNumber = () => Math.floor(Math.random() * 255 - 0 + 1 + 0)

redInput.addEventListener('change', (e) => {
  let value = e.target.value
  redValue = value
})

greenInput.addEventListener('change', (e) => {
  let value = e.target.value
  greenValue = value
})

blueInput.addEventListener('change', (e) => {
  let value = e.target.value
  blueValue = value
})

generatorButton.addEventListener('click', (e) => {
  redValue = generateRandomNumber()
  greenValue = generateRandomNumber()
  blueValue = generateRandomNumber()

  randomColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`

  rootStyles.setProperty('--exercise', randomColor)
  resultText.innerHTML = '¿Qué color crees que es?'
})

exerciseForm.addEventListener('submit', (e) => {
  e.preventDefault()
  resultText.innerHTML = `El color es ${randomColor}`
})
