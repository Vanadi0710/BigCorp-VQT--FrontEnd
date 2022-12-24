import {AxiosAuth} from '../services/AxiosService'

const getBranches = async ({branchType}) => {
    return (await AxiosAuth.get(`/branches?branchType=${branchType}`)).data
}

const addBranch = async (branch) => {
    return await AxiosAuth.post('/branches', branch)
}

const branchAPI = {
    getBranches,
    addBranch
}

export default branchAPI