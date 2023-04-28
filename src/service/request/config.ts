// 1，方式一：手动求换不同的环境（不推荐此方式）
// const BASE_URL = 'http://httpbin.org/dev'
// const BASE_NAME = 'codewhy'

// const BASE_URL = 'http://httpbin.org/prod'
// const BASE_NAME = 'kobe'

// const BASE_URL = 'http://httpbin.org/test'
// const BASE_NAME = 'james'

// 2，根据process.env.NODE_ENV区分环境 开发环境下：development  生产环境：production  测试环境：test
let BASE_URL = ''
let TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000'
  TIME_OUT = 10000
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://httpbin.org/prod'
  TIME_OUT = 10000
} else {
  BASE_URL = 'http://httpbin.org/test'
  TIME_OUT = 10000
}

export { BASE_URL, TIME_OUT }

// 3，vue CLI支持的方式，在项目中创建 .env文件
