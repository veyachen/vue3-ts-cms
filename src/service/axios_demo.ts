import axios from 'axios' // 导出axios实例对象

// Promise本身是可以有类型
// new Promise<string>((resolve, reject) => {
//   resolve('123')
// }).then((res) => {
//   console.log(res.length)
// })

// axios.request({
//   method: 'GET'
// })

/* // 1, get请求
axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res)
})

// 2，get请求并传入参数
axios
  .get('http://httpbin.org/get', {
    params: {
      name: 'codewhy',
      age: 18
    }
  })
  .then((res) => {
    console.log('get:', res.data)
  })

// 3，post请求
axios
  .post('http://httpbin.org/post', {
    data: {
      name: 'why',
      age: 18
    }
  })
  .then((res) => {
    console.log('post:', res.data)
  }) */

// 4，axios的配置选项
// 4.1，axios的全局配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
// axios.defaults.headers = {}

// 4.2，axios的局部配置
// 2，get请求并传入参数
axios
  .get('/get', {
    params: {
      name: 'codewhy',
      age: 18
    },
    timeout: 10000,
    headers: {}
  })
  .then((res) => {
    console.log('get:', res.data)
  })

// 3，post请求
axios
  .post('/post', {
    data: {
      name: 'why',
      age: 18
    }
  })
  .then((res) => {
    console.log('post:', res.data)
  })
// 5，axios.all --> 多个请求，一起返回
axios
  .all([
    axios.get('/get', { params: { name: 'why', age: 18 } }),
    axios.post('/post', { data: { name: 'why', age: 18 } })
  ])
  .then((res) => {
    console.log(res[0].data)
    console.log(res[1].data)
  })

// 6，axios的拦截器 fn1: 请求发送成功会执行的函数, fn2：请求失败会执行的函数
/* axios.interceptors.request.use(
  (config) => {
    // 想做的一些操作：1，给请求添加token  2，isLoading动画
    console.log('请求拦截成功')
    return config
  },
  (err) => {
    console.log('请求发生错误')
    return err
  }
) */

/* axios.interceptors.response.use(
  (res) => {
    // 想做的一些操作：1，给请求添加token  2，isLoading动画
    console.log('响应成功的拦截')
    return res
  },
  (err) => {
    console.log('服务器响应错误')
    return err
  }
) */
