function carregar() {
var msg = document.querySelector('#msg')
var img = document.querySelector('#imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()

msg.innerHTML = (`Agora são ${hora}:${minutos}`)
if (hora >= 0 && hora < 12) {
    msg.innerHTML +=(`, bom dia!`)
    img.src = 'manha.jpg'
    document.body.style.background = 'linear-gradient(to top right, #6699ff 0%, #ffffff 128%)'
} else if (hora >= 12 && hora < 18) {
    msg.innerHTML += (`, boa tarde!`)
    img.src = 'tarde.jpg'
    document.body.style.background = 'linear-gradient(to bottom left, #0099ff 0%, #ffcc66 100%)'
} else {
    msg.innerHTML += (`, boa noite!`)
    img.src = 'fotonoite.jpg'
    document.body.style.background = 'linear-gradient(to bottom left, #cc00cc 0%, #ff6666 128%)'
}

}
