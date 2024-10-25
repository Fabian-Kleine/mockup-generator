<script setup lang="js">
import FileUpload from 'primevue/fileupload';
import { ref, watch } from 'vue';

const props = defineProps({
    image: String,
    imageName: {
        type: String,
        default: 'Image'
    }
});

const emit = defineEmits(['update:image']);

const localImage = ref(props.image);

watch(() => props.image, (newVal) => {
    localImage.value = newVal;
});

function onImageSelect(e) {
    localImage.value = e.files[0].objectURL;
    emit('update:image', e.files[0].objectURL);
}

function removeImage() {
    localImage.value = '';
    emit('update:image', '');
}
</script>

<template>
    <div class="space-y-2 mt-4 w-full">
        <FileUpload :chooseButtonProps="{ class: 'flex-1' }" mode="basic" accept="image/*" @select="onImageSelect"
            :chooseLabel="'Upload ' + props.imageName" />
        <Button class="w-full" v-if="localImage" :label="'Remove ' + props.imageName" severity="danger" @click="removeImage" />
    </div>
</template>