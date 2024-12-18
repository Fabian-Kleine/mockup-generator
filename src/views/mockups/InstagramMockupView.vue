<script lang="js" setup>
import { ref } from 'vue';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import ToggleSwitch from 'primevue/toggleswitch';
import Select from 'primevue/select';
import EditorLayout from '../../components/layout/EditorLayout.vue';
import EditorSidebar from '../../components/layout/EditorSidebar.vue';
import FileInput from '../../components/inputs/FileInput.vue';

const background = ref("gradient");
const hidePhone = ref(false);
const proiflePicture = ref("./x_placeholder.png");
const image = ref("");
const name = ref("Name");
const description = ref("");
const darkmode = ref(false);

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
</script>

<template>
    <EditorLayout>
        <EditorSidebar header="Edit Instagram Post Mockup" downloadFilename="instagram-mockup.png">
            <p>
                Click on the numbers or "5 days ago" text to edit it.
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
                <InputText fluid id="description" v-model="description" variant="filled" placeholder="Type Description..." />
                <label for="description">Description</label>
            </IftaLabel>
            <div class="flex items-center mt-4">
                <ToggleSwitch v-model="hidePhone" inputId="hidePhone" />
                <label for="hidePhone" class="ml-2"> Hide Phone </label>
            </div>
            <div class="flex items-center mt-4">
                <ToggleSwitch v-model="darkmode" inputId="darkmode" />
                <label for="darkmode" class="ml-2"> Darkmode </label>
            </div>
            <FileInput v-model:image="proiflePicture" imageName="Profile Picture" defaultImage="./x_placeholder.png" />
            <FileInput v-model:image="image" imageName="Post Image" />
        </EditorSidebar>
        <div :class="['capture-container relative col-span-3 flex justify-center items-center min-h-[800px]', background == 'white' ? 'bg-white' : background == 'gradient' ? 'bg-instagram-gradient' : '']"
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
                <div :class="['rounded-[2rem] overflow-hidden w-[272px] h-[572px] flex flex-col', darkmode ? 'bg-neutral-800 text-white' : 'bg-white text-black']">
                    <div class="flex justify-between items-center px-3 py-4">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-full overflow-hidden">
                                <img :src="proiflePicture" alt="Profile Picture" class="w-full h-full object-cover">
                            </div>
                            <span class="block text-nowrap overflow-hidden max-w-[100px] mr-2">{{ name }}</span>
                        </div>
                        <div class="flex items-center gap-1 text-sm">
                            <button :class="['border px-4 py-1 rounded-lg', darkmode ? 'border-white' : 'border-black']">Follow</button>
                            <i class="pi pi-ellipsis-v !text-sm"></i>
                        </div>
                    </div>
                    <div :class="['w-full aspect-square overflow-hidden', darkmode ? 'bg-neutral-700' : 'bg-neutral-200']">
                        <img v-if="image" :src="image" alt="instagram post" class="h-full w-full object-cover">
                    </div>
                    <div class="flex justify-between px-2 py-1">
                        <div class="flex gap-2">
                            <div class="flex items-center">
                                <i class="pi pi-heart"></i>
                                <span class="ml-1 text-sm focus:outline-none" contenteditable>61,6 K</span>
                            </div>
                            <div class="flex items-center">
                                <i class="pi pi-comment"></i>
                                <span class="ml-1 text-sm focus:outline-none" contenteditable>184</span>
                            </div>
                            <div class="flex items-center">
                                <i class="pi pi-send"></i>
                                <span class="ml-1 text-sm focus:outline-none" contenteditable>12,2 K</span>
                            </div>
                        </div>
                        <i class="pi pi-bookmark"></i>
                    </div>
                    <p class="w-full text-sm px-2 line-clamp-2 break-words text-overflow-ellipsis">{{ description }}</p>
                    <span class="text-neutral-500 text-sm px-2 focus:outline-none" contenteditable>5 days ago</span>
                    <div class="flex justify-between items-center px-3 py-4 mt-2">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-full overflow-hidden">
                                <img :src="proiflePicture" alt="Profile Picture" class="w-full h-full object-cover">
                            </div>
                            <span class="block text-nowrap overflow-hidden max-w-[100px] mr-2">{{ name }}</span>
                        </div>
                        <div class="flex items-center gap-1 text-sm">
                            <button :class="['border px-4 py-1 rounded-lg', darkmode ? 'border-white' : 'border-black']">Follow</button>
                            <i class="pi pi-ellipsis-v !text-sm"></i>
                        </div>
                    </div>
                    <div :class="['flex-1', darkmode ? 'bg-neutral-700' : 'bg-neutral-200']"></div>
                </div>
            </div>
            <div v-if="background != 'none'"
                :class="['absolute bottom-10 left-10 w-14 h-14 rounded-full flex justify-center items-center', background == 'gradient' ? 'bg-white' : 'bg-instagram-gradient']">
                <i
                    :class="['pi pi-instagram !text-2xl', background == 'gradient' ? 'bg-clip-text text-transparent bg-instagram-gradient' : '']"></i>
            </div>
        </div>
    </EditorLayout>
</template>