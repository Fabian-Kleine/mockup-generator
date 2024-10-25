<script lang="js" setup>
import { ref, reactive } from 'vue';
import Card from 'primevue/card';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import ColorPicker from 'primevue/colorpicker';
import Dialog from 'primevue/dialog';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import Slider from 'primevue/slider';
import FileUpload from 'primevue/fileupload';
import ToggleSwitch from 'primevue/toggleswitch';
import EditorLayout from '../../components/layout/EditorLayout.vue';
import EditorSidebar from '../../components/layout/EditorSidebar.vue';

const background = ref("dark");
const gradientColors = reactive({
    color1: 'ff0000',
    color2: 'ff2323'
});
const gradientAngle = ref(45);
const phoneBg = ref("/phone-backgrounds/iOS-17-light.png");
const phoneBgBlur = ref(0);
const date = ref("Wed Oct 09 2024 21:43:52 GMT+0200 (Mitteleuropäische Sommerzeit)");
const time = ref("Wed Oct 09 2024 21:43:52 GMT+0200 (Mitteleuropäische Sommerzeit)");
const phoneBgDialog = ref(false);
const notifications = ref([]);
const notificationTitle = ref("");
const notificationText = ref("");
const notificationIcon = ref("");
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
    phoneBgDialog.value = false;
}

function addNotification() {
    let newNotification = {
        title: notificationTitle.value,
        text: notificationText.value,
        icon: notificationIcon.value
    };
    notifications.value.push(newNotification);
    notificationText.value = '';
}

function onNotifIconSelect(e) {
    notificationIcon.value = e.files[0].objectURL;
}
</script>

