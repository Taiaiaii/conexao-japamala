console.log("===BLOG.JS");

//setup

// var carros = ["carro2.jpg", "carro3.jpg", "carro4.jpg", "carro5.jpg", "carro1.jpg"];
// var titulos = ["Slogan2", "Slogan3", "Slogan4", "e Anos de Garantia em Toda Linha "];

var destaques = [
    {
        foto: "japamala1.jpg",
        
    },


    {  // lista com objetoos
        foto: "japamala2.jpg",
        
    },
    {
        foto: "japamala3.jpg",
       
    },
    {
        foto: "japamala4.jpg",
        
    },
    {
        foto: "japamala5.jpg",
        
    },


];


//console.log(destaques);

var limite = destaques.length -1;
var pos = limite;

function proximoItem() {

    if (pos < limite) {
        pos++;
    } else {
        pos = 0;
    }

    return pos;
}

//destaques[proximoItem()]

function trocaDestaque() {

    var destaque = destaques[proximoItem()];

    document.querySelector(".banner__imagem").src = "img2/" + destaque.foto;
    // document.querySelector(".site-highlight__title").textContent = destaque.titulo;
    
    // document.querySelector(".active").classList.remove("active");   
    // document.querySelector('.site-highlight__bullets a[data-pos="'+pos+'"]').classList.add("active");
    
}

setInterval(trocaDestaque, 5000);

// function ativaDestaque(e) {
//     var corrente = e.target.dataset.pos;

//     var destaque = destaques[corrente];

//     document.querySelector(".site-highlight__image").src = "img/" + destaque.foto;
//     document.querySelector(".site-highlight__title").textContent = destaque.titulo;

//     document.querySelector(".active").classList.remove("active");
//     document.querySelector('.site-highlight__bullets a[data-pos="' + pos + '"]').classList.add("active");

//     pos = corrente;
// }


//mapeando eventos(click)
// var bullets = document.querySelector(".site-highlight__bullets");
// bullets.addEventListener("click", ativaDestaque);