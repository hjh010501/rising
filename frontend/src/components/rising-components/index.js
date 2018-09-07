import * as components from './'

export default {
  install (Vue) {
    Object.keys(components)
      .forEach(comp => {
        Vue.component(comp, components[comp])
      })
  }
}