<template>
    <EditorLayout>
        <EditorSidebar header="Edit Phone Lockscreen Mockup" downloadFilename="lockscreen-mockup.png">
            <IftaLabel>
                <DatePicker v-model="date" fluid inputId="date" showIcon iconDisplay="input" variant="filled"
                    dateFormat="M dd, yy" />
                <label for="date">Date</label>
            </IftaLabel>
            <IftaLabel>
                <DatePicker v-model="time" fluid inputId="time" showIcon iconDisplay="input" variant="filled" timeOnly
                    hourFormat="24">
                    <template #inputicon="slotProps">
                        <i class="pi pi-clock" @click="slotProps.clickCallback" />
                    </template>
                </DatePicker>
                <label for="date">Time</label>
            </IftaLabel>
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
                <label v-if="background == 'linear-gradient'" for="gradientAngle">Gradient Rotation: {{ gradientAngle
                    }}deg</label>
                <Slider v-if="background == 'linear-gradient'" class="mt-4" v-model="gradientAngle" :step="5" :max="360"
                    id="gradientAngle" />
            </div>
            <div class="flex items-center mt-4">
                <ToggleSwitch v-model="darkmode" inputId="darkmode" />
                <label for="darkmode" class="ml-2"> Dark Mode </label>
            </div>
            <Button label="Select Background Image" @click="phoneBgDialog = true" />
            <div class="px-2 space-y-2">
                <label for="backgroundBlur">Background Blur</label>
                <Slider v-model="phoneBgBlur" :max="100" id="backgroundBlur" />
            </div>
            <div class="h-[1px] w-full bg-neutral-500"></div>
            <h3 class="mt-2 font-bold text-lg">Add Noficiations</h3>
            <IftaLabel>
                <InputText fluid id="notificationTitle" v-model="notificationTitle" variant="filled"
                    placeholder="Type Title..." />
                <label for="notificationTitle">Notification Title</label>
            </IftaLabel>
            <IftaLabel>
                <InputText fluid id="notificationText" v-model="notificationText" variant="filled"
                    placeholder="Type Notification..." />
                <label for="notificationText">Notification Text</label>
            </IftaLabel>
            <div class="flex gap-2">
                <img v-if="notificationIcon" :src="notificationIcon" alt="notification icon" class="w-10 h-10">
                <FileUpload :chooseButtonProps="{ class: 'w-max flex-1' }" mode="basic" accept="image/*" @select="onNotifIconSelect"
                chooseLabel="Upload Notification Icon" />
            </div>
            <div class="flex gap-2 mt-4">
                <Button class="flex-1" label="Add notification" :disabled="!notificationText || !notificationText || !notificationIcon || notifications.length >= 2" @click="addNotification()" />
                <Button v-if="notifications.length" class="flex-1" severity="danger" label="Remove all notifications" @click="notifications = []" />
            </div>
            <div class="h-[1px] w-full bg-neutral-500"></div>
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
                <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white bg-cover bg-center"
                    :style="phoneBg ? { 'background-image': `url(${phoneBg})` } : {}">
                    <div class=" flex phone-blur flex-col h-full" :style="{ '--custom-blur': `blur(${phoneBgBlur}px)` }">
                        <div class="h-6 w-full flex justify-end items-center gap-1 px-5 pt-4 z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-signal-high">
                                <path d="M2 20h.01" />
                                <path d="M7 20v-4" />
                                <path d="M12 20v-8" />
                                <path d="M17 20V8" />
                            </svg>
                            <i class="pi pi-wifi"></i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-battery-medium">
                                <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
                                <line x1="22" x2="22" y1="11" y2="13" />
                                <line x1="6" x2="6" y1="11" y2="13" />
                                <line x1="10" x2="10" y1="11" y2="13" />
                            </svg>
                        </div>
                        <div class="flex-1 flex justify-start items-center flex-col pt-10 z-10">
                            <h4>{{ new Intl.DateTimeFormat('en-US', {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric'
                            }).format(new Date(date)) }}</h4>
                            <h3 class="text-7xl font-bold">{{ new Intl.DateTimeFormat('de-DE', {
                                hour: "2-digit",
                                minute: "2-digit"
                            }).format(new Date(time)) }}</h3>
                        </div>
                        <div class="flex-1 flex flex-col justify-end items-center z-10">
                            <div class="space-y-2 w-full px-3 mb-4">
                                <template v-for="notification in notifications">
                                    <div :class="['relative flex items-center gap-2 backdrop-blur-lg px-2 py-4 rounded-2xl shadow-sm overflow-hidden z-20', darkmode ? 'bg-black/35 text-white' : 'bg-white/35 text-black']">
                                        <div class="overflow-hidden w-8 h-8 rounded-sm">
                                            <img :src="notification.icon" alt="notification icon" class="w-full h-full object-cover">
                                        </div>
                                        <div class="flex-1 max-w-[80%]">
                                            <span class="block text-sm font-bold truncate">{{ notification.title }}</span>
                                            <p class="text-sm break-words line-clamp-3">{{ notification.text }}</p>
                                        </div>
                                    </div>
                                </template>
                            </div>
                            <div class="flex justify-between mb-8 w-full px-10">
                                <div class="h-8 w-8 flex justify-center items-center p-2 bg-black/50 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="size-6">
                                        <path
                                            d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
                                        <path fill-rule="evenodd"
                                            d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="h-8 w-8 flex justify-center items-center p-2 bg-black/50 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="size-6">
                                        <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                                        <path fill-rule="evenodd"
                                            d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div class="w-1/3 h-1 bg-white rounded-full mb-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </EditorLayout>
    <Dialog v-model:visible="phoneBgDialog" modal header="Select Phone Background" :style="{ width: '50%' }">
        <h3 class="text-3xl font-bold text-center"><i class="pi pi-apple !text-3xl"></i> Apple</h3>
        <div class="flex gap-3 flex-wrap justify-center">
            <Card class="w-1/4 p-2">
                <template #header>
                    <div
                        class="bg-[url(/phone-backgrounds/iOS-17-light.png)] bg-cover w-[200px] h-[450px] rounded-md mx-auto">
                    </div>
                </template>
                <template #title>iOS 17 light</template>
                <template #footer>
                    <Button label="Select Background" class="w-full"
                        @click="phoneBg = '/phone-backgrounds/iOS-17-light.png'; phoneBgDialog = false" />
                </template>
            </Card>
            <Card class="w-1/4 p-2">
                <template #header>
                    <div
                        class="bg-[url(/phone-backgrounds/iOS-15-dark.png)] bg-cover w-[200px] h-[450px] rounded-md mx-auto">
                    </div>
                </template>
                <template #title>iOS 15 dark</template>
                <template #footer>
                    <Button label="Select Background" class="w-full"
                        @click="phoneBg = '/phone-backgrounds/iOS-15-dark.png'; phoneBgDialog = false" />
                </template>
            </Card>
            <Card class="w-1/4 p-2">
                <template #header>
                    <div class="bg-[url(/phone-backgrounds/iOS-7.jpg)] bg-cover w-[200px] h-[450px] rounded-md mx-auto">
                    </div>
                </template>
                <template #title>iOS 7</template>
                <template #footer>
                    <Button label="Select Background" class="w-full"
                        @click="phoneBg = '/phone-backgrounds/iOS-7.jpg'; phoneBgDialog = false" />
                </template>
            </Card>
            <Card class="w-1/4 p-2">
                <template #header>
                    <div
                        class="bg-[url(/phone-backgrounds/iPhone-14.jpg)] bg-cover w-[200px] h-[450px] rounded-md mx-auto">
                    </div>
                </template>
                <template #title>iPhone 14</template>
                <template #footer>
                    <Button label="Select Background" class="w-full"
                        @click="phoneBg = '/phone-backgrounds/iPhone-14.jpg'; phoneBgDialog = false" />
                </template>
            </Card>
            <Card class="w-1/4 p-2">
                <template #header>
                    <div
                        class="bg-[url(/phone-backgrounds/iPhone-12-pro-gray.png)] bg-cover w-[200px] h-[450px] rounded-md mx-auto">
                    </div>
                </template>
                <template #title>iPhone 12 Pro Gray</template>
                <template #footer>
                    <Button label="Select Background" class="w-full"
                        @click="phoneBg = '/phone-backgrounds/iPhone-12-pro-gray.png'; phoneBgDialog = false" />
                </template>
            </Card>
            <Card class="w-1/4 p-2">
                <template #header>
                    <div
                        class="bg-[url(/phone-backgrounds/iPhone-12-pro-blue.png)] bg-cover w-[200px] h-[450px] rounded-md mx-auto">
                    </div>
                </template>
                <template #title>iPhone 12 Pro Blue</template>
                <template #footer>
                    <Button label="Select Background" class="w-full"
                        @click="phoneBg = '/phone-backgrounds/iPhone-12-pro-blue.png'; phoneBgDialog = false" />
                </template>
            </Card>
        </div>
        <h3 class="text-3xl font-bold text-center mt-8">Samsung</h3>
        <div class="flex gap-3 flex-wrap justify-center">
            <Card class="w-1/4 p-2">
                <template #header>
                    <div
                        class="bg-[url(/phone-backgrounds/samsung-z-flip-6-green.png)] bg-cover w-[200px] h-[450px] rounded-md mx-auto">
                    </div>
                </template>
                <template #title>Z Flip 6 Green</template>
                <template #footer>
                    <Button label="Select Background" class="w-full"
                        @click="phoneBg = '/phone-backgrounds/samsung-z-flip-6-green.png'; phoneBgDialog = false" />
                </template>
            </Card>
            <Card class="w-1/4 p-2">
                <template #header>
                    <div
                        class="bg-[url(/phone-backgrounds/samsung-z-flip-6-blue.png)] bg-cover w-[200px] h-[450px] rounded-md mx-auto">
                    </div>
                </template>
                <template #title>Z Flip 6 Blue</template>
                <template #footer>
                    <Button label="Select Background" class="w-full"
                        @click="phoneBg = '/phone-backgrounds/samsung-z-flip-6-blue.png'; phoneBgDialog = false" />
                </template>
            </Card>
            <Card class="w-1/4 p-2">
                <template #header>
                    <div
                        class="bg-[url(/phone-backgrounds/samsung-z-flip-6-purple.jpg)] bg-cover w-[200px] h-[450px] rounded-md mx-auto">
                    </div>
                </template>
                <template #title>Z Flip 6 Purple</template>
                <template #footer>
                    <Button label="Select Background" class="w-full"
                        @click="phoneBg = '/phone-backgrounds/samsung-z-flip-6-purple.jpg'; phoneBgDialog = false" />
                </template>
            </Card>
            <Card class="w-1/4 p-2">
                <template #header>
                    <div
                        class="bg-[url(/phone-backgrounds/samsung-z-flip-6-gray.jpg)] bg-cover w-[200px] h-[450px] rounded-md mx-auto">
                    </div>
                </template>
                <template #title>Z Flip 6 Gray</template>
                <template #footer>
                    <Button label="Select Background" class="w-full"
                        @click="phoneBg = '/phone-backgrounds/samsung-z-flip-6-gray.jpg'; phoneBgDialog = false" />
                </template>
            </Card>
            <Card class="w-1/4 p-2">
                <template #header>
                    <div
                        class="bg-[url(/phone-backgrounds/Samsung-Galaxy-A54.png)] bg-cover w-[200px] h-[450px] rounded-md mx-auto">
                    </div>
                </template>
                <template #title>A54</template>
                <template #footer>
                    <Button label="Select Background" class="w-full"
                        @click="phoneBg = '/phone-backgrounds/Samsung-Galaxy-A54.png'; phoneBgDialog = false" />
                </template>
            </Card>
        </div>
        <h3 class="text-3xl font-bold text-center mt-8">Upload Background</h3>
        <div class="flex gap-3 edit-tweet flex-wrap justify-center mt-4">
            <FileUpload :chooseButtonProps="{ class: 'w-max' }" mode="basic" accept="image/*" @select="onPhoneBgSelect"
                chooseLabel="Upload Phone Background" />
        </div>
    </Dialog>
</template>