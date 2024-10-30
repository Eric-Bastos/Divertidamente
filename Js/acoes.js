//dom

const alvo = document.querySelector('#alvo')
const btalegria = document.querySelector('#btalegria')
const bttristeza = document.querySelector('#bttristeza')
const btnojinho = document.querySelector('#btnojinho')
const btraiva = document.querySelector('#btraiva')

//evento

btalegria.addEventListener('click',alegria)
bttristeza.addEventListener('click',tristeza)
btnojinho.addEventListener('click',nojinho)
btraiva.addEventListener('click',raiva)

//função

function alegria(){
    alvo.src = 'imagens/02.png'
}
function tristeza(){
    alvo.src = 'imagens/04.png'
}
function nojinho(){
    alvo.src = 'imagens/03.png'
}
function raiva(){
    alvo.src = 'imagens/01.png'
}