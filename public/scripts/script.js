console.log('hi')

let button = document.querySelector('button')
let footerInfo = document.querySelector('main > section:nth-of-type(3)')
let close = document.querySelector('.close')

button.addEventListener('click', moreInfo)
close.addEventListener('click', closeInfo)

function moreInfo() {
    console.log('werkt')
    footerInfo.classList.add('longer')
    this.classList.add('hidden')
    close.classList.remove('hidden')
}

function closeInfo() {
    button.classList.remove('hidden')
    this.classList.add('hidden')
    footerInfo.classList.remove('longer')
    console.log('close')
}