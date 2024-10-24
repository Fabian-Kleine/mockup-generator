<script lang="js" setup>
import { ref, reactive } from 'vue';
import IftaLabel from 'primevue/iftalabel';
import ColorPicker from 'primevue/colorpicker';
import Select from 'primevue/select';
import Slider from 'primevue/slider';
import FileUpload from 'primevue/fileupload';
import downloadCapture from '../../lib/utils';

const background = ref("dark");
const gradientColors = reactive({
    color1: 'ff0000',
    color2: 'ff2323'
});
const gradientAngle = ref(45);
const image = ref("");

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
    }
]

function onImageSelect(e) {
    image.value = e.files[0].objectURL;
}
</script>

<template>
    <div class="w-full min-h-screen block xl:grid grid-cols-4 gap-4">
        <div class="flex flex-col gap-4 mt-4 px-4 mb-10 xl:mb-0">
            <h2 class="text-xl font-bold">Edit Image Mockup</h2>
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
                <Button class="w-full" v-if="image" label="Remove Image" severity="danger"
                    @click="image = ''" />
            </div>
            <div class="flex gap-2 mt-4">
                <Button as="router-link" class="flex-1" label="Cancel" severity="secondary" to="/" />
                <Button class="flex-1" label="Download" @click="downloadCapture('image-mockup.png')" />
            </div>
        </div>
        <div :style="background == 'linear-gradient' ? { 'background-image': `linear-gradient(${gradientAngle}deg, #${gradientColors.color1}, #${gradientColors.color2})` }
            : background == 'radial-gradient' ? { 'background-image': `radial-gradient(#${gradientColors.color1} 25%, #${gradientColors.color2})` } : {}"
            :class="['capture-container relative col-span-3 flex justify-center items-center max-h-screen', background == 'white' ? 'bg-white' : '']"
            id="capture">
                <img :src="image" class="block rounded-2xl w-auto h-auto max-w-[66%] max-h-[66%] shadow-[0_25px_50px_0_rgb(0_0_0_/_0.35)]">
        </div>
    </div>
</template>