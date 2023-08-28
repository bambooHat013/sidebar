import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:5173/';

//添加請求攔截器
axios.interceptors.request.use(config=>{
  return config
})

//添加響應攔截器 
axios.interceptors.response.use(res=>{
  return res
},err=>{
  return Promise.reject(err)
})

export default axios