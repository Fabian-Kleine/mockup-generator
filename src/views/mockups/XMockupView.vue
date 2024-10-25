<script lang="js" setup>
import { ref } from 'vue';
import IftaLabel from 'primevue/iftalabel';
import Select from 'primevue/select';
import EditorLayout from '../../components/layout/EditorLayout.vue';
import EditorSidebar from '../../components/layout/EditorSidebar.vue';
import FileInput from '../../components/inputs/FileInput.vue';
import TimeInput from '../../components/inputs/TimeInput.vue';
import DateInput from '../../components/inputs/DateInput.vue';

const verified = ref(false);
const background = ref("blue");
const date = ref("");
const time = ref("");
const proiflePicture = ref("./x_placeholder.png");

const backgroundOptions = [
    {
        color: 'White',
        value: 'white'
    },
    {
        color: 'Blue',
        value: 'blue'
    },
    {
        color: 'None',
        value: 'none'
    }
]
</script>

<template>
    <EditorLayout>
        <EditorSidebar header="Edit Tweet Mockup" downloadFilename="x-mockup.png">
            <p>
                Click on a text (except time and date) to edit it.
            </p>
            <div class="flex items-center">
                <Checkbox v-model="verified" binary inputId="verified" name="verified" value="Verified" />
                <label for="verified" class="ml-2"> Verified </label>
            </div>
            <DateInput v-model:date="date" />
            <TimeInput v-model:time="time" />
            <IftaLabel>
                <Select inputId="background" v-model="background" :options="backgroundOptions" optionLabel="color" optionValue="value"
                    placeholder='Select a Background' class="w-full" />
                <label for="background">Background</label>
            </IftaLabel>
            <FileInput v-model:image="proiflePicture" imageName="Profile Picture" defaultImage="./x_placeholder.png" />
        </EditorSidebar>
        <div
            :class="['capture-container relative col-span-3 flex justify-center items-center min-h-[800px]', background == 'white' ? 'bg-white' : background == 'blue' ? 'bg-[#1DA1F2]' : '']" :id="background == 'white' || background == 'blue' ? 'capture' : ''">
            <div :class="['bg-white p-4 rounded-border w-[600px]', background == 'white' || background == 'blue' ? 'shadow-2xl' : '']"
                :id="background != 'white' && background != 'blue' ? 'capture' : ''">
                <div class="flex justify-between mb-4">
                    <div class="w-full">
                        <div class="flex justify-between items-center">
                            <div class="flex justify-start items-center gap-2">
                                <div class="w-12 h-12 rounded-full overflow-hidden">
                                    <img :src="proiflePicture" alt="Profile Picture" class="w-full h-full object-cover">
                                </div>
                                <div>
                                    <span class="flex items-center text-black font-medium">
                                        <span class="mr-1 focus:outline-none" contenteditable>Elon Musk</span>
                                        <img v-if="verified" src="/Twitter_Verified_Badge.svg.png"
                                            class="inline w-5"></span>
                                    <span class="block text-gray-500">@<span class="mr-1 focus:outline-none"
                                            contenteditable>elonmusk</span></span>
                                </div>
                            </div>
                            <i class="pi pi-ellipsis-h text-gray-500"></i>
                        </div>
                        <p class="text-black my-2 w-full focus:outline-none" contenteditable>
                            Type tweet here...
                        </p>
                    </div>
                </div>
                <span class="block font-medium text-gray-500">{{ new Intl.DateTimeFormat('en-US', {
                    hour: "2-digit",
                    minute: "2-digit"
                }).format(time) }} • {{ new Intl.DateTimeFormat('en-US', {
                        month: 'short',
                        day: '2-digit', year: 'numeric'
                    }).format(date) }}</span>
                <div class="w-full flex justify-between border-t border-t-gray-100 pt-4 mt-4 px-2">
                    <div class="flex justify-center items-center gap-1 text-gray-500">
                        <i class="pi pi-comment"></i>
                        <span class="focus:outline-none" contenteditable>1,108</span>
                    </div>
                    <div class="flex justify-center items-center gap-1 text-gray-500">
                        <i class="pi pi-sync"></i>
                        <span class="focus:outline-none" contenteditable>29.7K</span>
                    </div>
                    <div class="flex justify-center items-center gap-1 text-gray-500">
                        <i class="pi pi-heart"></i>
                        <span class="focus:outline-none" contenteditable>301.2K</span>
                    </div>
                    <div class="flex justify-center items-center gap-1 text-gray-500">
                        <i class="pi pi-bookmark"></i>
                        <span class="focus:outline-none" contenteditable>28</span>
                    </div>
                    <div class="flex justify-center items-center gap-1 text-gray-500">
                        <i class="pi pi-upload"></i>
                    </div>
                </div>
            </div>
            <div v-if="background == 'white' || background == 'blue'" class="absolute bottom-10 left-10 w-14 h-14 rounded-full bg-black flex justify-center items-center">
                <i class="pi pi-twitter !text-2xl"></i>
            </div>
        </div>
    </EditorLayout>
</template>