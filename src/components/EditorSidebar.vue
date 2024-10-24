<script setup lang="js">
import { ref, watch } from 'vue';
import Drawer from 'primevue/drawer';
import downloadCapture from '../lib/utils';

const props = defineProps({
    drawer: Boolean,
    drawerOpen: Boolean,
    header: String,
    downloadFilename: String
});

const emit = defineEmits(['update:visible']);

const localDrawerOpen = ref(props.drawerOpen);

watch(() => props.drawerOpen, (newVal) => {
    localDrawerOpen.value = newVal;
});

const handleDrawerVisibility = (newValue) => {
    emit('update:drawerOpen', newValue);
};

</script>

<template>
    <div class="flex flex-col gap-4 mt-4 px-4 mb-10 xl:mb-0" v-if="!props.drawer">
        <h2 class="text-xl font-bold">{{ props.header }}</h2>
        <slot />
        <div class="flex gap-2 mt-4">
            <Button as="router-link" class="flex-1" label="Cancel" severity="secondary" to="/" />
            <Button class="flex-1" label="Download" @click="downloadCapture(props.downloadFilename)" />
        </div>
    </div>
    <Drawer v-if="props.drawer" v-model:visible="props.drawerOpen" @update:visible="handleDrawerVisibility"
        :header="props.header" :style="{ width: '35rem' }">
        <slot />
        <div class="flex justify-end gap-2 mt-4">
            <Button as="router-link" label="Cancel" severity="secondary" to="/" />
            <Button label="Download" @click="downloadCapture(props.downloadFilename)" />
        </div>
    </Drawer>
</template>