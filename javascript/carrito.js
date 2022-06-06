
const carro = document.getElementById('carrito');
const body = document.getElementById('body');
const interfazCarrito = document.getElementById('carrito-cerrado');
carro.addEventListener('click', ()=>{
    interfazCarrito.setAttribute("id",'carrito-abierto');
    body.setAttribute("class",'no-scroll')
});

const cerrar = document.getElementById('cerrar');
cerrar.addEventListener('click',()=>{
    interfazCarrito.setAttribute("id",'carrito-cerrado');
    body.removeAttribute('class','no-scroll');
}); 


