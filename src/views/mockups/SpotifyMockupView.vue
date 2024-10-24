<script lang="js" setup>
import { ref } from 'vue';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import ToggleSwitch from 'primevue/toggleswitch';
import FileUpload from 'primevue/fileupload';
import Select from 'primevue/select';
import ColorPicker from 'primevue/colorpicker';
import EditorLayout from '../../components/EditorLayout.vue';
import EditorSidebar from '../../components/EditorSidebar.vue';

const background = ref("dark");
const hidePhone = ref(false);
const proiflePicture = ref("./x_placeholder.png");
const image = ref("./spotify_default_cover.png");
const name = ref("Name");
const playlistName = ref("Playlist");
const gradientColor = ref("");

const songsPlaceholderAmount = Array.from({ length: 6 });

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
        color: 'None',
        value: 'none'
    }
]

function onSelect(e) {
    proiflePicture.value = e.files[0].objectURL;
}

function onImageSelect(e) {
    image.value = e.files[0].objectURL;
}

</script>

<template>
    <EditorLayout>
        <EditorSidebar header="Edit Spotify Mockup" downloadFilename="spotify-mockup.png">
            <p>
                Click on the numbers to edit it.
            </p>
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
            <div class="flex items-center mt-4">
                <ToggleSwitch v-model="hidePhone" inputId="hidePhone" />
                <label for="hidePhone" class="ml-2"> Hide Phone </label>
            </div>
            <div class="space-y-2 mt-4 w-full">
                <FileUpload :chooseButtonProps="{ class: 'flex-1' }" mode="basic" accept="image/*" @select="onSelect"
                    chooseLabel="Upload Profile Picture" />
                <Button class="w-full" v-if="proiflePicture != './x_placeholder.png'" label="Remove Profile Picture"
                    severity="danger" @click="proiflePicture = './x_placeholder.png'" />
            </div>
            <div class="space-y-2 mt-4 w-full">
                <FileUpload :chooseButtonProps="{ class: 'flex-1' }" mode="basic" accept="image/*"
                    @select="onImageSelect" chooseLabel="Upload Image" />
                <Button class="w-full" v-if="image != './spotify_default_cover.png'" label="Remove Image"
                    severity="danger" @click="image = './spotify_default_cover.png'" />
            </div>
            <IftaLabel>
                <ColorPicker inline v-model="gradientColor" inputId="color" />
                <label for="color">Gradient Color</label>
            </IftaLabel>
            <div class="flex gap-2 mt-4">
                <Button as="router-link" class="flex-1" label="Cancel" severity="secondary" to="/" />
                <Button class="flex-1" label="Download" @click="downloadCapture('spotify-mockup.png')" />
            </div>
        </EditorSidebar>
        <div :class="['capture-container relative col-span-3 flex justify-center items-center min-h-[800px]', background == 'white' ? 'bg-white' : background == 'green' ? 'bg-[#1db954]' : '']"
            :id="background != 'none' ? 'capture' : ''">
            <div :class="['relative rounded-[2.5rem]', , background == 'green' || background == 'white' ? 'shadow-2xl' : '', !hidePhone ? 'border-neutral-800 bg-neutral-800 border-[14px] h-[600px] w-[300px]' : '']"
                :id="background == 'none' ? 'capture' : ''">
                <div class="h-[32px] w-[3px] bg-neutral-800 absolute -start-[17px] top-[72px] rounded-s-lg"
                    v-if="!hidePhone">
                </div>
                <div class="h-[46px] w-[3px] bg-neutral-800 absolute -start-[17px] top-[124px] rounded-s-lg"
                    v-if="!hidePhone">
                </div>
                <div class="h-[46px] w-[3px] bg-neutral-800 absolute -start-[17px] top-[178px] rounded-s-lg"
                    v-if="!hidePhone">
                </div>
                <div class="h-[64px] w-[3px] bg-neutral-800 absolute -end-[17px] top-[142px] rounded-e-lg"
                    v-if="!hidePhone">
                </div>
                <div :style="{'--custom-color': '#'+gradientColor}"
                    class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] flex flex-col bg-center bg-cover bg-gradient-to-t from-[#121212] from-40% to-variable">
                    <div class="flex flex-col items-center h-2/3 mt-10">
                        <div class="overflow-hidden w-2/3 aspect-square shadow-2xl">
                            <img :src="image" alt="Playlist Image" class="w-full h-full object-cover">
                        </div>
                        <div class="w-full px-4 mt-2">
                            <h2 class="font-bold text-xl mb-2 break-words line-clamp-1">{{ playlistName }}</h2>
                            <div class="flex gap-2 items-center">
                                <div class="w-5 h-5 rounded-full overflow-hidden">
                                    <img :src="proiflePicture" alt="Profile Picture" class="w-full h-full object-cover">
                                </div>
                                <span class="font-bold text-sm break-words line-clamp-1">{{ name }}</span>
                            </div>
                            <span class="text-neutral-400 font-medium text-sm focus:outline-none" contenteditable>2 h 35
                                m</span>
                        </div>
                        <div class="flex justify-between w-full px-4">
                            <div class="flex items-center gap-5">
                                <i class="pi pi-arrow-circle-down text-neutral-400 !text-lg"></i>
                                <i class="pi pi-user-plus text-neutral-400 !text-lg"></i>
                                <i class="pi pi-ellipsis-v text-neutral-400"></i>
                            </div>
                            <div class="flex items-center gap-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                    fill="none" stroke="#a3a3a3" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-shuffle">
                                    <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
                                    <path d="m18 2 4 4-4 4" />
                                    <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
                                    <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
                                    <path d="m18 14 4 4-4 4" />
                                </svg>
                                <button class="bg-[#1db954] p-2 rounded-full aspect-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"
                                        class="size-5">
                                        <path fill-rule="evenodd"
                                            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <i class="absolute left-3 pi pi-chevron-left"></i>
                    </div>
                    <div class="flex-1 mt-2 px-4 space-y-2">
                        <template v-for="_ in songsPlaceholderAmount">
                            <div class="flex justify-between gap-2">
                                <div class="h-10 w-10 bg-neutral-600 rounded-sm"></div>
                                <div class="flex-1 space-y-2 py-1">
                                    <div class="rounded-full bg-neutral-600 h-3 w-full"></div>
                                    <div class="rounded-full bg-neutral-600 h-2 w-1/3"></div>
                                </div>
                                <i class="pi pi-ellipsis-v text-neutral-400"></i>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <div v-if="background != 'none'"
                :class="['absolute bottom-10 left-10 w-14 h-14 rounded-full flex justify-center items-center', background == 'green' ? 'bg-black' : 'bg-[#1db954]']">
                <svg width="24" height="24"
                    :style="{ 'fill': background == 'white' ? 'white' : background == 'green' ? '#1db954' : 'black' }"
                    xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path
                        d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" />
                </svg>
            </div>
        </div>
    </EditorLayout>
</template>