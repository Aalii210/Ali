var mas = document.querySelector(".more");
var texto_mas = document.querySelector(".none");
var traducir = document.querySelector(".traducir");
var traduccion = document.querySelector(".traduccion");
var texto_inicial = document.querySelector(".texto-inicial");

mas.onclick = () =>{
    texto_inicial.style.display = "none";
    texto_mas.style.display = "block";
    mas.style.display = "none"
}
traducir.onclick = () =>{
    texto_inicial.style.display = "none";
    texto_mas.style.display = "none";
    traduccion.style.display = "block";
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  ////////////////////////////////////////
  var inicio = document.querySelector(".boton-inicio")
  var boton_busqueda = document.querySelector(".boton-busqueda")
  var buscar = document.querySelector(".input-group-text");
  var input = document.querySelector(".form-control");
  var imagenes = document.querySelector(".imagenes");
  var svg = document.querySelector(".svg");
  var tamaño = document.querySelector(".buscar");
  var busqueda = document.querySelector(".busquedas-recientes");
  var flecha = document.querySelector(".flecha-atras");
  var perfil1 = document.querySelector(".perfil1")
  var svg1 = document.querySelector(".svg1");
  var perfil2 = document.querySelector(".perfil2")
  var svg2 = document.querySelector(".svg2");
  var perfil3 = document.querySelector(".perfil3")
  var svg3 = document.querySelector(".svg3");
  var perfil4 = document.querySelector(".perfil4")
  var svg4 = document.querySelector(".svg4");
  var perfil5 = document.querySelector(".perfil5")
  var svg5 = document.querySelector(".svg5");
  

  inicio.onclick = () =>{
    tamaño.style.display = "none";
    document.querySelector(".sub-contenedor").style.display = "block"
  }
  boton_busqueda.onclick = () =>{
    tamaño.style.display = "block";
    document.querySelector(".sub-contenedor").style.display = "none"
  }
  input.onclick = () =>{
    imagenes.style.display = "none";
    svg.style.display = "none";
    busqueda.style.display = "block";
    tamaño.style.height = "100vh";
    flecha.style.display = "block";
    document.querySelector(".buscador").style.padding = "20px 20px 20px 50px";
  }

  flecha.onclick = () =>{
    imagenes.style.display = "flex";
    svg.style.display = "block";
    tamaño.style.height = "125vh";
    flecha.style.display = "none";
    document.querySelector(".buscador").style.padding = "20px";
    busqueda.style.display = "none";
  }

  svg1.onclick = () =>{
    perfil1.style.display = "none"
  }
  svg2.onclick = () =>{
    perfil2.style.display = "none"
  }

  svg3.onclick = () =>{
    perfil3.style.display = "none"
  }

  svg4.onclick = () =>{
    perfil4.style.display = "none"
  }

  svg5.onclick = () =>{
    perfil5.style.display = "none"
  }
