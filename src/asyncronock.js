const products = [
    {
        id: 1,
        name: 'helado',
        price: 1500,
        category: 'postres',
        img: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        stock: 100,
        description: 'multisabores'
    },
    {
        id: 2,
        name: 'leche',
        price: 1200,
        category: 'lateos',
        img: 'https://images.unsplash.com/photo-1613997141401-f36f285bcfa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=863&q=80',
        stock: 80,
        description: 'leche crema'
    },
    {
        id: 3,
        name: 'media luna',
        price: 800,
        category: 'panaderia',
        img: 'https://img-global.cpcdn.com/recipes/22dfbdf090495e74/400x400cq70/photo.jpg',
        stock: 200,
        description: 'caja de 6 medias lunas'
    },
    {
        id: 4,
        name: 'milanesas',
        price: 2800,
        category: 'carnes',
        img: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/09/como-hacer-milanesa-sin-que-se-despegue-el-pan-molido.jpg',
        stock: 30,
        description: 'carne adobada frita o al horno'
    },
    {
        id: 5,
        name: 'milka',
        price: 1400,
        category: 'chocolate',
        img: 'https://images.unsplash.com/photo-1604514813560-1e4f5726db65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        stock: 200,
        description: 'barra de chocolate'
    },
    {
        id: 6,
        name: 'leche asada',
        price: 1900,
        category: 'postres',
        img: 'http://www.midiariodecocina.com/wp-content/uploads/2007/03/Leche-asada-01.jpg',
        stock: 40,
        description: 'postre de leche '
    },
    {
        id: 7,
        name: 'muslos de pollo',
        price: 2500,
        category: 'carnes',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsLfUmmPjgPs0-a0g-3UF4tNW1A2MBjvbiw&usqp=CAU',
        stock: 70,
        description: 'muslo de pollo, precio por kilo'
    },
    {
        id: 8,
        name: 'pan blanco',
        price: 1000,
        category: 'panaderia',
        img: 'https://okdiario.com/img/recetas/2017/06/14/pan-blanco-amish.jpg',
        stock: 100,
        description: 'pieza entera de pan'
    },
]

const categories = [
    {id: 'lateos', description: 'lacteos'},
    {id: 'postres', description: 'postres'},
    {id: 'panaderia', description: 'panaderia'},
    {id: 'carnes', description: 'carnes'}
]

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}