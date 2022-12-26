import { AxiosAuth} from '../services/AxiosService'

const produceProducts = async (product) => {
    return (await AxiosAuth.post('/factory/products/instances', product)).data
}

const importToStore = async (docBody) => {
    return (await AxiosAuth.post('/factory/products/transport-to-store', docBody)).data
}

const getDevices = async (tempStore = false, status) => {
    return (await AxiosAuth.get(`/factory/products/instances?tempStore=${tempStore}&status=${status}`)).data
}

const factoryAPI = {
   produceProducts,
   importToStore,
   getDevices
}

export default factoryAPI