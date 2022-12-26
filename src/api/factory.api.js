import { AxiosAuth} from '../services/AxiosService'

const produceProducts = async (product) => {
    return (await AxiosAuth.post('/factory/products/instances', product)).data
}

const factoryAPI = {
   produceProducts
}

export default factoryAPI