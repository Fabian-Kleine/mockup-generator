<script lang="js" setup>
import { ref } from 'vue';
import DatePicker from 'primevue/datepicker';
import IftaLabel from 'primevue/iftalabel';
import FileUpload from 'primevue/fileupload';
import DomToImage from 'dom-to-image';

const verified = ref(false);
const date = ref("Wed Oct 09 2024 21:43:52 GMT+0200 (Mitteleuropäische Sommerzeit)");
const time = ref("Wed Oct 09 2024 21:43:52 GMT+0200 (Mitteleuropäische Sommerzeit)");
const proiflePicture = ref("/x_placeholder.png");

function onSelect(e) {
    proiflePicture.value = e.files[0].objectURL;
}

async function download() {
    const dataUrl = await DomToImage.toPng(document.querySelector('#capture'));

    const link = document.createElement("a");
    link.download = "x-mockup.png";
    link.href = dataUrl;
    link.click();
}
</script>

<template>
    <div class="w-full min-h-screen flex justify-center items-center flex-col">
        <div class="col-span-12 md:col-span-6 lg:col-span-3">
            <div class="bg-white p-4 rounded-border w-[600px]" id="capture">
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
                }).format(new Date(time)) }} • {{ new Intl.DateTimeFormat('en-US', {
                        month: 'short',
                        day: '2-digit', year: 'numeric'
                    }).format(new Date(date)) }}</span>
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
        </div>
        <div class="flex flex-col gap-4 w-[600px] mt-4">
            <div class="flex items-center">
                <Checkbox v-model="verified" binary inputId="verified" name="verified" value="Verified" />
                <label for="verified" class="ml-2"> Verified </label>
            </div>
            <IftaLabel>
                <DatePicker v-model="date" inputId="date" showIcon iconDisplay="input" variant="filled"
                    dateFormat="M dd, yy" />
                <label for="date">Date</label>
            </IftaLabel>
            <IftaLabel>
                <DatePicker v-model="time" inputId="time" showIcon iconDisplay="input" variant="filled" timeOnly
                    hourFormat="12">
                    <template #inputicon="slotProps">
                        <i class="pi pi-clock" @click="slotProps.clickCallback" />
                    </template>
                </DatePicker>
                <label for="date">Time</label>
            </IftaLabel>
            <FileUpload mode="basic" accept="image/*" @select="onSelect" chooseLabel="Upload Profile Picture" />
            <div class="flex gap-2 mt-4">
                <Button as="router-link" class="flex-1" label="Cancel" severity="secondary" to="/" />
                <Button class="flex-1" label="Download" severity="success" @click="download" />
            </div>
        </div>
    </div>
</template>