import {Axios, AxiosAuth} from '../services/AxiosService'

const getProducts = async () => {
    return (await AxiosAuth.get('/product-lines/products')).data
}

const productAPI = {
   getProducts: getProducts,
}

export default productAPI