import Vue from 'vue'
import App from './App.vue'

import './registerServiceWorker'

import router from './providers/router'
import store from './providers/store'
import DeviceProvider from './providers/device'

Vue.config.productionTip = false

Vue.mixin({
    inject: {
        $device: {
            from: '$device',
            default: {
                size: {},
                type: {},
            },
        },
    },
})

new Vue({
    router,
    store,
    mixins: [DeviceProvider],
    render: h => h(App),
}).$mount('#app')
