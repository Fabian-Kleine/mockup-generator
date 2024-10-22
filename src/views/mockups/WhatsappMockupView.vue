<script lang="js" setup>
import { ref } from 'vue';
import IftaLabel from 'primevue/iftalabel';
import ToggleSwitch from 'primevue/toggleswitch';
import InputText from 'primevue/inputtext';
import DatePicker from 'primevue/datepicker';
import FileUpload from 'primevue/fileupload';
import Select from 'primevue/select';
import downloadCapture from '../../lib/utils';

const background = ref("green");
const hidePhone = ref(false);
const proiflePicture = ref("./x_placeholder.png");
const messages = ref([]);
const messageText = ref("");
const time = ref("Wed Oct 09 2024 21:43:52 GMT+0200 (Mitteleuropäische Sommerzeit)");

const backgroundOptions = [
    {
        color: 'Green',
        value: 'green'
    },
    {
        color: 'White',
        value: 'white'
    },
    {
        color: 'None',
        value: 'none'
    }
]

function onSelect(e) {
    proiflePicture.value = e.files[0].objectURL;
}

function addMessage(action) {
    let newMessage = {
        text: messageText.value,
        action,
        time: time.value
    };
    messages.value.push(newMessage);
    messageText.value = '';
}
</script>

<template>
    <div class="w-full min-h-screen block xl:grid grid-cols-4 gap-4">
        <div class="flex flex-col gap-4 mt-4 px-4 edit-tweet mb-10 xl:mb-0">
            <h2 class="text-xl font-bold">Edit Whatsapp Chat Mockup</h2>
            <p>
                Click on the Name to edit it.
            </p>
            <IftaLabel>
                <Select inputId="background" v-model="background" :options="backgroundOptions" optionLabel="color"
                    optionValue="value" placeholder='Select a Background' class="w-full" />
                <label for="background">Background</label>
            </IftaLabel>
            <div class="flex items-center mt-4">
                <ToggleSwitch v-model="hidePhone" inputId="hidePhone" />
                <label for="hidePhone" class="ml-2"> Hide Phone </label>
            </div>
            <FileUpload mode="basic" accept="image/*" @select="onSelect" chooseLabel="Upload Profile Picture" />
            <div class="h-[1px] w-full bg-neutral-500"></div>
            <h3 class="mt-2 font-bold text-lg">Add Messages</h3>
            <IftaLabel>
                <InputText fluid id="messageText" v-model="messageText" variant="filled" placeholder="Type Message..." />
                <label for="messageText">Message Text</label>
            </IftaLabel>
            <p>
                You can copy emojis from <a class="underline" href="https://getemoji.com/" target="_blank">getemoji.com</a>.
            </p>
            <IftaLabel>
                <DatePicker v-model="time" fluid inputId="time" showIcon iconDisplay="input" variant="filled" timeOnly
                    hourFormat="12">
                    <template #inputicon="slotProps">
                        <i class="pi pi-clock" @click="slotProps.clickCallback" />
                    </template>
                </DatePicker>
                <label for="date">Time</label>
            </IftaLabel>
            <div class="flex gap-2 mt-4">
                <Button class="flex-1 !bg-[#25D366] !border-[#25D366]" label="Add sent message"
                    @click="addMessage('sent')" />
                <Button class="flex-1 !bg-white !border-white" label="Add recieved message"
                    @click="addMessage('recieved')" />
            </div>
            <Button v-if="messages.length" severity="danger" label="Remove all messages" @click="messages=[]" />
            <div class="h-[1px] w-full bg-neutral-500"></div>
            <div class="flex gap-2 mt-4">
                <Button as="router-link" class="flex-1" label="Cancel" severity="secondary" to="/" />
                <Button class="flex-1" label="Download" @click="downloadCapture('whatsapp-mockup.png')" />
            </div>
        </div>
        <div :class="['relative col-span-3 flex justify-center items-center min-h-[800px]', background == 'white' ? 'bg-white' : background == 'green' ? 'bg-[#25D366]' : '']"
            :id="background == 'green' || background == 'white' ? 'capture' : ''">
            <div
                :class="['relative rounded-[2.5rem]', , background == 'green' || background == 'white' ? 'shadow-2xl' : '', !hidePhone ? 'border-neutral-800 bg-neutral-800 border-[14px] h-[600px] w-[300px]' : '']" :id="background != 'green' && background != 'white' ? 'capture' : ''">
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
                <div
                    class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-neutral-800 bg-[url('/whatsapp-bg.jpg')] bg-contain flex flex-col">
                    <div class="w-full h-16 bg-[#2E383E] flex justify-between items-center py-6 px-3">
                        <div class="flex items-center gap-2">
                            <i class="pi pi-arrow-left"></i>
                            <div class="w-8 h-8 rounded-full overflow-hidden">
                                <img :src="proiflePicture" alt="Profile Picture" class="w-full h-full object-cover">
                            </div>
                            <span class="block focus:outline-none text-nowrap overflow-hidden max-w-[100px] mr-2" contenteditable>Name</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <i class="pi pi-video"></i>
                            <i class="pi pi-phone"></i>
                            <i class="pi pi-ellipsis-v"></i>
                        </div>
                    </div>
                    <div class="flex-1 px-4 text-black space-y-2 my-2 overflow-y-hidden">
                        <template v-for="message in messages">
                            <div class="ml-auto rounded-lg rounded-tr-none my-1 p-2 text-sm bg-green-300 flex flex-col relative speech-bubble-right"
                                v-if="message.action == 'sent'">
                                <p class="break-all">{{ message.text }}
                                </p>
                                <p class="text-gray-600 text-xs text-right leading-none">{{ new
                                    Intl.DateTimeFormat('en-US', {
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    }).format(new Date(message.time)) }}</p>
                            </div>
                            <div class="mr-auto rounded-lg rounded-tl-none my-1 p-2 text-sm bg-white flex flex-col relative speech-bubble-left"
                                v-if="message.action == 'recieved'">
                                <p class="break-all">{{ message.text }}</p>
                                <p class="text-gray-600 text-xs text-right leading-none">{{ new
                                    Intl.DateTimeFormat('en-US', {
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    }).format(new Date(message.time)) }}</p>
                            </div>
                        </template>
                    </div>
                    <div class="flex justify-center mx-2 my-3">
                        <div class="flex justify-center gap-2 h-[40px] w-full">
                            <div class="flex-1 flex justify-between items-center gap-1 bg-[#2E383E] px-3 rounded-full">
                                <i class="pi pi-face-smile text-[#798188]"></i>
                                <input type="text"
                                    class="flex-1 bg-transparent placeholder:text-[#798188] focus:outline-none max-w-[100px]"
                                    placeholder="Message">
                                <i class="pi pi-paperclip text-[#798188] mr-1"></i>
                                <i class="pi pi-camera text-[#798188]"></i>
                            </div>
                            <button class="h-full aspect-square rounded-full bg-[#25D366] text-black">
                                <i class="pi pi-microphone"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="background == 'white' || background == 'green'"
                :class="['absolute bottom-10 left-10 w-14 h-14 rounded-full flex justify-center items-center', background == 'white' ? 'bg-[#25D366]' : 'bg-white text-[#25D366]']">
                <i class="pi pi-whatsapp !text-2xl"></i>
            </div>
        </div>
    </div>
</template>