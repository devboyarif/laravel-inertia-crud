require('./bootstrap');

import Vue from 'vue'
import {
    createInertiaApp
} from '@inertiajs/inertia-vue'
import {
    InertiaProgress
} from '@inertiajs/progress'

InertiaProgress.init()

// Mixins
Vue.mixin({
    methods: {
        route: window.route
    },
})

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({
        el,
        App,
        props
    }) {
        new Vue({
            render: h => h(App, props),
        }).$mount(el)
    },
})
