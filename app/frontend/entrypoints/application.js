// This file is automatically compiled by Vite Rails, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import '~/styles/application.css'

import Vue from 'vue'
import VueMeta from 'vue-meta'

import api from '@/api'

import PortalVue from 'portal-vue'

import ConstantsMixin from '@/utils/ConstantsMixin'

import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue'
import { InertiaProgress } from '@inertiajs/progress'

Vue.component('InertiaHead', Head)
Vue.component('InertiaLink', Link)
InertiaProgress.init()

Vue.prototype.$api = api
Vue.use(PortalVue)
Vue.use(VueMeta)
Vue.mixin(ConstantsMixin)

const pages = import.meta.glob('../Pages/**/*.vue')

const resolve = (name) => {
  const importPage = pages[`../Pages/${name}.vue`]
  if (!importPage) throw new Error(`Unknown page ${name}. Is it located under Pages with a .vue extension?`)
  return importPage().then(module => module.default)
}

createInertiaApp({
  resolve,
  setup ({ el, app, props }) {
    new Vue({
      metaInfo: {
        titleTemplate: title => title ? `${title} - PingCRM on Vite Ruby` : 'PingCRM on Vite Ruby',
      },
      render: h => h(app, props),
    }).$mount(el)
  },
})
