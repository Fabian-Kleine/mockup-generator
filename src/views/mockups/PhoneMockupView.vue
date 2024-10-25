<script lang="js" setup>
import { ref, reactive } from 'vue';
import IftaLabel from 'primevue/iftalabel';
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

function onPhoneBgSelect(e) {
    phoneBg.value = e.files[0].objectURL;
}
</script>

<template>
    <EditorLayout>
        <EditorSidebar header="Edit Phone Mockup" downloadFilename="phone-mockup.png">
            <IftaLabel>
                <Select inputId="background" v-model="background" :options="backgroundOptions" optionLabel="color"
                    optionValue="value" placeholder='Select a Background' class="w-full" />
                <label for="background">Background</label>
            </IftaLabel>
            <div 
            :class="['overflow-hidden space-x-2 transition-all duration-500 ease-linear box-content', background == 'linear-gradient' || background == 'radial-gradient' ? 'max-h-[500px] pb-4' : 'max-h-0']">
                <IftaLabel class="!inline-block">
                    <ColorPicker inline v-model="gradientColors.color1" inputId="color1" />
                    <label for="color1">Color 1</label>
                </IftaLabel>
                <IftaLabel class="!inline-block">
                    <ColorPicker inline v-model="gradientColors.color2" inputId="color2" />
                    <label for="color2">Color 2</label>
                </IftaLabel>
                <label v-if="background == 'linear-gradient'" for="gradientAngle">Gradient Rotation: {{ gradientAngle }}deg</label>
                <Slider v-if="background == 'linear-gradient'" class="mt-4" v-model="gradientAngle" :step="5" :max="360" id="gradientAngle" />
            </div>
            <div class="space-y-2 mt-4 w-full">
                <FileUpload :chooseButtonProps="{ class: 'flex-1' }" mode="basic" accept="image/*"
                    @select="onPhoneBgSelect" chooseLabel="Upload Phone Background" />
                <Button class="w-full" v-if="phoneBg" label="Remove Phone Background" severity="danger"
                    @click="phoneBg = ''" />
            </div>
        </EditorSidebar>
        <div :style="background == 'linear-gradient' ? { 'background-image': `linear-gradient(${gradientAngle}deg, #${gradientColors.color1}, #${gradientColors.color2})` } 
        : background == 'radial-gradient' ? {'background-image': `radial-gradient(#${gradientColors.color1} 25%, #${gradientColors.color2})`} : {}"
            :class="['capture-container relative col-span-3 flex justify-center items-center min-h-[800px]', background == 'white' ? 'bg-white' : '']"
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
                <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white bg-cover bg-center" :style="phoneBg ? {'background-image': `url(${phoneBg})`} : {}">
                </div>
            </div>
        </div>
    </EditorLayout>
</template>