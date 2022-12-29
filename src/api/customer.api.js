import {AxiosAuth} from '../services/AxiosService'

const getCustomers = async (params) => {
    return (await AxiosAuth.get('/customers', {
        params: params
    })).data
}

const addCustomer = async (customer) => {
    return (await AxiosAuth.post('/customers', customer))
}

const getCustomer = async (customerId) => {
    return (await AxiosAuth.get(`/customers/${customerId}`)).data
}

const customerAPI = {
    getCustomer,
    getCustomers,
    addCustomer
}

export default customerAPI