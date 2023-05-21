import type { RouteConfig } from 'vue-router'

export const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'home',
        component: () =>
            import(/* webpackChunkName: "home" */ '@/pages/Home/Home.vue'),
    },
]
