/*
  1，问题一：mode_modules/@vue/cli-service/types/tsconfig.json
  2，按需引入element-plus插件：npm install babel-plugin-import -D  需要在babel.config.js中配置
  3，使用时，①在局部导入，局部注册使用；②在main.ts中导入，全局注册，全局使用
  4，element-plus按需引入的封装
  5，项目样式初始化：github上下载文件 或 安装npm install normalize.css
*/
import App from './App.vue'
import { createApp } from 'vue'
import { globalRegister, elementPlusIcon } from './global'
// import 'element-plus/lib/theme-chalk/index.css'
import 'normalize.css'
import './assets/css/index.less'

import router from './router'
import store from './store'
import hyRequest from './service'

const app = createApp(App)

globalRegister(app)
// app.use(globalRegister)
elementPlusIcon(app)

app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)
hyRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
