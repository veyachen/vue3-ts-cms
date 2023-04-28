import { App } from 'vue'
import registerElement from './register-element'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export function globalRegister(app: App): void {
  registerElement(app)
  // app.use(registerElement)
}

export function elementPlusIcon(app: App): void {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
