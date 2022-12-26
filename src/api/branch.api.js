import {AxiosAuth} from '../services/AxiosService'

const getBranches = async (params) => {
    return (await AxiosAuth.get(`/branches`, {
        params: params
    })).data
}

const addBranch = async (branch) => {
    return await AxiosAuth.post('/branches', branch)
}

const getBranch = async (branchId) => {
    return (await AxiosAuth.get(`/branches/${branchId}`)).data
}
const branchAPI = {
    getBranches,
    addBranch,
    getBranch
}

export default branchAPI