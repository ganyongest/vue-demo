// 引入axios，并加到原型链中
import axios from 'axios';

//import QS from 'qs';


const aa = axios.create(

);


// 添加响应拦截器
aa.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
});



export default aa;
