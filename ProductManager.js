/*CONSIGNA: Crear 1 clase para gestionar productos su OBJETIVO:agregar productos y asegurarse q no hay codigos duplicados; obtener todos los productos y buscar productos por ID.*/

import crypto from 'crypto'

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(producto) {

        const requiredFields = ['title', 'description', 'price', 'thumbnail', 'code', 'stock'];

        for (let field of requiredFields) {
            if (!producto.hasOwnProperty(field)) {
                return "Error: El campo '" + field + "' es obligatorio.";
            }
        } // Verificar campos obligatorios


         // Verificar código duplicado (devuelve true o false)
        const exists = this.products.includes((prod => prod.code === producto.code))//

        if (exists){
            return "Error: El código del producto ya existe"

        } else{      
            producto.id = crypto.randomBytes(15).toString(`hex`)
            this.products.push(producto)
            console.log("Producto agregado con éxito")
        }
    }


    getProducts() {      
        return this.products;
      }// Retorna todos los productos



      getProductById(id) {     
        const product = this.products.find(p => p.id === id);

        if (!product){
            return "Error: Producto no encontrado"
        } else{
            return product;
        }
      } // Busca un producto por su id
}

const productManager = new ProductManager();

//los productos
const productos = [
    {
        title: "Dell XPS 13 plus",
        description: "Notebook Intel Core i7-1260P, 16GB RAM, 512 GB SSD, SD card, Fingerprint W11",
        price: 1558000,
        thumbnail: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320nt-xnb-shot-5-1-sl.psd?fmt=pjpg&pscan=auto&scl=1&wid=3782&hei=2988&qlt=100,1&resMode=sharp2&size=3782,2988&chrss=full&imwidth=5000",
        code: "DELLXPS139320",
        stock: 25
    },
    {
        title: "Apple iPhone 14 Pro Max",
        description: "Smartphone 512gb",
        price: 680999,
        thumbnail: "https://www.yourmacstore.nl/media/catalog/product/cache/19a47ab23187a681c0d6786a313b33f5/7/3/7376101810974_1991754528.jpg",
        code: "A2650",
        stock: 8
    }
];

// Agregar productos
productos.forEach(producto => {
    productManager.addProduct(producto);
});
