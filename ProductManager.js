/*CONSIGNA: Crear 1 clase para gestionar productos su OBJETIVO:agregar productos y asegurarse q no hay codigos duplicados; obtener todos los productos y buscar productos por ID.*/

//importacion de libreria crypto
//array vacio de almacenaje de productos
//Método addProduct q añade 1 producto al array vacio y realiza varias verificaciones: de campos obligatorios, de codigos duplicados, Asignacion de Id y agregado del Producto.

import crypto from 'crypto'
class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(producto) {
        const requiredFields = ['title', 'description', 'price', 'thumbnail', 'code', 'stock'];

        let hasError = false;
    for (const field of requiredFields) {
        if (!(field in producto) || producto[field] === undefined || producto[field] === '') {
            console.log("Error: El campo '" + field + "' es obligatorio.");
            hasError = true;
        }
    }// Verificar campos obligatorios

    if (hasError) {
        return ; // Salir de la función si hay un error
    } 

         
        const exists = this.products.some((prod) => prod.code === producto.code);

        if (exists){
            return "Error: El código del producto ya existe."
        } else{      
            producto.id = crypto.randomBytes(15).toString(`hex`)
            this.products.push(producto)
            console.log("Producto agregado con éxito")
        }// Verificar código duplicado (devuelve true o false)
        //si no existe asigna un ID único usando crypto.randomBytes(15).toString(`hex`)
    }


    getProducts() {      
     return this.products;    
      }//Retorna el array completo de productos hasta el momento.

      getProductById(id) {     
        const product = this.products.find(p => p.id === id);

        if (!product){
           return "Error: Producto no encontrado"
        } else{
           return product;
        }
      } //Busca un producto por su ID y lo retorna. Si no se encuentra, retorna un mensaje de error.
}

const productManager = new ProductManager();//crea una nueva instancia de la clase ProductManager y la guarda en la variable


