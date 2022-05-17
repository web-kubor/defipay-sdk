var fly=require("flyio")
fly.config.baseURL = 'https://api-test.defipay.biz/api-service/';

// 添加请求拦截器
fly.interceptors.request.use((request) => {
    // request.headers["Accept-Language"] = "en_US";
    return request;
  });
  
  // 添加响应拦截器，响应拦截器会在then/catch处理之前执行
  fly.interceptors.response.use(
    (response) => {
      let res = response.data;
  
      if (res.code === 200) {
        return Promise.resolve(res.data);
      }
  
      return Promise.reject(res);
    },
    (err) => {
      if (err.message) {
        return Promise.reject(err.message);
      }
      return Promise.reject(err);
    }
  );
  
  export default fly;
  