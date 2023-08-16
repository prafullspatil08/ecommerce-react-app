import axios from 'axios';
// eslint-disable-next-line import/no-anonymous-default-export
export default{
    async getAllProduct(){
        var response = await axios.get("http://localhost:3004/products")
        return response?.data
    },
    async getSingleProduct(product_id:number){
        var response = await axios.get(`http://localhost:3004/products/${product_id}`)
        return response?.data;
    },
}