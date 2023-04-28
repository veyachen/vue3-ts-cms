// service同一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // console.log('1，请求成功的拦截')
      const token = ''
      if (token) {
        // config.headers.Authorization = token
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('2，请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      // console.log('3，响应成功的拦截')
      return res
    },
    responseInterceptorCatch(err) {
      // console.log('4，响应失败的拦截')
      return err
    }
  }
})

export default hyRequest
