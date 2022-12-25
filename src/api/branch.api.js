import {AxiosAuth} from '../services/AxiosService'

const getBranches = async ({branchType}) => {
    return (await AxiosAuth.get(`/branches?branchType=${branchType}`)).data
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