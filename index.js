setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

console.log(hourHand);
console.log(minuteHand);
console.log(secondHand);

function setClock() {
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() /60
    const minuteRatio = (secondRatio + currentDate.getMinutes())/60
    const hourRatio = (minuteRatio +  currentDate.getHours())/12
    setHand(secondHand, secondRatio)
    setHand(minuteHand, minuteRatio)
    setHand(hourHand, hourRatio)
}

function setHand(element, rotationRatio) {
    element.style.setProperty('--rotationh', rotationRatio * 360)
}

setClock()