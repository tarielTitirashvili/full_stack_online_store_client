import jwtDecode from 'jwt-decode'
import {authHost, host} from './Api'

export const registration = async (email, password)=>{
    const {data} = await host.post('/user/register', {email, password, role:"ADMIN"})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const login = async (email, password)=>{
    const {data} = await host.post('/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const checkAuth = async ()=>{
    const data = await authHost.post('/user/auth')
    localStorage.setItem('token', data.data.token)
    return jwtDecode(data.data.token)
}