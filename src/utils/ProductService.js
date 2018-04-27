const products = [
    { id: 1, title: 'cinculator', qty: 5 },
    { id: 2, title: 'gurtna', qty: 1 },
    { id: 3, title: 'cangle', qty: 4 },
    { id: 4, title: 'apipong', qty: 0 },
    { id: 5, title: 'stegac za ferode', qty: 10 },
]


export default class ProductService {

    getProducts() {
        return products
    }
}

export const productService = new ProductService()