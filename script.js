var boton_si = document.getElementById("boton_si");
var boton_no = document.getElementById("boton_no");
var boton_no1 = document.getElementById("boton_no1");
var boton_no2 = document.getElementById("boton_no2");
var boton_no3 = document.getElementById("boton_no3");
var boton_no4 = document.getElementById("boton_no4");
var saber = document.getElementById("contenedor");
var primera_parte = document.getElementById("primera_parte");
var quitar = document.getElementById("quitar");
var audio = document.getElementById("audio");
var enviar = document.getElementById("enviar");
var formulario = document.getElementById("formulario");
var contenedor = document.getElementById("contenedor");
var quitar2 = document.getElementById("quitar2");
var oculto = document.getElementById("oculto");
var mostrar = document.getElementById("invalidCheck");


///////////////////////////////////
//SI PASAMOS EL RATON SOBRE LOS BOTONOS "NO"
boton_no.onmouseover = () =>{
  boton_no.style.display = "none";
  boton_no1.style.display = "inline-block"
}

boton_no1.onmouseover = () =>{
  boton_no1.style.display = "none";
  boton_no4.style.display = "inline-block"
}

boton_no4.onmouseover = () =>{
  boton_no4.style.display = "none";
  boton_no3.style.display = "inline-block"
}

boton_no3.onmouseover = () =>{
  boton_no3.style.display = "none";
  boton_no2.style.display = "inline-block"
}

boton_no2.onmouseover = () =>{
  boton_no2.style.display = "none";
  boton_no.style.display = "inline-block"
}


///////////////////////////////////
boton_si.onclick = ()=>{
  saber.style.display = "block";
  primera_parte.style.display = "none";
  audio.play()
}

quitar.onclick = () =>{
  saber.style.display = "none";
  primera_parte.style.display = "block";
}

mostrar.onclick = () =>{
  enviar.style.display = "block";

}

let timeout;
enviar.onclick = () =>{
formulario.style.display = "none";
quitar.style.display = "none";
document.getElementById("quitar2").display = "block";

 timeout = setTimeout(alertFunc, 000);
  timeout = setTimeout(ocultarfunc, 10000);
  timeout = setTimeout(MostrarP, 000);
  timeout = setTimeout(OcultarP, 3000);
  timeout = setTimeout(MostrarP2, 3000);
  timeout = setTimeout(OcultarP2, 6000);
  timeout = setTimeout(MostrarP3, 6000);
  timeout = setTimeout(OcultarP3, 10000);
  timeout = setTimeout(Imagen, 10000);
}

quitar2.onclick = () => {
contenedor.style.display = "none";
oculto.style.display = "flex";
}

function alertFunc() {
  document.getElementById("reload").style.display = "block";
  }
  
function ocultarfunc(){
  document.getElementById("carga").style.display = "none";
  document.getElementById("quitar2").style.display = "block";
  document.getElementById("imagen").style.display = "block";
}


function MostrarP(){
  document.getElementById("p1").style.display = "block";
}

function OcultarP(){
   document.getElementById("p1").style.display = "none";
}

function MostrarP2(){
   document.getElementById("p2").style.display = "block";
}
 
function OcultarP2(){
   document.getElementById("p2").style.display = "none";
}

function MostrarP3(){
   document.getElementById("p3").style.display = "block";
}

function OcultarP3(){
  document.getElementById("p3").style.display = "none";
  document.getElementById("imagen").style.display = "block"
}
  

oculto.onclick = () =>{
  window.close()
}



