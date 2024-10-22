<script lang="js" setup>
import { ref } from 'vue';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import ToggleSwitch from 'primevue/toggleswitch';
import FileUpload from 'primevue/fileupload';
import Select from 'primevue/select';
import downloadCapture from '../../lib/utils';

const background = ref("dark");
const hidePhone = ref(false);
const proiflePicture = ref("/x_placeholder.png");
const image = ref("");
const name = ref("Name");
const description = ref("");

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
        color: 'Gradient',
        value: 'gradient'
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
    <div class="w-full min-h-screen block xl:grid grid-cols-4 gap-4">
        <div class="flex flex-col gap-4 mt-4 px-4 edit-tweet mb-10 xl:mb-0">
            <h2 class="text-xl font-bold">Edit TikTok Mockup</h2>
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
                <InputText fluid id="description" v-model="description" variant="filled"
                    placeholder="Type Description..." />
                <label for="description">Description</label>
            </IftaLabel>
            <div class="flex items-center mt-4">
                <ToggleSwitch v-model="hidePhone" inputId="hidePhone" />
                <label for="hidePhone" class="ml-2"> Hide Phone </label>
            </div>
            <div class="space-y-2 mt-4 w-full">
                <FileUpload :chooseButtonProps="{ class: 'flex-1' }" mode="basic" accept="image/*" @select="onSelect"
                    chooseLabel="Upload Profile Picture" />
                <Button class="w-full" v-if="proiflePicture != '/x_placeholder.png'" label="Remove Profile Picture"
                    severity="danger" @click="proiflePicture = '/x_placeholder.png'" />
            </div>
            <div class="space-y-2 mt-4 w-full">
                <FileUpload :chooseButtonProps="{ class: 'flex-1' }" mode="basic" accept="image/*"
                    @select="onImageSelect" chooseLabel="Upload Image" />
                <Button class="w-full" v-if="image" label="Remove Image" severity="danger" @click="image = ''" />
            </div>
            <div class="flex gap-2 mt-4">
                <Button as="router-link" class="flex-1" label="Cancel" severity="secondary" to="/" />
                <Button class="flex-1" label="Download" @click="downloadCapture('tiktok-mockup.png')" />
            </div>
        </div>
        <div :class="['relative col-span-3 flex justify-center items-center min-h-[800px]', background == 'white' ? 'bg-white' : background == 'gradient' ? 'bg-tiktok-gradient' : '']"
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
                <div :style="image ? { 'background-image': `url(${image})` } : {}"
                    class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] flex flex-col justify-end bg-center bg-cover bg-neutral-700">
                    <div class="flex justify-between items-end mx-3 my-4">
                        <div class="flex-1 mb-2">
                            <h2 class="text-lg line-clamp-1 font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">{{ name }}</h2>
                            <p class="break-words line-clamp-2 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">{{ description }}</p>
                        </div>
                        <div class="flex flex-col items-center gap-2 font-bold">
                            <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-white mb-2">
                                <img :src="proiflePicture" alt="Profile Picture" class="w-full h-full object-cover">
                                <div
                                    class="absolute flex items-center justify-center w-5 h-5 -mt-2.5 ml-2 bg-[#EE1D52] rounded-full">
                                    <i class="pi pi-plus !text-[10px]"></i>
                                </div>
                            </div>
                            <div class="flex flex-col items-center [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="size-8 text-white drop-shadow-lg">
                                    <path
                                        d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                </svg>
                                <span class="block focus:outline-none text-[12px]" contenteditable>22.762</span>
                            </div>
                            <div class="flex flex-col items-center [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="size-8 text-white drop-shadow-lg">
                                    <path fill-rule="evenodd"
                                        d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="block focus:outline-none text-[12px]" contenteditable>70</span>
                            </div>
                            <div class="flex flex-col items-center [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="size-8 text-white drop-shadow-lg">
                                    <path fill-rule="evenodd"
                                        d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="block focus:outline-none text-[12px]" contenteditable>1443</span>
                            </div>
                            <div class="flex flex-col items-center [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="size-8 text-white drop-shadow-lg">
                                    <path fill-rule="evenodd"
                                        d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span class="block focus:outline-none text-[12px]" contenteditable>4231</span>
                            </div>
                            <div
                                class="w-8 h-8 rounded-full flex justify-center items-center bg-black mt-1">
                                <i class="pi pi-tiktok"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="background != 'none'"
                class="absolute bottom-10 left-10 w-14 h-14 rounded-full flex justify-center items-center bg-black">
                <i class="pi pi-tiktok !text-2xl"></i>
            </div>
        </div>
    </div>
</template>