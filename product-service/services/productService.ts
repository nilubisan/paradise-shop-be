import products from './products.json' assert {type: 'json'}

const ProductService = {
    getAllProducts() {
        return Promise.resolve(products)
    },
    getProductsById(id: number){
        return Promise.resolve(products.find((product) => product['id'] === id))
    }
}

export default ProductService