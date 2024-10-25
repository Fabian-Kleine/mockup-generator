<script setup lang="js">
import FileUpload from 'primevue/fileupload';
import { ref, watch } from 'vue';

const props = defineProps({
    image: String,
    imageName: {
        type: String,
        default: 'Image'
    },
    defaultImage: {
        type: String,
        default: ''
    },
    align: {
        type: String,
        default: 'vertical'
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
    localImage.value = props.defaultImage;
    emit('update:image', props.defaultImage);
}
</script>

<template>
    <div :class="[props.align == 'horizontal' ? 'flex justify-center gap-2 mt-4' : 'space-y-2 mt-4 w-full']">
        <FileUpload :class="[props.align == 'vertical' ? 'flex-1' : '']" :chooseButtonProps="{ class: props.align == 'horizontal' ? 'flex-1' : '' }" mode="basic" accept="image/*" @select="onImageSelect"
            :chooseLabel="'Upload ' + props.imageName" />
        <Button :class="[props.align == 'horizontal' ? 'flex-1' : 'w-full']" v-if="localImage != props.defaultImage" :label="'Remove ' + props.imageName" severity="danger" @click="removeImage" />
    </div>
</template>