<template>
    <div class="flex lg:flex-row flex-col gap-4">
        <div class="flex-1 flex items-center justify-center">
            <div class="p-6 pt-12 lg:p-12 lg:px-20">
                <h1
                    class="text-3xl lg:text-5xl font-bold text-surface-900 dark:text-surface-0 mb-4 lg:leading-normal text-center lg:text-left">
                    Mockup Creator
                </h1>
                <p class="text-surface-700 dark:text-surface-200 leading-normal text-center lg:text-left invisible h-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
                <div class="flex items-center justify-center lg:justify-start gap-6">
                    <Button as="a" href="#mockups" label="All Mockups" type="button" />
                    <Button as="router-link" to="/browser" label="Browser Mockups" type="button" outlined />
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
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border h-full">
                    <div class="flex justify-between mb-4 h-full">
                        <div class="flex flex-col h-full">
                            <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">X (Twitter)
                                tweet</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl flex justify-center">
                                <img src="/x-mockup.png" alt="Mockup" class="rounded-md w-[90%]">
                            </div>
                            <Button class="mt-auto" as="router-link" label="Edit Mockup" to="/x" />
                        </div>
                        <div
                            class="flex items-center justify-center bg-blue-100 dark:bg-blue-500/30 rounded-border min-w-10 w-10 h-10">
                            <i class="pi pi-twitter text-blue-500 dark:text-blue-200 !text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border h-full">
                    <div class="flex justify-between mb-4 h-full">
                        <div class="flex flex-col h-full">
                            <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">YouTube
                                Video</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl flex justify-center">
                                <img src="/youtube-mockup.png" alt="Mockup" class="rounded-md w-[90%]">
                            </div>
                            <Button class="mt-auto" as="router-link" label="Edit Mockup" to="/youtube" />
                        </div>
                        <div
                            class="flex items-center justify-center bg-red-100 dark:bg-red-400/30 rounded-border min-w-10 w-10 h-10">
                            <i class="pi pi-youtube text-red-500 dark:text-red-200 !text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border h-full">
                    <div class="flex justify-between mb-4 h-full">
                        <div class="flex flex-col h-full">
                            <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">YouTube
                                Comment</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl flex justify-center">
                                <img src="/youtube-comment-mockup.png" alt="Mockup" class="rounded-md">
                            </div>
                            <Button class="mt-auto" as="router-link" label="Edit Mockup" to="/youtube-comment" />
                        </div>
                        <div
                            class="flex items-center justify-center bg-red-100 dark:bg-red-400/30 rounded-border min-w-10 w-10 h-10">
                            <i class="pi pi-youtube text-red-500 dark:text-red-200 !text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border h-full">
                    <div class="flex justify-between mb-4 h-full">
                        <div class="flex flex-col h-full">
                            <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Whatsapp
                                Chat</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl flex justify-center">
                                <img src="/whatsapp-mockup.png" alt="Mockup" class="rounded-md w-[90%]">
                            </div>
                            <Button class="mt-auto" as="router-link" label="Edit Mockup" to="/whatsapp" />
                        </div>
                        <div
                            class="w-10 h-10 min-w-10 flex items-center justify-center bg-green-100 dark:bg-green-400/30 rounded-border">
                            <i class="pi pi-whatsapp text-green-500 dark:text-green-200 !text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border h-full">
                    <div class="flex justify-between mb-4 h-full">
                        <div class="flex flex-col h-full">
                            <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Instagram
                                Post</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl flex justify-center">
                                <img src="/instagram-mockup.png" alt="Mockup" class="rounded-md w-[90%]">
                            </div>
                            <Button class="mt-auto" as="router-link" label="Edit Mockup" to="/instagram" />
                        </div>
                        <div
                            class="w-10 h-10 min-w-10 flex items-center justify-center bg-fuchsia-100 dark:bg-fuchsia-400/30 rounded-border">
                            <i class="pi pi-instagram text-fuchsia-500 dark:text-fuchsia-200 !text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border h-full">
                    <div class="flex justify-between mb-4 h-full">
                        <div class="flex flex-col h-full">
                            <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Tiktok</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl flex justify-center">
                                <img src="/tiktok-mockup.png" alt="Mockup" class="rounded-md w-[90%]">
                            </div>
                            <Button class="mt-auto" as="router-link" label="Edit Mockup" to="/tiktok" />
                        </div>
                        <div
                            class="w-10 h-10 min-w-10 flex items-center justify-center bg-pink-100 dark:bg-pink-400/30 rounded-border">
                            <i class="pi pi-tiktok text-pink-500 dark:text-pink-200 !text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border h-full">
                    <div class="flex justify-between mb-4 h-full">
                        <div class="flex flex-col h-full">
                            <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Spotify Playlist
                                Phone</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl flex justify-center">
                                <img src="/spotify-mockup.png" alt="Mockup" class="rounded-md w-[90%]">
                            </div>
                            <Button class="mt-auto" as="router-link" label="Edit Mockup" to="/spotify" />
                        </div>
                        <div
                            class="w-10 h-10 min-w-10 flex items-center justify-center bg-[#1db954] rounded-border">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                clip-rule="evenodd">
                                <path
                                    d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border h-full">
                    <div class="flex justify-between mb-4 h-full">
                        <div class="flex flex-col h-full">
                            <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Spotify Playlist
                                Desktop</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl flex justify-center">
                                <img src="/spotify-mockup.png" alt="Mockup" class="rounded-md w-[90%]">
                            </div>
                            <Button class="mt-auto" as="router-link" label="Edit Mockup" to="/spotify-desktop" />
                        </div>
                        <div
                            class="w-10 h-10 min-w-10 flex items-center justify-center bg-[#1db954] rounded-border">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                clip-rule="evenodd">
                                <path
                                    d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border h-full">
                    <div class="flex justify-between mb-4 h-full">
                        <div class="flex flex-col h-full">
                            <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Phone
                                Mockup</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl flex justify-center">
                                <img src="/phone-mockup.png" alt="Mockup" class="rounded-md w-[90%]">
                            </div>
                            <Button class="mt-auto" as="router-link" label="Edit Mockup" to="/phone" />
                        </div>
                        <div
                            class="w-10 h-10 min-w-10 flex items-center justify-center bg-amber-100 dark:bg-amber-400/30 rounded-border">
                            <i class="pi pi-mobile text-amber-500 dark:text-amber-200 !text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border h-full">
                    <div class="flex justify-between mb-4 h-full">
                        <div class="flex flex-col h-full">
                            <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Phone Lockscreen
                                Mockup</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl flex justify-center">
                                <img src="/lockscreen-mockup.png" alt="Mockup" class="rounded-md w-[90%]">
                            </div>
                            <Button class="mt-auto" as="router-link" label="Edit Mockup" to="/lockscreen" />
                        </div>
                        <div
                            class="w-10 h-10 min-w-10 flex items-center justify-center bg-amber-100 dark:bg-amber-400/30 rounded-border">
                            <i class="pi pi-mobile text-amber-500 dark:text-amber-200 !text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border h-full">
                    <div class="flex justify-between mb-4 h-full">
                        <div class="flex flex-col h-full">
                            <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Image
                                Mockup</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl flex justify-center">
                                <img src="/image-mockup.png" alt="Mockup" class="rounded-md w-[90%]">
                            </div>
                            <Button class="mt-auto" as="router-link" label="Edit Mockup" to="/image" />
                        </div>
                        <div
                            class="w-10 h-10 min-w-10 flex items-center justify-center bg-pink-100 dark:bg-pink-400/30 rounded-border">
                            <i class="pi pi-image text-pink-500 dark:text-pink-200 !text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border h-full">
                    <div class="flex justify-between mb-4 h-full">
                        <div class="flex flex-col h-full">
                            <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Browser
                                Mockup</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl flex justify-center">
                                <img src="/browser-mockup.png" alt="Mockup" class="rounded-md w-[90%]">
                            </div>
                            <Button class="mt-auto" as="router-link" label="Edit Mockup" to="/browser" />
                        </div>
                        <div
                            class="w-10 h-10 min-w-10 flex items-center justify-center bg-pink-100 dark:bg-pink-400/30 rounded-border">
                            <i class="pi pi-globe text-pink-500 dark:text-pink-200 !text-xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="bg-surface-0 dark:bg-surface-900 shadow p-4 rounded-border h-full">
                    <div class="flex justify-between mb-4 h-full">
                        <div class="flex flex-col h-full">
                            <span class="block text-surface-500 dark:text-surface-300 font-medium mb-4">Window
                                Mockup</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl flex justify-center">
                                <img src="/window-mockup.png" alt="Mockup" class="rounded-md w-[90%]">
                            </div>
                            <Button class="mt-auto" as="router-link" label="Edit Mockup" to="/window" />
                        </div>
                        <div
                            class="w-10 h-10 min-w-10 flex items-center justify-center bg-pink-100 dark:bg-pink-400/30 rounded-border">
                            <i class="pi pi-window-maximize text-pink-500 dark:text-pink-200 !text-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>