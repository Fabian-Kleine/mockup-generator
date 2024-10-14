import { createApp } from 'vue'
import PrimeVue from "primevue/config"
import Button from "primevue/button"
import Aura from "@primevue/themes/aura"
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'

const app = createApp(App);

app.component('Button', Button);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.dark',
        }
    }
});

app.mount('#app')
