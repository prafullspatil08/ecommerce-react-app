export interface Product{
    'id': number,
    'title':string,
    'price':number,
    'description':string,
    'category':string,
    'image':string
}

export interface ProductArrayModel{
    all_products: Product[],
    product: Product,
    cartItem:[],
    loading:boolean
}