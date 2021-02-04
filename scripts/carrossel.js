let destaques = [
    {
        foto: "japamala1.jpg",
        titulo: "Conecte-se com você,<br> com o momento presente <br> e com o Divino "
        
    },


    {  // lista com objetoos
        foto: "japamala2.jpg",
        titulo: "Conecte-se com você,<br> com o momento presente <br> e com o Divino "
        
    },

    {
        foto: "japamala4.jpg",
        titulo: "Conecte-se com você,<br> com o momento presente <br> e com o Divino "
        
    },

];


let limite = destaques.length -1;
let posicao = limite;

function proximoItem() {

    if (posicao < limite) {
        posicao++;
    } else {
        posicao = 0;
    }

    return posicao;
}


function trocaDestaque() {

    let destaque = destaques[proximoItem()];

    document.querySelector(".banner__imagem").src = "img/" + destaque.foto;
    document.querySelector(".banner__titulo").innerHTML = destaque.titulo;

}

setInterval(trocaDestaque, 4000);
