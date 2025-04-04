import axios from "axios";


let URl ="https://66a87841e40d3aa6ff582618.mockapi.io/Axios"

export const get=async()=>{
    return axios.get(URl)
}

export const getById=async(id)=>{
    return axios.get(URl+"/"+id)
}

export const Create=async(newData)=>{
    return axios.post(URl,newData)
}
export const Delete=async(id)=>{
    return axios.delete(URl+"/"+id)
}

export const update=async(id,uptData)=>{
    return axios.put(URl+"/"+id,uptData)
}
