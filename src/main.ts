import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'

import '@/assets/main.css'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  // get language code from navigator, else use fallback
  locale: navigator.language.split('-')[0],
  fallbackLocale: 'en',
  messages: { en },
})

app.use(i18n)
app.use(router)

app.mount('#app')
