import {AxiosAuth} from '../services/AxiosService'

const getProducts = async () => {
    return (await AxiosAuth.get('/product-lines/products')).data
}

const getProductInstances = async () => {
    
}

const productAPI = {
   getProducts,
   getProductInstances
}

export default productAPI