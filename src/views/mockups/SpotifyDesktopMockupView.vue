<script lang="js" setup>
import { ref, reactive } from 'vue';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import ColorPicker from 'primevue/colorpicker';
import Select from 'primevue/select';
import FileUpload from 'primevue/fileupload';
import ToggleSwitch from 'primevue/toggleswitch';
import downloadCapture from '../../lib/utils';

const background = ref("dark");
const image = ref("./spotify_default_cover.png");
const name = ref("Name");
const playlistName = ref("Playlist");
const darkmode = ref(false);
const hideWindow = ref(false);
const gradientColor = ref("");

const songsPlaceholderAmount = Array.from({ length: 3 });

const backgroundOptions = [
    {
        color: 'Dark',
        value: 'dark'
    },
    {
        color: 'White',
        value: 'white'
    },
    {
        color: 'Green',
        value: 'green'
    },
    {
        color: 'Desktop',
        value: 'desktop'
    },
    {
        color: 'None',
        value: 'none'
    }
]

function onImageSelect(e) {
    image.value = e.files[0].objectURL;
}
</script>

<template>
    <div class="w-full min-h-screen block xl:grid grid-cols-4 gap-4">
        <div class="flex flex-col gap-4 mt-4 px-4 mb-10 xl:mb-0">
            <h2 class="text-xl font-bold">Edit Spotify Playlist Mockup</h2>
            <IftaLabel>
                <Select inputId="background" v-model="background" :options="backgroundOptions" optionLabel="color"
                    optionValue="value" placeholder='Select a Background' class="w-full" />
                <label for="background">Background</label>
            </IftaLabel>
            <IftaLabel>
                <InputText fluid id="name" v-model="name" variant="filled" placeholder="Type Name..." />
                <label for="name">Username</label>
            </IftaLabel>
            <IftaLabel>
                <InputText fluid id="playlistName" v-model="playlistName" variant="filled"
                    placeholder="Type Playlist Name..." />
                <label for="playlistName">Playlist Name</label>
            </IftaLabel>
            <div class="space-y-2 mt-4 w-full">
                <FileUpload :chooseButtonProps="{ class: 'flex-1' }" mode="basic" accept="image/*"
                    @select="onImageSelect" chooseLabel="Upload Image" />
                <Button class="w-full" v-if="image != './spotify_default_cover.png'" label="Remove Image"
                    severity="danger" @click="image = './spotify_default_cover.png'" />
            </div>
            <div class="flex items-center mt-4">
                <ToggleSwitch v-model="darkmode" inputId="darkmode" />
                <label for="darkmode" class="ml-2"> Dark Mode </label>
            </div>
            <div class="flex items-center mt-4">
                <ToggleSwitch v-model="hideWindow" inputId="hideWindow" />
                <label for="hideWindow" class="ml-2"> Hide Window </label>
            </div>
            <IftaLabel>
                <ColorPicker inline v-model="gradientColor" inputId="color" />
                <label for="color">Gradient Color</label>
            </IftaLabel>
            <div class="flex gap-2 mt-4">
                <Button as="router-link" class="flex-1" label="Cancel" severity="secondary" to="/" />
                <Button class="flex-1" label="Download" @click="downloadCapture('spotify-mockup.png')" />
            </div>
        </div>
        <div :class="['relative col-span-3 flex justify-center items-center max-h-screen', background == 'white' ? 'bg-white' : '', background == 'desktop' ? 'bg-[url(/macos.png)] bg-contain bg-no-repeat bg-center capture-container-desktop' : background == 'green' ? 'bg-[#1db954]' : '', background != 'none' && background != 'desktop' ? 'capture-container' : '']"
            :id="background != 'none' ? 'capture' : ''">
            <div :id="background == 'none' ? 'capture' : ''"
                :class="['rounded-2xl overflow-hidden shadow-black/40 h-[500px] w-11/12 xl:w-2/3 shadow-[0_25px_50px_0_rgb(0_0_0_/_0.35)] bg-black']">
                <div :class="['w-full', !hideWindow ? 'pb-4 h-[90%]' : 'h-full mb-2']">
                    <div
                        :class="['w-full h-12 relative rounded-t-lg flex overflow-hidden justify-center md:justify-between items-center', darkmode ? 'bg-neutral-800 ' : 'bg-gray-200']" v-if="!hideWindow">
                        <div class="hidden md:flex justify-start space-x-1.5 px-2 z-10 ml-2"><span
                                :class="['relative w-3 h-3 rounded-full', darkmode ? 'bg-red-400' : 'bg-red-500']"></span><span
                                :class="['relative w-3 h-3 rounded-full', darkmode ? 'bg-yellow-400' : 'bg-yellow-500']"></span><span
                                :class="['relative w-3 h-3 rounded-full', darkmode ? 'bg-green-400' : 'bg-green-500']"></span>
                        </div>
                        <div
                            :class="['py-1 text-center w-[175px] md:w-[300px] xl:w-[400px] rounded-sm text-xs md:text-base overflow-hidden', darkmode ? 'text-white' : 'text-black']">
                            Spotify</div>
                        <div class="block invisible px-2 w-9"></div>
                    </div>
                    <div :class="['relative bg-[#121212] rounded-md mx-2 overflow-hidden mt-2', hideWindow ? 'h-[97%]' : 'h-full']">
                        <div :style="{ '--custom-color': '#' + gradientColor }"
                            class="flex items-end gap-4 bg-gradient-to-t from-[#121212] to-variable p-4">
                            <div class="overflow-hidden w-48 aspect-square shadow-2xl ml-2 rounded-md">
                                <img :src="image" alt="Playlist Image" class="w-full h-full object-cover">
                            </div>
                            <div class="flex-1">
                                <h2 class="font-bold text-6xl mb-1 text-white py-2 text-nowrap max-w-2xl truncate">{{ playlistName }}</h2>
                                <span class="text-neutral-500 font-medium"><span class="font-bold text-white inline-block max-w-sm truncate align-middle">{{ name
                                        }}</span> • <span class="foucs:outline-none" contenteditable>118</span> Songs
                                    <span class="foucs:outline-none" contenteditable>6 h 23 m</span></span>
                            </div>
                        </div>
                        <div class="flex flex-col items-start h-2/3">
                            <div class="flex justify-start gap-5 w-full px-4">
                                <div class="flex items-center gap-5">
                                    <button class="bg-[#1db954] p-3 rounded-full aspect-square">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"
                                            class="size-6">
                                            <path fill-rule="evenodd"
                                                d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="#a3a3a3" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-shuffle">
                                        <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
                                        <path d="m18 2 4 4-4 4" />
                                        <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
                                        <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
                                        <path d="m18 14 4 4-4 4" />
                                    </svg>
                                </div>
                                <div class="flex items-center gap-5">
                                    <i class="pi pi-arrow-circle-down text-neutral-400 !text-2xl"></i>
                                    <i class="pi pi-user-plus text-neutral-400 !text-2xl"></i>
                                    <i class="pi pi-ellipsis-h text-neutral-400 !text-2xl"></i>
                                </div>
                            </div>
                            <div class="w-full px-4">
                                <table class="w-full">
                                    <thead class="border-b border-neutral-600">
                                        <tr class="text-left text-neutral-500 font-normal">
                                            <th class="font-medium py-2">#</th>
                                            <th class="font-medium w-[45%] px-4 py-2">Title</th>
                                            <th class="font-medium py-2">Album</th>
                                            <th class="font-medium py-2">Added on</th>
                                            <th class="font-medium py-2"><i class="pi pi-clock"></i></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(_, index) in songsPlaceholderAmount" class="text-neutral-400">
                                            <td class="py-2">{{ index+1 }}</td>
                                            <td class="flex gap-2 px-4 py-2">
                                                <div class="h-10 w-10 bg-neutral-600 rounded-sm"></div>
                                                <div class="flex-1 space-y-2 py-1">
                                                    <div class="rounded-full bg-neutral-600 h-3 w-full"></div>
                                                    <div class="rounded-full bg-neutral-600 h-2 w-1/3"></div>
                                                </div>
                                            </td>
                                            <td class="py-2 align-top">
                                                <div class="rounded-full bg-neutral-600 h-3 w-24 mt-1"></div>
                                            </td>
                                            <td class="py-2 align-top">
                                                <div class="rounded-full bg-neutral-600 h-3 w-24 mt-1"></div>
                                            </td>
                                            <td class="py-2"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="background != 'none' && background != 'desktop'"
                :class="['absolute bottom-10 left-10 w-14 h-14 rounded-full flex justify-center items-center', background == 'green' ? 'bg-black' : 'bg-[#1db954]', background == 'desktop' ? 'bottom-20' : '']">
                <svg width="24" height="24"
                    :style="{ 'fill': background == 'white' ? 'white' : background == 'green' ? '#1db954' : 'black' }"
                    xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path
                        d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" />
                </svg>
            </div>
        </div>
    </div>
</template>