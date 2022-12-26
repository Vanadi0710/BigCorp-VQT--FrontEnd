import {AxiosAuth} from '../services/AxiosService'

const getProducts = async () => {
    return (await AxiosAuth.get('/product-lines/products')).data
}

const getProductInstances = async () => {
    
}

const getProduct = async (productId) => {
    return (await AxiosAuth.get(`/product-lines/products/${productId}`)).data
}

const productAPI = {
   getProducts,
   getProduct,
   getProductInstances
}

export default productAPI