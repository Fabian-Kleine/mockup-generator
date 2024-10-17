<script lang="js" setup>
import { ref, reactive } from 'vue';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import ColorPicker from 'primevue/colorpicker';
import Select from 'primevue/select';
import Slider from 'primevue/slider';
import FileUpload from 'primevue/fileupload';
import ToggleSwitch from 'primevue/toggleswitch';
import downloadCapture from '../lib/utils';

const background = ref("dark");
const gradientColors = reactive({
    color1: 'ff0000',
    color2: 'ff2323'
});
const gradientAngle = ref(45);
const image = ref("");
const url = ref("Photoshop");
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
        color: 'Desktop',
        value: 'desktop'
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

function onImageSelect(e) {
    image.value = e.files[0].objectURL;
}
</script>

<template>
    <div class="w-full min-h-screen block xl:grid grid-cols-4 gap-4">
        <div class="flex flex-col gap-4 mt-4 px-4 mb-10 xl:mb-0">
            <h2 class="text-xl font-bold">Edit Window Mockup</h2>
            <IftaLabel>
                <InputText fluid id="url" v-model="url" variant="filled"
                    placeholder="Type Name..." />
                <label for="url">Window Name</label>
            </IftaLabel>
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
            <div class="space-y-2 mt-4 w-full">
                <FileUpload :chooseButtonProps="{ class: 'flex-1' }" mode="basic" accept="image/*"
                    @select="onImageSelect" chooseLabel="Upload Image" />
                <Button class="w-full" v-if="image" label="Remove Image" severity="danger" @click="image = ''" />
            </div>
            <div class="flex items-center mt-4">
                <ToggleSwitch v-model="darkmode" inputId="darkmode" />
                <label for="darkmode" class="ml-2"> Dark Mode </label>
            </div>
            <div class="flex gap-2 mt-4">
                <Button as="router-link" class="flex-1" label="Cancel" severity="secondary" to="/" />
                <Button class="flex-1" label="Download" @click="downloadCapture('window-mockup.png')" />
            </div>
        </div>
        <div :style="background == 'linear-gradient' ? { 'background-image': `linear-gradient(${gradientAngle}deg, #${gradientColors.color1}, #${gradientColors.color2})` }
            : background == 'radial-gradient' ? { 'background-image': `radial-gradient(#${gradientColors.color1} 25%, #${gradientColors.color2})` } : {}"
            :class="['relative col-span-3 flex justify-center items-center max-h-screen', background == 'white' ? 'bg-white' : '', background == 'desktop' ? 'bg-[url(/macos.png)] bg-contain bg-no-repeat bg-center' : '']"
            :id="background != 'none' ? 'capture' : ''">
            <div :id="background == 'none' ? 'capture' : ''"
                :class="['rounded-2xl overflow-hidden shadow-black/40 h-[500px] w-11/12 xl:w-2/3 shadow-[0_25px_50px_0_rgb(0_0_0_/_0.35)]', darkmode ? 'bg-zinc-800' : 'bg-zinc-200']">
                <div class="w-full h-[90%]">
                    <div
                        :class="['w-full h-12 relative rounded-t-lg flex overflow-hidden justify-center md:justify-between items-center', darkmode ? 'bg-neutral-800 ' : 'bg-gray-200']">
                        <div class="hidden md:flex justify-start space-x-1.5 px-2 z-10 ml-2"><span
                                :class="['relative w-3 h-3 rounded-full', darkmode ? 'bg-red-400' : 'bg-red-500']"></span><span
                                :class="['relative w-3 h-3 rounded-full', darkmode ? 'bg-yellow-400' : 'bg-yellow-500']"></span><span
                                :class="['relative w-3 h-3 rounded-full', darkmode ? 'bg-green-400' : 'bg-green-500']"></span></div>
                        <div
                            :class="['py-1 text-center w-[175px] md:w-[300px] xl:w-[400px] rounded-sm text-xs md:text-base overflow-hidden', darkmode ? 'text-white' : 'text-black']">
                            {{ url }}</div>
                        <div class="block invisible px-2 w-9"></div>
                    </div>
                    <div class="relative h-full">
                        <img v-if="image" :src="image"
                        class="w-full h-full object-cover">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>