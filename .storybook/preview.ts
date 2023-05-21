import Vue from 'vue'
import type { Preview } from '@storybook/vue'

import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [],
})

Vue.mixin({
    inject: {
        $device: {
            default: {
                size: { desktop: false, tablet: false, maxMobile: true },
            },
            from: '$device',
        },
    },
})

export const decorators = [
    story => ({
        components: { story },
        router: router,
        // mixins: [DeviceProvider],
        // ...provideFunc(),
        template: '<story />',
    }),
]

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
}

export default preview
