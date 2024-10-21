import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import PrimeVue from "primevue/config"
import { definePreset } from '@primevue/themes'
import Button from "primevue/button"
import Checkbox from 'primevue/checkbox'
import Aura from "@primevue/themes/aura"
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import XMockupView from './views/XMockupView.vue'
import YouTubeMockupView from './views/YouTubeMockupView.vue'
import YoutubeCommentMockupView from './views/YoutubeCommentMockupView.vue'
import WhatsappMockupView from './views/WhatsappMockupView.vue'
import PhoneMockupView from './views/PhoneMockupView.vue'
import LockscreenMockupView from './views/LockscreenMockupView.vue'
import ImageMockupView from './views/ImageMockupView.vue'
import BrowserMockupView from './views/BrowserMockupView.vue'
import WindowMockupView from './views/WindowMockupView.vue'
import InstagramMockupView from './views/InstagramMockupView.vue'
import TiktokMockupView from './views/TiktokMockupView.vue'
import SpotifyView from './views/SpotifyView.vue'
import SpotifyDesktopView from './views/SpotifyDesktopView.vue'
import CallMockupView from './views/CallMockupView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/x', component: XMockupView },
    { path: '/youtube', component: YouTubeMockupView },
    { path: '/youtube-comment', component: YoutubeCommentMockupView },
    { path: '/whatsapp', component: WhatsappMockupView },
    { path: '/phone', component: PhoneMockupView },
    { path: '/lockscreen', component: LockscreenMockupView },
    { path: '/image', component: ImageMockupView },
    { path: '/browser', component: BrowserMockupView },
    { path: '/window', component: WindowMockupView },
    { path: '/instagram', component: InstagramMockupView },
    { path: '/tiktok', component: TiktokMockupView },
    { path: '/spotify', component: SpotifyView },
    { path: '/spotify-desktop', component: SpotifyDesktopView },
    { path: '/call', component: CallMockupView }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

const app = createApp(App);

app.component('Button', Button);
app.component('Checkbox', Checkbox);

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{sky.50}',
            100: '{sky.100}',
            200: '{sky.200}',
            300: '{sky.300}',
            400: '{sky.400}',
            500: '{sky.500}',
            600: '{sky.600}',
            700: '{sky.700}',
            800: '{sky.800}',
            900: '{sky.900}',
            950: '{sky.950}'
        }
    }
})

app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            darkModeSelector: '.dark',
        }
    }
});

app.use(router);

app.mount('#app')
