import { AxiosAuth } from "../services/AxiosService";

const sellProducts = async ({products, customerId}) => {
    return (await AxiosAuth.post('/distributor/products/sell', {products, customerId})).data
}

const requestImportProducts = async ({products, from, to, type, note}) => {
    return (await AxiosAuth.post('/transports', {
        products, from, to, type, note
    })).data
}

const getRequests = async () => {
    return (await AxiosAuth.get('/transports')).data
}
const distributorAPI = {
    sellProducts,
    requestImportProducts,
    getRequests
}

export default distributorAPI