import { AxiosAuth } from "../services/AxiosService";

const sellProducts = async ({products, customerId}) => {
    return (await AxiosAuth.post('/distributor/products/sell', {products, customerId})).data
}

const distributorAPI = {
    sellProducts
}

export default distributorAPI