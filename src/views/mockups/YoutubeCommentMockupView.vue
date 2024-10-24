<script lang="js" setup>
import { ref } from 'vue';
import IftaLabel from 'primevue/iftalabel';
import FileUpload from 'primevue/fileupload';
import Select from 'primevue/select';
import EditorLayout from '../../components/EditorLayout.vue';
import EditorSidebar from '../../components/EditorSidebar.vue';

const background = ref("dark");
const proiflePicture = ref("./x_placeholder.png");

const backgroundOptions = [
    {
        color: 'Dark',
        value: 'dark'
    },
    {
        color: 'Light',
        value: 'light'
    },
    {
        color: 'None',
        value: 'none'
    }
]

function onSelect(e) {
    proiflePicture.value = e.files[0].objectURL;
}
</script>

<template>
    <EditorLayout>
        <EditorSidebar header="Edit YouTube Comment Mockup" downloadFilename="youtube-comment-mockup.png">
            <p>
                Click on a text to edit it.
            </p>
            <IftaLabel>
                <Select inputId="background" v-model="background" :options="backgroundOptions" optionLabel="color"
                    optionValue="value" placeholder='Select a Background' class="w-full" />
                <label for="background">Background</label>
            </IftaLabel>
            <div class="space-y-2 mt-4 w-full">
                <FileUpload :chooseButtonProps="{ class: 'flex-1' }" mode="basic" accept="image/*" @select="onSelect"
                    chooseLabel="Upload Profile Picture" />
                <Button class="w-full" v-if="proiflePicture != './x_placeholder.png'" label="Remove Profile Picture" severity="danger"
                    @click="proiflePicture = './x_placeholder.png'" />
            </div>
        </EditorSidebar>
        <div :class="['capture-container relative col-span-3 flex justify-center items-center min-h-[800px]', background != 'dark' ? 'bg-white' : '']"
            :id="background == 'dark' || background == 'light' ? 'capture' : ''">
            <div :class="['bg-neutral-800 p-4 rounded-border w-[600px]', background == 'dark' || background == 'light' ? 'shadow-2xl' : '']"
                :id="background != 'dark' && background != 'light' ? 'capture' : ''">
                <div class="flex justify-between mb-4">
                    <div class="w-full">
                        <div class="flex justify-between">
                            <div class="flex justify-start gap-2">
                                <div class="w-12 h-12 rounded-full overflow-hidden">
                                    <img :src="proiflePicture" alt="Profile Picture" class="w-full h-full object-cover">
                                </div>
                                <div>
                                    <span class="font-medium align-text-bottom"><span class="mr-1 focus:outline-none"
                                            contenteditable>User name</span>
                                            <span class="text-neutral-400 text-sm font-normal focus:outline-none" contenteditable>6 days ago</span>
                                    </span>
                                    <p class="mb-2 w-full focus:outline-none" contenteditable>
                                        Type comment here...
                                    </p>
                                    <div
                                        class="flex items-center gap-2">
                                        <button class="flex items-center gap-2 px-1">
                                            <i class="pi pi-thumbs-up"></i>
                                            <span class="cursor-text focus:outline-none text-neutral-400" contenteditable>4</span>
                                        </button>
                                        <button class="flex items-center px-1">
                                            <i class="pi pi-thumbs-down"></i>
                                        </button>
                                        Reply
                                    </div>
                                </div>
                            </div>
                            <i class="pi pi-ellipsis-v mt-3"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="background == 'light' || background == 'dark'"
                class="absolute bottom-10 left-10 w-14 h-14 rounded-full bg-[#FF0000] flex justify-center items-center">
                <i class="pi pi-youtube !text-2xl"></i>
            </div>
        </div>
    </EditorLayout>
</template>