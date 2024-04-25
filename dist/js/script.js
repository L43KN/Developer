const hamburger = document.querySelector('.promo__hamburger')
const menu = document.querySelector('.menu')
const close = document.querySelector('.menu__block-close')

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
})

close.addEventListener('click', () => {
    menu.classList.remove('active')
})




const percents = document.querySelectorAll('.skills__inner-percent')
const mainLines = document.querySelectorAll('.skills__inner-line--main')

percents.forEach( (item, i) => {
    mainLines[i].style.width = item.innerHTML;
})