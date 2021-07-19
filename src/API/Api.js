import axios from 'axios'
import { REACT_APP_API_URL } from '../Constants'

const host = axios.create({
    baseURL: REACT_APP_API_URL
})

const authHost = axios.create({
    baseURL: REACT_APP_API_URL,
    headers: { "Authorization":`Bearer ${localStorage.getItem('token')}` }
})
export {
    host,
    authHost
}