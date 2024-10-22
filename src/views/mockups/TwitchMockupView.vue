<script setup lang="js">
import Drawer from 'primevue/drawer';
import { ref } from 'vue';
import FileUpload from 'primevue/fileupload';
import ToggleSwitch from 'primevue/toggleswitch';
import IftaLabel from 'primevue/iftalabel';
import DatePicker from 'primevue/datepicker';
import { RouterLink } from 'vue-router';
import downloadCapture from '../../lib/utils';

const editDialogVisible = ref(true);
const proiflePicture = ref("/x_placeholder.png");
const thumbnail = ref("");
const twitchLogo = ref(true);
const hideNavbar = ref(false);

function onSelect(e) {
    proiflePicture.value = e.files[0].objectURL;
}

function onThumbnailSelect(e) {
    thumbnail.value = e.files[0].objectURL;
}
</script>

<template>
    <div class="pb-4 bg-[#0E0E10] h-screen flex flex-col" id="capture">
        <nav class="w-full flex justify-between gap-2 px-3 py-1.5 bg-[#18181B] border-b border-black"
            v-if="!hideNavbar">
            <div class="w-42 flex items-center gap-4 md:gap-8">
                <RouterLink v-if="twitchLogo" to="/">
                    <img src="/twitch-logo.png" alt="Twitch Logo" width="25">
                </RouterLink>
                <span class="font-bold text-xl pb-1">Browse</span>
                <i class="pi pi-ellipsis-v cursor-pointer" @click="editDialogVisible = true"></i>
            </div>
            <div class="hidden lg:flex justify-center gap-4 w-96">
                <div class="flex flex-1 h-[38px]">
                    <input type="text"
                        class="border border-neutral-500 placeholder:text-neutral-400 placeholder:font-medium bg-transparent rounded-s-md pl-4 focus:outline-none w-full"
                        placeholder="Search">
                    <button
                        class="bg-neutral-700 h-full aspect-square rounded-e-md border-e border-t border-b border-neutral-700"><i
                            class="pi pi-search"></i></button>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <i class="pi pi-crown cursor-pointer mr-2"></i>
                <button
                    class="flex gap-2 justify-center items-center bg-[#35353B] py-1.5 px-3 text-nowrap font-medium text-sm rounded-sm">Log
                    In</button>
                <button
                    class="flex gap-2 justify-center items-center bg-[#772CE8] py-1.5 px-3 text-nowrap font-medium text-sm rounded-sm">Sign
                    Up</button>
                <i class="pi pi-user cursor-pointer mx-2" @click="editDialogVisible = true"></i>
            </div>
        </nav>
        <div class="block xl:grid grid-cols-5 flex-1">
            <div class="col-span-4 mb-5 xl:mb-0">
                <div class="flex justify-center bg-black">
                    <div v-if="!thumbnail" class="bg-neutral-700 w-[90%] aspect-video"></div>
                    <div v-if="thumbnail" class="w-[90%] aspect-video overflow-hidden">
                        <img :src="thumbnail" alt="Thumbnail" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="flex justify-between items-center h-[50px] ml-12 mt-6">
                    <div class="flex items-center h-full gap-3">
                        <div class="w-16 h-16 rounded-full overflow-hidden">
                            <img :src="proiflePicture" alt="Profile Picture" class="w-full h-full object-cover">
                            <div class="absolute bg-red-600 -mt-4 ml-3 font-medium px-1 rounded-md">LIVE</div>
                        </div>
                        <div class="self-end">
                            <span class="block font-bold text-2xl focus:outline-none mb-2"
                                contenteditable>Username</span>
                            <span class="block my-0 font-medium text-white focus:outline-none" contenteditable>Stream
                                Title</span>
                        </div>
                    </div>
                    <div class="h-full mx-4 flex flex-col items-end">
                        <div class="flex items-start gap-2 h-full -mt-4">
                            <button
                                class="flex gap-2 justify-center items-center bg-[#772CE8] py-1.5 px-3 text-nowrap font-medium text-sm rounded-sm">
                                <i class="pi pi-heart"></i> Follow</button>
                            <button
                                class="flex gap-2 justify-center items-center bg-[#35353B] py-1.5 px-3 text-nowrap font-medium text-sm rounded-sm">
                                <i class="pi pi-star"></i>
                                Subscribe
                                <i class="pi pi-chevron-down !text-xs"></i>
                            </button>
                        </div>
                        <div class="flex gap-2 items-center">
                            <span class="text-red-400 font-medium flex items-center"><i
                                    class="pi pi-user mr-1"></i><span class="focus:outline-none"
                                    contenteditable>3,624</span></span>
                            <span class="focus:outline-none text-sm font-medium" contenteditable>11:39:11</span>
                            <i class="pi pi-upload mx-1"></i>
                            <i class="pi pi-ellipsis-v ml-1 cursor-pointer" @click="editDialogVisible = true"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-1 border-l border-neutral-700 bg-[#18181B] flex flex-col">
                <div class="w-full flex justify-between p-4 border-b border-neutral-700">
                    <i class="pi pi-sign-out"></i>
                    <span class="font-medium uppercase text-sm">Stream Chat</span>
                    <i class="pi pi-users"></i>
                </div>
                <div class="flex-1 flex flex-col">
                    <div class="flex-1 px-3 space-y-4 text-sm flex flex-col justify-end">
                        <div>
                            <div class="flex items-center">
                                <span class="bg-blue-400 h-3 w-14 rounded-full inline-block mr-0.5"></span>: <span
                                    class="flex-1 bg-neutral-500 h-3 rounded-full inline-block ml-2"></span>
                            </div>
                            <div class="w-full h-3 bg-neutral-500 rounded-full mt-1"></div>
                            <div class="w-52 h-3 bg-neutral-500 rounded-full mt-2"></div>
                        </div>
                        <div>
                            <span class="bg-orange-400 h-3 w-24 rounded-full inline-block mr-0.5"></span>: <span
                                class="w-52 bg-neutral-500 h-3 rounded-full inline-block ml-2"></span>
                        </div>
                        <div>
                            <div class="flex items-center">
                                <span class="bg-green-400 h-3 w-16 rounded-full inline-block mr-0.5"></span>: <span
                                    class="flex-1 bg-neutral-500 h-3 rounded-full inline-block ml-2"></span>
                            </div>
                            <div class="w-32 h-3 bg-neutral-500 rounded-full mt-1"></div>
                        </div>
                        <div>
                            <div class="flex items-center">
                                <span class="bg-purple-400 h-3 w-32 rounded-full inline-block mr-0.5"></span>: <span
                                    class="flex-1 bg-neutral-500 h-3 rounded-full inline-block ml-2"></span>
                            </div>
                            <div class="w-full h-3 bg-neutral-500 rounded-full mt-1"></div>
                            <div class="w-full h-3 bg-neutral-500 rounded-full mt-2"></div>
                            <div class="w-36 h-3 bg-neutral-500 rounded-full mt-2"></div>
                        </div>
                        <div>
                            <span class="bg-red-600 h-3 w-14 rounded-full inline-block mr-0.5"></span>: <span
                                class="w-12 bg-neutral-500 h-3 rounded-full inline-block ml-2"></span>
                        </div>
                        <div>
                            <div class="flex items-center">
                                <span class="bg-cyan-300 h-3 w-24 rounded-full inline-block mr-0.5"></span>: <span
                                    class="flex-1 bg-neutral-500 h-3 rounded-full inline-block ml-2"></span>
                            </div>
                            <div class="w-48 h-3 bg-neutral-500 rounded-full mt-1"></div>
                        </div>
                        <div>
                            <span class="bg-amber-500 h-3 w-14 rounded-full inline-block mr-0.5"></span>: <span
                                class="w-36 bg-neutral-500 h-3 rounded-full inline-block ml-2"></span>
                        </div>
                        <div>
                            <span class="bg-green-700 h-3 w-20 rounded-full inline-block mr-0.5"></span>: <span
                                class="w-48 bg-neutral-500 h-3 rounded-full inline-block ml-2"></span>
                        </div>
                        <div>
                            <span class="bg-red-600 h-3 w-12 rounded-full inline-block mr-0.5"></span>: <span
                                class="w-14 bg-neutral-500 h-3 rounded-full inline-block ml-2"></span>
                        </div>
                        <div>
                            <span class="bg-blue-400 h-3 w-24 rounded-full inline-block mr-0.5"></span>: <span
                                class="w-32 bg-neutral-500 h-3 rounded-full inline-block ml-2"></span>
                        </div>
                        <div>
                            <div class="flex items-center">
                                <span class="bg-blue-400 h-3 w-14 rounded-full inline-block mr-0.5"></span>: <span
                                    class="flex-1 bg-neutral-500 h-3 rounded-full inline-block ml-2"></span>
                            </div>
                            <div class="w-full h-3 bg-neutral-500 rounded-full mt-1"></div>
                            <div class="w-64 h-3 bg-neutral-500 rounded-full mt-2"></div>
                        </div>
                        <div>
                            <div class="flex items-center">
                                <span class="bg-purple-400 h-3 w-32 rounded-full inline-block mr-0.5"></span>: <span
                                    class="flex-1 bg-neutral-500 h-3 rounded-full inline-block ml-2"></span>
                            </div>
                            <div class="w-36 h-3 bg-neutral-500 rounded-full mt-2"></div>
                        </div>
                        <div>
                            <span class="bg-orange-400 h-3 w-16 rounded-full inline-block mr-0.5"></span>: <span
                                class="w-24 bg-neutral-500 h-3 rounded-full inline-block ml-2"></span>
                        </div>
                        <div>
                            <span class="bg-green-400 h-3 w-10 rounded-full inline-block mr-0.5"></span>: <span
                                class="w-32 bg-neutral-500 h-3 rounded-full inline-block ml-2"></span>
                        </div>
                        <div>
                            <span class="bg-amber-400 h-3 w-12 rounded-full inline-block mr-0.5"></span>: <span
                                class="w-10 bg-neutral-500 h-3 rounded-full inline-block ml-2"></span>
                        </div>
                    </div>
                    <div class="px-4 py-2 space-y-2">
                        <input type="text"
                            class="border border-neutral-500 placeholder:text-neutral-400 placeholder:font-medium bg-transparent rounded-s-md pl-3 py-2 focus:outline-none w-full"
                            placeholder="Send a message">
                        <div class="flex justify-between">
                            <div class="flex items-center">
                                <i class="pi pi-bolt text-[#bf94ff]"></i>
                                <span class="text-neutral-300 font-medium ml-1 mr-4">0</span>
                                <i class="pi pi-circle text-[#bf94ff]"></i>
                                <span class="text-neutral-300 font-medium ml-1 mr-2">0</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <i class="pi pi-cog"></i>
                                <button
                                    class="flex gap-2 justify-center items-center bg-[#772CE8] py-1.5 px-3 text-nowrap font-medium text-sm rounded-md">
                                    Chat</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Drawer v-model:visible="editDialogVisible" header="Edit Mockup" :style="{ width: '35rem' }">
        <p class="mb-6">
            Click this button <button
                class="inline-flex justify-center items-center gap-2 bg-neutral-700 text-white aspect-square h-[25px] rounded-full font-bold text-sm">
                <i class="pi pi-ellipsis-h !text-sm"></i>
            </button>
            or this button <button
                class="inline-flex justify-center items-center gap-2 bg-neutral-700 text-white aspect-square h-[25px] rounded-full font-bold text-sm">
                <i class="pi pi-ellipsis-v !text-sm"></i>
            </button>
            to open this menu.<br>
            Further you can edit the Title, the amount of viewers, the timestamp and the name of the streamer in inside the
            mockup.
        </p>
        <div class="flex flex-col gap-2">
            <div class="flex justify-center gap-2 mt-4">
                <FileUpload class="flex-1" mode="basic" accept="image/*" @select="onSelect"
                    chooseLabel="Upload Profile Picture" />
                <Button class="flex-1" v-if="proiflePicture != '/x_placeholder.png'" label="Remove Profile Picture"
                    severity="danger" @click="proiflePicture = '/x_placeholder.png'" />
            </div>
            <div class="flex justify-center gap-2 mt-4">
                <FileUpload :chooseButtonProps="{ class: 'flex-1' }" mode="basic" accept="image/*"
                    @select="onThumbnailSelect" chooseLabel="Upload Stream Thumbnail" />
                <Button class="flex-1" v-if="thumbnail" label="Remove Thumbnail" severity="danger"
                    @click="thumbnail = ''" />
            </div>
            <div class="flex items-center mt-4">
                <ToggleSwitch v-model="twitchLogo" inputId="twitchLogo" />
                <label for="twitchLogo" class="ml-2"> Show Twitch Logo </label>
            </div>
            <div class="flex items-center mt-4">
                <ToggleSwitch v-model="hideNavbar" inputId="hideNavbar" />
                <label for="hideNavbar" class="ml-2"> Hide Navbar </label>
            </div>
            <div class="flex justify-end gap-2 mt-4">
                <Button as="router-link" label="Cancel" severity="secondary" to="/" />
                <Button label="Download" @click="downloadCapture('twitch-mockup.png')" />
            </div>
        </div>
    </Drawer>
</template>