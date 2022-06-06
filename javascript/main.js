const contenido = document.getElementById('contenido');

function mostrarPlantas() {
    for (const planta of plantas){
       const contenedor = document.createElement('div');
       contenedor.className='producto';
       contenedor.innerHTML=`
                <img src="${planta.img}">
                <h1>${planta.titulo}</h1>   
                <p>${planta.precio}$</p>
                <buttom id="${planta.id}" class="btn-comprar">Comprar</buttom>
       `;
       contenido.appendChild(contenedor);
       document.getElementById(`${planta.id}`).addEventListener('click', () => ComprarPlanta(planta));
    }
}

function ComprarPlanta(planta){
    let compra = carrito.find(el => el.id === planta.id);
    if(compra){
        if(compra.cantidad < compra.stock){
            compra.aumentarCantidad();
        }else{
            swal("No Hay mas Stock de este Producto!");
        }
    }else{
        carrito.push(planta);
        planta.aumentarCantidad();
    }
    totalProductos();
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


function totalProductos(){
    let total = 0;
    const compras = document.getElementById('compras');
    compras.innerHTML = "";
    for(let i = 0; i < carrito.length;i++){
        total += carrito[i].cantidad;

        const listaCompra = document.createElement('ul');
        listaCompra.setAttribute('class','lista-comprar')
        listaCompra.innerHTML = `
                <li>
                    <img src="${carrito[i].img}" alt="${carrito[i].titulo}">
                    <h1>${carrito[i].titulo}</h1>
                    <p>${carrito[i].precio}$</p>
                    <button class="btn-borrar fa-solid fa-trash" id="borrar${carrito[i].id}"></button>
                </li>
                `
        compras.appendChild(listaCompra);
        document.getElementById(`borrar${carrito[i].id}`).addEventListener('click', ()=> eliminarPlanta(carrito[i].id));
    }
    const contador = document.getElementById('contador');
    contador.innerHTML= total;
}

function eliminarPlanta(id){
    let encontrado = carrito.find(el => el.id == id);
    console.log(id);
    // OPERADOR TERNARIO
    encontrado ? carrito.splice(carrito.indexOf(encontrado),1) : encontrado.restarCantidad();

    localStorage.setItem('carrito',JSON.stringify(carrito));
    totalProductos(); 
}

function llenarStorage(){
    let localSCarro = JSON.parse(localStorage.getItem('carrito'));
    if(localSCarro){
        for (i = 0; i < localSCarro.length; i++){
            carrito.push(new Planta(localSCarro[i].id,localSCarro[i].titulo,localSCarro[i].precio,localSCarro[i].img,localSCarro[i].stock,localSCarro[i].cantidad));
        }
        totalProductos();
    }
}
// verificando si hay elementos en el carrito o no
function elementosCarrito(){
    const compras = document.getElementById('objetos');
    const lista = document.createElement('h1');
    lista.setAttribute('class','nohay')
    lista.innerHTML = `
       No agregaste nada a la lista
    `;  
    compras.appendChild(lista);
    // no puedo eliminar el texto sin recargar la pagina
    carrito.length === 0 ? '' :  compras.removeChild(lista);
}
mostrarPlantas();
llenarStorage();
elementosCarrito();


let localSCarro = JSON.parse(localStorage.getItem('carrito'));
console.log(localSCarro);
console.log(carrito.length);




