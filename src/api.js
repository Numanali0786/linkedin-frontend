import axios from "axios";

// local api

// export const fetchApi = (url)=> axios.get(`http://localhost:5000${url}`)
// export const postApi = (url,data)=> axios.post(`http://localhost:5000${url}`,data)
// export const patchApi = (url,data)=> axios.patch(`http://localhost:5000${url}`,data)
// export const deleteApi = (url)=> axios.delete(`http://localhost:5000${url}`)


// deployed api

export const fetchApi = (url)=> axios.get(`https://linkedin-clone-back.onrender.com${url}`)
export const postApi = (url,data)=> axios.post(`https://linkedin-clone-back.onrender.com${url}`,data)
export const patchApi = (url,data)=> axios.patch(`https://linkedin-clone-back.onrender.com${url}`,data)
export const deleteApi = (url)=> axios.delete(`https://linkedin-clone-back.onrender.com${url}`)