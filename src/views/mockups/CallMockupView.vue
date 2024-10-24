<script lang="js" setup>
import { ref, reactive } from 'vue';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import ColorPicker from 'primevue/colorpicker';
import Select from 'primevue/select';
import Slider from 'primevue/slider';
import FileUpload from 'primevue/fileupload';
import EditorLayout from '../../components/EditorLayout.vue';
import EditorSidebar from '../../components/EditorSidebar.vue';

const background = ref("dark");
const gradientColors = reactive({
    color1: 'ff0000',
    color2: 'ff2323'
});
const gradientAngle = ref(45);
const phoneBg = ref("");
const proiflePicture = ref("./x_placeholder.png");
const name = ref("Name");
const phoneNumber = ref("012-3456-7890");

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
        color: 'Linear Gradient',
        value: 'linear-gradient'
    },
    {
        color: 'Radial Gradient',
        value: 'radial-gradient'
    },
    {
        color: 'None',
        value: 'none'
    }
]

function onSelect(e) {
    proiflePicture.value = e.files[0].objectURL;
}

function onPhoneBgSelect(e) {
    phoneBg.value = e.files[0].objectURL;
}
</script>

<template>
    <EditorLayout>
        <EditorSidebar header="Edit Phone Call Mockup" downloadFilename="call-mockup.png">
            <IftaLabel>
                <Select inputId="background" v-model="background" :options="backgroundOptions" optionLabel="color"
                    optionValue="value" placeholder='Select a Background' class="w-full" />
                <label for="background">Background</label>
            </IftaLabel>
            <div
                :class="['overflow-hidden space-x-2 transition-all box-content', background == 'linear-gradient' || background == 'radial-gradient' ? 'max-h-56 pb-4' : 'max-h-0']">
                <IftaLabel class="!inline-block">
                    <ColorPicker inline v-model="gradientColors.color1" inputId="color1" />
                    <label for="color1">Color 1</label>
                </IftaLabel>
                <IftaLabel class="!inline-block">
                    <ColorPicker inline v-model="gradientColors.color2" inputId="color2" />
                    <label for="color2">Color 2</label>
                </IftaLabel>
                <label v-if="background == 'linear-gradient'" for="gradientAngle">Gradient Rotation: {{ gradientAngle
                    }}deg</label>
                <Slider v-if="background == 'linear-gradient'" class="mt-4" v-model="gradientAngle" :step="5" :max="360"
                    id="gradientAngle" />
            </div>
            <IftaLabel>
                <InputText fluid id="name" v-model="name" variant="filled" placeholder="Type Name..." />
                <label for="name">Caller Name</label>
            </IftaLabel>
            <IftaLabel>
                <InputText fluid id="phoneNumber" v-model="phoneNumber" variant="filled" placeholder="012-3456-7890" />
                <label for="phoneNumber">Phone Number</label>
            </IftaLabel>
            <div class="space-y-2 mt-4 w-full">
                <FileUpload :chooseButtonProps="{ class: 'flex-1' }" mode="basic" accept="image/*" @select="onSelect"
                    chooseLabel="Upload Profile Picture" />
                <Button class="w-full" v-if="proiflePicture != './x_placeholder.png'" label="Remove Profile Picture"
                    severity="danger" @click="proiflePicture = './x_placeholder.png'" />
            </div>
            <div class="space-y-2 mt-4 w-full">
                <FileUpload :chooseButtonProps="{ class: 'flex-1' }" mode="basic" accept="image/*"
                    @select="onPhoneBgSelect" chooseLabel="Upload Call Background" />
                <Button class="w-full" v-if="phoneBg" label="Remove Call Background" severity="danger"
                    @click="phoneBg = ''" />
            </div>
        </EditorSidebar>
        <div :style="background == 'linear-gradient' ? { 'background-image': `linear-gradient(${gradientAngle}deg, #${gradientColors.color1}, #${gradientColors.color2})` }
            : background == 'radial-gradient' ? { 'background-image': `radial-gradient(#${gradientColors.color1} 25%, #${gradientColors.color2})` } : {}"
            :class="['capture-container relative col-span-3 flex justify-center items-center min-h-[800px] max-h-screen', background == 'white' ? 'bg-white' : '']"
            :id="background != 'none' ? 'capture' : ''">
            <div :class="['relative rounded-[2.5rem] border-neutral-800 bg-neutral-800 border-[14px] h-[600px] w-[300px]', background != 'none' ? 'shadow-2xl' : '']"
                :id="background == 'none' ? 'capture' : ''">
                <div class="h-[32px] w-[3px] bg-neutral-800 absolute -start-[17px] top-[72px] rounded-s-lg">
                </div>
                <div class="h-[46px] w-[3px] bg-neutral-800 absolute -start-[17px] top-[124px] rounded-s-lg">
                </div>
                <div class="h-[46px] w-[3px] bg-neutral-800 absolute -start-[17px] top-[178px] rounded-s-lg">
                </div>
                <div class="h-[64px] w-[3px] bg-neutral-800 absolute -end-[17px] top-[142px] rounded-e-lg">
                </div>
                <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white bg-cover bg-center flex flex-col justify-between"
                    :style="phoneBg ? { 'background-image': `url(${phoneBg})` } : { 'background-image': 'linear-gradient(to top, #061f3e, #5b489f, #449299)' }">
                    <div class="flex-1 flex justify-start items-center flex-col pt-10 gap-2">
                        <h4 class="text-sm mb-4">Incoming call</h4>
                        <h2 class="font-medium text-3xl text-center line-clamp-1 px-2">{{ name }}</h2>
                        <h3 class="text-sm line-clamp-1 px-2 text-center">{{ phoneNumber }}</h3>
                        <div class="w-16 h-16 rounded-full overflow-hidden">
                            <img :src="proiflePicture" alt="Profile Picture" class="w-full h-full object-cover">
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col justify-end items-center z-10">
                        <div class="flex justify-between px-8 mb-12 w-full">
                            <button class="bg-white text-green-500 p-3 shadow-xl rounded-full flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="size-6">
                                    <path fill-rule="evenodd"
                                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                            <button class="bg-white text-red-600 p-3 shadow-xl rounded-full flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="size-6 rotate-[135deg]">
                                    <path fill-rule="evenodd"
                                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <div class="w-1/3 h-1 bg-white rounded-full mb-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </EditorLayout>
</template>