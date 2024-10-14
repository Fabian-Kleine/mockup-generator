import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import PrimeVue from "primevue/config"
import Button from "primevue/button"
import Aura from "@primevue/themes/aura"
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import TestView from './views/TestView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/test', component: TestView }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

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

app.use(router);

app.mount('#app')
