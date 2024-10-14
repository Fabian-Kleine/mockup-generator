import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import PrimeVue from "primevue/config"
import Button from "primevue/button"
import Checkbox from 'primevue/checkbox'
import Aura from "@primevue/themes/aura"
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import TestView from './views/TestView.vue'
import XMockupView from './views/XMockupView.vue'
import YouTubeMockupView from './views/YouTubeMockupView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/test', component: TestView },
    { path: '/x', component: XMockupView },
    { path: '/youtube', component: YouTubeMockupView}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

const app = createApp(App);

app.component('Button', Button);
app.component('Checkbox', Checkbox);

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
