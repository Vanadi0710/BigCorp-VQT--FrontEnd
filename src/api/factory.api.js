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

const getRequests = async (status, to) => {
    return (await AxiosAuth.get('/transports', {
        params: {
            status,
            to
        }
    })).data
}

const getReqNeedApprove = async () => {
    return (await AxiosAuth.get('/transports/need-approve')).data
}

const handleRequest = async ({transportId, status}) => {
    return (await AxiosAuth.post('/factory/orders/handle', {transportId, status} ))
}

const factoryAPI = {
   produceProducts,
   importToStore,
   getDevices,
   getRequests,
   handleRequest,
   getReqNeedApprove
}

export default factoryAPI