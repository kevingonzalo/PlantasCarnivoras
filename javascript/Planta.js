const carrito = [];
const plantas = [];
class Planta {
    constructor(id,titulo,precio,img,stock,cantidad){
        this.id = id;
        this.titulo = titulo;
        this.precio = precio;
        this.img = img;
        this.stock = stock;
        this.cantidad = cantidad || 0;
    }
    aumentarCantidad(){
        this.cantidad++
    }
    restarCantidad(){
        this.cantidad--;
    }
}

const planta1 = new Planta(1,"Pinguicula",150,"img/foto1.png" ,4);
const planta2 = new Planta(2,"Dionaea muscipula",250,'img/foto2.png',2);
const planta3 = new Planta(3,"Pinguicula",200,'img/foto3.png',1);
const planta4 = new Planta(4,"Drosera adelae",230,'img/foto4.png',5);
const planta5 = new Planta(5,"Drosera Alba",150,'img/foto5.png',6);
const planta6 = new Planta(6,"Dionaea muscipula",150,'img/foto6.png',10);
const planta7 = new Planta(7,"Drosera canpensis",350,'img/foto7.png',4);
const planta8 = new Planta(8,"Sarracenia",450,'img/foto8.png',3);
plantas.push(planta1,planta2,planta3,planta4,planta5,planta6,planta7,planta8);