const productos = [
    {
        description: "Notebook Intel Core i7-1260P, 16GB RAM, 512 GB SSD, SD card, Fingerprint W11",
        price: 1558000,
        thumbnail: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320nt-xnb-shot-5-1-sl.psd?fmt=pjpg&pscan=auto&scl=1&wid=3782&hei=2988&qlt=100,1&resMode=sharp2&size=3782,2988&chrss=full&imwidth=5000",
        code: "DELLXPS139320",
        stock: 25
    },

    {
        title: "Apple iPhone 14 Pro Max",
        description: "",
        price: 680999,
        thumbnail: "https://www.yourmacstore.nl/media/catalog/product/cache/19a47ab23187a681c0d6786a313b33f5/7/3/7376101810974_1991754528.jpg",
        code: "A2650",
        stock: 8
    },

    {
        title: "Apple MacBook Pro 13",
        description: "Notebook macOS 8GB RAM, 256 GB SSD,color espacial ",
        price: 2000000,
        thumbnail: "https://th.bing.com/th/id/R.dd8770ef96efbf3725cc82d3c00161bf?rik=ejg3K7qbx2D%2bmA&pid=ImgRaw&r=0",
        code: "A2338",
        stock: 15
    },
    
    {
        title: "Huawei MatePad Pro 11",
        description: "Tablet Kirin 9000 7nm, 512 SSD",
        price: 570000,
        thumbnail: "https://d500.epimg.net/cincodias/imagenes/2023/11/29/tablets/1701260925_565844_1701261040_sumario_normal.jpg",
        code: "H34337",
        stock: 11
    },
    
    {
        title: "Apple iPad Pro 11",
        description: "Tablet 4th generation 2022 128gb color plata y 8gb RAM",
        price: 1499000,
        thumbnail: "https://th.bing.com/th/id/R.b0f1de5b30bd996f259b8a9c2b8d5ef1?rik=2DbnJzce%2fRfl7w&pid=ImgRaw&r=0",
        code: "A2759",
        stock: 23
    },
    
    {
        title: "Xiaomi Redmi Pad SE 11",
        description: "Tablet 128GB color graphite gray, 6gb RAM",
     
        thumbnail: "https://th.bing.com/th/id/R.336e8d9b20537ff7f8e6328b4f09dab6?rik=KzVlyza9dRBifA&pid=ImgRaw&r=0",
        code: "XI114355",
        stock: 35
    },
    
    {
        title: "Lenovo Tab P12 Pro",
        description: "Tablet 256gb 8gb RAM color storm gray",
        price:1699999,
        thumbnail: "https://fdn.gsmarena.com/imgroot/news/22/01/lenovo-tab-p12-pro-android-12l-beta-2/inline/-1200/gsmarena_001.jpg",
        code: "TB-Q706F",
        stock: 22
    },
    
    {
        title: "iPhone Pro 15 Max",
        description: "Smartphone Apple A17 Pro 1Tb 8gb RAM Titanio Blanco",
        price:2859999,
        thumbnail: "https://i5.walmartimages.com/asr/4b82505c-9988-4bde-b2fb-e899a8aa345a.115ed912d260407419bccf8f859442b0.jpeg",
        code: "A2849",
        stock: 18
    },
    
    {
        title: "Surface Go 3",
        description: "Notebook Microsoft Multi Touch Intel Pentium Gold 6500Y de 1,1 GHz 128GB SSD 8gb RAM W11",
        price:2043166,
        thumbnail: "https://th.bing.com/th/id/OIP.zi801rYOccfivC3VRbf2WgHaDn?pid=ImgDet&rs=1",
        code: "8VA-00001",
        stock: 30
    },
    
    {
        title: "Lenovo LOQ 15",
        description: "Notebook Intel Core i5 8gb RAM 512gb W11",
        price:1195695,
        thumbnail: "https://p2-ofp.static.pub/ShareResource/na/products/lenovo-laptops/560x450/lenovo-loq-15-inch-01.png",
        code: "82XV00N1AR",
        stock: 24
    },
    
    {
        title: "Galaxy Tab S8 Ultra",
        description: "Tablet Samsung 14,6 Graphite 256gb",
        price:1392300,
        thumbnail: "https://th.bing.com/th/id/OIP.1Js7VtZgQQXMsOU5bQVagwHaE8?pid=ImgDet&rs=1",
        code: "SM-X900",
        stock: 32
    },
    
    {
        title: "iPhone 14",
        description: "Smartphone Apple 4gb RAM 256gb Blanco estelar",
        price:3287931,
        thumbnail: "https://th.bing.com/th/id/R.34410c6e45a32d7cf37e01d7a6210712?rik=DskSXDY5mNLVKA&pid=ImgRaw&r=0",
        code: "A78994",
        stock: 10
    },
    
    {
        title: "HP Envy x360 15",
        description: "Tablet 16gb Ram 512gb Touchscreen Negro",
        price:1750000,
        thumbnail: "https://th.bing.com/th/id/OIP.wIh29PZ_yFHWwdEsFExXDQHaFj?pid=ImgDet&rs=1",
        code: "15-fh0023dx",
        stock: 10
    },
    
    {
        title: "Dere T30 Pro 13",
        description: "Tablet Intel Celeron N5095 16GB RAM 1TB SSD W11 Silver",
        price:680000,
        thumbnail: "https://www.geekbuying.pl/28432-large_default/dere-t30-pro-2-in-1-laptop-13-inch-2k-ips-touch-screen-tablet-pc-magic-keyboard-stylus-pen-16gb-ddr4-1tb-ssd-green.jpg",
        code: "Tabde1330",
        stock: 25
    },
    
    {
        title: "Apple iPhone 13 Pro",
        description: "Smartphone apple 256gb 6 GB Ram Grafito",
        price:3000000,
        thumbnail: "https://celutronic.com/wp-content/uploads/2021/04/iphone-12-pro-max-6.jpg",
        code: "A78995",
        stock:11
    }
];


productos.forEach(producto => {
    productManager.addProduct(producto);
});//itera sobre array. funcion flecha:


console.log(productManager.getProducts());//Muestra el array completo de productos.


console.log(productManager.getProductById("5a4ea8c034a7886cbe62efb0fb5ebc"))//error: porque no coincide el id. No lo encuentra.


//Desde ya muchas gracias por tu tiempo Lautaro!
//Saludos y hasta la próxima.

