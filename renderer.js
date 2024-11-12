const rootStyles = document.documentElement.style
const redInput = document.getElementById('redInput')
const greenInput = document.getElementById('greenInput')
const blueInput = document.getElementById('blueInput')
const mixer = document.getElementById('mixer')
const resultText = document.getElementById('resultText')
let redValue
let greenValue
let blueValue

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

mixer.addEventListener('submit', (e) => {
  e.preventDefault()
  let resultValue = `rgb(${redValue}, ${greenValue}, ${blueValue})`
  rootStyles.setProperty('--result', resultValue)
  resultText.innerText = `rgb(${redValue}, ${greenValue}, ${blueValue})`
  redInput.value = ''
  greenInput.value = ''
  blueInput.value = ''
})
