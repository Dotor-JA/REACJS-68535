const products = [
    //impresoras
    {
        id: '1',
        name: 'Impresora Artillery Hornet',
        price: 400000,
        category: 'impresoras3D',
        img: 'https://d3v0qfrp8436gb.cloudfront.net/wp-content/uploads/2022/11/HORNET_SOLA.png',
        stock: 25,
        descrip: 'Impresora 3D Artillery Hornet'
    },
    //filamento  
    {
        id: '2',
        name: 'Filamento Varios',
        price: 38000,
        category: 'filamento',
        img: 'https://www.3dnatives.com/es/wp-content/uploads/sites/4/Filamento-cover.jpg',
        stock: 7,
        descrip: 'Filamento PLA 1.75mm Negro, Rojo, Blanco, 1KG'
    },
    //resina
    {
        id: '3',
        name: 'Resina Creality',
        price: 50000,
        category: 'resina',
        img: 'https://www.detintas.com.ar/documentos/1/1049_resina-creality-.png',
        stock: 15,
        descrip: 'Resina Liquida Creality para Impresora3D'
    },
    //accesorios
    {
        id: '4',
        name: 'Accesorios',
        price: 12000,
        category: 'accesorios',
        img: 'https://http2.mlstatic.com/D_NQ_NP_794212-MLA31634084739_072019-O.webp',
        stock: 15,
        descrip: 'Tijera,Espatula,Pinsa'
    },
]


export const getProducts = () => {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(products);
        }, 500)


    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500)

    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 500)

    })
}