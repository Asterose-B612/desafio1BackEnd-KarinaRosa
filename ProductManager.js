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

