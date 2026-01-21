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
const tags = ['dois', 'um', 'tres']
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

// -----------------------------------------------------------------------------



const sliders = document.querySelectorAll('.slider3')
const fila_butao = document.getElementById("navegacao")
let atual3 = 0
const proxbutton3 = document.getElementById('next-button3')
const prevbutton3 = document.getElementById('prev-button3')

function anterior(){
    let atual30 = (atual3 - 1 + sliders.length) % sliders.length;
    ir_slide(atual30)
}
function proximo(){
    let atual30 = (atual3 + 1) % sliders.length;
    ir_slide(atual30)
}
sliders.forEach( (_, index) => {
    let botao = document.createElement('span')
    botao.dataset.index = index
    botao.classList.add("botao")
    if (index == 0){botao.classList.add('on')}
    fila_butao.append(botao)
})

function ir_slide(index){
    sliders[atual3].classList.remove('on')
    fila_butao.children[atual3].classList.remove('on')

    atual3 = index

    sliders[index].classList.add('on')
    fila_butao.children[index].classList.add('on')
}

setInterval(proximo, 3000)

fila_butao.addEventListener('click', (e) => {
    if (!e.target.classList.contains('botao')) return
    ir_slide(Number(e.target.dataset.index))
})

proxbutton3.addEventListener('click', proximo) 
prevbutton3.addEventListener('click', anterior)

//--------------------------------------------------------

const fotos = document.querySelectorAll('.fotos')
const tela = document.getElementById('fotografias')
const localiza = document.getElementById('localizacao')
let tela_atual = 0
function criar_span(){
    fotos.forEach((_, index) =>{
        span = document.createElement('span')
        span.classList.add('bola')
        span.dataset.pos = index
        if(index == 0){
            span.classList.add('ap')
        }
        localiza.append(span)
    })
}

function ir_foto(pos){
    localiza.children[tela_atual].classList.remove('ap')
    tela_atual = pos
    tela.style.transform =  `translateX(-${pos*100}%)`
    localiza.children[tela_atual].classList.add('ap')
}

function automatico(){
    localiza.children[tela_atual].classList.remove('ap')
    tela_atual++
    if(tela_atual > fotos.length - 1){ tela_atual = 0}
    tela.style.transform =  `translateX(-${tela_atual*100}%)`
    localiza.children[tela_atual].classList.add('ap')
}
setInterval(automatico, 2000)
criar_span()
localiza.addEventListener('click', (e) => {if(e.target.classList.contains('bola')){ir_foto(e.target.dataset.pos)}
})

