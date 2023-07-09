import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure your project is capable of handling css files
import { aliases, md } from 'vuetify/iconsets/md'


const app = createApp(App);
const vuetify = createVuetify({
    icons: {
        defaultSet: 'md',
        aliases,
        sets: {
          md
        },
      },
  components,
  directives,
})

app.use(router)

app.use(vuetify)

app.mount('#app')
