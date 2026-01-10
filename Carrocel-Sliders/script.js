const imgs = document.querySelectorAll('.slider')
const prev_button = document.getElementById('prev-button')
const next_button = document.getElementById('next-button')
const contai = document.getElementById('pika')
let atual = 0
let intervalo = setInterval(nextbutton, 3000)

function start_interval(){
    if (intervalo == null) {
        intervalo = setInterval(nextbutton, 3000)
    }
}
function stop_interval(){
    clearInterval(intervalo)
    intervalo = null
}

function hidden_slider(){
    imgs.forEach(element => {element.classList.remove('on')});
}
function show_slider(){
    imgs[atual].classList.add('on')
}

function nextbutton(){
    hidden_slider()
    stop_interval()
    if (atual == imgs.length - 1){
        atual = 0
    } else {
        atual++
    }
    show_slider()
    start_interval()
}
function prevbutton(){
    hidden_slider()
    stop_interval()
    if (atual == 0){
        atual = imgs.length - 1
    } else {
        atual--
    }
    show_slider()
    start_interval()
} 

contai.addEventListener('mouseenter', stop_interval)
contai.addEventListener('mouseleave', start_interval)

prev_button.addEventListener('click', prevbutton)
next_button.addEventListener('click', nextbutton)

// ---------------------------------------------------------------------

const imagens = document.querySelectorAll('.imgs')
const tags = ['um', 'dois', 'tres']
let conta = 0

function remove_grid(){
    imagens.forEach(element => { element.classList.remove('um', 'dois', 'tres')})
}

function carrocel(){
    remove_grid()
    tags.forEach(element = (item) => {
        if (conta > imagens.length - 1) {
             conta = 0
        } else {
             imagens[conta].classList.add(`${item}`)
            conta ++
        }
    })
}

setInterval(carrocel, 3000)