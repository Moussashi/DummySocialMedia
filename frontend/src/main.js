import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faLinkedin,
    faTwitter,
    faFacebookMessenger,
    faInstagram,
    faMedium
  } from "@fortawesome/free-brands-svg-icons"

  library.add(
    fas,
    faLinkedin,
    faTwitter,
    faFacebookMessenger,
    faInstagram,
    faMedium
  );

const app = createApp(App)

app.component('fa', FontAwesomeIcon)
app.use(router)
app.use(AOS.init())

app.mount('#app')
