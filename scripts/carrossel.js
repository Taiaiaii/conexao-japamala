let banner = [
    {
        foto: "japamala1.jpg"
    }, 
    {
        foto: "japamala2.jpg"

    }, 
    {
        foto: "japamala3.jpg"

    }, 
    {
        foto: "japamala4.jpg"

    },
     {
        foto: "japamala5.jpg"

    },
    {
        foto: "japamala6.jpg"

    },


];

let limite = banner.length -1;
let posicao = limite;

function proximoItem() {
    if (position < limite) {
        posicao++;
    }else {
        posicao = 0;
    }

    return posicao;
}

function trocaBanner () {

    let destaque = banner[proximoItem()];

    document.querySelector(".banner__foto").src = "img2/" + destaque.foto;
}

trocaBanner()