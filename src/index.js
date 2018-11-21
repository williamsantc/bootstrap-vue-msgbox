import * as services from './bootstrap-vue-msgbox'

const install = (Vue, options = {}) => {
  // Register services
  Object.keys(services).forEach(key => {
    const service = services[key]
    Object.keys(service).forEach(serviceKey => {
      let _key = options.prefix ? options.prefix + '_' + serviceKey : serviceKey
      Vue.prototype['$' + _key] = service[serviceKey]
    })
  })
}

export default { install }

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
