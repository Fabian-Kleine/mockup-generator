<script setup lang="ts">
import Card from '../components/Card.vue';
</script>

<template>
    <div class="flex lg:flex-row flex-col gap-4">
        <div class="flex-1 flex items-center justify-center">
            <div class="p-6 pt-12 lg:p-12 lg:px-20">
                <h1 data-text="Mockup Creator"
                    class="relative z-10 text-4xl lg:text-7xl font-bold lg:leading-normal text-center lg:text-left neon-glow bg-gradient-to-br from-cyan-300 to-purple-400 text-transparent bg-clip-text">
                    Mockup Creator
                </h1>
                <p class="text-white text-xl mt-2 mb-4 leading-normal text-center lg:text-left">
                    Create stunning mockups effortlessly—social posts, videos, and more, in minutes.
                </p>
                <div class="flex items-center justify-center lg:justify-start gap-6">
                    <Button as="a" href="#mockups" label="All Mockups" type="button" />
                    <Button as="router-link" to="/browser" label="Browser Mockup" type="button" outlined />
                </div>
            </div>
        </div>
        <div class="flex-1 overflow-hidden">
            <img src="/hero.png" alt="hero-1"
                class="h-full w-full object-cover lg:[clip-path:polygon(12%_0,100%_0%,100%_100%,0_100%)]" />
        </div>
    </div>
    <div class="px-6 py-8 md:px-12 lg:px-20 max-w-screen overflow-x-hidden" id="mockups">
        <div class="grid grid-cols-12 gap-4">
            <Card title="X (Twitter) tweet" image="/x-mockup.png" to="/x">
                <div
                    class="flex items-center justify-center bg-blue-100 dark:bg-blue-500/30 rounded-border min-w-10 w-10 h-10">
                    <i class="pi pi-twitter text-blue-500 dark:text-blue-200 !text-xl" />
                </div>
            </Card>
            <Card title="Youtube Video" image="/youtube-mockup.png" to="/youtube">
                <div
                    class="flex items-center justify-center bg-red-100 dark:bg-red-400/30 rounded-border min-w-10 w-10 h-10">
                    <i class="pi pi-youtube text-red-500 dark:text-red-200 !text-xl" />
                </div>
            </Card>
            <Card title="Youtube Comment" image="/youtube-comment-mockup.png" to="/youtube-comment">
                <div
                    class="flex items-center justify-center bg-red-100 dark:bg-red-400/30 rounded-border min-w-10 w-10 h-10">
                    <i class="pi pi-youtube text-red-500 dark:text-red-200 !text-xl" />
                </div>
            </Card>
            <Card title="Twitch Stream" image="/twitch-mockup.png" to="/twitch">
                <div
                    class="flex items-center justify-center bg-purple-100 dark:bg-purple-400/30 rounded-border min-w-10 w-10 h-10">
                    <i class="pi pi-twitch text-purple-500 dark:text-purple-200 !text-xl" />
                </div>
            </Card>
            <Card title="Whatsapp Chat" image="/whatsapp-mockup.png" to="/whatsapp">
                <div
                    class="w-10 h-10 min-w-10 flex items-center justify-center bg-green-100 dark:bg-green-400/30 rounded-border">
                    <i class="pi pi-whatsapp text-green-500 dark:text-green-200 !text-xl" />
                </div>
            </Card>
            <Card title="Instagram Post" image="/instagram-mockup.png" to="/instagram">
                <div
                    class="w-10 h-10 min-w-10 flex items-center justify-center bg-fuchsia-100 dark:bg-fuchsia-400/30 rounded-border">
                    <i class="pi pi-instagram text-fuchsia-500 dark:text-fuchsia-200 !text-xl" />
                </div>
            </Card>
            <Card title="Tiktok" image="/tiktok-mockup.png" to="/tiktok">
                <div
                    class="w-10 h-10 min-w-10 flex items-center justify-center bg-pink-100 dark:bg-pink-400/30 rounded-border">
                    <i class="pi pi-tiktok text-pink-500 dark:text-pink-200 !text-xl" />
                </div>
            </Card>
            <Card title="Spotfy Playlist Phone" image="/spotify-mockup.png" to="/spotify">
                <div class="w-10 h-10 min-w-10 flex items-center justify-center bg-[#1db954] rounded-border">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                        clip-rule="evenodd">
                        <path
                            d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" />
                    </svg>
                </div>
            </Card>
            <Card title="Spotify Playlist Desktop" image="/spotify-desktop-mockup.png" to="/spotify-desktop">
                <div class="w-10 h-10 min-w-10 flex items-center justify-center bg-[#1db954] rounded-border">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                        clip-rule="evenodd">
                        <path
                            d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" />
                    </svg>
                </div>
            </Card>
            <Card title="Phone Mockup" image="/phone-mockup.png" to="/phone">
                <div
                    class="w-10 h-10 min-w-10 flex items-center justify-center bg-amber-100 dark:bg-amber-400/30 rounded-border">
                    <i class="pi pi-mobile text-amber-500 dark:text-amber-200 !text-xl" />
                </div>
            </Card>
            <Card title="Phone Lockscreen Mockup" image="/lockscreen-mockup.png" to="/lockscreen">
                <div
                    class="w-10 h-10 min-w-10 flex items-center justify-center bg-amber-100 dark:bg-amber-400/30 rounded-border">
                    <i class="pi pi-mobile text-amber-500 dark:text-amber-200 !text-xl" />
                </div>
            </Card>
            <Card title="Phone Call Mockup" image="/call-mockup.png" to="/call">
                <div
                    class="w-10 h-10 min-w-10 flex items-center justify-center bg-amber-100 dark:bg-amber-400/30 rounded-border">
                    <i class="pi pi-mobile text-amber-500 dark:text-amber-200 !text-xl" />
                </div>
            </Card>
            <Card title="Image Mockup" image="/image-mockup.png" to="/image">
                <div
                    class="w-10 h-10 min-w-10 flex items-center justify-center bg-pink-100 dark:bg-pink-400/30 rounded-border">
                    <i class="pi pi-image text-pink-500 dark:text-pink-200 !text-xl" />
                </div>
            </Card>
            <Card title="Browser Mockup" image="/browser-mockup.png" to="/browser">
                <div
                    class="w-10 h-10 min-w-10 flex items-center justify-center bg-pink-100 dark:bg-pink-400/30 rounded-border">
                    <i class="pi pi-globe text-pink-500 dark:text-pink-200 !text-xl" />
                </div>
            </Card>
            <Card title="Window Mockup" image="/window-mockup.png" to="/window">
                <div
                    class="w-10 h-10 min-w-10 flex items-center justify-center bg-pink-100 dark:bg-pink-400/30 rounded-border">
                    <i class="pi pi-window-maximize text-pink-500 dark:text-pink-200 !text-xl" />
                </div>
            </Card>
            <Card title="Desktop Mockup" image="/desktop-mockup.png" to="/desktop">
                <div
                    class="w-10 h-10 min-w-10 flex items-center justify-center bg-indigo-100 dark:bg-indigo-400/30 rounded-border">
                    <i class="pi pi-desktop text-indigo-500 dark:text-indigo-200 !text-xl" />
                </div>
            </Card>
            <Card title="Laptop Mockup" image="/laptop-mockup.png" to="/laptop">
                <div
                    class="w-10 h-10 min-w-10 flex items-center justify-center bg-indigo-100 dark:bg-indigo-400/30 rounded-border">
                    <i class="pi pi-desktop text-indigo-500 dark:text-indigo-200 !text-xl" />
                </div>
            </Card>
        </div>
    </div>
</template>