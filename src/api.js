import axios from "axios";

export const fetchApi = (url)=> axios.get(`http://localhost:5000${url}`)
export const postApi = (url,data)=> axios.post(`http://localhost:5000${url}`,data)
export const patchApi = (url,data)=> axios.patch(`http://localhost:5000${url}`,data)
export const deleteApi = (url)=> axios.delete(`http://localhost:5000${url}`)