import {authHost, host} from './Api'

export const getTypesAPI = async ()=>{
    const {data} = await host.get('/type')
    return data
}
export const setTypeAPI = async (name)=>{
    const {data} = await authHost.post('/type', {name})
    return data
}

export const getBrandsAPI = async ()=>{
    const {data} = await host.get('/brand')
    return data
}
export const setBrandsAPI = async (name)=>{
    const {data} = await authHost.post('/brand', {name})
    return data
}
export const getDevicesAPI = async ()=>{
    const {data} = await host.get('/device')
    return data
}
export const getDeviceAPI = async (id)=>{
    const {data} = await host.get('/device/'+id)
    return data
}
export const setDeviceAPI = async (device)=>{
    const {data} = await authHost.post('/device', device)
    return data
}