import {Axios, AxiosAuth} from '../services/AxiosService'

const signIn = async (credentials) => {
    let account = await Axios.post('/auth/sign-in', credentials)
    return account
}

const logOut = async () => {
    let response = await AxiosAuth.post('/auth/log-out')
    return response
}

const changePassword = async (password, newPassword) => {
    let response = await AxiosAuth.post('/auth/change-password', {password, newPassword})
    return response
}

const authAPI = {
    signIn, 
    logOut,
    changePassword
}

export default authAPI