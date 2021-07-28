function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() //Data atual
    //var hora = data.getHours() //hora atual
    var hora = 9
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
       // BOM DIA!
       img.src = "manha.png"
       document.body.style.background = '#ECDBBB'
    } else if (hora >= 12 && hora <= 18) {
       // BOA TARDE!
       img.src = "tarde.png"
       document.body.style.background = '#9D835C'
    } else {
       // BOA NOITE!
       img.src = "noite.png"
       document.body.style.background = '#3576AE'
    }
}

